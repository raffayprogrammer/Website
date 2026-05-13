import CountUp from "@/components/shared/CountUp";

/* Section 3.3 — Statistics Counter Section
   All 6 spec stats with icon suggestions mapped to emoji equivalents. */
type Stat = {
  value: number | string;
  suffix?: string;
  label: string;
  icon: string;
  /** If true, render as static text (e.g. ranges like "24–48"). */
  staticValue?: boolean;
};

const stats: Stat[] = [
  { value: 98,       suffix: "%+",  label: "Average Collection Rate",         icon: "📈" },  // Dollar sign / chart arrow
  { value: 500,      suffix: "+",   label: "Healthcare Providers Served",     icon: "🩺" },  // Medical cross / stethoscope
  { value: 10,       suffix: "M+",  label: "Claims Processed Annually",       icon: "📋" },  // Document stack
  { value: "24–48",  suffix: " Hrs",label: "Average Claim Turnaround",        icon: "⚡", staticValue: true }, // Clock / speed
  { value: 15,       suffix: "+",   label: "Years of Industry Experience",    icon: "🏆" },  // Award / star
  { value: 35,       suffix: "%",   label: "Avg Revenue Increase for Clients",icon: "🚀" },  // Growth arrow
];

export default function StatsBar() {
  return (
    <section className="bg-ice py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl p-5 text-center shadow-card border border-gray-100 card-hover border-l-4 border-l-cyan"
            >
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-1 tabular-nums">
                {s.staticValue ? (
                  <>
                    {s.value}
                    {s.suffix}
                  </>
                ) : (
                  <CountUp end={s.value as number} suffix={s.suffix ?? ""} />
                )}
              </div>
              <div className="text-xs lg:text-sm text-body leading-tight font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}