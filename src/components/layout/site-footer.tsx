import Image from "next/image";
import Link from "next/link";
import { mainNavigation, utilityNavigation } from "@/data/navigation";

const policyLinks = [
  { label: "Shipping & Returns", href: "/shipping-returns" },
  { label: "Warranty", href: "/warranty" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Disclaimer", href: "/terms-disclaimer" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white text-monauro-ink">
      <div className="grid page-shell gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.85fr_0.8fr_1fr]">
        <div>
          <Image
            className="h-10 w-auto object-contain"
            src="/images/brand/monauro-logo-horizontal.png"
            alt="MONAURO"
            width={128}
            height={72}
          />
          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-600">
            Demo site for a recovery technology system. Product claims, policies, reviews, and certifications must be confirmed before launch.
          </p>
        </div>
        <div>
          <p className="font-semibold">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-neutral-600">
            {mainNavigation.map((item) => (
              <Link className="transition hover:text-monauro-orange" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Company & Help</p>
          <div className="mt-4 grid gap-2 text-sm text-neutral-600">
            {utilityNavigation.map((item) => (
              <Link className="transition hover:text-monauro-orange" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Policies</p>
          <div className="mt-4 grid gap-2 text-sm text-neutral-600">
            {policyLinks.map((item) => (
              <Link className="transition hover:text-monauro-orange" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Compliance note</p>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            MONAURO content should support education and product discovery. It should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
