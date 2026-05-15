import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Case Studies & Client Results | [Company Name]",
  description:
    "Real client success stories — internal medicine, cardiology, behavioral health, and telehealth practices that transformed their revenue cycle with [Company Name].",
};

const studies = [
  {
    client: "8-Provider Internal Medicine Group",
    region: "Southeast USA",
    challenge:
      "18% denial rate, 62 days in AR, 74% collection rate, in-house billing team struggling with payer rule changes.",
    solution:
      "Full RCM takeover with coding review, billing, denial management, AR recovery, and real-time reporting dashboard implementation.",
    results90: [
      { metric: "Denial rate", before: "18%", after: "4.8%" },
      { metric: "Days in AR", before: "62", after: "28" },
      { metric: "Collection rate", before: "74%", after: "96.2%" },
    ],
    results12mo:
      "Annual revenue increased by $347,000 | In-house billing headcount reduced (staff reassigned to clinical support)",
    quote:
      "We recovered over $340K in the first year. The ROI was clear within 60 days.",
    author: "Practice Administrator",
    services: [
      "Medical Billing",
      "Medical Coding",
      "Denial Management",
      "AR Recovery",
      "Reporting Dashboard",
    ],
  },
  {
    client: "Solo Cardiologist Practice",
    region: "Midwest USA",
    challenge:
      "No dedicated billing staff, claims submitted weeks late, multiple payer contract underpayments undetected.",
    solution:
      "End-to-end RCM, credentialing review, payment posting, underpayment identification and recovery.",
    results90: [
      { metric: "Clean claim rate", before: "—", after: "96%" },
      { metric: "Payment lag", before: "35 days", after: "11 days" },
      { metric: "Underpayment recovery", before: "$0", after: "$58,000" },
    ],
    results12mo:
      "Underpayment recovery: $58,000 | Revenue increased 28% year-over-year",
    quote:
      "I had no idea how much money I was losing. [Company Name] found and recovered $58K I had already written off.",
    author: "Dr. [Name]",
    services: [
      "Medical Billing",
      "Coding",
      "AR Recovery",
      "Payment Posting",
      "Credentialing",
    ],
  },
  {
    client: "12-Provider Behavioral Health Group",
    region: "Mid-Atlantic USA",
    challenge:
      "High prior auth denial rate for psychiatric medications, parity compliance issues, low telehealth billing knowledge.",
    solution:
      "Specialized behavioral health billing, prior auth management, telehealth billing protocols, parity compliance monitoring.",
    results90: [
      { metric: "Prior auth approval rate", before: "—", after: "92%" },
      { metric: "Telehealth acceptance rate", before: "—", after: "98%" },
      { metric: "Net new revenue (6 mo)", before: "—", after: "$210,000" },
    ],
    results12mo:
      "Prior auth approval rate: 92% | Telehealth billing acceptance rate: 98% | Net new revenue: $210,000",
    quote:
      "Finally a billing company that actually understands behavioral health. The difference is night and day.",
    author: "CEO",
    services: [
      "Medical Billing",
      "Prior Authorization",
      "Credentialing",
      "RCM",
      "Telehealth Billing",
    ],
  },
  {
    client: "Direct-to-Consumer Telehealth Company",
    region: "50+ states, 200+ providers",
    challenge:
      "Complex multi-state credentialing, inconsistent billing across specialties, no AR follow-up process.",
    solution:
      "Mass credentialing program, specialty-specific billing teams, centralized AR management.",
    results90: [
      { metric: "Providers credentialed (90d)", before: "—", after: "200+" },
      { metric: "Claims submission time", before: "—", after: "<24 hrs" },
      { metric: "Collection rate", before: "—", after: "94%" },
    ],
    results12mo:
      "Billing operations scaled from 200 to 500 providers with no disruption",
    quote:
      "[Company Name] is the reason our billing operations scale with our growth. Incredible team.",
    author: "VP of Operations",
    services: [
      "Credentialing",
      "Medical Billing",
      "RCM",
      "Virtual Assistants",
      "Denial Management",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Case Studies"
        title="Real Results from Real Practices"
        subtitle="See how healthcare providers across specialties have transformed their revenue cycle, reduced denials, and recovered lost revenue with [Company Name]."
        crumbs={[{ label: "Case Studies" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-14">
          {studies.map((s, idx) => (
            <div
              key={s.client}
              className="bg-ice rounded-2xl p-8 lg:p-10 border-l-4 border-l-cyan shadow-sm"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: client + challenge + solution */}
                <div className="lg:col-span-1">
                  <div className="text-cyan font-bold text-sm font-[family-name:var(--font-poppins)] mb-1">
                    Case Study {idx + 1}
                  </div>
                  <h3 className="font-bold text-navy text-xl font-[family-name:var(--font-poppins)] mb-1">
                    {s.client}
                  </h3>
                  <p className="text-body text-xs mb-5">{s.region}</p>

                  <p className="text-cyan font-semibold uppercase tracking-widest text-xs mb-1">
                    Challenge
                  </p>
                  <p className="text-charcoal text-sm mb-4 leading-relaxed">
                    {s.challenge}
                  </p>

                  <p className="text-cyan font-semibold uppercase tracking-widest text-xs mb-1">
                    Solution
                  </p>
                  <p className="text-charcoal text-sm mb-5 leading-relaxed">
                    {s.solution}
                  </p>

                  <p className="text-cyan font-semibold uppercase tracking-widest text-xs mb-2">
                    Services Used
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.services.map((svc) => (
                      <span
                        key={svc}
                        className="bg-navy text-white text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: results + 12-month + quote */}
                <div className="lg:col-span-2 space-y-5">
                  <div>
                    <p className="text-cyan font-semibold uppercase tracking-widest text-xs mb-3">
                      Results — 90 Days
                    </p>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {s.results90.map((r) => (
                        <div
                          key={r.metric}
                          className="bg-white rounded-xl p-4 border border-gray-100 text-center"
                        >
                          <div className="text-body text-xs mb-1">{r.metric}</div>
                          <div className="flex items-center justify-center gap-2 text-sm">
                            <span className="text-body line-through">{r.before}</span>
                            <span className="text-cyan">→</span>
                            <span className="text-teal font-bold">{r.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-cyan font-semibold uppercase tracking-widest text-xs mb-2">
                      Results — 12 Months
                    </p>
                    <p className="text-charcoal text-sm leading-relaxed">
                      {s.results12mo}
                    </p>
                  </div>

                  <blockquote className="bg-navy text-white rounded-xl p-6 relative">
                    <span className="text-cyan text-3xl absolute top-3 left-4">&ldquo;</span>
                    <p className="text-white/90 italic text-sm pl-8 leading-relaxed">
                      {s.quote}
                    </p>
                    <p className="text-cyan font-semibold text-sm pl-8 mt-3">
                      — {s.author}
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Could Your Practice Be Next?"
        subtitle="Schedule a free revenue audit and see what's possible for your specific specialty and practice size."
      />
    </PageLayout>
  );
}