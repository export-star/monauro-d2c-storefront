import { RecoveryLibraryPreview } from "@/components/sections/recovery-library-preview";
import { SectionHeader } from "@/components/ui/section-header";

export default function RecoveryLibraryPage() {
  return (
    <main>
      <section className="page-shell py-16">
        <SectionHeader
          eyebrow="Recovery Library"
          title="Education that prepares users to choose."
          description="Recovery articles can connect body signals, daily routines, and related MONAURO product paths with conservative wellness language."
        />
      </section>
      <RecoveryLibraryPreview />
    </main>
  );
}