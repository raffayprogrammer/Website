import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

/* Section 9 — Technology & Compliance Page (spec-verbatim) */

export const metadata: Metadata = {
  title: "HIPAA-Compliant Medical Billing Technology & Data Security | [Company Name]",
  description:
    "Learn how [Company Name] protects your PHI with enterprise-grade security, SOC 2 compliance, 256-bit encryption, and HIPAA-compliant workflows integrated with 50+ EHR systems.",
  keywords: [
    "HIPAA compliant billing",
    "healthcare data security",
    "medical billing technology",
    "EHR integration",
    "SOC 2 billing company",
    "PHI protection",
  ],
};

/* 9.1 HIPAA Compliance Framework table */
const hipaaSafeguards = [
  {
    category: "Administrative Safeguards",
    items: [
      "Annual HIPAA training for all staff",
      "Privacy Officer designation",
      "Workforce security policies",
      "Sanction policy",
      "Access management procedures",
    ],
  },
  {
    category: "Physical Safeguards",
    items: [
      "Secured facilities",
      "Workstation controls",
      "Media control and disposal",
      "Visitor access protocols",
    ],
  },
  {
    category: "Technical Safeguards",
    items: [
      "256-bit AES encryption (data at rest + in transit)",
      "Multi-factor authentication (MFA)",
      "Role-based access control (RBAC)",
      "Audit controls and logging",
      "Automatic session timeout",
    ],
  },
  {
    category: "Business Associate Agreements",
    items: [
      "BAA signed with every client",
      "BAA with all technology vendors",
      "BAA with clearinghouse partners",
    ],
  },
  {
    category: "Breach Notification Protocol",
    items: [
      "72-hour notification policy",
      "Documented incident response plan",
      "Annual risk assessments",
    ],
  },
];

/* 9.2 Data Security Architecture (3 layers) */
const securityLayers = [
  {
    title: "Infrastructure",
    icon: "🏗️",
    items: [
      "Cloud infrastructure hosted on HIPAA-eligible AWS / Azure / GCP [specify]",
      "Data encrypted at rest (AES-256) and in transit (TLS 1.3)",
      "Zero-trust network architecture",
      "VPN-required remote access for all staff",
      "Separate PHI data environments from operational systems",
    ],
  },
  {
    title: "Access Control",
    icon: "🔐",
    items: [
      "Role-based access control (RBAC) — minimum necessary access",
      "Multi-factor authentication (MFA) required for all system access",
      "Privileged access management (PAM) for administrative functions",
      "Automatic workstation lock after [X] minutes of inactivity",
      "Complete audit trail: who accessed what, when, and what action was taken",
    ],
  },
  {
    title: "Monitoring & Incident Response",
    icon: "🚨",
    items: [
      "24/7 automated security monitoring and threat detection",
      "Security Information and Event Management (SIEM) system",
      "Documented incident response plan tested annually",
      "Annual third-party penetration testing",
      "Annual HIPAA risk assessment",
    ],
  },
];

/* 9.3 EHR/EMR & Technology Integrations (5 categories) */
const integrationGroups = {
  "EHR Systems": [
    "Epic", "Cerner (Oracle Health)", "Athenahealth", "eClinicalWorks", "Meditech",
    "Allscripts", "NextGen Healthcare", "Greenway Health", "Practice Fusion",
    "Kareo", "DrChrono", "ModMed", "ChARM EHR", "SimplePractice", "TherapyNotes",
  ],
  "Practice Management Systems": [
    "AdvancedMD", "Brightree", "CollaborateMD", "Lytec", "NueMD",
    "Office Ally", "WebPT", "Kareo PM", "Practice Fusion PM", "Netsmart",
  ],
  "Clearinghouses": [
    "Change Healthcare", "Availity", "Waystar (formerly Zirmed + Navicure)",
    "Optum360", "Trizetto", "Emdeon", "Office Ally Clearinghouse",
  ],
  "Patient Payment Platforms": [
    "Stripe", "Square", "InstaMed", "PaySimple", "Rectangle Health", "Updox",
  ],
  "Coding Support Tools": [
    "3M CodeFinder", "Optum Encoder Pro", "TruCode", "Find-A-Code", "Codify (AAPC)",
  ],
};

/* 9.4 Reporting & Analytics Dashboard features (11 per spec) */
const dashboardFeatures = [
  "Live claims status tracking (submitted, pending, approved, denied, paid)",
  "AR aging summary by payer and patient",
  "Collection rate by payer, provider, and service type",
  "Denial rate trends by denial category",
  "Month-over-month revenue comparison",
  "Top denial codes with resolution status",
  "First-pass acceptance rate",
  "Days in AR trend chart",
  "Provider productivity metrics",
  "Custom date range filtering",
  "Exportable reports (CSV, PDF, Excel)",
];

const pillars = [
  { icon: "🔒", title: "HIPAA Compliance",        href: "/technology/hipaa-compliance" },
  { icon: "🔌", title: "EHR/EMR Integrations",    href: "/technology/integrations" },
  { icon: "🛡️", title: "Data Security",           href: "/technology/data-security" },
];

export default function TechnologyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Technology & Compliance"
        title="Powered by Cutting-Edge RCM Technology"
        subtitle="Modern medical billing requires modern infrastructure. Our technology stack is built around HIPAA compliance, real-time visibility, and seamless integration with the tools your practice already uses."
        crumbs={[{ label: "Technology" }]}
      />

      {/* Quick-jump pillar cards */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-4">
            {pillars.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-ice border border-gray-100 rounded-2xl p-5 card-hover border-l-4 border-l-cyan group flex items-center gap-4"
              >
                <div className="text-3xl">{p.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-navy text-base font-[family-name:var(--font-poppins)]">
                    {p.title}
                  </h3>
                  <span className="text-cyan font-semibold text-xs">Deep dive →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9.1 HIPAA Compliance Framework */}
      <section className="py-16 bg-ice" id="hipaa-framework">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              9.1 Compliance Framework
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)] mb-4">
              HIPAA Compliance Framework
            </h2>
            <p className="text-body max-w-3xl mx-auto leading-relaxed">
              HIPAA compliance is not an afterthought at [Company Name] — it is the
              architectural foundation of every system, process, and employee behavior. We
              implement a multi-layered HIPAA compliance framework across all operations.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-[1.2fr_2fr] bg-navy text-white font-semibold text-sm px-6 py-4">
              <div>HIPAA Safeguard Category</div>
              <div>Our Implementation</div>
            </div>
            {hipaaSafeguards.map((s, i) => (
              <div
                key={s.category}
                className={`grid grid-cols-[1.2fr_2fr] px-6 py-4 border-t border-gray-100 text-sm ${
                  i % 2 === 1 ? "bg-ice/30" : ""
                }`}
              >
                <div className="font-bold text-navy">{s.category}</div>
                <div className="text-charcoal">
                  {s.items.map((item, idx) => (
                    <span
                      key={item}
                      className="inline-block mr-2 mb-1"
                    >
                      {item}
                      {idx < s.items.length - 1 && (
                        <span className="text-cyan mx-1">|</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9.2 Data Security Architecture */}
      <section className="py-16 bg-white" id="data-security">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              9.2 Defense in Depth
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              Data Security Architecture
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {securityLayers.map((l) => (
              <div
                key={l.title}
                className="bg-ice border border-gray-100 rounded-2xl p-6 card-hover border-l-4 border-l-cyan"
              >
                <div className="text-3xl mb-3">{l.icon}</div>
                <h3 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)] mb-3">
                  {l.title}
                </h3>
                <ul className="space-y-2">
                  {l.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-charcoal text-sm">
                      <span className="text-teal font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9.3 EHR/EMR & Technology Integrations */}
      <section className="py-16 bg-ice" id="integrations">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              9.3 Partner Ecosystem
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)]">
              EHR/EMR &amp; Technology Integrations
            </h2>
          </div>
          <div className="space-y-7">
            {Object.entries(integrationGroups).map(([category, names]) => (
              <div key={category}>
                <h3 className="text-navy font-bold text-base font-[family-name:var(--font-poppins)] mb-3">
                  {category}:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {names.map((name) => (
                    <div
                      key={name}
                      className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-charcoal hover:border-cyan hover:text-cyan transition-colors"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9.4 Reporting & Analytics Dashboard */}
      <section className="py-16 bg-navy" id="dashboard">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
                9.4 Real-Time Visibility
              </p>
              <h2 className="t-h2-section text-white font-[family-name:var(--font-poppins)] mb-5" style={{ color: "#fff" }}>
                Reporting &amp; Analytics Dashboard
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Every [Company Name] client receives access to our real-time, browser-based
                reporting dashboard, featuring:
              </p>
              <ul className="space-y-2">
                {dashboardFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/85">
                    <span className="text-cyan font-bold mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock dashboard visual */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-teal/70" />
                <span className="ml-3 text-white/40 text-[10px] font-mono">
                  rcm-dashboard / overview
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  { label: "Collection Rate", value: "98.2%", color: "text-teal" },
                  { label: "Days in AR", value: "27", color: "text-cyan" },
                  { label: "Denial Rate", value: "4.1%", color: "text-amber" },
                  { label: "Clean Claim", value: "96.4%", color: "text-white" },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-white/5 border border-white/10 rounded-lg p-3">
                    <div className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mb-1">
                      {kpi.label}
                    </div>
                    <div className={`text-xl font-bold ${kpi.color} font-[family-name:var(--font-poppins)] tabular-nums`}>
                      {kpi.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="text-white/50 text-[10px] mb-2">Monthly Revenue Trend</div>
                <div className="flex items-end gap-1 h-20">
                  {[40, 55, 50, 70, 75, 85, 80, 92, 95, 100, 98, 110].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-cyan rounded-sm"
                      style={{ height: `${h * 0.85}%`, opacity: 0.5 + (i / 12) * 0.5 }}
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
        primaryLabel="▶ Request a Demo →"
        primaryHref="/contact"
        secondaryLabel="▶ View Integrations →"
        secondaryHref="/technology/integrations"
      />
    </PageLayout>
  );
}
