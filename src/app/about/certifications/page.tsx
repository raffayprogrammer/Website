import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Certifications & Accreditations | [Company Name]",
  description:
    "View our certifications and accreditations including AAPC, AHIMA, HIPAA, SOC 2 Type II, MGMA, HFMA, and BBB.",
};

const certs = [
  {
    name: "AAPC",
    full: "American Academy of Professional Coders",
    desc: "All our coders maintain active AAPC certifications including CPC, COC, CIC, and CRC.",
    icon: "🎓",
  },
  {
    name: "AHIMA",
    full: "American Health Information Management Association",
    desc: "Our team holds AHIMA credentials including CCS, RHIA, and RHIT for inpatient and specialty coding.",
    icon: "📋",
  },
  {
    name: "HIPAA",
    full: "HIPAA Compliance Certification",
    desc: "Full HIPAA compliance framework with annual risk assessments, training, and third-party audits.",
    icon: "🔒",
  },
  {
    name: "SOC 2 Type II",
    full: "Service Organization Control",
    desc: "Audited annually for security, availability, processing integrity, confidentiality, and privacy.",
    icon: "🛡️",
  },
  {
    name: "MGMA",
    full: "Medical Group Management Association",
    desc: "Active member organization committed to excellence in medical practice management.",
    icon: "⭐",
  },
  {
    name: "HFMA",
    full: "Healthcare Financial Management Association",
    desc: "Members of HFMA contributing to financial best practices across the healthcare industry.",
    icon: "💼",
  },
  {
    name: "BBB A+ Rating",
    full: "Better Business Bureau",
    desc: "A+ Rated by the Better Business Bureau for ethics, transparency, and customer satisfaction.",
    icon: "🏆",
  },
];

export default function CertificationsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Certifications"
        title="Certified Expertise You Can Trust"
        subtitle="Every certification and accreditation we hold represents an unwavering commitment to accuracy, compliance, and excellence in medical billing and RCM."
        crumbs={[{ label: "About Us", href: "/about" }, { label: "Certifications" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certs.map((c) => (
              <div
                key={c.name}
                className="bg-ice border border-gray-100 rounded-2xl p-6 card-hover border-l-4 border-l-cyan"
              >
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)] mb-1">
                  {c.name}
                </h3>
                <p className="text-cyan text-xs uppercase tracking-widest font-semibold mb-3">
                  {c.full}
                </p>
                <p className="text-body text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Verify Our Credentials"
        subtitle="Need to verify a specific certification or request our compliance documentation? Contact us anytime."
        primaryLabel="Contact Us →"
        primaryHref="/contact"
        secondaryLabel="View HIPAA Policy"
        secondaryHref="/technology/hipaa-compliance"
      />
    </PageLayout>
  );
}