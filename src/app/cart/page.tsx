import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { products } from "@/data/products";

export default function CartPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="page-shell py-16">
          <Tag tone="orange">Demo cart</Tag>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">Cart is ready for Shopify connection.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            This demo keeps the cart visible in navigation while product handles, variant IDs, bundle rules, and checkout settings are finalized in Shopify.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/products">Shop all devices</Button>
            <Button href="/support" variant="secondary">
              Ask a Specialist
            </Button>
          </div>
        </div>
      </section>

      <section className="page-shell py-16">
        <SectionHeader
          eyebrow="Checkout requirements"
          title="What needs to be connected before live checkout."
          description="No product purchase is simulated as real checkout until Shopify data is supplied."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Product handles", "Shopify product URLs or handles for all four products."],
            ["Variant IDs", "Color and bundle variant IDs for add-to-cart links."],
            ["Bundle rules", "Pair Kit and recovery kit discounts, inventory, and quantity logic."],
            ["Checkout settings", "Markets, shipping, taxes, payment methods, and policy pages."]
          ].map(([title, body]) => (
            <div className="rounded-monauro border border-black/10 bg-white p-5" key={title}>
              <p className="text-lg font-semibold">{title}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="page-shell">
          <SectionHeader eyebrow="Current products" title="Continue shopping." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link className="rounded-monauro border border-black/10 bg-[#f7f7f4] p-5 transition hover:-translate-y-1 hover:border-black/25" href={`/products/${product.slug}`} key={product.slug}>
                <Tag tone="purple">{product.primaryUseCases[0]}</Tag>
                <h2 className="mt-5 text-xl font-semibold">{product.name}</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{product.tagline}</p>
                <p className="mt-4 text-sm font-bold text-monauro-orange">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
