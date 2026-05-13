import CountUp from "@/components/shared/CountUp";

const stats = [
  { value: 10, suffix: "M+", label: "Claims Processed Annually", icon: "📋" },
  { value: 98, suffix: "%+", label: "Average Collection Rate", icon: "📈" },
  { value: 15, suffix: "+", label: "Years of Industry Experience", icon: "🏆" },
  { value: 500, suffix: "+", label: "Healthcare Providers Served", icon: "🏥" },
];

export default function StatsBar() {
  return (
    <section className="bg-ice py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl p-6 text-center shadow-card border border-gray-100 card-hover border-l-4 border-l-cyan"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-1 tabular-nums">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-body leading-tight font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}