import { SectionHeader } from "@/components/ui/section-header";

export default function AboutPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Brand Story"
        title="A quieter way to build daily recovery routines."
        description="MONAURO is shaped around compact recovery technology, calm product rituals, and body-area routines for everyday wellness."
      />
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-monauro border border-black/10 bg-white p-8">
          <p className="text-sm font-semibold uppercase text-monauro-orange">Current positioning</p>
          <p className="mt-5 text-2xl font-semibold leading-tight">
            MONAURO is being shaped as a recovery technology system, not a loose shelf of wellness devices.
          </p>
        </div>
        <div className="rounded-monauro border border-black/10 bg-white p-8 text-neutral-600">
          Brand story details can be expanded with approved founder story, mission, product development notes, team information, and verified company credentials.
        </div>
      </div>
    </main>
  );
}