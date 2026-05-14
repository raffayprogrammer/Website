import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import type { ServiceData } from "@/data/services";
import { services } from "@/data/services";

/* Section 6 — Individual Service Pages
   Template structure (10 sections per spec):
   1. Hero  2. Pain Points  3. Our Solution  4. Process/Workflow
   5. Key Deliverables  6. KPIs & Results  7. Who This Is For
   8. Why Choose Us  9. CTA  10. Related Services */

const whyChooseUsReasons = [
  { icon: "🎓", title: "Certified Specialists", desc: "AAPC & AHIMA certified team with deep specialty expertise." },
  { icon: "⚡", title: "Fast Turnaround", desc: "24–48 hour processing on most workflows, with no compromise on accuracy." },
  { icon: "📊", title: "Real-Time Reporting", desc: "Live dashboard access so you always know exactly where you stand." },
  { icon: "🔒", title: "HIPAA-First", desc: "Every workflow built around HIPAA compliance, BAA included." },
  { icon: "👤", title: "Dedicated Account Manager", desc: "A named expert as your primary contact — not a call center." },
  { icon: "💰", title: "Performance-Based Pricing", desc: "We succeed only when you succeed — no hidden fees." },
];

export default function ServicePageTemplate({ data }: { data: ServiceData }) {
  const relatedServices = data.related
    .map((slug) => services[slug])
    .filter(Boolean);

  return (
    <PageLayout>
      {/* 1. Hero — uses data.heroCta when provided, falls back to default */}
      <PageHero
        eyebrow={data.title}
        title={data.heroHeadline}
        subtitle={data.heroSubheadline}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: data.title },
        ]}
        ctaLabel={`▶ ${data.heroCta ?? `Get a Free ${data.title} Consultation`} →`}
        secondaryCtaLabel="▶ Talk to an Expert →"
        secondaryCtaHref="/contact"
      />

      {/* 2. Pain Points */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              The Problem
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              Are You Struggling With...
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.painPoints.map((pp) => (
              <div
                key={pp}
                className="bg-ice border-l-4 border-l-amber rounded-xl p-5 flex items-start gap-3 shadow-card"
              >
                <span className="text-amber text-xl shrink-0">⚠</span>
                <p className="text-charcoal text-sm font-medium leading-relaxed">{pp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Solution */}
      <section className="py-16 bg-ice">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
            Our Solution
          </p>
          <h2 className="t-h2-section font-[family-name:var(--font-poppins)] mb-6">
            {data.solutionTitle}
          </h2>
          <div className="text-7xl mb-5">{data.icon}</div>
          <p className="text-body leading-relaxed text-base max-w-3xl mx-auto">
            {data.solutionBody}
          </p>
        </div>
      </section>

      {/* 4. Process / Workflow */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Our Process
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              How It Works
            </h2>
          </div>
          <div className="space-y-3">
            {data.workflow.map((w) => (
              <div
                key={w.step}
                className="flex items-start gap-5 bg-ice border border-gray-100 rounded-xl p-5 card-hover border-l-4 border-l-cyan"
              >
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{w.step}</span>
                </div>
                <div className="flex-1 grid sm:grid-cols-[1fr_auto] gap-3 items-center">
                  <p className="text-charcoal text-sm font-medium">{w.activity}</p>
                  {w.timeline && (
                    <span className="text-xs bg-cyan/10 text-cyan font-semibold px-3 py-1 rounded-full border border-cyan/20 whitespace-nowrap">
                      {w.timeline}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Key Deliverables (or service-specific title via data.deliverablesTitle) */}
      <section className="py-16 bg-ice">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              {data.deliverablesTitle ? "What's Included" : "Deliverables"}
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              {data.deliverablesTitle ?? "What You Receive"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.deliverables.map((d) => (
              <div
                key={d}
                className="bg-white rounded-xl p-5 flex items-start gap-3 border border-gray-100 shadow-card"
              >
                <span className="w-6 h-6 bg-teal rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-charcoal text-sm font-medium">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KPIs & Results (conditional, 2-col or 3-col based on whether industry data is provided) */}
      {data.kpis && data.kpis.length > 0 && (() => {
        const showIndustry = data.kpis.some((k) => k.industry && k.industry.trim() !== "");
        const cols = showIndustry ? "grid-cols-3" : "grid-cols-2";
        return (
          <section className="py-16 bg-navy">
            <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
                  Performance Metrics
                </p>
                <h2 className="t-h2-section text-white font-[family-name:var(--font-poppins)]" style={{ color: "#fff" }}>
                  KPIs We Target
                </h2>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className={`grid ${cols} bg-white/10 text-white font-semibold text-sm px-6 py-4`}>
                  <div>KPI</div>
                  {showIndustry && <div className="text-center">Industry Average</div>}
                  <div className="text-right">[Company Name] Target</div>
                </div>
                {data.kpis.map((k) => (
                  <div
                    key={k.kpi}
                    className={`grid ${cols} px-6 py-4 border-t border-white/10 text-white/90 text-sm items-center`}
                  >
                    <div className="font-medium">{k.kpi}</div>
                    {showIndustry && (
                      <div className="text-center text-white/60">{k.industry || "—"}</div>
                    )}
                    <div className="text-right text-cyan font-bold">{k.target}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* 7. Who This Is For */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Who This Is For
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              Designed for Your Practice
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.whoFor.map((w) => (
              <div
                key={w}
                className="bg-ice border border-gray-100 rounded-xl p-5 card-hover border-l-4 border-l-cyan"
              >
                <p className="text-charcoal text-sm font-medium">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us (for this service) */}
      <section className="py-16 bg-ice">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Our Differentiators
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              Why Choose [Company Name] for {data.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUsReasons.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-xl p-6 card-hover border-l-4 border-l-cyan border border-gray-100 shadow-card"
              >
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-bold text-navy text-base font-[family-name:var(--font-poppins)] mb-2">
                  {r.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <CtaBanner
        title={`Ready to Transform Your ${data.title}?`}
        subtitle="Get a free consultation with one of our RCM specialists and see how much revenue you could recover."
        primaryLabel={`▶ Get a Free ${data.title} Audit →`}
        primaryHref="/free-audit"
        secondaryLabel="▶ Talk to an Expert →"
        secondaryHref="/contact"
      />

      {/* 10. Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
                Related Services
              </p>
              <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
                Pair With These Services
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-ice border border-gray-100 rounded-xl p-6 card-hover border-l-4 border-l-cyan group block"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-navy text-base font-[family-name:var(--font-poppins)] mb-2">
                    {s.title}
                  </h3>
                  <span className="text-cyan font-semibold text-sm group-hover:gap-2 transition-all inline-flex items-center gap-1">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}