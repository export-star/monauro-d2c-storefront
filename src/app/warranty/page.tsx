import { SectionHeader } from "@/components/ui/section-header";

export default function WarrantyPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Warranty"
        title="365-day warranty support."
        description="The warranty period is confirmed as 365 days. Detailed warranty exclusions, claim steps, and regional handling rules should be finalized before production launch."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Coverage period", "365 days from the applicable purchase record, subject to final production policy wording."],
          ["Support email", "Warranty questions can be directed to info@monauro.com."],
          ["Production requirement", "Add warranty claim workflow, proof-of-purchase rules, and Shopify order lookup before launch."]
        ].map(([title, body]) => (
          <div className="rounded-monauro border border-black/10 bg-white p-6" key={title}>
            <p className="text-sm font-semibold uppercase text-monauro-orange">{title}</p>
            <p className="mt-4 text-sm leading-6 text-neutral-600">{body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
