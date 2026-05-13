import Link from "next/link";

/* Section 3.5 — Services Highlight Grid
   All 11 services with spec-exact 1-line descriptions and icon suggestions.
   Icon suggestions from spec mapped to closest emoji equivalents:
   Medical Billing       → Invoice/document     → 📄
   Medical Coding        → Code brackets        → ⟨/⟩ (rendered as text)
   RCM                   → Circular arrows      → 🔄
   Denial Management     → Shield/alert         → 🛡️
   Credentialing         → Certificate/badge    → 📜
   AR Recovery           → Cash/recovery        → 💰
   Eligibility Verif.    → Checkmark/person     → ✅
   Prior Authorization   → Lock/approval        → 🔐
   Charge Entry          → Plus/data entry      → ➕
   Payment Posting       → Receipt/posting      → 🧾
   Virtual Medical Asst. → Headset/person       → 🎧 */
const services = [
  {
    icon: "📄",
    title: "Medical Billing",
    desc: "Accurate, compliant claims submission with faster reimbursements",
    href: "/services/medical-billing",
  },
  {
    icon: "</>",
    title: "Medical Coding",
    desc: "ICD-10, CPT, HCPCS coding by certified coders for maximum accuracy",
    href: "/services/medical-coding",
  },
  {
    icon: "🔄",
    title: "Revenue Cycle Management",
    desc: "End-to-end RCM from patient intake to final payment posting",
    href: "/services/revenue-cycle-management",
  },
  {
    icon: "🛡️",
    title: "Denial Management",
    desc: "Aggressive denial resolution to recover your lost revenue",
    href: "/services/denial-management",
  },
  {
    icon: "📜",
    title: "Provider Credentialing",
    desc: "Streamlined credentialing with insurance payers nationwide",
    href: "/services/credentialing",
  },
  {
    icon: "💰",
    title: "AR Recovery",
    desc: "Systematic follow-up on aged receivables to maximize collections",
    href: "/services/accounts-receivable",
  },
  {
    icon: "✅",
    title: "Eligibility Verification",
    desc: "Real-time insurance verification before every patient visit",
    href: "/services/eligibility-verification",
  },
  {
    icon: "🔐",
    title: "Prior Authorization",
    desc: "Fast, compliant prior auth management to prevent delays",
    href: "/services/prior-authorization",
  },
  {
    icon: "➕",
    title: "Charge Entry",
    desc: "Accurate, same-day charge capture for every patient encounter",
    href: "/services/charge-entry",
  },
  {
    icon: "🧾",
    title: "Payment Posting",
    desc: "Precise ERA/EOB posting with daily reconciliation",
    href: "/services/payment-posting",
  },
  {
    icon: "🎧",
    title: "Virtual Medical Assistants",
    desc: "Trained VMAs to handle administrative workflows seamlessly",
    href: "/services/virtual-medical-assistants",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3">
            Our Services
          </p>
          <h2 className="t-h2-section font-[family-name:var(--font-poppins)] mb-4">
            Everything Your Revenue Cycle Needs
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            From patient eligibility checks to final payment reconciliation, we
            handle your entire revenue cycle with precision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-white border-l-4 border-l-transparent border border-gray-100 rounded-xl p-6 card-hover shadow-sm flex flex-col gap-3"
            >
              <div className="text-3xl font-mono text-navy">{s.icon}</div>
              <h3 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)]">
                {s.title}
              </h3>
              <p className="text-body text-sm leading-relaxed flex-1">{s.desc}</p>
              <span className="text-cyan font-semibold text-sm group-hover:gap-2 transition-all inline-flex items-center gap-1">
                Learn More →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy t-cta px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
          >
            ▶ View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}