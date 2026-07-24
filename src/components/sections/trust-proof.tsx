import { trustPolicies } from "@/data/policies";
import { SectionHeader } from "@/components/ui/section-header";

export function TrustProof() {
  return (
    <section className="page-shell py-16">
      <SectionHeader
        eyebrow="Trust proof"
        title="Bring confidence forward before checkout."
        description="Free shipping, 30-day returns, 365-day warranty, and broad regional delivery reduce buying friction before checkout."
      />
      <div className="grid gap-4 md:grid-cols-4">
        {trustPolicies.map((policy) => (
          <div className="rounded-monauro border border-black/10 bg-white p-5" key={policy.label}>
            <p className="text-lg font-semibold">{policy.label}</p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{policy.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}