import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

/* Section 8 — Why Choose Us Page (spec-verbatim) */

export const metadata: Metadata = {
  title: "Why Choose [Company Name] for Medical Billing & RCM | Top-Rated USA",
  description:
    "Discover what makes [Company Name] the preferred medical billing and RCM partner for 500+ healthcare providers. Certified team, HIPAA compliance, transparent reporting, no long-term contracts.",
  keywords: [
    "best medical billing company",
    "top RCM company",
    "medical billing partner",
    "why outsource billing",
    "medical billing comparison",
  ],
};

/* 8.2 Differentiators vs. Competitors (10 rows) */
const comparison = [
  { feature: "Dedicated Account Manager", us: "Yes — named individual, direct line",         them: "Shared team / call center" },
  { feature: "Coding Certifications",     us: "AAPC & AHIMA certified staff",                them: "Varies / not always disclosed" },
  { feature: "Contract Requirements",     us: "Month-to-month available",                    them: "6–12 month contracts common" },
  { feature: "Pricing Model",             us: "Performance-based % + transparent fees",      them: "Hidden fees common" },
  { feature: "EHR Integrations",          us: "50+ EHR/PM systems",                          them: "10–20 systems typical" },
  { feature: "Specialty Expertise",       us: "30+ medical specialties",                     them: "5–10 specialties" },
  { feature: "HIPAA Compliance",          us: "SOC 2, annual training, BAA, encryption",     them: "Basic compliance only" },
  { feature: "Reporting Dashboard",       us: "Real-time, client-accessible",                them: "Monthly PDF reports" },
  { feature: "Denial Management",         us: "Proactive + appeals included",                them: "Reactive / extra charge" },
  { feature: "Response Time",             us: "2-hour business day SLA",                     them: "24–48 hour response common" },
];

/* 8.3 Our Guarantee (4 items) */
const guarantees = [
  "If we don't improve your collection rate within 90 days, you pay nothing extra.",
  "Response to all client inquiries within 2 business hours.",
  "Zero HIPAA violation policy — your patients' data is always protected.",
  "Complete billing transparency — you see everything we do, in real time.",
];

/* 8.4 Certifications & Trust Signals (9 items per spec) */
const trustSignals = [
  { icon: "🎓", label: "AAPC Member & Certified Coders" },
  { icon: "📋", label: "AHIMA Member & Certified Coders" },
  { icon: "🔒", label: "HIPAA Compliance Certified" },
  { icon: "🛡️", label: "SOC 2 Type II Compliant Infrastructure" },
  { icon: "📝", label: "Business Associate Agreements (BAA) signed with every client" },
  { icon: "⭐", label: "Member: Medical Group Management Association (MGMA)" },
  { icon: "⭐", label: "Member: Healthcare Financial Management Association (HFMA)" },
  { icon: "📜", label: "[State] Licensed Business" },
  { icon: "🌟", label: "Google Reviews: [X] stars" },
];

export default function WhyChooseUsPage() {
  return (
    <PageLayout>
      {/* 8.1 Hero */}
      <PageHero
        eyebrow="Why Choose Us"
        title="The Standard Others Are Measured Against"
        subtitle="Every medical billing company claims to be the best. We let our results speak — 98%+ collection rates, sub-5% denial rates, and 500+ satisfied healthcare clients nationwide."
        crumbs={[{ label: "Why Choose Us" }]}
      />

      {/* 8.2 Differentiators vs. Competitors */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Side-by-Side
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              Differentiators vs. Competitors
            </h2>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] bg-ice rounded-2xl overflow-hidden border border-gray-100 shadow-card">
              <div className="grid grid-cols-3 bg-navy text-white font-semibold text-sm px-6 py-4">
                <div>Feature</div>
                <div className="text-center text-cyan">[Company Name]</div>
                <div className="text-right">Typical Competitor</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 px-6 py-4 border-t border-gray-100 text-sm items-center ${
                    i % 2 === 1 ? "bg-white" : ""
                  }`}
                >
                  <div className="font-semibold text-charcoal">{row.feature}</div>
                  <div className="text-center text-navy font-medium">
                    <span className="text-teal mr-1">✓</span>
                    {row.us}
                  </div>
                  <div className="text-right text-body">{row.them}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8.3 Our Guarantee */}
      <section className="py-16 bg-ice">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl border-l-4 border-l-teal shadow-card p-8 lg:p-10">
            <p className="text-teal font-semibold uppercase tracking-widest text-sm mb-2">
              Our Guarantee
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)] mb-8">
              What You Can Expect From Us
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {guarantees.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-7 h-7 bg-teal rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-charcoal text-sm font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8.4 Certifications & Trust Signals */}
      <section className="py-16 bg-navy">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Trusted Credentials
            </p>
            <h2 className="t-h2-section text-white font-[family-name:var(--font-poppins)]" style={{ color: "#fff" }}>
              Certifications &amp; Trust Signals
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustSignals.map((t) => (
              <div
                key={t.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3"
              >
                <div className="text-2xl shrink-0">{t.icon}</div>
                <div className="text-white/90 text-sm font-medium leading-snug">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
}
