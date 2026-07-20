import { ProblemNavigation } from "@/components/sections/problem-navigation";
import { RecoveryQuiz } from "@/components/sections/recovery-quiz";
import { SectionHeader } from "@/components/ui/section-header";

export default function RecoverySolutionsPage() {
  return (
    <main>
      <section className="page-shell py-16">
        <SectionHeader
          eyebrow="Recovery Solutions"
          title="Start with the fatigue pattern, then choose the right recovery path."
          description="This hub turns the MONAURO homepage strategy into a usable recommendation flow for heavy legs, tired eyes, back tension, full-leg recovery, and travel routines."
        />
      </section>
      <RecoveryQuiz />
      <ProblemNavigation />
    </main>
  );
}
