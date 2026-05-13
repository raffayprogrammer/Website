import Link from "next/link";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Hero copy variants — A/B test by changing ACTIVE_VARIANT below            */
/*  Per Section 3.1 spec                                                       */
/* ────────────────────────────────────────────────────────────────────────── */

const variants = {
  A: {
    headline: ["Stop Losing Revenue.", "Start Maximizing It."],
    subheadline:
      "End-to-end Medical Billing & Revenue Cycle Management that gets your practice paid — faster, more accurately, and with full HIPAA compliance.",
  },
  B: {
    headline: ["Your Revenue Cycle,", "Optimized."],
    subheadline:
      "Expert medical billing, coding, and RCM services trusted by 500+ healthcare providers across the United States.",
  },
  C: {
    headline: ["We Bill.", "You Heal."],
    subheadline:
      "Let [Company Name] handle every step of your revenue cycle — from charge entry to payment posting — so you can focus on patient care.",
  },
  D: {
    headline: ["98% Collection Rate.", "Zero Billing Headaches."],
    subheadline:
      "The most trusted medical billing and RCM partner for physician practices, clinics, hospitals, and telehealth providers in the USA.",
  },
} as const;

const ACTIVE_VARIANT: keyof typeof variants = "A"; // Recommended

/* ────────────────────────────────────────────────────────────────────────── */

export default function Hero() {
  const { headline, subheadline } = variants[ACTIVE_VARIANT];

  return (
    <section className="relative min-h-[720px] flex items-center bg-navy overflow-hidden pt-24 pb-16">
      {/* Background: dark navy gradient overlay (suggests healthcare professional dashboard scene) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(13,27,42,0.98) 0%, rgba(26,60,110,0.95) 45%, rgba(0,169,206,0.25) 100%)",
        }}
      />

      {/* Decorative healthcare-themed pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10v40M10 30h40' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
      }} />

      <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-cyan opacity-10 blur-3xl" />
      <div className="absolute -left-32 -bottom-32 w-[400px] h-[400px] rounded-full bg-blue-mid opacity-15 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
        {/* LEFT: copy */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-white text-sm font-medium">
              Trusted by 500+ Healthcare Providers Nationwide
            </span>
          </div>

          {/* Headline */}
          <h1 className="t-h1-hero text-white mb-6 font-[family-name:var(--font-poppins)]">
            {headline[0]}
            <br />
            <span className="text-cyan">{headline[1]}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed">
            {subheadline}
          </p>

          {/* CTA Buttons (per spec exact text + ▶ prefix and → suffix) */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-audit"
              className="bg-cyan text-white t-cta px-7 py-3.5 rounded-lg hover:bg-[#0090B0] transition-colors inline-flex items-center gap-2"
            >
              ▶ Get Your Free Revenue Audit →
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white t-cta px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2 backdrop-blur-sm"
            >
              ▶ Schedule a Free Consultation →
            </Link>
          </div>
        </div>

        {/* RIGHT: Dashboard mockup with floating stat widgets */}
        <div className="relative h-[480px] hidden lg:block">
          {/* Main "dashboard" card */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 overflow-hidden">
            {/* Mock window chrome */}
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-amber/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-teal/70" />
              <span className="ml-3 text-white/40 text-[10px] font-mono">
                rcm-dashboard / overview
              </span>
            </div>

            {/* Mock KPIs */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: "Net Collections", value: "$1.24M", trend: "+12%" },
                { label: "Days in AR", value: "27", trend: "−18%" },
                { label: "Clean Claim", value: "96.4%", trend: "+4.2%" },
                { label: "Denial Rate", value: "4.1%", trend: "−6.1%" },
              ].map((k) => (
                <div key={k.label} className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <div className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mb-1">
                    {k.label}
                  </div>
                  <div className="text-white text-lg font-bold font-[family-name:var(--font-poppins)] tabular-nums">
                    {k.value}
                  </div>
                  <div className="text-teal text-[10px] font-semibold">{k.trend}</div>
                </div>
              ))}
            </div>

            {/* Mock chart */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <div className="flex justify-between text-[10px] text-white/50 mb-2">
                <span>Monthly Revenue</span>
                <span>2026</span>
              </div>
              <div className="flex items-end gap-1 h-24">
                {[40, 55, 50, 70, 75, 85, 80, 92, 95, 100, 98, 110].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-cyan rounded-sm transition-all"
                    style={{
                      height: `${h * 0.85}%`,
                      opacity: 0.5 + (i / 12) * 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* FLOATING WIDGET 1: 98% Collection Rate (top-left, overlapping) */}
          <div className="absolute -top-6 -left-10 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 flex items-center gap-3 animate-[fadeInUp_0.6s_ease-out]">
            <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center text-white text-lg">
              📈
            </div>
            <div>
              <div className="text-navy text-xl font-bold font-[family-name:var(--font-poppins)] tabular-nums leading-none">
                98%+
              </div>
              <div className="text-body text-[11px] mt-0.5">Collection Rate</div>
            </div>
          </div>

          {/* FLOATING WIDGET 2: 24-hr Turnaround (mid-right, overlapping) */}
          <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan rounded-lg flex items-center justify-center text-white text-lg">
              ⚡
            </div>
            <div>
              <div className="text-navy text-xl font-bold font-[family-name:var(--font-poppins)] tabular-nums leading-none">
                24hr
              </div>
              <div className="text-body text-[11px] mt-0.5">Claim Turnaround</div>
            </div>
          </div>

          {/* FLOATING WIDGET 3: HIPAA Badge (bottom-left, overlapping) */}
          <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <div className="text-navy text-base font-bold font-[family-name:var(--font-poppins)] leading-none">
                HIPAA
              </div>
              <div className="text-body text-[11px] mt-0.5">Compliant</div>
            </div>
          </div>
        </div>

        {/* MOBILE: stat widgets row (since right column hidden on mobile) */}
        <div className="flex flex-wrap gap-3 lg:hidden">
          <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2.5">
            <div className="w-1.5 h-8 rounded-full bg-cyan" />
            <div>
              <div className="text-white font-bold text-base">98%+</div>
              <div className="text-white/60 text-[10px]">Collection Rate</div>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2.5">
            <div className="w-1.5 h-8 rounded-full bg-cyan" />
            <div>
              <div className="text-white font-bold text-base">24hr</div>
              <div className="text-white/60 text-[10px]">Turnaround</div>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2.5">
            <div className="w-7 h-7 bg-teal rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-white font-bold text-sm">HIPAA</div>
          </div>
        </div>
      </div>
    </section>
  );
}