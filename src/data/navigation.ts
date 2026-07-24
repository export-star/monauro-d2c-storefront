import type { NavigationItem } from "@/types/content";

export const mainNavigation: NavigationItem[] = [
  { label: "Shop", href: "/products" },
  { label: "Recovery Solutions", href: "/recovery-solutions" },
  { label: "Library", href: "/" },
  { label: "Professionals", href: "/" }
];

export const utilityNavigation: NavigationItem[] = [
  { label: "Brand Story", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Order Tracking", href: "/order-tracking" },
  { label: "Support", href: "/support" },
  { label: "FAQ", href: "/faq" }
];

export const productNavigation: NavigationItem[] = [
  { label: "Calf Pro", href: "/products/recoveryair-calf-pro" },
  { label: "Leg Elite", href: "/products/recoveryair-leg-elite" },
  { label: "Eye Mask", href: "/products/relaxiwave-eye-mask" },
  { label: "Massage Gun", href: "/products/back-massage-gun" }
];
