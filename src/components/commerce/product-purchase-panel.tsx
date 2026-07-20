"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";

type ProductPurchasePanelProps = {
  product: Product;
};

type ShopifyCartResponse = {
  ok: boolean;
  message?: string;
  result?: {
    mode: "draft" | "cart_created";
    productTitle: string;
    variantId: string;
    variantTitle: string;
    availableForSale: boolean;
    checkoutUrl?: string;
    canRedirect: boolean;
    message: string;
  };
};

const colorSwatches: Record<string, string> = {
  "Calm Purple": "#B9A3E3",
  "Vivid Orange": "#FF8039",
  "Pale Green": "#B9E972",
  "Electric Green": "#2CD5C4"
};

function getColorOptions(product: Product) {
  const colorSpec = product.specs.find((spec) => spec.label === "Color options");
  return colorSpec?.value.split(",").map((color) => color.trim()).filter(Boolean) ?? [];
}

export function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
  const colorOptions = useMemo(() => getColorOptions(product), [product]);
  const [selectedColor, setSelectedColor] = useState(colorOptions[0] ?? "Default");
  const [quantity, setQuantity] = useState(1);
  const [isTestingCart, setIsTestingCart] = useState(false);
  const [cartMessage, setCartMessage] = useState("Shopify draft connection pending. No live checkout redirect will happen unless enabled in env.");

  async function testShopifyCart(action: "cart" | "buy") {
    setIsTestingCart(true);
    setCartMessage("Testing Shopify draft connection...");

    try {
      const response = await fetch("/api/shopify/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ productSlug: product.slug, color: selectedColor, quantity })
      });
      const payload = (await response.json()) as ShopifyCartResponse;

      if (!payload.ok || !payload.result) {
        setCartMessage(payload.message ?? "Shopify draft test failed.");
        return;
      }

      const result = payload.result;
      const baseMessage = `${result.message} Matched ${result.productTitle} / ${result.variantTitle}.`;
      setCartMessage(baseMessage);

      if (action === "buy" && result.checkoutUrl && result.canRedirect) {
        window.location.href = result.checkoutUrl;
      }
    } catch (error) {
      setCartMessage(error instanceof Error ? error.message : "Shopify draft test failed.");
    } finally {
      setIsTestingCart(false);
    }
  }

  return (
    <div className="rounded-monauro border border-black/10 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase text-neutral-500">Price</p>
          <p className="mt-1 text-3xl font-semibold">{product.price}</p>
        </div>
        <div className="grid gap-1 text-sm text-neutral-600 sm:text-right">
          <p>30-day risk-free trial</p>
          <p>365-day warranty</p>
        </div>
      </div>

      {colorOptions.length > 0 ? (
        <div className="mt-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-bold uppercase text-neutral-500">Color</p>
            <p className="text-sm font-semibold text-monauro-ink">{selectedColor}</p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {colorOptions.map((color) => (
              <button
                className={`flex min-h-12 items-center gap-2 rounded-monauro border px-3 text-left text-xs font-semibold transition ${
                  selectedColor === color ? "border-monauro-orange bg-monauro-orange/10" : "border-black/10 bg-[#f7f7f4] hover:border-monauro-teal"
                }`}
                key={color}
                onClick={() => setSelectedColor(color)}
                type="button"
              >
                <span
                  className="h-6 w-6 shrink-0 rounded-full border border-black/10"
                  style={{ backgroundColor: colorSwatches[color] ?? "#D9D9D6" }}
                />
                {color}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-[0.45fr_1fr] sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase text-neutral-500">Quantity</p>
          <div className="mt-3 grid min-h-12 grid-cols-3 overflow-hidden rounded-monauro border border-black/10 bg-[#f7f7f4]">
            <button
              aria-label="Decrease quantity"
              className="text-lg font-semibold transition hover:bg-white disabled:cursor-not-allowed disabled:text-neutral-300"
              disabled={quantity === 1 || isTestingCart}
              onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              type="button"
            >
              -
            </button>
            <span className="flex items-center justify-center text-sm font-semibold">{quantity}</span>
            <button
              aria-label="Increase quantity"
              className="text-lg font-semibold transition hover:bg-white disabled:cursor-not-allowed disabled:text-neutral-300"
              disabled={isTestingCart}
              onClick={() => setQuantity((current) => Math.min(10, current + 1))}
              type="button"
            >
              +
            </button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-monauro bg-monauro-teal px-5 py-3 text-sm font-semibold text-monauro-ink transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-600"
            disabled={isTestingCart}
            onClick={() => testShopifyCart("cart")}
            type="button"
          >
            {isTestingCart ? "Testing..." : "Add to Cart"}
          </button>
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-monauro bg-monauro-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-600"
            disabled={isTestingCart}
            onClick={() => testShopifyCart("buy")}
            type="button"
          >
            {isTestingCart ? "Testing..." : "Buy Now"}
          </button>
        </div>
      </div>

      <p className="mt-4 text-xs leading-5 text-neutral-500">{cartMessage}</p>
    </div>
  );
}
