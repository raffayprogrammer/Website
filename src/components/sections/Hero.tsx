import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[680px] flex items-center bg-navy overflow-hidden">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(26,60,110,0.97) 55%, rgba(0,169,206,0.18) 100%)",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-cyan opacity-5" />
      <div className="absolute right-20 bottom-0 w-[300px] h-[300px] rounded-full bg-blue-mid opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-white text-sm font-medium">
              Trusted by 500+ Healthcare Providers Nationwide
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-[family-name:var(--font-poppins)]">
            Stop Losing Revenue.
            <br />
            <span className="text-cyan">Start Maximizing It.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed">
            End-to-end Medical Billing &amp; Revenue Cycle Management that gets
            your practice paid — faster, more accurately, and with full HIPAA
            compliance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/free-audit"
              className="bg-cyan text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#0090B0] transition-colors text-base"
            >
              ▶ Get Your Free Revenue Audit
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              Schedule a Free Consultation →
            </Link>
          </div>

          {/* Floating stat widgets */}
          <div className="flex flex-wrap gap-4">
            {[
              { value: "98%+", label: "Collection Rate" },
              { value: "24–48hr", label: "Claim Turnaround" },
              { value: "500+", label: "Providers Served" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3"
              >
                <div className="w-2 h-10 rounded-full bg-cyan" />
                <div>
                  <div className="text-white font-bold text-xl font-[family-name:var(--font-poppins)]">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </div>
              </div>
            ))}
            {/* HIPAA badge */}
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-2">
              <div className="w-8 h-8 bg-teal rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">HIPAA</div>
                <div className="text-white/60 text-xs">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}