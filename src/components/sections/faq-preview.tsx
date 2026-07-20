import { homepageFaqs } from "@/data/faqs";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeader } from "@/components/ui/section-header";

export function FaqPreview() {
  return (
    <section className="page-shell py-16">
      <SectionHeader
        eyebrow="FAQ"
        title="Answer buying concerns before they become drop-off points."
        description="Safety, usage, policy, and checkout answers should be sourced from product manuals and MONAURO policies."
      />
      <FaqAccordion items={homepageFaqs} />
    </section>
  );
}
