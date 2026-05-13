const testimonials = [
  {
    quote:
      "[Company Name] transformed our billing department. Our collection rate jumped from 78% to 96% in just three months. The team is professional, responsive, and truly understands our specialty.",
    name: "Dr. [Name]",
    role: "Internal Medicine, [City, State]",
    initials: "DR",
    stat: "+18% collection rate",
  },
  {
    quote:
      "We were struggling with denial rates above 20%. After switching to [Company Name], our denial rate dropped to under 5% within 60 days. The ROI has been phenomenal.",
    name: "Practice Administrator",
    role: "[Specialty Group], [State]",
    initials: "PA",
    stat: "Denial rate: 20% → <5%",
  },
  {
    quote:
      "As a telehealth provider, we needed a billing partner who understands the unique complexities of virtual care. [Company Name] delivered from day one.",
    name: "CEO",
    role: "[Telehealth Company], [State]",
    initials: "CE",
    stat: "98% claim acceptance",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3">
            Client Results
          </p>
          <h2 className="t-h2-section font-[family-name:var(--font-poppins)] mb-4">
            Trusted by Healthcare Providers Nationwide
          </h2>
          <p className="text-body max-w-xl mx-auto">
            Real results from real clients. See what happens when your revenue
            cycle is managed by experts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-ice border border-gray-100 rounded-2xl p-7 flex flex-col gap-5 card-hover border-l-4 border-l-cyan shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 text-amber">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-amber">{s}</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-body text-sm leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Stat highlight */}
              <div className="bg-teal/10 border border-teal/20 rounded-lg px-4 py-2 text-teal font-bold text-sm text-center">
                {t.stat}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-charcoal text-sm">{t.name}</div>
                  <div className="text-body text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}