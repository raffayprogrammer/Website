import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import type { ServiceData } from "@/data/services";
import { services } from "@/data/services";

export default function ServicePageTemplate({ data }: { data: ServiceData }) {
  const relatedServices = data.related
    .map((slug) => services[slug])
    .filter(Boolean);

  return (
    <PageLayout>
      <PageHero
        eyebrow={data.title}
        title={data.heroHeadline}
        subtitle={data.heroSubheadline}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: data.title },
        ]}
        ctaLabel={`Get a Free ${data.title} Consultation →`}
        secondaryCtaLabel="Talk to an Expert"
        secondaryCtaHref="/contact"
      />

      {/* Pain Points */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              The Problem
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Are You Struggling With...
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.painPoints.map((pp) => (
              <div
                key={pp}
                className="bg-ice border-l-4 border-l-amber rounded-xl p-5 flex items-start gap-3"
              >
                <span className="text-amber text-xl shrink-0">⚠</span>
                <p className="text-charcoal text-sm font-medium leading-relaxed">{pp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-ice">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
                Our Solution
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-6 leading-tight">
                {data.solutionTitle}
              </h2>
              <p className="text-body leading-relaxed">{data.solutionBody}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="text-6xl mb-4">{data.icon}</div>
              <h3 className="text-navy font-bold text-lg mb-3 font-[family-name:var(--font-poppins)]">
                Why [Company Name] for {data.title}?
              </h3>
              <ul className="space-y-2">
                {[
                  "AAPC & AHIMA certified specialists",
                  "Specialty-specific expertise",
                  "Dedicated account manager",
                  "Real-time reporting dashboard",
                  "HIPAA-compliant operations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                    <span className="text-teal font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Our Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
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

      {/* Deliverables */}
      <section className="py-16 bg-ice">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Deliverables
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              What You Receive
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.deliverables.map((d) => (
              <div
                key={d}
                className="bg-white rounded-xl p-5 flex items-start gap-3 border border-gray-100 shadow-sm"
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

      {/* KPIs */}
      {data.kpis && (
        <section className="py-16 bg-navy">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
                Performance Metrics
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white font-[family-name:var(--font-poppins)]">
                KPIs We Target
              </h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-white/10 text-white font-semibold text-sm px-6 py-4">
                <div>KPI</div>
                <div className="text-center">Industry Average</div>
                <div className="text-right">Our Target</div>
              </div>
              {data.kpis.map((k) => (
                <div
                  key={k.kpi}
                  className="grid grid-cols-3 px-6 py-4 border-t border-white/10 text-white/90 text-sm items-center"
                >
                  <div className="font-medium">{k.kpi}</div>
                  <div className="text-center text-white/60">{k.industry}</div>
                  <div className="text-right text-cyan font-bold">{k.target}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who This Is For */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Who This Is For
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
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

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-ice">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
                Related Services
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
                Pair With These Services
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white border border-gray-100 rounded-xl p-6 card-hover border-l-4 border-l-cyan group block"
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

      <CtaBanner
        title={`Ready to Transform Your ${data.title}?`}
        subtitle="Get a free consultation with one of our RCM specialists and see how much revenue you could recover."
      />
    </PageLayout>
  );
}