import { SectionHeader } from "@/components/ui/section-header";

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Privacy Policy"
        title="Privacy and customer data."
        description="MONAURO should explain how customer data is collected, used, protected, and supported across the storefront experience."
      />
      <div className="rounded-monauro border border-black/10 bg-white p-8 text-sm leading-7 text-neutral-600">
        This policy area should cover storefront data collection, checkout tools, analytics, email marketing, cookies, retention, and customer support requests according to the final Shopify setup and regional compliance requirements.
      </div>
    </main>
  );
}