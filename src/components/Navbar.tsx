"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  { label: "Medical Billing", href: "/services/medical-billing" },
  { label: "Medical Coding", href: "/services/medical-coding" },
  { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
  { label: "Denial Management", href: "/services/denial-management" },
  { label: "Provider Credentialing", href: "/services/credentialing" },
  { label: "AR Recovery", href: "/services/accounts-receivable" },
  { label: "Eligibility Verification", href: "/services/eligibility-verification" },
  { label: "Prior Authorization", href: "/services/prior-authorization" },
  { label: "Charge Entry", href: "/services/charge-entry" },
  { label: "Payment Posting", href: "/services/payment-posting" },
  { label: "Virtual Medical Assistants", href: "/services/virtual-medical-assistants" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">RCM</span>
          </div>
          <span className="text-white font-bold text-lg font-[family-name:var(--font-poppins)]">
            [Company Name]
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-white">
          <Link href="/" className="hover:text-cyan transition-colors">Home</Link>

          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-cyan transition-colors flex items-center gap-1">
              Services
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 mt-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-charcoal hover:bg-ice hover:text-navy text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/industries" className="hover:text-cyan transition-colors">Industries</Link>
          <Link href="/why-choose-us" className="hover:text-cyan transition-colors">Why Choose Us</Link>
          <Link href="/technology" className="hover:text-cyan transition-colors">Technology</Link>
          <Link href="/resources" className="hover:text-cyan transition-colors">Resources</Link>
          <Link href="/careers" className="hover:text-cyan transition-colors">Careers</Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm text-white hover:text-cyan transition-colors font-medium"
          >
            Contact
          </Link>
          <Link
            href="/free-audit"
            className="bg-cyan text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0090B0] transition-colors"
          >
            Get Free Audit →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
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
        <div className="lg:hidden bg-navy border-t border-white/10 px-4 py-4 flex flex-col gap-3 text-white text-sm font-medium">
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <details>
            <summary className="cursor-pointer hover:text-cyan">Services ▾</summary>
            <div className="pl-4 mt-2 flex flex-col gap-2">
              {services.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="hover:text-cyan">
                  {s.label}
                </Link>
              ))}
            </div>
          </details>
          <Link href="/industries" onClick={() => setMobileOpen(false)}>Industries</Link>
          <Link href="/why-choose-us" onClick={() => setMobileOpen(false)}>Why Choose Us</Link>
          <Link href="/technology" onClick={() => setMobileOpen(false)}>Technology</Link>
          <Link href="/resources" onClick={() => setMobileOpen(false)}>Resources</Link>
          <Link href="/careers" onClick={() => setMobileOpen(false)}>Careers</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link
            href="/free-audit"
            onClick={() => setMobileOpen(false)}
            className="bg-cyan text-white text-center py-2.5 rounded-lg font-semibold"
          >
            Get Free Audit →
          </Link>
        </div>
      )}
    </header>
  );
}