import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-monauro-teal text-monauro-ink hover:bg-black hover:text-white",
  secondary: "bg-monauro-orange text-white hover:bg-black",
  ghost: "text-inherit underline-offset-4 hover:underline"
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center rounded-monauro px-5 py-3 text-sm font-semibold transition ${variants[variant]}`}
      href={href}
    >
      {children}
    </Link>
  );
}
