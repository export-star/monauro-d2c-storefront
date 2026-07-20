import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeader({ eyebrow, title, description, action }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? <p className="mb-3 text-xs font-bold uppercase text-neutral-500">{eyebrow}</p> : null}
        <h2 className="text-3xl font-semibold leading-tight text-monauro-ink md:text-5xl">{title}</h2>
        {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
