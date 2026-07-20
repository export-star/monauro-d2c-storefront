import { RecoveryLibraryPreview } from "@/components/sections/recovery-library-preview";
import { SectionHeader } from "@/components/ui/section-header";

export default function RecoveryLibraryPage() {
  return (
    <main>
      <section className="page-shell py-16">
        <SectionHeader
          eyebrow="Recovery Library"
          title="Education that prepares users to choose."
          description="Article drafts require sources, professional review boundaries, and related product paths before launch."
        />
      </section>
      <RecoveryLibraryPreview />
    </main>
  );
}
