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
      { label: "Physician Groups", href: "/industries/physician-practices" },
      { label: "Hospitals", href: "/industries/hospitals" },
      { label: "Telehealth", href: "/industries/telehealth" },
      { label: "Clinics", href: "/industries/clinics" },
      { label: "Urgent Care", href: "/industries/urgent-care" },
      { label: "Behavioral Health", href: "/industries/behavioral-health" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faq" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Downloads", href: "/resources" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Webinars", href: "/webinars" },
    ],
  },
];

const contact = [
  { icon: "📞", label: "[(XXX) XXX-XXXX]", href: "tel:[PHONE]" },
  { icon: "✉️", label: "info@[domain].com", href: "mailto:info@[domain].com" },
  { icon: "📍", label: "[Street Address, City, State, ZIP]", href: null },
  { icon: "🔗", label: "LinkedIn", href: "https://linkedin.com/company/[handle]" },
  { icon: "🕐", label: "Mon–Fri 8AM–6PM [TZ]", href: null },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Top brand row */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12 pb-10 border-b border-white/10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RCM</span>
              </div>
              <span className="text-white font-bold text-lg font-[family-name:var(--font-poppins)]">
                [Company Name]
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Expert Medical Billing &amp; Revenue Cycle Management for healthcare
              providers across the United States.
            </p>
          </div>
          <div className="lg:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
            <Link
              href="/free-audit"
              className="bg-cyan text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0090B0] transition-colors text-center"
            >
              Get Free Audit →
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* 5-column nav grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
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
                      className="text-white/55 hover:text-cyan text-sm transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              {contact.map((c) => (
                <li key={c.label} className="flex items-start gap-2 text-white/55 text-sm">
                  <span className="shrink-0">{c.icon}</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-cyan transition-colors leading-snug"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span className="leading-snug">{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
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
              "🏆 BBB A+",
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
          <p>© {new Date().getFullYear()} [Company Name]. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/technology/hipaa-compliance" className="hover:text-white transition-colors">HIPAA</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}