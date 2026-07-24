import { SectionHeader } from "@/components/ui/section-header";

export default function WarrantyPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Warranty"
        title="365-day warranty support."
        description="MONAURO products include 365-day warranty support. Keep your order information ready when contacting customer service."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Coverage period", "365 days from the applicable purchase record."],
          ["Support email", "Warranty questions can be directed to info@monauro.com."],
          ["Order records", "Warranty requests should include order details and product information for faster support."]
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