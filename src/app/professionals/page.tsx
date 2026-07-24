import { SectionHeader } from "@/components/ui/section-header";

export default function ProfessionalsPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Professionals"
        title="Expert notes, coach reviews, and partner proof."
        description="Names, quotes, titles, clinics, KOL content, and images require permission or source files before publication."
      />
      <div className="rounded-monauro border border-black/10 bg-white p-8">
        <p className="text-neutral-600">Professional notes, partner interviews, and approved expert content can be added here as the brand library grows.</p>
      </div>
    </main>
  );
}