import Link from "next/link";

const cols = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Careers", href: "/careers" },
      { label: "HIPAA Compliance", href: "/technology/hipaa-compliance" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Medical Billing", href: "/services/medical-billing" },
      { label: "Medical Coding", href: "/services/medical-coding" },
      { label: "RCM", href: "/services/revenue-cycle-management" },
      { label: "Denial Management", href: "/services/denial-management" },
      { label: "Credentialing", href: "/services/credentialing" },
      { label: "AR Recovery", href: "/services/accounts-receivable" },
      { label: "Prior Authorization", href: "/services/prior-authorization" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Physician Practices", href: "/industries/physician-practices" },
      { label: "Hospitals", href: "/industries/hospitals" },
      { label: "Telehealth", href: "/industries/telehealth" },
      { label: "Behavioral Health", href: "/industries/behavioral-health" },
      { label: "Urgent Care", href: "/industries/urgent-care" },
      { label: "Clinics", href: "/industries" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "FAQs", href: "/faq" },
      { label: "Downloads", href: "/resources" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Top: logo + cols */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cyan rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">RCM</span>
              </div>
              <span className="text-white font-bold text-base font-[family-name:var(--font-poppins)]">
                [Company Name]
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Expert Medical Billing &amp; Revenue Cycle Management for
              healthcare providers across the United States.
            </p>
            <div className="space-y-1 text-sm text-white/60">
              <p>📞 [(XXX) XXX-XXXX]</p>
              <p>✉️ info@[domain].com</p>
              <p>🕐 Mon–Fri 8AM–6PM</p>
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white/50 hover:text-cyan text-sm transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "✅ AAPC Certified",
              "✅ AHIMA Certified",
              "🔒 HIPAA Compliant",
              "🛡️ SOC 2 Type II",
              "📋 BAA Available",
              "⭐ MGMA Member",
              "⭐ HFMA Member",
            ].map((badge) => (
              <span
                key={badge}
                className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-white/70 text-xs font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} [Company Name]. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/technology/hipaa-compliance" className="hover:text-white transition-colors">HIPAA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}