import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { getProductBySlug } from "@/data/products";

export function FlagshipRoutine() {
  const calfPro = getProductBySlug("recoveryair-calf-pro");
  const image = calfPro?.images.find((productImage) => productImage.role === "hero") ?? calfPro?.images[0];

  return (
    <section className="page-shell py-16">
      <div className="grid gap-8 rounded-monauro border border-black/10 bg-white p-5 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden rounded-monauro bg-[#f3f3ef]">
          {image ? <Image className="object-contain p-5" src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" /> : null}
        </div>
        <div>
          <Tag tone="green">Flagship routine</Tag>
          <SectionHeader
            title="The 15-Minute Leg Reset Button."
            description="RecoveryAir Calf Pro is the first page to receive the stronger Chirp-inspired landing-page treatment: pain moment, simple science, protocol, comparison, and buying options."
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {["Heavy legs", "Calf tightness", "Post-workout routine"].map((item) => (
              <div className="rounded-monauro border border-black/10 bg-[#f7f7f4] p-4 text-sm font-semibold" key={item}>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/products/recoveryair-calf-pro">Explore Calf Pro</Button>
            <Button href="/products" variant="secondary">
              Shop all devices
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
