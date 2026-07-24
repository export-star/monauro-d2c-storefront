import { SectionHeader } from "@/components/ui/section-header";

const shippingItems = [
  ["Shipping regions", "Free shipping is available for Europe, the United States, and Southeast Asia."],
  ["Estimated delivery", "Estimated delivery time is 3-10 days."],
  ["Returns and exchanges", "Returns and exchanges are available within 30 days."],
  ["Support contact", "For shipping or return questions, contact info@monauro.com."]
];

export default function ShippingReturnsPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Shipping & Returns"
        title="Clear delivery and return basics."
        description="Shipping, return, and support basics are organized for quick reference before checkout."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {shippingItems.map(([title, body]) => (
          <div className="rounded-monauro border border-black/10 bg-white p-6" key={title}>
            <p className="text-sm font-semibold uppercase text-monauro-orange">{title}</p>
            <p className="mt-4 text-sm leading-6 text-neutral-600">{body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}