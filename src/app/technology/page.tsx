import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Technology & Compliance | [Company Name]",
  description:
    "Enterprise-grade HIPAA compliance, 50+ EHR integrations, real-time reporting, and AI-assisted RCM workflows powering modern healthcare practices.",
};

const pillars = [
  {
    icon: "🔒",
    title: "HIPAA Compliance",
    desc: "Complete HIPAA compliance framework with annual risk assessments, training, and breach notification protocols.",
    href: "/technology/hipaa-compliance",
  },
  {
    icon: "🔌",
    title: "EHR/EMR Integrations",
    desc: "Seamless integration with 50+ EHR and practice management systems including Epic, Cerner, Athenahealth, and more.",
    href: "/technology/integrations",
  },
  {
    icon: "🛡️",
    title: "Data Security",
    desc: "Enterprise-grade encryption, zero-trust architecture, SOC 2 Type II compliance, and 24/7 security monitoring.",
    href: "/technology/data-security",
  },
];

export default function TechnologyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Technology"
        title="Powered by Cutting-Edge RCM Technology"
        subtitle="Modern medical billing requires modern infrastructure. Our technology stack is built around HIPAA compliance, real-time visibility, and seamless integration with the tools your practice already uses."
        crumbs={[{ label: "Technology" }]}
      />

      {/* Three pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Core Pillars
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Our Technology Stack
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-ice border border-gray-100 rounded-2xl p-7 card-hover border-l-4 border-l-cyan block group"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)] mb-2">
                  {p.title}
                </h3>
                <p className="text-body text-sm leading-relaxed mb-4">{p.desc}</p>
                <span className="text-cyan font-semibold text-sm group-hover:gap-2 transition-all inline-flex items-center gap-1">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting dashboard */}
      <section className="py-16 bg-ice">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
                Real-Time Visibility
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-5 leading-tight">
                Reporting Dashboard for Every Client
              </h2>
              <p className="text-body leading-relaxed mb-6">
                Browser-based, 24/7 access to your live revenue cycle data — accessible
                from any device, by any authorized user.
              </p>
              <ul className="space-y-2">
                {[
                  "Live claims status tracking",
                  "AR aging summary by payer and patient",
                  "Collection rate by payer, provider, and service",
                  "Denial rate trends by category",
                  "Month-over-month revenue comparison",
                  "First-pass acceptance rate",
                  "Days in AR trend chart",
                  "Exportable reports (CSV, PDF, Excel)",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-charcoal">
                    <span className="text-teal font-bold">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: "Collection Rate", value: "98.2%", color: "text-teal" },
                  { label: "Days in AR", value: "27", color: "text-cyan" },
                  { label: "Denial Rate", value: "4.1%", color: "text-amber" },
                  { label: "Clean Claim", value: "96.4%", color: "text-navy" },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-ice rounded-lg p-4 text-center">
                    <div className={`text-2xl font-bold ${kpi.color} font-[family-name:var(--font-poppins)]`}>
                      {kpi.value}
                    </div>
                    <div className="text-body text-xs mt-1">{kpi.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-ice rounded-lg p-4">
                <div className="text-body text-xs mb-2">Monthly Revenue Trend</div>
                <div className="flex items-end gap-1 h-20">
                  {[40, 55, 50, 70, 75, 85, 80, 92, 95, 100, 98, 110].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-cyan rounded-t"
                      style={{ height: `${h}%`, opacity: 0.5 + (i / 12) * 0.5 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="See Our Technology in Action"
        subtitle="Request a free demo and see our reporting dashboard, integrations, and security architecture firsthand."
        primaryLabel="Request a Demo →"
        primaryHref="/contact"
        secondaryLabel="View Integrations"
        secondaryHref="/technology/integrations"
      />
    </PageLayout>
  );
}