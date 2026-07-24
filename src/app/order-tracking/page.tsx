import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export default function OrderTrackingPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Order Tracking"
        title="Track your MONAURO order."
        description="Use your order number and email to prepare a tracking request with MONAURO support."
      />
      <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr]">
        <form className="rounded-monauro border border-black/10 bg-white p-6">
          <label className="text-sm font-semibold" htmlFor="order-number">
            Order number
          </label>
          <input
            className="mt-2 w-full rounded-monauro border border-black/15 bg-[#f7f7f4] px-4 py-3 text-sm outline-none focus:border-monauro-teal"
            id="order-number"
            name="order-number"
            placeholder="Example: MONAURO-1001"
            type="text"
          />
          <label className="mt-5 block text-sm font-semibold" htmlFor="email">
            Email address
          </label>
          <input
            className="mt-2 w-full rounded-monauro border border-black/15 bg-[#f7f7f4] px-4 py-3 text-sm outline-none focus:border-monauro-teal"
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
          />
          <div className="mt-6">
            <Button href="/support">Contact Support</Button>
          </div>
        </form>
        <div className="rounded-monauro border border-black/10 bg-monauro-gray/45 p-6">
          <p className="text-sm font-semibold uppercase text-monauro-orange">Current shipping policy</p>
          <div className="mt-5 grid gap-3 text-sm leading-6 text-neutral-700">
            <p>Free shipping to Europe, the United States, and Southeast Asia.</p>
            <p>Estimated delivery time: 3-10 days.</p>
            <p>For support, contact info@monauro.com.</p>
          </div>
        </div>
      </div>
    </main>
  );
}