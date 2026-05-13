import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "HIPAA Compliant Medical Billing Company | [Company Name]",
  description:
    "Learn how [Company Name] maintains full HIPAA compliance across all medical billing and RCM operations. BAA available, SOC 2 compliant, PHI protected.",
};

const commitments = [
  "Signed BAA with every client before any PHI is accessed",
  "Annual HIPAA training for 100% of employees",
  "Annual third-party HIPAA risk assessments",
  "256-bit AES encryption for all PHI at rest and in transit",
  "SOC 2 Type II compliant infrastructure",
  "Role-based access control — minimum necessary standard",
  "Complete and immutable audit logs for all PHI access",
  "Documented and tested breach notification plan",
  "HIPAA Security Officer designated and active",
  "HIPAA Privacy Officer designated and active",
  "Zero-tolerance sanction policy for HIPAA violations",
];

const safeguards = [
  { name: "Data Encryption (at rest)", impl: "AES-256", level: "HIPAA Required" },
  { name: "Data Encryption (in transit)", impl: "TLS 1.3", level: "HIPAA Required" },
  { name: "Authentication", impl: "MFA + RBAC", level: "HIPAA Required" },
  { name: "Audit Controls", impl: "Automated logging of all PHI access events", level: "HIPAA Required" },
  { name: "Automatic Logoff", impl: "Session timeout after configurable minutes", level: "HIPAA Required" },
  { name: "Data Backup", impl: "Daily encrypted backups with off-site storage", level: "HIPAA Required" },
  { name: "Access Management", impl: "Provisioning/deprovisioning within 24 hours", level: "HIPAA Required" },
  { name: "Penetration Testing", impl: "Annual third-party pen testing", level: "Exceeds HIPAA" },
  { name: "Vulnerability Scanning", impl: "Continuous automated scanning", level: "Exceeds HIPAA" },
  { name: "SOC 2 Type II", impl: "Annual SOC 2 audit by accredited firm", level: "Exceeds HIPAA" },
];

export default function HipaaCompliancePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="HIPAA Compliance"
        title="HIPAA Compliance Is Not Optional. For Us, It's Foundational."
        subtitle="Every single process, system, and employee at [Company Name] is built around one non-negotiable principle: the absolute protection of Protected Health Information (PHI). We don't just meet HIPAA requirements — we exceed them."
        crumbs={[
          { label: "Technology", href: "/technology" },
          { label: "HIPAA Compliance" },
        ]}
      />

      {/* Commitments */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Our HIPAA Commitments
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              How We Protect Your PHI
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {commitments.map((c) => (
              <div
                key={c}
                className="bg-ice border border-gray-100 rounded-xl p-5 flex items-start gap-3 card-hover border-l-4 border-l-teal"
              >
                <span className="w-6 h-6 bg-teal rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-charcoal text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical safeguards table */}
      <section className="py-16 bg-ice">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Technical Safeguards
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              HIPAA Technical Implementation
            </h2>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[600px] bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-3 bg-navy text-white font-semibold text-sm px-6 py-4">
                <div>Safeguard</div>
                <div>Implementation</div>
                <div className="text-right">Standard</div>
              </div>
              {safeguards.map((s) => (
                <div key={s.name} className="grid grid-cols-3 px-6 py-4 border-t border-gray-100 text-sm items-center">
                  <div className="font-semibold text-navy">{s.name}</div>
                  <div className="text-charcoal">{s.impl}</div>
                  <div className="text-right">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        s.level === "Exceeds HIPAA"
                          ? "bg-teal/10 text-teal border border-teal/20"
                          : "bg-cyan/10 text-cyan border border-cyan/20"
                      }`}
                    >
                      {s.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BAA */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
            Business Associate Agreement
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-[family-name:var(--font-poppins)] mb-5">
            Every Client Gets a Signed BAA
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-7 leading-relaxed">
            A Business Associate Agreement (BAA) is a legal contract required under HIPAA
            between a covered entity (your practice) and a business associate (us) that
            handles PHI on your behalf. We execute a fully HIPAA-compliant BAA with every
            client prior to accessing any patient data.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Request a BAA Today"
        subtitle="Already comparing billing partners? Request our Business Associate Agreement to begin your compliance review."
        primaryLabel="Request BAA →"
        primaryHref="/contact"
        secondaryLabel="View Data Security"
        secondaryHref="/technology/data-security"
      />
    </PageLayout>
  );
}