"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Nav data                                                                  */
/* ────────────────────────────────────────────────────────────────────────── */

const aboutItems = [
  { label: "Our Story", href: "/about", desc: "How we started and where we're going" },
  { label: "Mission & Vision", href: "/about#mission", desc: "What drives us every day" },
  { label: "Leadership", href: "/about/leadership", desc: "Meet the team behind the results" },
  { label: "Certifications", href: "/about/certifications", desc: "AAPC, AHIMA, HIPAA & SOC 2" },
];

const servicesItems = [
  { label: "Medical Billing", href: "/services/medical-billing", icon: "🧾", desc: "Claims submission & reimbursements" },
  { label: "Medical Coding", href: "/services/medical-coding", icon: "💻", desc: "ICD-10 / CPT / HCPCS coding" },
  { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management", icon: "🔄", desc: "End-to-end RCM solutions" },
  { label: "Denial Management", href: "/services/denial-management", icon: "🛡️", desc: "Aggressive denial resolution" },
  { label: "Provider Credentialing", href: "/services/credentialing", icon: "📜", desc: "Payer enrollment & contracting" },
  { label: "AR Recovery", href: "/services/accounts-receivable", icon: "💰", desc: "Aged receivables collection" },
  { label: "Eligibility Verification", href: "/services/eligibility-verification", icon: "✅", desc: "Real-time insurance checks" },
  { label: "Prior Authorization", href: "/services/prior-authorization", icon: "🔐", desc: "Fast auth management" },
  { label: "Charge Entry", href: "/services/charge-entry", icon: "➕", desc: "Same-day charge capture" },
  { label: "Payment Posting", href: "/services/payment-posting", icon: "🧾", desc: "ERA/EOB reconciliation" },
  { label: "Virtual Medical Assistants", href: "/services/virtual-medical-assistants", icon: "🎧", desc: "Trained remote admin staff" },
];

const industriesItems = [
  { label: "Physician Practices", href: "/industries/physician-practices", icon: "👨‍⚕️" },
  { label: "Hospitals & Health Systems", href: "/industries/hospitals", icon: "🏥" },
  { label: "Clinics", href: "/industries/clinics", icon: "🏛️" },
  { label: "Telehealth Providers", href: "/industries/telehealth", icon: "💻" },
  { label: "Behavioral Health", href: "/industries/behavioral-health", icon: "🧠" },
  { label: "Dental", href: "/industries/dental", icon: "🦷" },
  { label: "Urgent Care Centers", href: "/industries/urgent-care", icon: "🚑" },
  { label: "Ambulatory Surgery", href: "/industries/ambulatory-surgery", icon: "🔪" },
];

const technologyItems = [
  { label: "HIPAA Compliance", href: "/technology/hipaa-compliance", desc: "Our compliance framework" },
  { label: "EHR/EMR Integrations", href: "/technology/integrations", desc: "50+ supported systems" },
  { label: "Data Security", href: "/technology/data-security", desc: "Enterprise-grade protection" },
];

const resourcesItems = [
  { label: "Blog", href: "/blog", desc: "Industry insights & RCM tips" },
  { label: "Case Studies", href: "/case-studies", desc: "Real client success stories" },
  { label: "Downloads", href: "/resources", desc: "Free guides, checklists, calculators" },
  { label: "FAQs", href: "/faq", desc: "Common billing questions answered" },
];

const contactItems = [
  { label: "Get a Free Audit", href: "/free-audit", desc: "Discover hidden revenue gaps", icon: "🎯" },
  { label: "Book Consultation", href: "/contact", desc: "Speak with an RCM expert", icon: "📅" },
];

/* ────────────────────────────────────────────────────────────────────────── */
/*  Types                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */

type Item = { label: string; href: string; desc?: string; icon?: string };

/* ────────────────────────────────────────────────────────────────────────── */
/*  Simple dropdown (single column)                                           */
/* ────────────────────────────────────────────────────────────────────────── */

function SimpleDropdown({
  label,
  items,
  width = "w-72",
}: {
  label: string;
  items: Item[];
  width?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="hover:text-cyan transition-colors flex items-center gap-1 py-7 whitespace-nowrap">
        {label}
        <svg
          className={`w-3 h-3 mt-0.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className={`absolute top-full left-0 ${width} bg-white shadow-xl rounded-xl py-3 border border-gray-100 -mt-1`}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-start gap-3 px-4 py-2.5 hover:bg-ice hover:text-navy transition-colors group"
            >
              {item.icon && <span className="text-xl shrink-0">{item.icon}</span>}
              <div className="flex-1 min-w-0">
                <div className="text-charcoal font-semibold text-sm group-hover:text-navy">
                  {item.label}
                </div>
                {item.desc && (
                  <div className="text-body text-xs mt-0.5 leading-snug">{item.desc}</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Mega menu for Services (2-column with feature card)                       */
/* ────────────────────────────────────────────────────────────────────────── */

function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="hover:text-cyan transition-colors flex items-center gap-1 py-7 whitespace-nowrap">
        Services
        <svg
          className={`w-3 h-3 mt-0.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white shadow-2xl rounded-xl border border-gray-100 -mt-1 overflow-hidden">
          <div className="grid grid-cols-3 gap-0">
            {/* Service items (2 cols span) */}
            <div className="col-span-2 grid grid-cols-2 gap-1 p-4">
              {servicesItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-ice transition-colors group"
                >
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-charcoal font-semibold text-sm group-hover:text-navy">
                      {item.label}
                    </div>
                    <div className="text-body text-xs mt-0.5 leading-snug">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Feature CTA panel */}
            <div className="bg-navy text-white p-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-cyan/20 border border-cyan/30 rounded-full px-3 py-1 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  <span className="text-cyan text-[10px] font-semibold uppercase tracking-wider">
                    Free Offer
                  </span>
                </div>
                <h4 className="font-bold text-lg font-[family-name:var(--font-poppins)] mb-2 leading-tight">
                  Find Your Hidden Revenue
                </h4>
                <p className="text-white/70 text-xs leading-relaxed mb-4">
                  Get a custom revenue audit and see exactly how much your
                  practice is losing to denials and billing inefficiencies.
                </p>
              </div>
              <Link
                href="/free-audit"
                className="bg-cyan text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#0090B0] transition-colors text-center"
              >
                Claim Free Audit →
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="bg-ice border-t border-gray-100 px-6 py-3 flex justify-between items-center">
            <span className="text-body text-xs">
              Need help choosing the right services for your practice?
            </span>
            <Link
              href="/services"
              className="text-navy font-semibold text-xs hover:text-cyan transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Mobile accordion section                                                  */
/* ────────────────────────────────────────────────────────────────────────── */

function MobileSection({
  label,
  items,
  onClose,
}: {
  label: string;
  items: Item[];
  onClose: () => void;
}) {
  return (
    <details className="border-b border-white/10 pb-2">
      <summary className="cursor-pointer hover:text-cyan flex justify-between items-center py-2">
        <span>{label}</span>
        <span className="text-cyan">▾</span>
      </summary>
      <div className="pl-4 mt-2 flex flex-col gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-white/70 hover:text-cyan text-sm py-1"
          >
            {item.icon && <span className="mr-1.5">{item.icon}</span>}
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Main Navbar                                                               */
/* ────────────────────────────────────────────────────────────────────────── */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-navy transition-shadow ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center h-[70px] gap-6">
        {/* Logo — pinned left */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 bg-cyan rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">RCM</span>
          </div>
          <span className="text-white font-bold text-base font-[family-name:var(--font-poppins)] hidden sm:inline whitespace-nowrap">
            [Company Name]
          </span>
        </Link>

        {/* Desktop Nav — fills middle, centered */}
        <nav className="hidden xl:flex flex-1 items-center justify-center gap-3 text-white text-sm">
          <Link href="/" className="hover:text-cyan transition-colors py-7 whitespace-nowrap">
            Home
          </Link>
          <SimpleDropdown label="About Us" items={aboutItems} width="w-72" />
          <ServicesMegaMenu />
          <SimpleDropdown label="Industries" items={industriesItems} width="w-72" />
          <Link href="/why-choose-us" className="hover:text-cyan transition-colors py-7 whitespace-nowrap">
            Why Choose Us
          </Link>
          <SimpleDropdown label="Technology" items={technologyItems} width="w-72" />
          <SimpleDropdown label="Resources" items={resourcesItems} width="w-72" />
          <Link href="/pricing" className="hover:text-cyan transition-colors py-7 whitespace-nowrap">
            Pricing
          </Link>
          <Link href="/careers" className="hover:text-cyan transition-colors py-7 whitespace-nowrap">
            Careers
          </Link>
          <SimpleDropdown label="Contact" items={contactItems} width="w-72" />
        </nav>

        {/* CTA — pinned right */}
        <div className="hidden xl:flex items-center shrink-0 ml-auto">
          <Link
            href="/free-audit"
            className="bg-cyan text-white px-5 py-2.5 rounded-lg hover:bg-[#0090B0] transition-colors whitespace-nowrap text-sm font-semibold"
          >
            Get Free Audit →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-navy border-t border-white/10 px-4 py-4 flex flex-col gap-2 text-white text-sm font-medium max-h-[calc(100vh-70px)] overflow-y-auto">
          <Link href="/" onClick={close} className="py-2 border-b border-white/10">
            Home
          </Link>
          <MobileSection label="About Us" items={aboutItems} onClose={close} />
          <MobileSection label="Services" items={servicesItems} onClose={close} />
          <MobileSection label="Industries" items={industriesItems} onClose={close} />
          <Link href="/why-choose-us" onClick={close} className="py-2 border-b border-white/10">
            Why Choose Us
          </Link>
          <MobileSection label="Technology" items={technologyItems} onClose={close} />
          <MobileSection label="Resources" items={resourcesItems} onClose={close} />
          <Link href="/pricing" onClick={close} className="py-2 border-b border-white/10">
            Pricing
          </Link>
          <Link href="/careers" onClick={close} className="py-2 border-b border-white/10">
            Careers
          </Link>
          <MobileSection label="Contact" items={contactItems} onClose={close} />
          <Link
            href="/free-audit"
            onClick={close}
            className="bg-cyan text-white text-center py-3 rounded-lg font-semibold mt-3"
          >
            Get Free Audit →
          </Link>
        </div>
      )}
    </header>
  );
}