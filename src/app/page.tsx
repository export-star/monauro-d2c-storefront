import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { productMatrixImages } from "@/data/product-matrix-images";
import { products } from "@/data/products";
import { trustPolicies } from "@/data/policies";


const painSolutions = [
  {
    pain: "Digital Eye Strain",
    solution: "A quiet 15-minute eye-area routine for screen-heavy workdays and evening decompression.",
    href: "/products/relaxiwave-eye-mask",
    image: "/images/home/body-signal/signal-eye-strain.png"
  },
  {
    pain: "Full-Leg Fatigue",
    solution: "EMS, heated comfort, and air-bag compression support for broader leg recovery routines.",
    href: "/products/recoveryair-leg-elite",
    image: "/images/home/body-signal/signal-leg-fatigue.png"
  },
  {
    pain: "Heavy Calves",
    solution: "Short air-compression and heat routines for calves after sitting, standing, travel, or workouts.",
    href: "/products/recoveryair-calf-pro",
    image: "/images/home/body-signal/signal-calf-tightness.png"
  },
  {
    pain: "Back Tension",
    solution: "Self-use back massage support plus standard massage-gun routines for everyday body tension.",
    href: "/products/back-massage-gun",
    image: "/images/home/body-signal/signal-back-tension.png"
  }
];

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <FadeIn className="mx-auto max-w-6xl text-center">
      <p className="text-xs font-semibold uppercase text-monauro-orange">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight text-monauro-ink md:text-6xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-5xl text-base leading-7 text-neutral-600 md:text-lg">{description}</p>
    </FadeIn>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#f7f7f4] text-monauro-ink">
      <section className="relative min-h-[calc(100dvh-96px)] overflow-hidden border-b border-black/10 bg-[#7f828c] text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          src="/videos/home-hero-01.mp4"
          poster="/images/products/recoveryair-calf-pro/mc06-refresh/mc06-hero-01.png"
          autoPlay
          muted
          loop
          playsInline
          aria-label="MONAURO recovery device in use"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/42 via-black/16 to-white/8" />
        <div className="absolute inset-x-0 bottom-0 page-shell pb-10 md:pb-14">
          <FadeIn className="max-w-3xl">
            <h1 className="text-5xl font-semibold leading-[0.98] text-white md:text-7xl">Recovery starts here.</h1>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-white/86 md:text-xl">Short wellness routines for heavy legs, screen fatigue, and everyday body tension.</p>
            <div className="mt-8">
              <Link
                className="inline-flex min-h-12 min-w-[220px] items-center justify-center rounded-full bg-white/78 px-8 py-3 text-sm font-bold uppercase text-[#1f72ff] transition hover:bg-white"
                href="/products"
              >
                Shop Now
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white page-shell py-20">
        <div className="w-full">
          <SectionTitle
            eyebrow="Product Matrix"
            title="Four devices, one recovery logic."
            description="Each product is positioned by body area and daily routine, so shoppers can compare quickly without overclaiming outcomes."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => {
              const image = productMatrixImages[product.slug] ?? product.images.find((item) => item.role === "hero")?.src ?? product.images[0]?.src;

              return (
                <FadeIn key={product.slug}>
                  <Link
                    className="group block h-full rounded-monauro border border-black/10 bg-[#f7f7f4] p-4 transition duration-300 hover:-translate-y-1 hover:border-monauro-teal hover:bg-white"
                    href={`/products/${product.slug}`}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-monauro bg-[#d8eef8]">
                      {image ? (
                        <Image
                          className="object-contain p-3 transition duration-500 group-hover:scale-[1.04]"
                          src={image}
                          alt={`${product.name} product matrix image`}
                          fill
                          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                        />
                      ) : null}
                    </div>
                    <div className="mt-5">
                      <h3 className="text-xl font-semibold leading-tight text-monauro-ink">{product.name}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">{product.tagline}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.primaryUseCases.slice(0, 2).map((useCase) => (
                        <span className="rounded-full border border-monauro-orange/30 bg-monauro-orange/10 px-3 py-1 text-xs font-semibold text-monauro-orange" key={useCase}>
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 page-shell py-20">
        <div className="w-full">
          <SectionTitle
            eyebrow="Pain Points / Solutions"
            title="Start from the body signal."
            description="The homepage starts with the fatigue pattern, then routes each shopper toward a relevant product page, guide, or support answer."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {painSolutions.map((item) => (
              <FadeIn key={item.pain}>
                <Link
                  className="group flex h-full flex-col overflow-hidden rounded-monauro border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-monauro-teal hover:bg-[#f9faf7]"
                  href={item.href}
                >
                  <div className="relative aspect-square bg-[#d8eef8]">
                    <Image
                      className="object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                      src={item.image}
                      alt={`${item.pain} body signal visual`}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm font-semibold uppercase text-monauro-orange">Problem</p>
                    <h3 className="mt-4 text-2xl font-semibold text-monauro-ink">{item.pain}</h3>
                    <p className="mt-4 text-sm leading-6 text-neutral-600">{item.solution}</p>
                    <span className="mt-auto pt-8 text-sm font-semibold text-monauro-orange transition group-hover:text-monauro-teal">
                      View matched product
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <div className="w-full">
          <SectionTitle
            eyebrow="Trust Signals"
            title="Clear policies before checkout."
            description="Only confirmed service policies are shown here. Reviews, certifications, and professional endorsements should be added after source materials are provided."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {trustPolicies.map((policy) => (
              <FadeIn key={policy.label}>
                <div className="h-full rounded-monauro border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-monauro-orange/70">
                  <p className="text-sm font-semibold uppercase text-monauro-orange">{policy.label}</p>
                  <p className="mt-4 text-sm leading-6 text-neutral-600">{policy.value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-14 rounded-monauro border border-black/10 bg-monauro-gray/45 p-8 text-center md:p-12">
            <h2 className="text-3xl font-semibold leading-tight text-monauro-ink md:text-5xl">
              Build a recovery setup without the clutter.
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/products">Shop All Devices</Button>
              <Button href="/recovery-solutions" variant="secondary">
                Find Your Recovery
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}