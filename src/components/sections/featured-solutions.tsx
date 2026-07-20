import { products } from "@/data/products";
import { ProductCard } from "@/components/commerce/product-card";
import { SectionHeader } from "@/components/ui/section-header";

export function FeaturedSolutions() {
  return (
    <section className="page-shell py-16">
      <SectionHeader
        eyebrow="Best sellers"
        title="Shop MONAURO recovery devices."
        description="Browse the current four-device lineup. Bundle pricing and Shopify collection rules still need production confirmation."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
