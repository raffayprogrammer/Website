import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center bg-navy overflow-hidden pt-20 pb-0">

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan opacity-8 blur-[100px] pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center">

        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse shrink-0" />
          <span className="text-white/80 text-sm font-medium">
            Trusted by 500+ Healthcare Providers Nationwide
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white font-bold font-[family-name:var(--font-poppins)] leading-[1.08] mb-6"
          style={{ fontSize: "clamp(48px, 6.5vw, 84px)" }}
        >
          Stop Losing{" "}
          <span className="text-cyan">Revenue.</span>
          <br />
          Start Maximizing It.
        </h1>

        {/* Subheadline */}
        <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
          End-to-end Medical Billing &amp; Revenue Cycle Management that gets
          your practice paid — faster, more accurately, and with full HIPAA
          compliance.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-20">
          <Link
            href="/free-audit"
            className="bg-cyan text-white font-bold text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Start Your Free Audit →
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 border border-white/20 text-white font-bold text-base px-8 py-4 rounded-lg hover:bg-white/15 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Stats row — pinned to bottom of hero like byredstone */}
        <div className="w-full border-t border-white/10 pt-10 pb-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "98%+",  label: "Collection Rate",   accent: true },
            { value: "24hr",  label: "Claim Turnaround",  accent: false },
            { value: "500+",  label: "Providers Served",  accent: true },
            { value: "HIPAA", label: "Compliant",         accent: false },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span
                className={`font-bold font-[family-name:var(--font-poppins)] leading-none ${
                  s.accent ? "text-cyan" : "text-white"
                }`}
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                {s.value}
              </span>
              <span className="text-white/40 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
