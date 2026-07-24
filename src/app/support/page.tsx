import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { supportFaqs } from "@/data/faqs";
import { checkoutPolicies, trustPolicies } from "@/data/policies";

const supportPaths = [
  ["Track an order", "Prepare your order number and email so support can help with delivery status.", "/order-tracking"],
  ["Shipping or returns", "Review shipping regions, delivery estimates, and the 30-day return or exchange window.", "/shipping-returns"],
  ["Warranty help", "Review the 365-day warranty support period and contact MONAURO with your order details.", "/warranty"],
  ["Product safety", "Check usage boundaries and wellness disclaimers before using heat, compression, EMS, or massage devices.", "/terms-disclaimer"]
];

const supportLinks = [
  ["Shipping & Returns", "/shipping-returns"],
  ["Warranty", "/warranty"],
  ["Privacy Policy", "/privacy-policy"],
  ["Order Tracking", "/order-tracking"],
  ["Terms & Disclaimer", "/terms-disclaimer"]
];

export default function SupportPage() {
  return (
    <main className="page-shell py-16">
      <SectionHeader
        eyebrow="Support"
        title="Find the right support path."
        description="Support is organized around the questions that matter before and after purchase: safety, usage, shipping, returns, warranty, and checkout."
      />
      <div className="grid gap-4 md:grid-cols-4">
        {supportPaths.map(([title, body, href]) => (
          <Link className="group rounded-monauro border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:border-monauro-teal" href={href} key={href}>
            <p className="text-sm font-semibold uppercase text-monauro-orange">{title}</p>
            <p className="mt-4 text-sm leading-6 text-neutral-600">{body}</p>
            <p className="mt-5 text-sm font-semibold text-monauro-teal transition group-hover:text-monauro-orange">Open support path</p>
          </Link>
        ))}
      </div>

      <section className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.78fr]">
        <div className="rounded-monauro border border-black/10 bg-white p-6">
          <p className="text-sm font-semibold uppercase text-monauro-orange">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold">Need help from MONAURO?</h2>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            Customer support is available at info@monauro.com for product, shipping, return, exchange, warranty, and order questions.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="mailto:info@monauro.com">Email Support</Button>
            <Button href="/order-tracking" variant="secondary">Track Order</Button>
          </div>
        </div>
        <div className="rounded-monauro border border-black/10 bg-monauro-gray/45 p-6">
          <p className="text-sm font-semibold uppercase text-monauro-orange">Safety boundary</p>
          <p className="mt-4 text-sm leading-6 text-neutral-700">
            MONAURO content supports education and product discovery. It should not replace professional medical advice, diagnosis, or treatment. Users with health concerns should consult a qualified professional before use.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader
          eyebrow="Policies"
          title="Shipping, returns, warranty, and checkout basics."
          description="Key policy information is grouped here so shoppers can review it before checkout."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {trustPolicies.map((policy) => (
            <div className="rounded-monauro border border-black/10 bg-white p-5" key={policy.label}>
              <p className="font-semibold">{policy.label}</p>
              <p className="mt-3 text-sm text-neutral-600">{policy.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {checkoutPolicies.map((policy) => (
            <div className="rounded-monauro border border-black/10 bg-white p-5" key={policy.label}>
              <p className="font-semibold">{policy.label}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{policy.value}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 rounded-monauro border border-black/10 bg-white p-6">
        <p className="text-sm font-semibold uppercase text-monauro-orange">Helpful links</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {supportLinks.map(([label, href]) => (
            <Link className="rounded-monauro border border-black/10 bg-[#f7f7f4] px-4 py-3 text-sm font-semibold transition hover:border-monauro-teal" href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      <section className="mt-12 grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase text-monauro-orange">Support FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight">Answer the core purchase and usage questions.</h2>
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            FAQ content covers safety, frequency, suitable users, shipping, and after-sales questions in a conservative wellness voice.
          </p>
        </div>
        <FaqAccordion items={supportFaqs} />
      </section>
    </main>
  );
}