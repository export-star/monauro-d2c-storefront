import { SectionHeader } from "@/components/ui/section-header";

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Privacy Policy"
        title="Privacy policy draft placeholder."
        description="This page is a production placeholder. Final privacy policy language must be reviewed against Shopify, analytics, email marketing, cookie, and regional compliance settings."
      />
      <div className="rounded-monauro border border-dashed border-black/15 bg-white p-8 text-sm leading-7 text-neutral-600">
        Before launch, confirm what personal data MONAURO collects, why it is collected, which tools process it, how long it is stored, and how customers can request support. Do not publish this placeholder as final legal policy.
      </div>
    </main>
  );
}
