"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { mainNavigation, productNavigation, utilityNavigation } from "@/data/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href.includes("#")) {
      return pathname === href.split("#")[0];
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f4]/95 text-monauro-ink backdrop-blur">
      <div className="bg-monauro-ink px-5 py-2 text-center text-xs font-semibold text-white">
        Free shipping to Europe, the United States, and Southeast Asia. 30-day returns and 365-day warranty.
      </div>
      <div className="flex page-shell items-center justify-between gap-5 py-4">
        <Link className="shrink-0 text-lg font-black tracking-normal" href="/">
          MONAURO
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-5 text-sm font-medium text-neutral-700 lg:flex" aria-label="Main navigation">
          {mainNavigation.map((item) => (
            <Link className={`transition hover:text-black ${isActive(item.href) ? "text-black" : ""}`} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <Link className={`text-sm font-semibold transition hover:text-black ${isActive("/search") ? "text-black" : "text-neutral-700"}`} href="/search">
            Search
          </Link>
          <Link className={`text-sm font-semibold transition hover:text-black ${isActive("/cart") ? "text-black" : "text-neutral-700"}`} href="/cart">
            Cart
          </Link>
          <Button href="/recovery-solutions">Find Your Recovery</Button>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          className="inline-flex min-h-11 items-center justify-center rounded-monauro border border-black/15 bg-white px-4 text-sm font-semibold lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          Menu
        </button>
      </div>

      {isMenuOpen ? (
        <nav id="mobile-navigation" className="border-t border-black/10 bg-white px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1">
            {mainNavigation.map((item) => (
              <Link
                className={`rounded-monauro px-3 py-3 text-sm font-semibold ${isActive(item.href) ? "bg-[#f7f7f4] text-monauro-orange" : "text-monauro-ink"}`}
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 border-t border-black/10 pt-4">
            <p className="px-3 text-xs font-semibold uppercase text-neutral-500">Products</p>
            <div className="mt-2 grid gap-1">
              {productNavigation.map((item) => (
                <Link
                  className={`rounded-monauro px-3 py-2 text-sm font-semibold ${isActive(item.href) ? "bg-[#f7f7f4] text-monauro-orange" : "text-neutral-700"}`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 border-t border-black/10 pt-4">
            <p className="px-3 text-xs font-semibold uppercase text-neutral-500">Help</p>
            <div className="mt-2 grid gap-1">
              {utilityNavigation.map((item) => (
                <Link
                  className={`rounded-monauro px-3 py-2 text-sm font-semibold ${isActive(item.href) ? "bg-[#f7f7f4] text-monauro-orange" : "text-neutral-700"}`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button href="/search" variant="secondary">Search</Button>
            <Button href="/cart" variant="secondary">Cart</Button>
          </div>
          <div className="mt-3">
            <Button href="/recovery-solutions">Find Your Recovery</Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
