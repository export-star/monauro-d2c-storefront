import type { FaqItem } from "@/types/content";
import { Tag } from "./tag";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="divide-y divide-black/10 rounded-monauro border border-black/10 bg-white">
      {items.map((item) => (
        <details className="group p-5" key={item.question}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold">
            {item.question}
            <span className="text-xl leading-none transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-neutral-600">{item.answer}</p>
          {item.status === "to_confirm" ? (
            <div className="mt-4">
              <Tag tone="orange">To be confirmed</Tag>
            </div>
          ) : null}
        </details>
      ))}
    </div>
  );
}
