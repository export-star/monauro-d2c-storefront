import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";

const mechanisms = [
  {
    title: "Heat",
    body: "Designed to make everyday tightness feel easier to settle into a short routine."
  },
  {
    title: "Compression",
    body: "Adds rhythmic pressure patterns to help users structure recovery after long days."
  },
  {
    title: "EMS / Vibration",
    body: "Supports different product routines across legs, eyes, and body relaxation devices."
  },
  {
    title: "Routine-Based Recovery",
    body: "Connects product usage to daily mobility, workdays, travel, and post-workout habits."
  }
];

export function HowItWorks() {
  return (
    <section className="bg-monauro-ink py-16 text-white">
      <div className="page-shell">
        <SectionHeader
          eyebrow="Simple science"
          title="Why ordinary massage is not always enough."
          description="MONAURO explains recovery in plain language: heat, compression, EMS or vibration, and short routines that fit real days."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {mechanisms.map((mechanism) => (
            <div className="rounded-monauro border border-white/15 bg-white/5 p-5" key={mechanism.title}>
              <Tag tone="green">Plain-language mechanism</Tag>
              <h3 className="mt-5 text-xl font-semibold">{mechanism.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{mechanism.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
