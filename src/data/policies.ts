import type { PolicyItem } from "@/types/policy";

export const trustPolicies: PolicyItem[] = [
  { label: "Free Shipping", value: "Free shipping to Europe, the United States, and Southeast Asia.", status: "confirmed" },
  { label: "Delivery", value: "Estimated delivery time: 3-10 days.", status: "confirmed" },
  { label: "30-Day Returns", value: "Returns and exchanges are available within 30 days.", status: "confirmed" },
  { label: "365-Day Warranty", value: "Warranty period: 365 days.", status: "confirmed" }
];

export const checkoutPolicies: PolicyItem[] = [
  { label: "Support email", value: "info@monauro.com", status: "confirmed" },
  { label: "Discount code", value: "No discount code is currently available.", status: "confirmed" },
  { label: "Payment methods", value: "Visa, Mastercard, American Express, PayPal, Diners Club, Discover.", status: "confirmed" }
];
