import { SectionHeader } from "@/components/ui/section-header";

export default function AboutPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Brand Story"
        title="A quieter way to build daily recovery routines."
        description="MONAURO's full origin story, founder background, and company credentials should be added only from confirmed source materials."
      />
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-monauro border border-black/10 bg-white p-8">
          <p className="text-sm font-semibold uppercase text-monauro-orange">Current positioning</p>
          <p className="mt-5 text-2xl font-semibold leading-tight">
            MONAURO is being shaped as a recovery technology system, not a loose shelf of wellness devices.
          </p>
        </div>
        <div className="rounded-monauro border border-dashed border-black/15 bg-white p-8 text-neutral-600">
          Brand story content pending confirmed MONAURO source files. Please provide founder story, mission, product development notes, team information, and any verified company credentials before launch copy is finalized.
        </div>
      </div>
    </main>
  );
}
