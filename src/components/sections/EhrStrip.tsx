/* Per spec 3.2 Trust Strip — Epic, Athenahealth, eClinicalWorks, Kareo,
   DrChrono, Practice Fusion, NextGen, Cerner, AllScripts (in that order),
   plus additional supported systems. Heading shown BELOW the scrolling logos. */
const ehrs = [
  "Epic", "Athenahealth", "eClinicalWorks", "Kareo", "DrChrono",
  "Practice Fusion", "NextGen", "Cerner", "Allscripts",
  "Meditech", "ModMed", "AdvancedMD", "Greenway Health", "ChARM EHR", "SimplePractice",
];

export default function EhrStrip() {
  return (
    <section className="bg-white border-y border-gray-100 py-7 overflow-hidden">
      {/* Scrolling logos */}
      <div className="relative flex overflow-hidden mask-fade mb-4">
        <div className="flex animate-marquee gap-12 whitespace-nowrap items-center">
          {[...ehrs, ...ehrs].map((name, i) => (
            <span
              key={i}
              className="logo-mono text-navy font-bold text-base shrink-0 px-2 tracking-wide"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Heading BELOW logos (per spec) */}
      <p className="text-center text-xs text-body uppercase tracking-widest font-semibold">
        Integrated with 50+ EHR/EMR Systems
      </p>

      <style>{`
        .mask-fade {
          mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
        }
      `}</style>
    </section>
  );
}