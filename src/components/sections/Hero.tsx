import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-24 pb-0">

      {/* Big red radial glow centered behind the headline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(220,38,38,0.35) 0%, rgba(220,38,38,0.12) 35%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Center content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center">

        {/* Trust badge — dark pill matching byredstone */}
        <div className="inline-flex items-center gap-2.5 bg-[#1a1a1a] border border-white/10 rounded-full px-5 py-2 mb-12 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse shrink-0" />
          <span className="text-white/85 text-sm font-medium">
            Trusted by 500+ Healthcare Providers Nationwide
          </span>
        </div>

        {/* Headline — red word in middle with glow */}
        <h1
          className="text-white font-bold font-[family-name:var(--font-poppins)] leading-[1.05] mb-8 tracking-tight"
          style={{ fontSize: "clamp(48px, 7vw, 92px)" }}
        >
          Stop Losing{" "}
          <span
            className="text-cyan"
            style={{
              textShadow: "0 0 40px rgba(220,38,38,0.5), 0 0 80px rgba(220,38,38,0.3)",
            }}
          >
            Revenue
          </span>
          <br />
          That Drives Growth.
        </h1>

        {/* Subheadline */}
        <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
          End-to-end Medical Billing &amp; Revenue Cycle Management that gets
          your practice paid — faster, more accurately, and with full HIPAA
          compliance. Serving 500+ providers since 2014.
        </p>

        {/* CTAs — rounded full like byredstone */}
        <div className="flex flex-wrap gap-4 justify-center mb-24">
          <Link
            href="/free-audit"
            className="bg-cyan text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#b91c1c] transition-colors inline-flex items-center gap-2 shadow-[0_0_40px_rgba(220,38,38,0.4)]"
          >
            Start Your Free Audit
            <span className="text-lg">→</span>
          </Link>
          <Link
            href="/contact"
            className="bg-[#1a1a1a] border border-white/15 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#252525] transition-colors"
          >
            View Our Work
          </Link>
        </div>

        {/* Stats row */}
        <div className="w-full pt-10 pb-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
          {[
            { value: "500+",  label: "Providers Served"  },
            { value: "98%+",  label: "Collection Rate"   },
            { value: "24hr",  label: "Claim Turnaround"  },
            { value: "HIPAA", label: "Compliant"         },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span
                className="text-cyan font-bold font-[family-name:var(--font-poppins)] leading-none tracking-tight"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                {s.value}
              </span>
              <span className="text-white/45 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
