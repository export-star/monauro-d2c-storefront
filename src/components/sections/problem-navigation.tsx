import Link from "next/link";
import { recoverySolutions } from "@/data/recovery-solutions";
import { SectionHeader } from "@/components/ui/section-header";

export function ProblemNavigation() {
  return (
    <section className="page-shell py-16">
      <SectionHeader
        eyebrow="Problem first"
        title="What needs recovery today?"
        description="Start with the fatigue pattern. The site can then guide users toward a solution, product, guide, or FAQ instead of forcing them to decode product names."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recoverySolutions.map((solution) => (
          <Link
            className="rounded-monauro border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-black/25"
            href={`/products/${solution.recommendedProductSlug}`}
            key={solution.slug}
          >
            <p className="text-xl font-semibold">{solution.title}</p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{solution.description}</p>
            <p className="mt-5 text-sm font-bold text-monauro-orange">Explore solution</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
