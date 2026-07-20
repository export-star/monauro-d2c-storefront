import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { supportFaqs } from "@/data/faqs";
import { checkoutPolicies, trustPolicies } from "@/data/policies";

const supportPaths = [
  ["Track an order", "Use the demo tracking page now; connect Shopify or logistics tracking before production.", "/order-tracking"],
  ["Shipping or returns", "Review confirmed regions, delivery estimate, and 30-day return/exchange window.", "/shipping-returns"],
  ["Warranty help", "Review the 365-day warranty placeholder and production claim requirements.", "/warranty"],
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
        description="Built from the MONAURO workflow: support should reduce purchase anxiety around safety, usage, shipping, returns, warranty, and checkout."
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
            For the current demo, customer support routes to the confirmed MONAURO email. Production support should later connect order lookup, return requests, warranty claims, and helpdesk workflows.
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
          eyebrow="Confirmed policies"
          title="Shipping, returns, warranty, and checkout basics."
          description="These cards use only information already confirmed for the demo. Production policy wording still needs final review."
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
            This follows the 04 workflow requirement that FAQ and support should cover safety, frequency, suitable users, shipping, and after-sales questions.
          </p>
        </div>
        <FaqAccordion items={supportFaqs} />
      </section>

      <section className="mt-12 rounded-monauro border border-dashed border-black/15 bg-white p-6">
        <p className="text-sm font-semibold uppercase text-monauro-orange">Production dependencies</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ["Shopify order data", "Required before order tracking can return live customer status."],
            ["Helpdesk workflow", "Needed for return, exchange, and warranty claim handling."],
            ["Final legal wording", "Privacy, terms, disclaimer, return, and warranty pages need final approval."]
          ].map(([title, body]) => (
            <div className="rounded-monauro bg-[#f7f7f4] p-5" key={title}>
              <p className="font-semibold">{title}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
