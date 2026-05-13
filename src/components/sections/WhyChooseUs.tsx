/* Section 3.7 — Why Choose [Company Name]
   Six differentiators with spec-verbatim copy. */
const reasons = [
  {
    icon: "🎓",
    title: "Certified Expertise",
    desc: "Our team of AAPC-certified coders, RCM specialists, and healthcare billing experts brings decades of combined experience across 30+ medical specialties.",
  },
  {
    icon: "🔒",
    title: "HIPAA-First Culture",
    desc: "Every workflow, communication channel, and data touchpoint is engineered for HIPAA compliance. Your patients' data is always protected.",
  },
  {
    icon: "🤖",
    title: "Technology-Powered",
    desc: "We leverage AI-assisted coding tools, automated eligibility verification, and real-time denial tracking to outperform traditional billing teams.",
  },
  {
    icon: "📊",
    title: "Transparent Reporting",
    desc: "You always know where your money is. Our live dashboards give you instant visibility into claims status, collections, and denial trends.",
  },
  {
    icon: "💼",
    title: "No Revenue, No Fee",
    desc: "Our performance-based pricing model means we succeed only when you succeed. No hidden fees, no surprises.",
  },
  {
    icon: "🏥",
    title: "Specialty-Specific Knowledge",
    desc: "From primary care to complex surgical specialties, our teams are trained on the specific coding and billing rules of your specialty.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-ice">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: headline + description */}
          <div className="lg:sticky lg:top-28">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3">
              Why Choose Us
            </p>
            <h2 className="t-h2-section font-[family-name:var(--font-poppins)] mb-6">
              The Smart Choice for Healthcare Revenue
            </h2>
            <p className="text-body leading-relaxed mb-8">
              Every medical billing company claims to be the best. We let our
              results speak — 98%+ collection rates, sub-5% denial rates, and
              500+ satisfied healthcare clients nationwide.
            </p>

            {/* Guarantee box */}
            <div className="bg-white border-l-4 border-l-teal rounded-xl p-6 shadow-sm space-y-2">
              <h3 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)]">
                Our Guarantee
              </h3>
              {[
                "If we don't improve your collection rate within 90 days, you pay nothing extra.",
                "Response to all client inquiries within 2 business hours.",
                "Zero HIPAA violation policy — your patients' data is always protected.",
                "Complete billing transparency — you see everything we do, in real time.",
              ].map((g) => (
                <div key={g} className="flex items-start gap-2 text-sm text-charcoal">
                  <span className="text-teal font-bold mt-0.5">✓</span>
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover border-l-4 border-l-cyan"
              >
                <div className="text-2xl mb-3">{r.icon}</div>
                <h3 className="font-bold text-navy text-base font-[family-name:var(--font-poppins)] mb-2">
                  {r.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}