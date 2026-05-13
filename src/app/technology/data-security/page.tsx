import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Data Security | Enterprise-Grade Protection | [Company Name]",
  description:
    "256-bit encryption, zero-trust architecture, SOC 2 Type II compliance, 24/7 security monitoring — see how we protect every byte of PHI.",
};

const layers = [
  {
    title: "Infrastructure",
    items: [
      "HIPAA-eligible AWS / Azure / GCP cloud hosting",
      "Data encrypted at rest (AES-256) and in transit (TLS 1.3)",
      "Zero-trust network architecture",
      "VPN-required remote access for all staff",
      "Separate PHI data environments from operational systems",
    ],
  },
  {
    title: "Access Control",
    items: [
      "Role-based access control (RBAC) — minimum necessary",
      "Multi-factor authentication (MFA) required for all access",
      "Privileged access management (PAM)",
      "Automatic workstation lock after inactivity",
      "Complete audit trail: who, what, when, action",
    ],
  },
  {
    title: "Monitoring & Response",
    items: [
      "24/7 automated security monitoring and threat detection",
      "SIEM (Security Information & Event Management) system",
      "Documented incident response plan tested annually",
      "Annual third-party penetration testing",
      "Annual HIPAA risk assessment",
    ],
  },
];

export default function DataSecurityPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Data Security"
        title="Enterprise-Grade Protection for Every Byte"
        subtitle="Healthcare data deserves more than basic security. Our defense-in-depth approach combines encryption, zero-trust architecture, continuous monitoring, and rigorous access controls."
        crumbs={[
          { label: "Technology", href: "/technology" },
          { label: "Data Security" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Defense in Depth
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Three Layers of Security
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {layers.map((l, i) => (
              <div
                key={l.title}
                className="bg-ice border border-gray-100 rounded-2xl p-6 card-hover border-l-4 border-l-cyan"
              >
                <div className="text-cyan font-bold text-3xl font-[family-name:var(--font-poppins)] mb-2">
                  0{i + 1}
                </div>
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

      {/* Stats */}
      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
            {[
              { value: "AES-256", label: "Encryption Standard" },
              { value: "SOC 2", label: "Type II Audited Annually" },
              { value: "24/7", label: "Threat Monitoring" },
              { value: "Zero", label: "Breaches to Date" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold text-cyan font-[family-name:var(--font-poppins)] mb-1">
                  {s.value}
                </div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Security Documentation Available"
        subtitle="Need our SOC 2 report, security questionnaire responses, or detailed compliance documentation? Request it from your account team."
        primaryLabel="Request Documents →"
        primaryHref="/contact"
        secondaryLabel="View HIPAA Policy"
        secondaryHref="/technology/hipaa-compliance"
      />
    </PageLayout>
  );
}