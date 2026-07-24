export type ShopifyProductPointer = {
  handle: string;
  status: "to_confirm" | "connected";
};

type ShopifyGraphqlResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

type ShopifyMoney = {
  amount: string;
  currencyCode: string;
};

type ShopifyVariantNode = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: Array<{ name: string; value: string }>;
  price: ShopifyMoney;
};

type ShopifyProductByHandleResponse = {
  productByHandle: {
    id: string;
    title: string;
    handle: string;
    onlineStoreUrl: string | null;
    variants: {
      nodes: ShopifyVariantNode[];
    };
  } | null;
};

type ShopifyCartCreateResponse = {
  cartCreate: {
    cart: {
      id: string;
      checkoutUrl: string;
      totalQuantity: number;
    } | null;
    userErrors: Array<{ field: string[] | null; message: string }>;
    warnings: Array<{ message: string }>;
  };
};

export type ShopifyCartDraftResult = {
  mode: "draft" | "cart_created";
  productTitle: string;
  variantId: string;
  variantTitle: string;
  availableForSale: boolean;
  checkoutUrl?: string;
  canRedirect: boolean;
  message: string;
};

const SHOPIFY_API_VERSION = process.env.SHOPIFY_STOREFRONT_API_VERSION ?? "2026-07";

function getShopifyConfig() {
  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const publicToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  const privateToken = process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN;

  if (!storeDomain || (!publicToken && !privateToken)) {
    throw new Error("Shopify Storefront API is not configured. Add SHOPIFY_STORE_DOMAIN and a Storefront token to .env.local.");
  }

  return {
    endpoint: `https://${storeDomain}/api/${SHOPIFY_API_VERSION}/graphql.json`,
    token: privateToken ?? publicToken ?? "",
    tokenHeader: privateToken ? "Shopify-Storefront-Private-Token" : "X-Shopify-Storefront-Access-Token"
  };
}

async function shopifyGraphql<T>(query: string, variables: Record<string, unknown>) {
  const { endpoint, token, tokenHeader } = getShopifyConfig();
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      [tokenHeader]: token
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Shopify request failed with status ${response.status}.`);
  }

  const payload = (await response.json()) as ShopifyGraphqlResponse<T>;

  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join("; "));
  }

  if (!payload.data) {
    throw new Error("Shopify response did not include data.");
  }

  return payload.data;
}

export function buildShopifyProductUrl(pointer: ShopifyProductPointer) {
  if (pointer.status !== "connected") {
    return "#shopify-handle-to-confirm";
  }

  return `https://monauro.com/products/${pointer.handle}`;
}

function normalizeOption(value: string) {
  return value.trim().toLowerCase();
}

export async function getShopifyProductByHandle(handle: string) {
  const query = `#graphql
    query ProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        handle
        onlineStoreUrl
        variants(first: 100) {
          nodes {
            id
            title
            availableForSale
            selectedOptions {
              name
              value
            }
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `;

  const data = await shopifyGraphql<ShopifyProductByHandleResponse>(query, { handle });
  return data.productByHandle;
}

export function findVariantByColor(variants: ShopifyVariantNode[], color: string) {
  const targetColor = normalizeOption(color);

  return variants.find((variant) =>
    variant.selectedOptions.some((option) => option.name.toLowerCase() === "color" && normalizeOption(option.value) === targetColor)
  ) ?? variants.find((variant) => normalizeOption(variant.title).includes(targetColor));
}

async function createShopifyCart(variantId: string, quantity: number) {
  const mutation = `#graphql
    mutation CreateCart($variantId: ID!, $quantity: Int!) {
      cartCreate(input: { lines: [{ merchandiseId: $variantId, quantity: $quantity }] }) {
        cart {
          id
          checkoutUrl
          totalQuantity
        }
        userErrors {
          field
          message
        }
        warnings {
          message
        }
      }
    }
  `;

  const data = await shopifyGraphql<ShopifyCartCreateResponse>(mutation, { variantId, quantity });

  if (data.cartCreate.userErrors.length) {
    throw new Error(data.cartCreate.userErrors.map((error) => error.message).join("; "));
  }

  if (!data.cartCreate.cart) {
    throw new Error("Shopify did not return a cart.");
  }

  return data.cartCreate.cart;
}

export async function createDraftCartForVariant(params: {
  handle: string;
  color: string;
  quantity: number;
}): Promise<ShopifyCartDraftResult> {
  const product = await getShopifyProductByHandle(params.handle);

  if (!product) {
    throw new Error(`Shopify product handle not found: ${params.handle}`);
  }

  const variant = findVariantByColor(product.variants.nodes, params.color);

  if (!variant) {
    throw new Error(`No Shopify variant matched color: ${params.color}`);
  }

  const shouldCreateCart = process.env.SHOPIFY_CREATE_CARTS === "true";
  const canRedirect = process.env.SHOPIFY_ENABLE_CHECKOUT_REDIRECT === "true";

  if (!shouldCreateCart) {
    return {
      mode: "draft",
      productTitle: product.title,
      variantId: variant.id,
      variantTitle: variant.title,
      availableForSale: variant.availableForSale,
      canRedirect: false,
      message: "Draft mode: variant matched. Cart creation and checkout redirect are disabled."
    };
  }

  const cart = await createShopifyCart(variant.id, params.quantity);

  return {
    mode: "cart_created",
    productTitle: product.title,
    variantId: variant.id,
    variantTitle: variant.title,
    availableForSale: variant.availableForSale,
    checkoutUrl: cart.checkoutUrl,
    canRedirect,
    message: canRedirect ? "Cart created. Checkout redirect is enabled." : "Cart created for testing. Checkout redirect is disabled."
  };
}


