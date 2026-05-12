import Link from "next/link";

const industries = [
  { icon: "👨‍⚕️", label: "Primary Care & Internal Medicine" },
  { icon: "❤️", label: "Cardiology" },
  { icon: "🦴", label: "Orthopedics & Sports Medicine" },
  { icon: "🧠", label: "Mental Health & Behavioral Health" },
  { icon: "🩻", label: "Radiology & Imaging" },
  { icon: "🏃", label: "Physical Therapy & Rehab" },
  { icon: "🔬", label: "Dermatology" },
  { icon: "🫀", label: "Gastroenterology" },
  { icon: "👶", label: "Pediatrics" },
  { icon: "🤱", label: "OB/GYN" },
  { icon: "🧬", label: "Neurology" },
  { icon: "💻", label: "Telehealth & Virtual Care" },
  { icon: "🏥", label: "Urgent Care Centers" },
  { icon: "🔪", label: "Ambulatory Surgery Centers" },
  { icon: "🏛️", label: "FQHCs" },
];

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3">
            Specialties We Serve
          </p>
          <h2 className="text-4xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-4">
            Built for Every Healthcare Setting
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Whether you run a solo practice or manage a multi-location hospital
            network, [Company Name] has the expertise and infrastructure to
            scale with you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="bg-ice border border-gray-100 rounded-xl p-4 text-center card-hover group cursor-pointer"
            >
              <div className="text-3xl mb-2">{ind.icon}</div>
              <div className="text-navy text-sm font-semibold leading-tight group-hover:text-cyan transition-colors">
                {ind.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
          >
            See All Specialties →
          </Link>
        </div>
      </div>
    </section>
  );
}