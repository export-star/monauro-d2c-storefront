import Link from "next/link";
import { ProductCard } from "@/components/commerce/product-card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { products } from "@/data/products";

const shopFilters = [
  "Eyes",
  "Back",
  "Calves",
  "Full Legs",
  "In stock"
];

export default function ProductsPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="page-shell py-16">
          <Tag tone="green">Shop all devices</Tag>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">Shop MONAURO Recovery Devices</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                Browse the current MONAURO product line by body area and recovery routine. Each product page keeps confirmed specifications separate from details that still need manuals or Shopify data.
              </p>
            </div>
            <div className="rounded-monauro border border-black/10 bg-[#f7f7f4] p-5">
              <p className="text-sm font-bold uppercase text-neutral-500">Store policies</p>
              <div className="mt-4 grid gap-3 text-sm text-neutral-700 sm:grid-cols-3 lg:grid-cols-1">
                <p>
                  <span className="font-semibold text-monauro-ink">Free shipping</span>
                  <br />
                  EU, US, Southeast Asia
                </p>
                <p>
                  <span className="font-semibold text-monauro-ink">30-day returns</span>
                  <br />
                  Returns and exchanges
                </p>
                <p>
                  <span className="font-semibold text-monauro-ink">365-day warranty</span>
                  <br />
                  Product warranty
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {shopFilters.map((filter) => (
              <Tag key={filter} tone={filter === "In stock" ? "green" : "purple"}>
                {filter}
              </Tag>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-16">
        <SectionHeader
          eyebrow="Current line"
          title="Four products, one recovery system."
          description="Product cards use confirmed prices and route into the full product detail pages."
          action={<Button href="/recovery-solutions" variant="secondary">Find by routine</Button>}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="page-shell">
          <SectionHeader
            eyebrow="Buying path"
            title="Shop by body area."
            description="This structure can later connect directly to Shopify collections, filters, and inventory status."
          />
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["Eyes", "RelaxiWave Eye Mask", "/products/relaxiwave-eye-mask"],
              ["Back / Body", "Back Massage Gun", "/products/back-massage-gun"],
              ["Calves", "RecoveryAir Calf Pro", "/products/recoveryair-calf-pro"],
              ["Full Legs", "RecoveryAir Leg Elite", "/products/recoveryair-leg-elite"]
            ].map(([area, product, href]) => (
              <Link className="rounded-monauro border border-black/10 bg-[#f7f7f4] p-5 transition hover:-translate-y-1 hover:border-monauro-green" href={href} key={area}>
                <p className="text-sm font-bold uppercase text-neutral-500">{area}</p>
                <p className="mt-4 text-lg font-semibold">{product}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
