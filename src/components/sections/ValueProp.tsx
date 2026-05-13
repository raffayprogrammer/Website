import Link from "next/link";

const checks = [
  "100% HIPAA Compliant Operations",
  "AAPC & AHIMA Certified Coders",
  "No Long-Term Contracts Required",
  "Dedicated Account Manager for Every Client",
  "Real-Time Reporting Dashboard",
];

export default function ValueProp() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3">
              Why It Matters
            </p>
            <h2 className="t-h2-section mb-6 font-[family-name:var(--font-poppins)]">
              Your Revenue Cycle Deserves Better
            </h2>
            <p className="text-body text-base leading-relaxed mb-6">
              Healthcare providers lose an estimated{" "}
              <strong className="text-navy">$125 billion annually</strong> due
              to claim denials, billing errors, and inefficient revenue cycle
              processes. At [Company Name], we exist to change that.
            </p>
            <p className="text-body text-base leading-relaxed mb-8">
              We are a full-service Medical Billing and Revenue Cycle Management
              company serving physician practices, hospitals, clinics, and
              telehealth providers across the United States. Our certified
              billers, coders, and RCM specialists work as an extension of your
              team — with one goal: maximize every dollar you&apos;ve earned.
            </p>
            <ul className="space-y-3 mb-8">
              {checks.map((item) => (
                <li key={item} className="flex items-center gap-3 text-charcoal">
                  <span className="w-5 h-5 rounded-full bg-teal flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-navy text-white t-cta px-6 py-3 rounded-lg hover:bg-blue-mid transition-colors"
            >
              ▶ Discover Our Services →
            </Link>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            <div className="bg-ice rounded-2xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-navy font-[family-name:var(--font-poppins)]">
                  $125B
                </div>
                <div className="text-body mt-1">
                  Lost annually due to billing inefficiencies
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Claim Denial Losses", pct: 42, color: "bg-amber" },
                  { label: "Billing Errors", pct: 31, color: "bg-navy" },
                  { label: "Inefficient Processes", pct: 27, color: "bg-cyan" },
                ].map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between text-sm text-body mb-1">
                      <span>{b.label}</span>
                      <span className="font-semibold text-charcoal">{b.pct}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${b.color} h-2 rounded-full`}
                        style={{ width: `${b.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-teal/10 border border-teal/20 rounded-xl text-center">
                <div className="text-teal font-bold text-lg">
                  We recover what others miss
                </div>
                <div className="text-body text-sm mt-1">
                  Average 35% revenue increase within 12 months
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}