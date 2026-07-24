import type { ProductSpec } from "@/types/product";

type ProductSpecTableProps = {
  specs: ProductSpec[];
};

export function ProductSpecTable({ specs }: ProductSpecTableProps) {
  return (
    <div className="overflow-hidden rounded-monauro border border-black/10 bg-white">
      {specs.map((spec) => (
        <div className="grid gap-2 border-b border-black/10 p-5 last:border-b-0 md:grid-cols-[220px_1fr]" key={spec.label}>
          <p className="font-semibold">{spec.label}</p>
          <p className="text-neutral-600">{spec.value}</p>
        </div>
      ))}
    </div>
  );
}