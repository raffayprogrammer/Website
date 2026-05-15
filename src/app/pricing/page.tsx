import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Medical Billing Pricing | Free Revenue Audit | [Company Name]",
  description:
    "Transparent medical billing pricing with no hidden fees. Performance-based RCM services starting from 2–8% of collections. Get your free revenue cycle audit today.",
  keywords:
    "medical billing pricing, RCM pricing, outsourced billing cost, medical billing fees, revenue cycle management cost",
};

const pricingModels = [
  {
    model: "Percentage of Collections",
    structure: "% of net collections monthly",
    bestFor: "Most practices — aligned incentives",
    rate: "2%–8% (specialty/volume dependent)",
  },
  {
    model: "Per-Claim Pricing",
    structure: "Flat fee per claim submitted",
    bestFor: "High-volume, lower-complexity practices",
    rate: "$3–$8 per claim",
  },
  {
    model: "Flat Monthly Retainer",
    structure: "Fixed monthly fee",
    bestFor: "Practices with predictable volume",
    rate: "Custom quote based on volume",
  },
  {
    model: "Hybrid Model",
    structure: "Base fee + performance bonus",
    bestFor: "Large groups and health systems",
    rate: "Custom quote",
  },
];

const alwaysIncluded = [
  "Dedicated account manager",
  "Real-time reporting dashboard access",
  "HIPAA compliance and BAA execution",
  "EHR/PM system integration setup",
  "Onboarding and staff training support",
  "Monthly performance reviews",
  "Denial management and appeals",
  "Patient billing and statement generation",
];

const auditIncludes = [
  "Analysis of your current collection rate vs. industry benchmarks",
  "Denial rate breakdown by denial category",
  "Estimate of annual revenue you are currently losing",
  "Identification of your top 5 billing improvement opportunities",
  "Custom recommendations tailored to your specialty and practice size",
  "No-obligation conversation with a senior RCM specialist",
];

export default function PricingPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Pricing"
        title="Transparent Pricing. Performance-Based. No Surprises."
        subtitle="We believe you should know exactly what you're paying for — and see exactly what you're getting in return. Our pricing is designed to align our success directly with yours."
        crumbs={[{ label: "Pricing" }]}
        ctaLabel="Get Your Free Audit →"
        ctaHref="/free-audit"
        secondaryCtaLabel="Request a Custom Quote"
        secondaryCtaHref="/contact"
      />

      {/* Pricing Models */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Pricing Models
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-4">
              Choose the Model That Fits Your Practice
            </h2>
            <p className="text-body max-w-2xl mx-auto text-base">
              Every practice is different. We offer four flexible pricing structures so you can choose what works best for your volume, specialty, and goals.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-6 py-4 font-semibold font-[family-name:var(--font-poppins)]">Model</th>
                  <th className="text-left px-6 py-4 font-semibold font-[family-name:var(--font-poppins)]">Structure</th>
                  <th className="text-left px-6 py-4 font-semibold font-[family-name:var(--font-poppins)]">Best For</th>
                  <th className="text-left px-6 py-4 font-semibold font-[family-name:var(--font-poppins)]">Typical Rate</th>
                </tr>
              </thead>
              <tbody>
                {pricingModels.map((row, idx) => (
                  <tr
                    key={row.model}
                    className={idx % 2 === 0 ? "bg-white" : "bg-ice"}
                  >
                    <td className="px-6 py-4 font-semibold text-navy">{row.model}</td>
                    <td className="px-6 py-4 text-charcoal">{row.structure}</td>
                    <td className="px-6 py-4 text-charcoal">{row.bestFor}</td>
                    <td className="px-6 py-4 font-semibold text-teal">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-body text-xs mt-4 italic max-w-3xl">
            Final pricing is determined after our free Revenue Cycle Audit based on your specialty, payer mix, claim volume, and service scope. No two practices are identical — and neither are our quotes.
          </p>
        </div>
      </section>

      {/* What's Always Included */}
      <section className="py-16 bg-ice">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              No Hidden Fees
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              What&apos;s Always Included
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {alwaysIncluded.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm"
              >
                <span className="text-cyan font-bold text-lg leading-none mt-0.5">✓</span>
                <span className="text-charcoal text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Revenue Cycle Audit */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
                Free Offer
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-4 leading-tight">
                Discover How Much Revenue You&apos;re Missing
              </h2>
              <p className="text-body mb-6 leading-relaxed">
                Before you invest in any billing service, you should know where your current gaps are. Our Free Revenue Cycle Audit provides a comprehensive analysis of your billing performance — at no cost and no obligation.
              </p>
              <ul className="space-y-3 mb-8">
                {auditIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal">
                    <span className="text-cyan font-bold mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-cyan text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#0090B0] transition-colors text-sm shadow-lg"
              >
                ▶ Request My Free Audit →
              </Link>
              <p className="text-xs text-body mt-3">
                🔒 Your information is protected under HIPAA guidelines. We sign BAAs before discussing any PHI.
              </p>
            </div>

            {/* Visual card */}
            <div className="bg-navy rounded-2xl p-8 text-white">
              <div className="inline-flex items-center gap-2 bg-cyan/20 border border-cyan/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <span className="text-cyan text-xs font-semibold uppercase tracking-wider">
                  100% Free — No Obligation
                </span>
              </div>
              <h3 className="font-bold text-2xl font-[family-name:var(--font-poppins)] mb-6 leading-tight">
                What Happens After You Request Your Audit
              </h3>
              <ol className="space-y-5">
                {[
                  { step: "01", title: "Submit Your Request", desc: "Fill out the short form — takes less than 2 minutes." },
                  { step: "02", title: "We Analyze Your Practice", desc: "Our RCM specialists review your specialty, payer mix, and current billing gaps." },
                  { step: "03", title: "Receive Your Custom Report", desc: "Get a detailed audit with dollar estimates and prioritized recommendations." },
                  { step: "04", title: "30-Minute Specialist Call", desc: "Walk through findings with a senior RCM expert — no sales pressure." },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="text-cyan font-bold text-lg font-[family-name:var(--font-poppins)] shrink-0 w-8">
                      {item.step}
                    </span>
                    <div>
                      <div className="font-semibold text-white text-sm mb-0.5">{item.title}</div>
                      <div className="text-white/70 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to See What You're Leaving on the Table?"
        subtitle="Get your free, no-obligation Revenue Cycle Audit and receive a custom pricing quote tailored to your practice."
        primaryLabel="▶ Get My Free Audit"
        primaryHref="/free-audit"
        secondaryLabel="Talk to an Expert"
        secondaryHref="/contact"
      />
    </PageLayout>
  );
}