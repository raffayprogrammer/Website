const steps = [
  {
    num: "01",
    title: "Free Revenue Audit",
    desc: "We analyze your current billing processes, denial rates, and collection performance to identify revenue gaps.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "Custom Strategy",
    desc: "Our team designs a tailored RCM solution based on your specialty, payer mix, and volume.",
    icon: "💡",
  },
  {
    num: "03",
    title: "Seamless Onboarding",
    desc: "We integrate with your existing EHR/PM system and onboard your team within 5–7 business days.",
    icon: "🤝",
  },
  {
    num: "04",
    title: "Billing & Collections",
    desc: "Our certified billers and coders take over your revenue cycle with full transparency and reporting.",
    icon: "⚙️",
  },
  {
    num: "05",
    title: "Results & Reporting",
    desc: "Receive real-time dashboards and monthly performance reports showing your collection improvements.",
    icon: "📊",
  },
  {
    num: "06",
    title: "Ongoing Optimization",
    desc: "We continuously monitor payer trends, code updates, and denial patterns to keep your revenue maximized.",
    icon: "🔁",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-ice">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3">
            Simple Process
          </p>
          <h2 className="text-4xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-4">
            Your Path to a Healthier Revenue Cycle
          </h2>
          <p className="text-body max-w-xl mx-auto">
            Getting started is simple. We onboard your practice seamlessly — no
            disruption, no downtime.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 card-hover border-l-4 border-l-cyan"
            >
              {/* Step number badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-navy rounded-full flex items-center justify-center shadow">
                <span className="text-white text-xs font-bold">{step.num}</span>
              </div>

              {/* Connector line (decorative, between cards) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 z-10">
                  <div className="h-0.5 bg-cyan/30 w-full" />
                </div>
              )}

              <div className="text-3xl mb-4 mt-2">{step.icon}</div>
              <h3 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)] mb-2">
                {step.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}