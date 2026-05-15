import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import { faqsByCategory } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Medical Billing & RCM FAQs | [Company Name]",
  description:
    "Answers to the most common questions about medical billing outsourcing, pricing, HIPAA compliance, EHR integrations, turnaround times, and revenue cycle management.",
  keywords:
    "medical billing FAQ, RCM questions, outsource billing questions, HIPAA billing compliance questions",
};

const faqSchemaItems = Object.values(faqsByCategory)
  .flat()
  .map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  }));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSchemaItems,
};

export default function FaqPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions (30+)"
        subtitle="Answers to the most common questions about medical billing outsourcing, pricing, HIPAA compliance, integrations, turnaround, and more. Don't see your question? Contact us anytime."
        crumbs={[{ label: "FAQ" }]}
        ctaLabel="Ask Us Anything →"
        ctaHref="/contact"
        secondaryCtaLabel="Get a Free Audit"
        secondaryCtaHref="/free-audit"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {Object.entries(faqsByCategory).map(([category, faqs]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-cyan font-semibold uppercase tracking-widest text-xs">
                  Category
                </span>
                <span className="h-px flex-1 bg-gray-100" />
              </div>
              <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-5">
                {category}
              </h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-gray-100 rounded-xl bg-ice overflow-hidden"
                  >
                    <summary className="flex justify-between items-center px-6 py-4 text-navy font-semibold text-base cursor-pointer hover:bg-gray-50 transition-colors">
                      {faq.q}
                      <span className="ml-4 text-cyan text-xl group-open:rotate-45 transition-transform duration-200 shrink-0 font-light">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-5 text-body text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Still Have Questions?"
        subtitle="Our team is here to answer any specific questions about your practice's revenue cycle needs."
        primaryLabel="Talk to an Expert →"
        primaryHref="/contact"
        secondaryLabel="Get a Free Audit"
        secondaryHref="/free-audit"
      />
    </PageLayout>
  );
}