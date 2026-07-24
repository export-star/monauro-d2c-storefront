import type { ConfirmationStatus } from "./content";

export type ProductFeature = {
  title: string;
  description: string;
  status: ConfirmationStatus;
};

export type ProductSpec = {
  label: string;
  value: string;
  status: ConfirmationStatus;
};

export type ProductImage = {
  src: string;
  alt: string;
  role: "hero" | "gallery" | "detail" | "lifestyle" | "routine";
};

export type Product = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: string;
  priceStatus: ConfirmationStatus;
  shopifyHandle: string;
  imageAlt: string;
  images: ProductImage[];
  primaryUseCases: string[];
  features: ProductFeature[];
  specs: ProductSpec[];
};
