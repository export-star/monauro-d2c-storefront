import Image from "next/image";
import type { Product } from "@/types/product";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { ProductCard } from "@/components/commerce/product-card";
import { ProductMediaGallery } from "@/components/commerce/product-media-gallery";
import { ProductPurchasePanel } from "@/components/commerce/product-purchase-panel";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { productFaqs } from "@/data/faqs";

export type ProductLongPageCopy = {
  outcomeTitle: string;
  outcomeDescription: string;
  outcomes: [string, string][];
  routineTitle: string;
  routineDescription: string;
  routineSteps: [string, string][];
};

type ProductLongLandingProps = {
  product: Product;
  pageCopy: ProductLongPageCopy;
  relatedProducts: Product[];
};

const hideRoutineStepProductSlugs = new Set(["relaxiwave-eye-mask", "back-massage-gun"]);

const technicalSpecLabels = [
  "SKU / Model",
  "Price",
  "Color options",
  "Product dimensions",
  "Strap dimensions",
  "Weight",
  "Material",
  "Battery capacity",
  "Battery voltage",
  "Rated voltage / power",
  "Charging",
  "Maximum usage time",
  "Single-session guidance",
  "Massage modes",
  "Air pressure",
  "Heat levels",
  "Application area",
  "Core functions",
  "Package includes",
  "Sales status"
];

function getSpecValue(product: Product, label: string) {
  return product.specs.find((spec) => spec.label === label)?.value;
}

function getColorCount(product: Product) {
  const colorSpec = getSpecValue(product, "Color options");
  return colorSpec ? colorSpec.split(",").map((item) => item.trim()).filter(Boolean).length : 0;
}

export function ProductLongLanding({ product, pageCopy, relatedProducts }: ProductLongLandingProps) {
  const mainImages = product.images.filter((image) => image.role === "hero" || image.role === "gallery" || image.role === "lifestyle");
  const detailImages = product.images.filter((image) => image.role === "detail");
  const sceneImage = mainImages.find((image) => image.role === "lifestyle") ?? mainImages[1] ?? mainImages[0];
  const detailBanner = detailImages[detailImages.length - 1] ?? mainImages[0];
  const mechanismImage = detailImages[0] ?? mainImages[0];
  const model = getSpecValue(product, "SKU / Model") ?? product.shopifyHandle;
  const applicationArea = getSpecValue(product, "Application area") ?? product.primaryUseCases.join(", ");
  const coreFunctions = getSpecValue(product, "Core functions") ?? product.features.map((feature) => feature.title).join(", ");
  const colorCount = getColorCount(product);
  const confirmedSpecs = product.specs.filter((spec) => technicalSpecLabels.includes(spec.label));
  const showRoutineSteps = !hideRoutineStepProductSlugs.has(product.slug);

  return (
    <main>
      <section className="bg-[#f7f7f4]">
        <div className="relative overflow-hidden bg-white">
          <ProductMediaGallery images={mainImages} priority showThumbnails={false} variant="hero" />
          <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-6">
            <div className="mx-auto grid max-w-[calc(100vw-2rem)] gap-5 rounded-monauro border border-white/35 bg-white/72 p-5 shadow-2xl backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:p-6">
              <div>
                <Tag tone="green">{`${product.name} / ${model}`}</Tag>
                <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-[1.02] text-monauro-ink md:text-5xl">{product.tagline}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-700 md:text-base">{product.description}</p>
              </div>
              <div id="buy-panel">
                <ProductPurchasePanel product={product} variant="overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-monauro-teal py-16 text-white lg:py-20">
        <div className="grid page-shell gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase">Use case logic</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{pageCopy.outcomeTitle}</h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/80">{pageCopy.outcomeDescription}</p>
            <div className="mt-12 grid gap-5 border-t border-white/45 pt-6 md:grid-cols-2 xl:grid-cols-4">
              {pageCopy.outcomes.map(([title, description]) => (
                <div key={title}>
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/74">{description}</p>
                </div>
              ))}
            </div>
          </div>
          {sceneImage ? (
            <figure className="relative min-h-[360px] overflow-hidden rounded-monauro bg-white/20 lg:min-h-[460px]">
              <Image className="object-contain p-5" src={sceneImage.src} alt={sceneImage.alt} fill sizes="(min-width: 1024px) 44vw, 100vw" />
            </figure>
          ) : null}
        </div>
      </section>

      {showRoutineSteps ? (
        <section className="bg-white py-16">
          <div className="page-shell">
            <div className="grid gap-5 md:grid-cols-3">
              {(mainImages.length > 1 ? mainImages.slice(1, 4) : mainImages).map((image, index) => (
                <article className="group relative min-h-[420px] overflow-hidden rounded-monauro bg-[#f7f7f4]" key={image.src}>
                  <Image className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]" src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/72 to-transparent p-6 text-white">
                    <p className="text-xs font-semibold uppercase text-white/70">0{index + 1} / routine</p>
                    <h3 className="mt-3 text-2xl font-semibold">{pageCopy.routineSteps[index]?.[0] ?? product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/78">{pageCopy.routineSteps[index]?.[1] ?? product.tagline}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#f7f7f4] py-16 lg:py-20">
        <div className="page-shell">
          <div className="relative overflow-hidden rounded-monauro bg-white">
            {detailBanner ? (
              <div className="relative min-h-[300px] bg-[#e9e9e5] lg:min-h-[420px]">
                <Image className="object-contain p-8" src={detailBanner.src} alt={detailBanner.alt} fill sizes="100vw" />
              </div>
            ) : null}
            <div className="mx-auto -mt-10 max-w-4xl rounded-monauro border border-black/10 bg-white/92 p-6 text-center backdrop-blur lg:-mt-16 lg:p-8">
              <p className="text-sm font-bold uppercase text-monauro-orange">Product logic</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{pageCopy.routineTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-neutral-600">{pageCopy.routineDescription}</p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 px-6 py-12 text-center sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold tabular-nums">{model}</p>
                <p className="mt-2 text-xs font-semibold uppercase text-neutral-500">model</p>
              </div>
              <div>
                <p className="text-3xl font-semibold tabular-nums">{colorCount || "TBC"}</p>
                <p className="mt-2 text-xs font-semibold uppercase text-neutral-500">color options</p>
              </div>
              <div>
                <p className="text-3xl font-semibold tabular-nums">{applicationArea}</p>
                <p className="mt-2 text-xs font-semibold uppercase text-neutral-500">application area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="grid page-shell gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Feature map"
              title="A product story built only from confirmed inputs."
              description={`Confirmed core functions: ${coreFunctions}. Detailed operating claims should be expanded after the final manual is supplied.`}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div className="rounded-monauro bg-[#f7f7f4] p-5" key={feature.title}>
                  <Tag tone={feature.status === "confirmed" ? "green" : "orange"}>
                    {feature.status === "confirmed" ? "Confirmed" : "To confirm"}
                  </Tag>
                  <p className="mt-4 font-semibold">{feature.title}</p>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          {mechanismImage ? (
            <figure className="relative min-h-[360px] overflow-hidden rounded-monauro bg-[#f7f7f4] lg:min-h-[520px]">
              <Image className="object-contain p-6" src={mechanismImage.src} alt={mechanismImage.alt} fill sizes="(min-width: 1024px) 48vw, 100vw" />
            </figure>
          ) : null}
        </div>
      </section>

      <section className="bg-[#171717] py-16 text-white">
        <div className="page-shell">
          <div className="border-b border-white/18 pb-6">
            <p className="text-sm font-bold uppercase text-monauro-teal">Technical specifications</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{model} confirmed details.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/62">
              This block keeps product data in one place. Certifications, clinical proof, and customer cases should only be added after source confirmation.
            </p>
          </div>
          <div className="grid gap-5 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {confirmedSpecs.map((spec) => (
              <div className="border-t border-white/16 pt-5" key={spec.label}>
                <p className="text-xs font-bold uppercase text-white/48">{spec.label}</p>
                <p className="mt-3 text-sm leading-6 text-white/82">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-16">
        <SectionHeader
          eyebrow="Recovery system"
          title="Build the next routine around the rest of the body."
          description="Related product paths support the MONAURO recovery-system strategy without presenting unconfirmed bundles."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>

      <section className="page-shell py-16">
        <SectionHeader eyebrow="FAQ" title="Safety, usage, policy, and checkout questions." />
        <FaqAccordion items={productFaqs} />
      </section>
    </main>
  );
}

