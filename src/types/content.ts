export type ConfirmationStatus = "confirmed" | "to_confirm";

export type Cta = {
  label: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  status: ConfirmationStatus;
};

export type Article = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  sourceRequired: boolean;
};
