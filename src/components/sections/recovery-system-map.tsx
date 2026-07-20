import { recoverySystemMap } from "@/data/recovery-solutions";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";

export function RecoverySystemMap() {
  return (
    <section className="bg-white py-16">
      <div className="page-shell">
        <SectionHeader
          eyebrow="System map"
          title="From eyes to legs, build your recovery routine."
          description="MONAURO can express a full-body recovery ecosystem while keeping each product claim tied to confirmed data."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {recoverySystemMap.map((item) => (
            <div className="rounded-monauro border border-black/10 bg-[#f7f7f4] p-5" key={item.bodyArea}>
              <p className="text-sm font-bold uppercase text-neutral-500">{item.bodyArea}</p>
              <p className="mt-4 min-h-12 text-lg font-semibold">{item.product}</p>
              <div className="mt-5">
                <Tag tone={item.status === "confirmed" ? "green" : "orange"}>
                  {item.status === "confirmed" ? "Product exists" : "To be confirmed"}
                </Tag>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
