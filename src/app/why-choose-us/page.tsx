import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Why Choose [Company Name] for Medical Billing & RCM | Top-Rated USA",
  description:
    "Discover what makes [Company Name] the preferred medical billing and RCM partner for 500+ healthcare providers. Certified team, HIPAA compliance, transparent reporting.",
};

const comparison = [
  { feature: "Dedicated Account Manager", us: "Named individual, direct line", them: "Shared team / call center" },
  { feature: "Coding Certifications", us: "AAPC & AHIMA certified staff", them: "Varies / not always disclosed" },
  { feature: "Contract Requirements", us: "Month-to-month available", them: "6–12 month contracts common" },
  { feature: "Pricing Model", us: "Performance-based + transparent fees", them: "Hidden fees common" },
  { feature: "EHR Integrations", us: "50+ EHR/PM systems", them: "10–20 systems typical" },
  { feature: "Specialty Expertise", us: "30+ medical specialties", them: "5–10 specialties" },
  { feature: "HIPAA Compliance", us: "SOC 2, annual training, BAA, encryption", them: "Basic compliance only" },
  { feature: "Reporting Dashboard", us: "Real-time, client-accessible", them: "Monthly PDF reports" },
  { feature: "Denial Management", us: "Proactive + appeals included", them: "Reactive / extra charge" },
  { feature: "Response Time", us: "2-hour business day SLA", them: "24–48 hour response common" },
];

export default function WhyChooseUsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Why Choose Us"
        title="The Standard Others Are Measured Against"
        subtitle="Every medical billing company claims to be the best. We let our results speak — 98%+ collection rates, sub-5% denial rates, and 500+ satisfied healthcare clients nationwide."
        crumbs={[{ label: "Why Choose Us" }]}
      />

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Side-by-Side
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              How We Compare to Typical Competitors
            </h2>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] bg-ice rounded-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-3 bg-navy text-white font-semibold text-sm px-6 py-4">
                <div>Feature</div>
                <div className="text-center text-cyan">[Company Name]</div>
                <div className="text-right">Typical Competitor</div>
              </div>
              {comparison.map((row) => (
                <div key={row.feature} className="grid grid-cols-3 px-6 py-4 border-t border-gray-100 text-sm items-center">
                  <div className="font-semibold text-charcoal">{row.feature}</div>
                  <div className="text-center text-navy font-medium">
                    <span className="text-teal mr-1">✓</span>{row.us}
                  </div>
                  <div className="text-right text-body">{row.them}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-ice">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl border-l-4 border-l-teal shadow-sm p-8 lg:p-10">
            <p className="text-teal font-semibold uppercase tracking-widest text-sm mb-2">
              Our Guarantee
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-8">
              What You Can Expect From Us
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "If we don't improve your collection rate within 90 days, you pay nothing extra.",
                "Response to all client inquiries within 2 business hours.",
                "Zero HIPAA violation policy — your patients' data is always protected.",
                "Complete billing transparency — you see everything we do, in real time.",
              ].map((item) => (
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

      {/* Trust Signals */}
      <section className="py-16 bg-navy">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
            Trusted Credentials
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-[family-name:var(--font-poppins)] mb-8">
            Certifications &amp; Memberships
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "AAPC Member & Certified Coders",
              "AHIMA Member & Certified Coders",
              "HIPAA Compliance Certified",
              "SOC 2 Type II Compliant",
              "BAA Available",
              "MGMA Member",
              "HFMA Member",
              "BBB A+ Rating",
            ].map((b) => (
              <span
                key={b}
                className="bg-white/10 border border-white/20 rounded-full px-5 py-2 text-white text-sm font-medium"
              >
                ✓ {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
}