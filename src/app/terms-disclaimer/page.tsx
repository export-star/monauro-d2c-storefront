import { SectionHeader } from "@/components/ui/section-header";

export default function TermsDisclaimerPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Terms & Disclaimer"
        title="Terms and wellness disclaimer placeholder."
        description="This page keeps the current compliance boundary visible while final terms of service and legal disclaimer language are prepared."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-monauro border border-black/10 bg-white p-6">
          <p className="text-sm font-semibold uppercase text-monauro-orange">Wellness boundary</p>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            MONAURO content supports education and product discovery. It should not replace professional medical advice, diagnosis, or treatment.
          </p>
        </div>
        <div className="rounded-monauro border border-dashed border-black/15 bg-white p-6">
          <p className="text-sm font-semibold uppercase text-monauro-orange">Production requirement</p>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            Final terms should cover purchases, usage, returns, warranty boundaries, website use, dispute process, and regional legal requirements.
          </p>
        </div>
      </div>
    </main>
  );
}
