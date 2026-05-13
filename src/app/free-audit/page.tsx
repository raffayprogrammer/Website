import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import LeadForm from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "Free Revenue Cycle Audit | [Company Name]",
  description:
    "Get a free revenue cycle audit. Discover exactly how much revenue your practice is leaving on the table — no obligation, no cost.",
};

export default function FreeAuditPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Free Audit"
        title="Get Your Free Revenue Cycle Audit"
        subtitle="Discover exactly how much revenue your practice is leaving on the table. Our RCM experts will analyze your current billing performance and provide a custom improvement roadmap — absolutely free."
        crumbs={[{ label: "Free Audit" }]}
        ctaLabel="Start Now ↓"
        ctaHref="#free-audit"
      />
      <LeadForm />

      {/* What you get */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              What You Get
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Inside Your Free Audit
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Collection Rate Benchmark", desc: "Compare your current collection rate to industry benchmarks for your specialty." },
              { title: "Denial Rate Analysis", desc: "Breakdown of denials by category with root-cause identification." },
              { title: "Annual Revenue Gap Estimate", desc: "Dollar estimate of revenue you're currently losing each year." },
              { title: "Top 5 Improvement Opportunities", desc: "Prioritized list of the highest-impact billing fixes for your practice." },
              { title: "Specialty-Specific Recommendations", desc: "Tailored to your specialty's payer mix and coding complexity." },
              { title: "30-Minute Specialist Consultation", desc: "Talk directly with a senior RCM specialist — no sales pitch." },
            ].map((b) => (
              <div key={b.title} className="bg-ice border border-gray-100 rounded-xl p-5 card-hover border-l-4 border-l-cyan">
                <h3 className="font-bold text-navy text-base font-[family-name:var(--font-poppins)] mb-1.5">
                  {b.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}