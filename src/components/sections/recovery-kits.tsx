import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const kits = [
  {
    title: "Office Reset Kit",
    body: "Eye relaxation plus body recovery for screen-heavy desk days.",
    products: "RelaxiWave Eye Mask + Back Massage Gun"
  },
  {
    title: "Runner Recovery Kit",
    body: "Lower-leg and body relaxation after training.",
    products: "RecoveryAir Calf Pro + Back Massage Gun"
  },
  {
    title: "Full Leg Recovery Kit",
    body: "A broader lower-body routine for active days and travel.",
    products: "RecoveryAir Calf Pro + RecoveryAir Leg Elite"
  },
  {
    title: "Digital Fatigue Kit",
    body: "A calmer recovery path for eyes, desk posture, and evening decompression.",
    products: "RelaxiWave Eye Mask + Back Massage Gun"
  }
];

export function RecoveryKits() {
  return (
    <section className="bg-white py-16">
      <div className="page-shell">
        <SectionHeader
          eyebrow="Recovery kits"
          title="Sell recovery systems, not loose products."
          description="Suggested pairings help shoppers understand how different devices can support eyes, legs, back, and daily recovery routines."
          action={<Button href="/products" variant="secondary">Shop single devices</Button>}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kits.map((kit) => (
            <div className="rounded-monauro border border-dashed border-black/20 bg-[#f7f7f4] p-5" key={kit.title}>
              <h3 className="text-xl font-semibold">{kit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{kit.body}</p>
              <p className="mt-5 text-sm font-semibold text-monauro-ink">{kit.products}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}