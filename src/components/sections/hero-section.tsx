import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { getProductBySlug } from "@/data/products";

export function HeroSection() {
  const calfPro = getProductBySlug("recoveryair-calf-pro");
  const heroImage = calfPro?.images.find((image) => image.src.includes("main-06")) ?? calfPro?.images.find((image) => image.role === "hero") ?? calfPro?.images[0];

  return (
    <section className="overflow-hidden bg-[#f7f7f4]">
      <div className="grid page-shell items-center gap-8 py-10 lg:min-h-[640px] lg:grid-cols-[0.82fr_1.18fr] lg:py-12">
        <div className="relative z-10 max-w-xl">
          <Tag tone="green">Flagship recovery system</Tag>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.98] text-monauro-ink md:text-7xl">
            Recovery that fits real days.
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-700">
            Start with RecoveryAir Calf Pro, then build a MONAURO routine for heavy legs, screen fatigue, back tension, and travel days.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/products/recoveryair-calf-pro">Shop Calf Pro</Button>
            <Button href="/products" variant="secondary">
              Shop All Devices
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-y border-black/10 py-5">
            {[
              ["Free", "shipping"],
              ["30-day", "returns"],
              ["1-year", "warranty"]
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-lg font-semibold leading-none">{value}</p>
                <p className="mt-1 text-xs uppercase text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-x-10 top-10 h-64 rounded-full bg-monauro-green/35 blur-3xl" />
          <Link
            className="group relative block overflow-hidden rounded-monauro bg-white shadow-[0_24px_80px_rgba(23,23,23,0.08)]"
            href="/products/recoveryair-calf-pro"
          >
            <div className="relative min-h-[420px] sm:min-h-[590px]">
              {heroImage ? (
                <Image
                  className="object-contain p-5 transition duration-300 group-hover:scale-[1.025] sm:p-8"
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
              ) : null}
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-monauro border border-black/10 bg-white/88 p-4 backdrop-blur">
              <div>
                <p className="text-sm font-semibold">{calfPro?.name}</p>
                <p className="mt-1 text-xs text-neutral-500">Air compression + heated surface support</p>
              </div>
              <p className="text-sm font-bold text-monauro-orange">{calfPro?.price}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
