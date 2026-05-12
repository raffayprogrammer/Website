const ehrs = [
  "Epic", "Athenahealth", "eClinicalWorks", "Cerner", "Kareo",
  "DrChrono", "Practice Fusion", "NextGen", "Meditech", "Allscripts",
  "ModMed", "AdvancedMD", "Greenway Health", "ChARM EHR", "SimplePractice",
];

export default function EhrStrip() {
  return (
    <section className="bg-white border-y border-gray-100 py-5 overflow-hidden">
      <p className="text-center text-xs text-body uppercase tracking-widest mb-4 font-medium">
        Integrated with 50+ EHR / EMR Systems
      </p>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {[...ehrs, ...ehrs].map((name, i) => (
            <span
              key={i}
              className="text-navy font-semibold text-sm opacity-60 hover:opacity-100 transition-opacity shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}