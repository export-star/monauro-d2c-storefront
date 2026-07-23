import Image from "next/image";
import type { Product, ProductImage } from "@/types/product";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { ProductCard } from "@/components/commerce/product-card";
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
    image: `${assetBase}/mc06-routine-01.png`
  },
  {
    title: "Activate",
    description: "Use rhythmic air compression and heated surface support to make the session feel clear and structured.",
    image: `${assetBase}/mc06-routine-02.png`
  },
  {
    title: "Realign",
    description: "Let the 15-minute auto-off close the session, then remove the device and return to movement.",
    image: `${assetBase}/mc06-routine-03.png`
  }
];

const painPoints = [
  ["Deep calf fatigue", "A focused calf routine after runs, lifting, court sports, or long cardio sessions."],
  ["Long-day heaviness", "For sitting, standing, commuting, or desk-heavy days when calves feel tight or heavy."],
  ["Hands-free routine", "Secure the straps, choose a mode, and let the 15-minute auto-off close the session."]
];

const sciencePoints = [
  ["Air-compression zones", "Three groups of six massage heads inflate and deflate rhythmically."],
  ["Two massage modes", "Level 1 Relax massage and Level 2 Deep massage are confirmed in the manual."],
  ["Session guardrail", "Auto-off after 15 minutes helps keep the routine short and repeatable."],
  ["Two heat levels", "The confirmed heat settings are 42\u2103 and 45\u2103."],
  ["Cordless routine", "A 2000mAh battery and Type-C charging support home, desk, and travel use."]
];

const comparisonRows = [
  ["Routine logic", "Generic squeeze session", "15-minute calf-focused recovery routine"],
  ["Contact pattern", "Broad pressure around the limb", "Three air-compression groups that inflate and deflate in sequence"],
  ["Use experience", "Often feels like a blood-pressure cuff", "Designed as a warmer, more intentional calf reset routine"],
  ["Portability", "Varies by device", "Approx. 500g with Type-C charging"],
  ["Claim boundary", "Often overpromises pain relief", "Uses confirmed specs and avoids medical cure claims"]
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
      <section className="min-h-[100dvh] bg-[#f7f7f4]">
        <div className="w-full px-0 pb-8 pt-0 lg:pb-10">
          <div className="relative overflow-hidden bg-white">
            <ProductMediaGallery images={heroMedia} priority showThumbnails={false} variant="hero" />
            <div className="grid gap-5 border-y border-black/10 bg-white/94 p-5 backdrop-blur lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:p-7 xl:px-12">
              <div>
                <Tag tone="green">RecoveryAir Calf Pro / MC06</Tag>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] md:text-6xl">The 15-minute calf reset.</h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-700">
                  Rhythmic air compression, {"42\u2103 / 45\u2103"} heated surface support, and a short auto-off routine for heavy, tight calves.
                </p>
              </div>
              <div id="buy-panel">
                <ProductPurchasePanel product={product} />
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
                <Image className="object-contain transition duration-500 group-hover:scale-[1.02]" src={step.image} alt={`RecoveryAir Calf Pro ${step.title} routine`} fill sizes="(min-width: 1024px) 32vw, 100vw" />
                <details className="group/detail absolute inset-x-4 bottom-4 rounded-monauro bg-white/84 p-5 text-black shadow-sm backdrop-blur transition duration-300 open:bg-white/94">
                  <summary className="flex cursor-pointer list-none items-end justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <span>
                      <span className="text-xs font-semibold uppercase text-black/55">0{index + 1} / routine</span>
                      <span className="mt-2 block text-2xl font-semibold leading-tight text-black">{step.title}</span>
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/20 text-lg leading-none text-black transition duration-300 group-open/detail:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 border-t border-black/10 pt-4 text-sm leading-6 text-black/72">{step.description}</p>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f4] py-16 lg:py-20" id="simple-science">
        <div className="page-shell">
          <div className="relative overflow-hidden rounded-monauro bg-white">
            <div className="relative min-h-[300px] bg-[#e9e9e5] lg:min-h-[420px]">
              <Image className="object-cover" src={featureBanners[0].src} alt={featureBanners[0].alt} fill sizes="100vw" />
            </div>
            <div className="mx-auto -mt-10 max-w-4xl rounded-monauro border border-black/10 bg-white/92 p-6 text-center backdrop-blur lg:-mt-16 lg:p-8">
              <p className="text-sm font-bold uppercase text-monauro-orange">Simple science</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Powered by rhythmic compression, heat, and short routines.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-600">
                The confirmed mechanism is rhythmic air compression, two massage modes, {"42\u2103 / 45\u2103"} heated surface support, and a 15-minute auto-off session.
              </p>
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
            <Image className="object-cover" src={featureBanners[1].src} alt={featureBanners[1].alt} fill sizes="(min-width: 1024px) 48vw, 100vw" />
          </figure>
        </div>
      </section>

      <section className="bg-[#f7f7f4] py-16">
        <div className="page-shell">
          <SectionHeader
            eyebrow="More details"
            title="Mode, heat, battery, and travel details in one visual flow."
            description="These product visuals use the supplied MC06 material. Any copy that conflicts with the confirmed manual should be corrected in the source image before production launch."
          />
          <div className="mx-auto grid max-w-[1360px] gap-5 md:grid-cols-3">
            {moreSellingImages.map((image) => (
              <figure className="relative aspect-[4/5] overflow-hidden rounded-monauro bg-white" key={image.src}>
                <Image className="object-contain" src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 32vw, 100vw" />
              </figure>
            ))}
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
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">MC06 confirmed details.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/62">
              This section combines all confirmed MC06 product data into one technical block. Claims, certifications, clinical endorsements, and customer proof should be added only after source confirmation.
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
