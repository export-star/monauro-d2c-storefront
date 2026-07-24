import Link from "next/link";
import Image from "next/image";
import { productMatrixImages } from "@/data/product-matrix-images";
import type { Product } from "@/types/product";
import { Tag } from "@/components/ui/tag";

type ProductCardProps = {
  product: Product;
};


export function ProductCard({ product }: ProductCardProps) {
  const cardImage = product.images.find((image) => image.role === "hero" && !/\.(mp4|webm|mov)$/i.test(image.src)) ?? product.images.find((image) => !/\.(mp4|webm|mov)$/i.test(image.src));
  const productMatrixImage = productMatrixImages[product.slug];

  return (
    <Link className="rounded-monauro border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:border-black/25" href={`/products/${product.slug}`}>
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-monauro border border-black/10 bg-[#d8eef8] text-center text-sm text-neutral-500">
        {productMatrixImage ? (
          <Image className="object-contain p-3" src={productMatrixImage} alt={`${product.name} product matrix image`} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
        ) : cardImage ? (
          <Image className="object-contain p-3" src={cardImage.src} alt={cardImage.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
        ) : (
          product.name
        )}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {product.primaryUseCases.slice(0, 2).map((useCase) => (
          <Tag key={useCase} tone="purple">
            {useCase}
          </Tag>
        ))}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{product.tagline}</p>
    </Link>
  );
}
