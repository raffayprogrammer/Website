import Link from "next/link";

/* Section 3.13 — FAQ Preview Section
   Spec-verbatim preview answers (full versions live on /faq). */
const faqs = [
  {
    q: "How much does medical billing outsourcing cost?",
    a: "Our pricing is performance-based, typically ranging from 2–8% of monthly collections. No upfront fees.",
  },
  {
    q: "Do you work with my EHR system?",
    a: "We integrate with 50+ EHR and practice management systems. Your current workflow won't be disrupted.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most practices are fully onboarded within 5–7 business days, with dedicated support throughout.",
  },
  {
    q: "Are you HIPAA compliant?",
    a: "Absolutely. HIPAA compliance is built into every process, system, and communication channel we use.",
  },
];

export default function FaqPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
          <h2 className="t-h2-section font-[family-name:var(--font-poppins)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body">
            Quick answers to the most common questions about our services.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border border-gray-100 rounded-xl bg-ice overflow-hidden"
            >
              <summary className="flex justify-between items-center px-6 py-5 text-navy font-semibold text-base cursor-pointer hover:bg-gray-50 transition-colors">
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

        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy t-cta px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
          >
            ▶ View All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}