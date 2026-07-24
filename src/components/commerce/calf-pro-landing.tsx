import Image from "next/image";
import type { Product, ProductImage } from "@/types/product";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { ProductCard } from "@/components/commerce/product-card";
import { AutoSwapImage } from "@/components/ui/auto-swap-image";
import { ProductMediaGallery } from "@/components/commerce/product-media-gallery";
import { ProductPurchasePanel } from "@/components/commerce/product-purchase-panel";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { productFaqs } from "@/data/faqs";

type CalfProLandingProps = {
  product: Product;
  relatedProducts: Product[];
};

const assetBase = "/images/products/recoveryair-calf-pro/mc06-refresh";

const heroMedia: ProductImage[] = [
  {
    src: "/videos/home-hero-01.mp4",
    alt: "RecoveryAir Calf Pro hero video",
    role: "hero"
  },
  {
    src: `${assetBase}/mc06-hero-01.png`,
    alt: "RecoveryAir Calf Pro product hero poster",
    role: "gallery"
  },
  {
    src: `${assetBase}/mc06-hero-02.png`,
    alt: "RecoveryAir Calf Pro color and product detail poster",
    role: "gallery"
  },
  {
    src: `${assetBase}/mc06-hero-03.png`,
    alt: "RecoveryAir Calf Pro lifestyle hero poster",
    role: "gallery"
  }
];

const sceneImages = [
  {
    src: `${assetBase}/mc06-scene-01.png`,
    alt: "RecoveryAir Calf Pro calf recovery usage scene"
  },
  {
    src: `${assetBase}/mc06-scene-02.png`,
    alt: "RecoveryAir Calf Pro home recovery usage scene"
  }
];

const protocolSteps = [
  {
    title: "Relax",
    description: "Fasten the device comfortably and start with the lower intensity routine for daily relaxation.",
    images: [`${assetBase}/mc06-routine-relax-01.png`, `${assetBase}/mc06-routine-relax-02.png`]
  },
  {
    title: "Activate",
    description: "Use rhythmic air compression and heated surface support to make the session feel clear and structured.",
    images: [`${assetBase}/mc06-routine-activate-01.png`, `${assetBase}/mc06-routine-activate-02.png`]
  },
  {
    title: "Realign",
    description: "Let the 15-minute auto-off close the session, then remove the device and return to movement.",
    images: [`${assetBase}/mc06-routine-realign-01.png`, `${assetBase}/mc06-routine-realign-02.png`]
  }
];

const painPoints = [
  ["Deep calf fatigue", "A focused calf routine after runs, lifting, court sports, or long cardio sessions."],
  ["Long-day heaviness", "For sitting, standing, commuting, or desk-heavy days when calves feel tight or heavy."],
  ["Hands-free routine", "Secure the straps, choose a mode, and let the 15-minute auto-off close the session."]
];

const sciencePoints = [
  ["Air-compression zones", "Three groups of six massage heads inflate and deflate rhythmically."],
  ["Two massage modes", "Level 1 Relax massage and Level 2 Deep massage give the routine a simple low-to-deep structure."],
  ["Session guardrail", "Auto-off after 15 minutes helps keep the routine short and repeatable."],
  ["Two heat levels", "The heat settings are 42\u2103 and 45\u2103."],
  ["Cordless routine", "A 2000mAh battery and Type-C charging support home, desk, and travel use."]
];

const comparisonRows = [
  ["Routine logic", "Generic squeeze session", "15-minute calf-focused recovery routine"],
  ["Contact pattern", "Broad pressure around the limb", "Three air-compression groups that inflate and deflate in sequence"],
  ["Use experience", "Often feels like a blood-pressure cuff", "Designed as a warmer, more intentional calf reset routine"],
  ["Portability", "Varies by device", "Approx. 500g with Type-C charging"],
  ["Claim boundary", "Overly broad pressure promise", "A short routine built around stated specs and conservative wellness language"]
];

const featureBanners = [
  {
    src: `${assetBase}/mc06-feature-banner-01.png`,
    alt: "RecoveryAir Calf Pro main airbag structure selling point"
  },
  {
    src: `${assetBase}/mc06-feature-banner-02.png`,
    alt: "RecoveryAir Calf Pro compression and heat feature detail"
  }
];

const mc06SellingPointVideo = "/videos/mc06-selling-points.mp4";

const moreSellingPoints = [
  {
    title: "Relax and Deep Modes",
    details: ["All inflation", "Upper inflation", "Middle inflation", "Lower inflation"]
  },
  {
    title: "Controlled Heat Therapy"
  },
  {
    title: "Fast Recovery",
    details: ["Precision Target Trigger points"]
  }
];

const moreSellingImages = [
  {
    src: `${assetBase}/mc06-more-01.png`,
    alt: "RecoveryAir Calf Pro mode and compression selling points"
  },
  {
    src: `${assetBase}/mc06-more-02.png`,
    alt: "RecoveryAir Calf Pro heating and recovery selling points"
  },
  {
    src: `${assetBase}/mc06-more-03.png`,
    alt: "RecoveryAir Calf Pro battery charging and travel selling points"
  }
];

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
  "Package includes"
];

const statHighlights = [
  ["15", "min auto-off"],
  ["2", "massage modes"],
  ["42\u2103 / 45\u2103", "heat levels"],
  ["100 KPa", "manual-stated pressure"]
];

export function CalfProLanding({ product, relatedProducts }: CalfProLandingProps) {
  return (
    <main>
      <section className="bg-[#f7f7f4]">
        <div className="relative overflow-hidden bg-white">
          <ProductMediaGallery images={heroMedia} priority showThumbnails={false} variant="hero" />
          <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-6">
            <div className="mx-auto grid max-w-[calc(100vw-2rem)] gap-5 rounded-monauro border border-white/35 bg-white/72 p-5 shadow-2xl backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:p-6">
              <div>
                <Tag tone="green">RecoveryAir Calf Pro / MC06</Tag>
                <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.02] text-monauro-ink md:text-5xl">The 15-minute calf reset.</h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-700 md:text-base">
                  Rhythmic air compression, {"42\u2103 / 45\u2103"} heated surface support, and a short auto-off routine for heavy, tight calves.
                </p>
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
            <p className="text-sm font-bold uppercase">Calf recovery moments</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">Relief and recovery without a complicated setup.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/82">
              The airbag massage-head structure is designed for post-exercise calf discomfort and for people who sit or stand for long periods. It combines compression and heat to support muscle relaxation, help ease everyday tightness and fatigue, and make short lower-leg routines easier to repeat.
            </p>
            <div className="mt-12 grid gap-5 border-t border-white/45 pt-6 md:grid-cols-3">
              {painPoints.map(([title, description]) => (
                <div key={title}>
                  <p className="text-lg font-semibold text-white">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/78">{description}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="relative min-h-[360px] overflow-hidden rounded-monauro bg-white/20 lg:min-h-[460px]">
            <Image className="object-cover" src={sceneImages[0].src} alt={sceneImages[0].alt} fill sizes="(min-width: 1024px) 44vw, 100vw" />
          </figure>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="page-shell">
          <div className="mx-auto grid max-w-[1360px] gap-5 md:grid-cols-3">
            {protocolSteps.map((step, index) => (
              <article className="group relative aspect-[4/5] overflow-hidden rounded-monauro bg-[#f7f7f4]" key={step.title}>
                <AutoSwapImage className="object-contain transition-transform duration-500 group-hover:scale-[1.02]" images={step.images} alt={`RecoveryAir Calf Pro ${step.title} routine`} sizes="(min-width: 1024px) 32vw, 100vw" />
                <details className="group/detail absolute inset-x-4 bottom-4 rounded-monauro border border-black/10 bg-white/96 p-5 text-black shadow-md transition duration-300 open:bg-white">
                  <summary className="flex cursor-pointer list-none items-end justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <span>
                      <span className="text-xs font-bold uppercase tracking-wide text-black/65">0{index + 1} / routine</span>
                      <span className="mt-2 block text-2xl font-bold leading-tight text-black">{step.title}</span>
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/25 bg-white text-lg leading-none text-black transition duration-300 group-open/detail:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 border-t border-black/10 pt-4 text-sm leading-6 text-black/78">{step.description}</p>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f4] py-16 lg:py-20" id="simple-science">
        <div className="page-shell">
          <div className="relative overflow-hidden rounded-monauro bg-white">
            <div className="relative aspect-[12/5] min-h-[420px] bg-[#e9e9e5]">
              <Image className="object-contain" src={featureBanners[0].src} alt={featureBanners[0].alt} fill sizes="100vw" />
              <div className="absolute inset-x-0 bottom-0 grid gap-5 border-t border-white/45 bg-white/62 px-6 py-5 text-left shadow-[0_-18px_38px_rgba(255,255,255,0.22)] backdrop-blur-md lg:grid-cols-[0.48fr_0.52fr] lg:items-center lg:px-10">
                <div className="lg:border-r lg:border-black/10 lg:pr-8">
                  <p className="text-xs font-bold uppercase tracking-wide text-monauro-orange">Simple science</p>
                  <h2 className="mt-2 text-2xl font-semibold leading-[1.08] text-monauro-ink md:text-3xl">Rhythmic compression, heat, short routines.</h2>
                </div>
                <p className="max-w-3xl text-sm leading-6 text-neutral-700">
                  Rhythmic air compression, two massage modes, {"42℃ / 45℃"} heated surface support, and a 15-minute auto-off session define the core routine.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 px-6 py-12 text-center sm:grid-cols-4">
              {statHighlights.map(([value, label]) => (
                <div key={label}>
                  <p className="text-3xl font-semibold tabular-nums">{value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase text-neutral-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="grid page-shell gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Air-compression map"
              title="Three groups work in sequence."
              description="The manual describes three groups of six massage heads that inflate and deflate rhythmically. This section can later use an approved animation or GIF for the airbag movement."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {sciencePoints.map(([title, description]) => (
                <div className="rounded-monauro bg-[#f7f7f4] p-5" key={title}>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="relative min-h-[360px] overflow-hidden rounded-monauro bg-[#f7f7f4] lg:min-h-[520px]">
            <video
              aria-label="RecoveryAir Calf Pro main selling point video"
              autoPlay
              className="h-full min-h-[360px] w-full object-contain p-4 lg:min-h-[520px]"
              loop
              muted
              playsInline
              src={mc06SellingPointVideo}
            />
          </figure>
        </div>
      </section>

      <section className="bg-[#f7f7f4] py-16">
        <div className="page-shell">
          <SectionHeader
            eyebrow="More details"
            title="Mode, heat, battery, and travel details in one visual flow."
            description="Tap each headline to see the detail behind the mode, heat, recovery, and trigger-point story."
          />
          <div className="mx-auto grid max-w-[1360px] gap-5 md:grid-cols-3">
            {moreSellingImages.map((image, index) => {
              const point = moreSellingPoints[index];
              return (
                <article className="overflow-hidden rounded-monauro bg-white shadow-sm" key={image.src}>
                  <figure className="relative aspect-[4/5] bg-white">
                    <Image className="object-contain" src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 32vw, 100vw" />
                  </figure>
                  <div className="border-t border-black/10 bg-white/92 p-5">
                    {point.details ? (
                      <details className="group/detail">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold text-monauro-ink [&::-webkit-details-marker]:hidden">
                          {point.title}
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/20 text-lg leading-none transition group-open/detail:rotate-90">+</span>
                        </summary>
                        <div className="mt-4 grid gap-3 border-t border-black/10 pt-4 text-base leading-6 text-neutral-700">
                          {point.details.map((detail) => (
                            <p key={detail}>{detail}</p>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <h3 className="text-xl font-semibold text-monauro-ink">{point.title}</h3>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="page-shell">
          <SectionHeader
            eyebrow="Comparison"
            title="Not just a blood-pressure cuff feeling."
            description="This comparison is educational and conservative: it explains positioning without unsupported clinical promises."
          />
          <div className="overflow-hidden rounded-monauro border border-black/10 bg-white">
            <div className="grid bg-monauro-gray/55 p-5 text-sm font-bold uppercase text-neutral-600 md:grid-cols-3">
              <p>Question</p>
              <p>Ordinary compression device</p>
              <p>MONAURO Calf Pro</p>
            </div>
            {comparisonRows.map(([question, ordinary, monauro]) => (
              <div className="grid gap-3 border-t border-black/10 p-5 md:grid-cols-3" key={question}>
                <p className="font-semibold">{question}</p>
                <p className="text-neutral-600">{ordinary}</p>
                <p className="text-neutral-800">{monauro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171717] py-16 text-white">
        <div className="page-shell">
          <div className="border-b border-white/18 pb-6">
            <p className="text-sm font-bold uppercase text-monauro-teal">Technical specifications</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">MC06 technical details.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/62">
              Specs are organized in one technical block so shoppers can compare dimensions, power, battery, heat, and package contents quickly.
            </p>
          </div>
          <div className="grid gap-5 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {product.specs
              .filter((spec) => technicalSpecLabels.includes(spec.label))
              .map((spec) => (
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
          description="Related product paths support the MONAURO recovery-system strategy without pretending they are bundled yet."
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
