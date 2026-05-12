import Link from "next/link";

const integrations = {
  "EHR / EMR Systems": [
    "Epic", "Cerner", "Athenahealth", "eClinicalWorks", "Kareo",
    "DrChrono", "Practice Fusion", "NextGen", "Meditech", "Allscripts", "ModMed",
  ],
  "Practice Management": [
    "AdvancedMD", "Brightree", "CollaborateMD", "Office Ally", "WebPT", "NueMD",
  ],
  "Clearinghouses": [
    "Change Healthcare", "Availity", "Waystar", "Optum360", "Trizetto",
  ],
};

export default function TechIntegrations() {
  return (
    <section className="py-20 bg-ice">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3">
            Technology
          </p>
          <h2 className="text-4xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-4">
            Powered by Cutting-Edge RCM Technology
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We integrate seamlessly with the tools your practice already uses,
            eliminating disruption and accelerating results.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(integrations).map(([category, names]) => (
            <div key={category}>
              <h3 className="text-navy font-semibold text-sm uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {names.map((name) => (
                  <div
                    key={name}
                    className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-charcoal hover:border-cyan hover:text-cyan transition-colors cursor-default"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
          >
            See All Integrations →
          </Link>
        </div>
      </div>
    </section>
  );
}