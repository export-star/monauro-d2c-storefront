import Image from "next/image";
import type { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";

type ProductHeroProps = {
  product: Product;
};

export function ProductHero({ product }: ProductHeroProps) {
  const heroImage = product.images.find((image) => image.role === "hero") ?? product.images[0];
  const galleryImages = product.images.filter((image) => image.role === "gallery" || image.role === "lifestyle");
  const modelSpec = product.specs.find((spec) => spec.label.toLowerCase().includes("sku") || spec.label.toLowerCase().includes("model"));
  const modelLabel = modelSpec?.status === "confirmed" ? `Model ${modelSpec.value}` : "Product exists";

  return (
    <section className="bg-white">
      <div className="grid page-shell gap-10 py-12 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-4">
          <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-monauro border border-black/10 bg-[#f3f3ef] text-center text-neutral-500">
            {heroImage ? (
              <Image className="object-contain p-4" src={heroImage.src} alt={heroImage.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" />
            ) : (
              "Real product image or approved video pending"
            )}
          </div>
          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {galleryImages.map((image) => (
                <div className="relative aspect-square overflow-hidden rounded-monauro border border-black/10 bg-[#f7f7f4]" key={image.src}>
                  <Image className="object-contain p-3" src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 16vw, 33vw" />
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="self-center">
          <Tag tone={modelSpec?.status === "confirmed" ? "green" : "orange"}>{modelLabel}</Tag>
          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">{product.name}</h1>
          <p className="mt-5 text-xl leading-8 text-neutral-700">{product.tagline}</p>
          <p className="mt-4 text-base leading-7 text-neutral-600">{product.description}</p>
          <div className="mt-6 rounded-monauro border border-black/10 bg-[#f7f7f4] p-4">
            <p className="text-sm font-bold uppercase text-neutral-500">Price</p>
            <p className="mt-1 text-2xl font-semibold">{product.price}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {product.primaryUseCases.map((useCase) => (
              <Tag key={useCase} tone="purple">
                {useCase}
              </Tag>
            ))}
          </div>
          <div className="mt-6 grid gap-3 rounded-monauro border border-black/10 bg-white p-4 text-sm text-neutral-700 sm:grid-cols-3">
            <p>
              <span className="font-semibold text-monauro-ink">Free shipping</span>
              <br />
              EU, US, Southeast Asia
            </p>
            <p>
              <span className="font-semibold text-monauro-ink">30-day returns</span>
              <br />
              Returns and exchanges
            </p>
            <p>
              <span className="font-semibold text-monauro-ink">365-day warranty</span>
              <br />
              Product warranty
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#shopify-handle-to-confirm">Add to Cart</Button>
            <Button href="/support" variant="secondary">Ask a Specialist</Button>
          </div>
          <p className="mt-5 text-sm leading-6 text-neutral-500">Shopify handle still needs to be connected before production launch.</p>
        </div>
      </div>
    </section>
  );
}
