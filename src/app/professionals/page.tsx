import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";

export default function ProfessionalsPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Professionals"
        title="Expert notes, coach reviews, and partner proof."
        description="Names, quotes, titles, clinics, KOL content, and images require permission or source files before publication."
      />
      <div className="rounded-monauro border border-black/10 bg-white p-8">
        <Tag tone="orange">To be confirmed</Tag>
        <p className="mt-5 text-neutral-600">Professional endorsement content is intentionally empty until real proof is supplied.</p>
      </div>
    </main>
  );
}
