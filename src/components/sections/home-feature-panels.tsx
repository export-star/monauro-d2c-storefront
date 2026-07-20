import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { getProductBySlug } from "@/data/products";

export function HomeFeaturePanels() {
  const calfPro = getProductBySlug("recoveryair-calf-pro");
  const backGun = getProductBySlug("back-massage-gun");
  const calfImage = calfPro?.images.find((image) => image.role === "hero") ?? calfPro?.images[0];
  const backImage = backGun?.images.find((image) => image.role === "hero") ?? backGun?.images[0];

  return (
    <section className="bg-white py-16">
      <div className="page-shell">
        <SectionHeader
          eyebrow="Start here"
          title="Choose a recovery path, then choose a device."
          description="This mirrors the proven D2C pattern of guiding shoppers by problem first, while keeping MONAURO's own recovery-system language."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="grid gap-5 rounded-monauro border border-black/10 bg-[#f7f7f4] p-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <Tag tone="green">Find your routine</Tag>
              <h3 className="mt-5 text-3xl font-semibold leading-tight">Not sure where to start?</h3>
              <p className="mt-4 text-sm leading-6 text-neutral-600">
                Answer one recovery question and get routed to the most relevant MONAURO device.
              </p>
              <div className="mt-6">
                <Button href="/recovery-solutions">Take the recovery quiz</Button>
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-monauro bg-white">
              {calfImage ? <Image className="object-contain p-5" src={calfImage.src} alt={calfImage.alt} fill sizes="(min-width: 1024px) 24vw, 100vw" /> : null}
            </div>
          </div>

          <div className="grid gap-5 rounded-monauro border border-black/10 bg-[#f7f7f4] p-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <Tag tone="purple">Desk-body reset</Tag>
              <h3 className="mt-5 text-3xl font-semibold leading-tight">Build an office recovery setup.</h3>
              <p className="mt-4 text-sm leading-6 text-neutral-600">
                Pair eye, back, and calf routines after long screen days. Bundle pricing still needs Shopify confirmation.
              </p>
              <div className="mt-6">
                <Button href="/products" variant="secondary">Shop devices</Button>
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-monauro bg-white">
              {backImage ? <Image className="object-contain p-5" src={backImage.src} alt={backImage.alt} fill sizes="(min-width: 1024px) 24vw, 100vw" /> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
