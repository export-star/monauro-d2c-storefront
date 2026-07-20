import Link from "next/link";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";

export function RecoveryLibraryPreview() {
  return (
    <section className="bg-white py-16">
      <div className="page-shell">
        <SectionHeader
          eyebrow="Recovery Library"
          title="Turn education into a purchase-ready path."
          description="Each guide needs sources or professional review before publication."
          action={<Button href="/recovery-library" variant="secondary">View library</Button>}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <Link className="rounded-monauro border border-black/10 bg-[#f7f7f4] p-6" href="/recovery-library" key={article.slug}>
              <Tag tone="green">{article.category}</Tag>
              <h3 className="mt-5 text-xl font-semibold">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{article.excerpt}</p>
              {article.sourceRequired ? <p className="mt-5 text-xs font-bold uppercase text-monauro-orange">Source required</p> : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
