import { SectionHeader } from "@/components/ui/section-header";

export default function TermsDisclaimerPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Terms & Disclaimer"
        title="Terms and wellness disclaimer."
        description="MONAURO content supports product education and daily wellness routines while keeping medical boundaries clear."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-monauro border border-black/10 bg-white p-6">
          <p className="text-sm font-semibold uppercase text-monauro-orange">Wellness boundary</p>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            MONAURO content supports education and product discovery. It should not replace professional medical advice, diagnosis, or treatment.
          </p>
        </div>
        <div className="rounded-monauro border border-black/10 bg-white p-6">
          <p className="text-sm font-semibold uppercase text-monauro-orange">Customer terms</p>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            Purchase, usage, return, warranty, website, dispute, and regional legal terms should follow the final storefront policy setup.
          </p>
        </div>
      </div>
    </main>
  );
}