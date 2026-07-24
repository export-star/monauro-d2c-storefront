import Image from "next/image";
import type { Product, ProductImage } from "@/types/product";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { ProductCard } from "@/components/commerce/product-card";
import { ProductMediaGallery } from "@/components/commerce/product-media-gallery";
import { ProductPurchasePanel } from "@/components/commerce/product-purchase-panel";
import { AutoSwapImage } from "@/components/ui/auto-swap-image";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { productFaqsBySlug } from "@/data/faqs";

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

const productMainSellingVideos: Record<string, string> = {
  "recoveryair-leg-elite": "/videos/ml01-selling-points.mp4",
  "relaxiwave-eye-mask": "/videos/me01-selling-points.mp4",
  "back-massage-gun": "/videos/mg01-selling-points.mp4"
};

const structuredVisualProductSlugs = new Set(["recoveryair-leg-elite", "back-massage-gun"]);

const technicalSpecLabels = [
  "SKU / Model",
  "Price",
  "Color options",
  "Product dimensions",
  "Strap dimensions",
  "Handle dimensions",
  "Weight",
  "Material",
  "Battery capacity",
  "Battery voltage",
  "Rated voltage / power",
  "Charging",
  "Charging time",
  "Maximum usage time",
  "Single-session guidance",
  "Massage modes",
  "Air pressure",
  "Heat levels",
  "Motor",
  "Speed levels",
  "Battery runtime",
  "Amplitude",
  "Stall force",
  "Noise",
  "Massage heads",
  "Application area",
  "Core functions",
  "Package includes",
  "Sales status",
  "Availability"
];

function getSpecValue(product: Product, label: string) {
  return product.specs.find((spec) => spec.label === label)?.value;
}

function getColorCount(product: Product) {
  const colorSpec = getSpecValue(product, "Color options");
  return colorSpec ? colorSpec.split(",").map((item) => item.trim()).filter(Boolean).length : 0;
}

function groupRoutineImages(images: ProductImage[], fallbackImages: ProductImage[]) {
  const source = images.length ? images : fallbackImages.slice(1, 4);
  return [0, 1, 2].map((index) => {
    if (images.length) {
      return images.slice(index * 2, index * 2 + 2);
    }
    return source[index] ? [source[index]] : [];
  });
}

function VisualImage({ image, className = "object-contain p-6" }: { image: ProductImage; className?: string }) {
  return <Image className={className} src={image.src} alt={image.alt} fill sizes="100vw" />;
}

export function ProductLongLanding({ product, pageCopy, relatedProducts }: ProductLongLandingProps) {
  const mainImages = product.images.filter((image) => image.role === "hero" || image.role === "gallery" || image.role === "lifestyle");
  const detailImages = product.images.filter((image) => image.role === "detail");
  const routineImages = product.images.filter((image) => image.role === "routine");
  const sceneImage = mainImages.find((image) => image.role === "lifestyle") ?? mainImages[1] ?? mainImages[0];
  const heroImages = mainImages.filter((image) => image.role !== "lifestyle");
  const detailBanner = detailImages[0] ?? sceneImage ?? mainImages[0];
  const mechanismImage = detailImages[1] ?? detailImages[0] ?? sceneImage ?? mainImages[0];
  const detailStoryImages = detailImages.slice(2);
  const routineImageGroups = groupRoutineImages(routineImages, mainImages);
  const model = getSpecValue(product, "SKU / Model") ?? product.shopifyHandle;
  const applicationArea = getSpecValue(product, "Application area") ?? product.primaryUseCases.join(", ");
  const coreFunctions = getSpecValue(product, "Core functions") ?? product.features.map((feature) => feature.title).join(", ");
  const colorCount = getColorCount(product);
  const confirmedSpecs = product.specs.filter((spec) => technicalSpecLabels.includes(spec.label));
  const showRoutineSteps = !hideRoutineStepProductSlugs.has(product.slug);
  const mainSellingVideo = productMainSellingVideos[product.slug];
  const faqItems = productFaqsBySlug[product.slug] ?? [];
  const useStructuredDetailGallery = structuredVisualProductSlugs.has(product.slug);
  const isLegElite = product.slug === "recoveryair-leg-elite";
  const featureTitle = isLegElite ? "Full-leg recovery support, simplified." : product.slug === "relaxiwave-eye-mask" ? "A calmer eye-care ritual for screen-heavy days." : "Targeted massage support you can control.";
  const featureDescription = isLegElite
    ? "EMS massage, heated comfort, and air-bag compression come together in a broader leg routine for home, travel, and long-day recovery."
    : product.slug === "relaxiwave-eye-mask"
      ? "Vibration massage, heated comfort, built-in white noise, and three massage modes support a short eye-area relaxation routine."
      : "Four speed levels, five massage heads, and an independent back-massage form support full-body relaxation without needing another person.";

  return (
    <main>
      <section className="bg-[#f7f7f4]">
        <div className="relative overflow-hidden bg-white">
          <ProductMediaGallery images={heroImages.length ? heroImages : mainImages} priority showThumbnails={false} variant="hero" />
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
              {pageCopy.routineSteps.slice(0, 3).map(([title, description], index) => {
                const images = routineImageGroups[index].filter(Boolean);
                const primaryImage = images[0] ?? mainImages[index + 1] ?? mainImages[0];

                return primaryImage ? (
                  <article className="group relative min-h-[520px] overflow-hidden rounded-monauro bg-[#f7f7f4]" key={title}>
                    {images.length > 1 ? (
                      <AutoSwapImage
                        alt={primaryImage.alt}
                        images={images.map((image) => image.src)}
                        intervalMs={1000}
                        className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 30vw, 100vw"
                      />
                    ) : (
                      <Image className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]" src={primaryImage.src} alt={primaryImage.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" />
                    )}
                    <div className="absolute inset-x-4 bottom-4 rounded-monauro border border-white/35 bg-white/86 p-5 text-monauro-ink shadow-lg backdrop-blur-xl">
                      <p className="text-xs font-semibold uppercase text-neutral-600">0{index + 1} / routine</p>
                      <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-neutral-700">{description}</p>
                    </div>
                  </article>
                ) : null;
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#f7f7f4] py-16 lg:py-20">
        <div className="page-shell">
          <div className="relative overflow-hidden rounded-monauro bg-white">
            {detailBanner ? (
              <div className="relative aspect-[12/5] min-h-[260px] bg-[#e9e9e5]">
                <VisualImage image={detailBanner} className="object-contain" />
              </div>
            ) : null}
            <div className="mx-auto -mt-8 max-w-4xl rounded-monauro border border-black/10 bg-white/94 p-6 text-center shadow-xl backdrop-blur lg:-mt-14 lg:p-8">
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
              eyebrow="Product highlights"
              title={featureTitle}
              description={featureDescription}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div className="rounded-monauro bg-[#f7f7f4] p-5" key={feature.title}>
                  <p className="text-lg font-semibold">{feature.title}</p>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          {mainSellingVideo ? (
            <figure className="relative min-h-[360px] overflow-hidden rounded-monauro bg-[#f7f7f4] lg:min-h-[520px]">
              <video
                aria-label={`${product.name} main selling point video`}
                autoPlay
                className="h-full min-h-[360px] w-full object-contain p-4 lg:min-h-[520px]"
                loop
                muted
                playsInline
                src={mainSellingVideo}
              />
            </figure>
          ) : mechanismImage ? (
            <figure className="relative min-h-[360px] overflow-hidden rounded-monauro bg-[#f7f7f4] lg:min-h-[520px]">
              <Image className="object-contain p-6" src={mechanismImage.src} alt={mechanismImage.alt} fill sizes="(min-width: 1024px) 48vw, 100vw" />
            </figure>
          ) : null}
        </div>
      </section>

            {detailStoryImages.length ? (
        <section className="bg-[#f7f7f4] py-16">
          <div className="page-shell">
            <SectionHeader
              eyebrow="More product visuals"
              title={isLegElite ? "A cleaner way to read the leg system." : useStructuredDetailGallery ? "Visual details for targeted body care." : "Details, benefits, and product use in one gallery."}
              description={
                isLegElite
                  ? "Selected visuals are grouped around coverage, comfort, and day-to-day use, so the section supports the product story without showing every file at once."
                  : useStructuredDetailGallery
                    ? "Selected visuals are grouped by what they communicate, with supporting images kept secondary to the core use story."
                    : "Product details and use visuals are arranged to keep the page easy to scan."
              }
            />
            {isLegElite ? (
              <div className="grid gap-5">
                <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
                  {detailStoryImages[0] ? (
                    <figure className="relative aspect-[16/9] overflow-hidden rounded-monauro border border-black/10 bg-white">
                      <Image className="object-contain p-4" src={detailStoryImages[0].src} alt={detailStoryImages[0].alt} fill sizes="(min-width: 1024px) 58vw, 100vw" />
                    </figure>
                  ) : null}
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                    {detailStoryImages.slice(1, 3).map((image) => (
                      <figure className="relative aspect-[16/9] overflow-hidden rounded-monauro border border-black/10 bg-white" key={image.src}>
                        <Image className="object-contain p-3" src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 34vw, 100vw" />
                      </figure>
                    ))}
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                  {detailStoryImages.slice(3, 6).map((image) => (
                    <figure className="relative aspect-[4/5] overflow-hidden rounded-monauro border border-black/10 bg-white" key={image.src}>
                      <Image className="object-contain p-3" src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" />
                    </figure>
                  ))}
                </div>
              </div>
            ) : useStructuredDetailGallery ? (
              <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                {detailStoryImages[0] ? (
                  <figure className="relative aspect-[4/3] overflow-hidden rounded-monauro border border-black/10 bg-white">
                    <Image className="object-contain p-4" src={detailStoryImages[0].src} alt={detailStoryImages[0].alt} fill sizes="(min-width: 1024px) 54vw, 100vw" />
                  </figure>
                ) : null}
                <div className="grid gap-5 sm:grid-cols-2">
                  {detailStoryImages.slice(1, 5).map((image) => (
                    <figure className="relative aspect-[4/5] overflow-hidden rounded-monauro border border-black/10 bg-white" key={image.src}>
                      <Image className="object-contain p-3" src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw" />
                    </figure>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {detailStoryImages.map((image) => (
                  <figure className="relative aspect-[4/5] overflow-hidden rounded-monauro border border-black/10 bg-white" key={image.src}>
                    <Image className="object-contain p-3" src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : null}

      <section className="bg-[#171717] py-16 text-white">
        <div className="page-shell">
          <div className="border-b border-white/18 pb-6">
            <p className="text-sm font-bold uppercase text-monauro-teal">Technical specifications</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{model} technical details.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/62">
              Specs are organized for quick comparison across the MONAURO product line, with safety-sensitive language kept clear and conservative.
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
          description="Compare by body area and routine, then move into the product page that fits the recovery moment."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>

      <section className="page-shell py-16">
        <SectionHeader eyebrow="FAQ" title="Safety, usage, policy, and checkout questions." />
        <FaqAccordion items={faqItems} />
      </section>
    </main>
  );
}