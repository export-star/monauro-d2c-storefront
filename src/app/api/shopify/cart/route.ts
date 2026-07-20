import { NextResponse } from "next/server";
import { createDraftCartForVariant } from "@/lib/shopify";
import { getProductBySlug } from "@/data/products";

type CartRequestBody = {
  productSlug?: string;
  color?: string;
  quantity?: number;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CartRequestBody;
    const productSlug = body.productSlug;
    const color = body.color;
    const quantity = Math.max(1, Math.min(10, Math.floor(body.quantity ?? 1)));

    if (!productSlug || !color) {
      return NextResponse.json({ ok: false, message: "Product slug and color are required." }, { status: 400 });
    }

    const product = getProductBySlug(productSlug);

    if (!product) {
      return NextResponse.json({ ok: false, message: "Product not found." }, { status: 404 });
    }

    if (!product.shopifyHandle || product.shopifyHandle === "to-be-confirmed") {
      return NextResponse.json(
        {
          ok: false,
          message: `Shopify handle is not connected for ${product.name}. Add the real handle before cart testing.`
        },
        { status: 400 }
      );
    }

    const result = await createDraftCartForVariant({ handle: product.shopifyHandle, color, quantity });

    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Shopify cart test failed."
      },
      { status: 500 }
    );
  }
}
