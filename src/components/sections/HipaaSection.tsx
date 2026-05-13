import Link from "next/link";

const items = [
  "256-bit AES Data Encryption",
  "Role-Based Access Control (RBAC)",
  "Annual HIPAA Training for All Staff",
  "Business Associate Agreements (BAA) with All Clients",
  "SOC 2 Type II Compliant Infrastructure",
  "Secure VPN & Zero-Trust Network Architecture",
  "Complete Audit Trail Logging",
  "HIPAA-Compliant Communication Tools",
];

export default function HipaaSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <div>
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3">
              Data Security
            </p>
            <h2 className="t-h2-section text-white font-[family-name:var(--font-poppins)] mb-6" style={{ color: "#fff" }}>
              Your Data.{" "}
              <span className="text-cyan">Protected. Always.</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              At [Company Name], HIPAA compliance is not a checkbox — it is the
              foundation of everything we do. We implement enterprise-grade
              security protocols to protect your PHI at every stage of the
              billing cycle.
            </p>
            <Link
              href="/technology/hipaa-compliance"
              className="inline-flex items-center gap-2 bg-cyan text-white t-cta px-6 py-3 rounded-lg hover:bg-[#0090B0] transition-colors"
            >
              ▶ View Our HIPAA Compliance Policy →
            </Link>
          </div>

          {/* Right: checklist */}
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <span className="w-6 h-6 bg-teal rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-white/90 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badge row */}
        <div className="mt-14 pt-10 border-t border-white/10 flex flex-wrap gap-4 justify-center">
          {["HIPAA Certified", "SOC 2 Type II", "AAPC Certified", "AHIMA Certified", "BAA Available"].map((badge) => (
            <div
              key={badge}
              className="bg-white/10 border border-white/20 rounded-full px-5 py-2 text-white text-sm font-medium"
            >
              🛡️ {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}