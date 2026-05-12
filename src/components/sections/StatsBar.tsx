const stats = [
  { value: "98%+", label: "Average Collection Rate", icon: "📈" },
  { value: "500+", label: "Healthcare Providers Served", icon: "🏥" },
  { value: "10M+", label: "Claims Processed Annually", icon: "📋" },
  { value: "24–48hr", label: "Average Claim Turnaround", icon: "⚡" },
  { value: "15+", label: "Years of Industry Experience", icon: "🏆" },
  { value: "35%", label: "Avg Revenue Increase for Clients", icon: "🚀" },
];

export default function StatsBar() {
  return (
    <section className="bg-ice py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 card-hover border-l-4 border-l-cyan"
            >
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-1">
                {s.value}
              </div>
              <div className="text-xs text-body leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}