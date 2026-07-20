import Link from "next/link";
import { articles } from "@/data/articles";
import { products } from "@/data/products";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim().toLowerCase() ?? "";
  const productResults = query
    ? products.filter((product) =>
        [product.name, product.tagline, product.description, ...product.primaryUseCases].join(" ").toLowerCase().includes(query)
      )
    : products;
  const articleResults = query
    ? articles.filter((article) => [article.title, article.category, article.excerpt].join(" ").toLowerCase().includes(query))
    : articles;

  return (
    <main>
      <section className="bg-white">
        <div className="page-shell py-16">
          <Tag tone="green">Search MONAURO</Tag>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">Find products, routines, and recovery guides.</h1>
          <form className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row" action="/search">
            <input
              className="min-h-12 flex-1 rounded-monauro border border-black/15 bg-white px-4 text-base outline-none focus:border-monauro-orange"
              defaultValue={q ?? ""}
              name="q"
              placeholder="Search heavy legs, eye mask, massage gun..."
              type="search"
            />
            <button className="min-h-12 rounded-monauro bg-monauro-orange px-6 text-sm font-semibold text-white transition hover:bg-black" type="submit">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="page-shell py-16">
        <SectionHeader
          eyebrow="Product results"
          title={query ? `Results for "${q}"` : "Popular product paths"}
          description="Search uses confirmed product data and current recovery categories."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {productResults.map((product) => (
            <Link className="rounded-monauro border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:border-black/25" href={`/products/${product.slug}`} key={product.slug}>
              <Tag tone="purple">{product.primaryUseCases[0]}</Tag>
              <h2 className="mt-5 text-xl font-semibold">{product.name}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{product.tagline}</p>
              <p className="mt-4 text-sm font-bold text-monauro-orange">{product.price}</p>
            </Link>
          ))}
        </div>
        {productResults.length === 0 ? <p className="text-neutral-600">No product results yet. Try another recovery topic.</p> : null}
      </section>

      <section className="bg-white py-16">
        <div className="page-shell">
          <SectionHeader eyebrow="Library results" title="Education paths" description="Draft guide topics remain source-required before production publishing." />
          <div className="grid gap-4 md:grid-cols-3">
            {articleResults.map((article) => (
              <Link className="rounded-monauro border border-black/10 bg-[#f7f7f4] p-5" href="/recovery-library" key={article.slug}>
                <Tag tone="green">{article.category}</Tag>
                <h2 className="mt-5 text-xl font-semibold">{article.title}</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{article.excerpt}</p>
              </Link>
            ))}
          </div>
          {articleResults.length === 0 ? <p className="text-neutral-600">No guide results yet.</p> : null}
        </div>
      </section>
    </main>
  );
}
