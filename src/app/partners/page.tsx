import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const partnerTypes = [
  ["Professionals", "Physiotherapists, trainers, and wellness professionals with verifiable credentials."],
  ["Creators", "Content partners who can show real routines without unsupported medical claims."],
  ["Retail / Distribution", "Regional retail, wholesale, and distribution opportunities for confirmed markets."]
];

export default function PartnersPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Partners"
        title="Build recovery education with credible collaborators."
        description="This page is ready for partner applications. Specific partners, endorsements, and case studies should be added only after source materials are verified."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {partnerTypes.map(([title, description]) => (
          <div className="rounded-monauro border border-black/10 bg-white p-6" key={title}>
            <p className="text-sm font-semibold uppercase text-monauro-orange">{title}</p>
            <p className="mt-5 text-sm leading-6 text-neutral-600">{description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-monauro border border-black/10 bg-monauro-gray/45 p-8">
        <h2 className="text-3xl font-semibold">Partner inquiry</h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600">
          For the demo stage, inquiries route to MONAURO support. A production form can later connect to Shopify, Klaviyo, HubSpot, or a custom backend.
        </p>
        <div className="mt-6">
          <Button href="mailto:info@monauro.com">Contact MONAURO</Button>
        </div>
      </div>
    </main>
  );
}
