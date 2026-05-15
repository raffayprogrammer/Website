"use client";
import { useState } from "react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";

const departments = [
  { name: "General Inquiries",    email: "info@[domain].com",           purpose: "General questions and information requests" },
  { name: "Sales & Consultations",email: "sales@[domain].com",          purpose: "Pricing, audits, and new client consultations" },
  { name: "Billing Support",      email: "support@[domain].com",        purpose: "Existing client billing questions and escalations" },
  { name: "Credentialing",        email: "credentialing@[domain].com",  purpose: "Provider credentialing inquiries" },
  { name: "HR & Careers",         email: "careers@[domain].com",        purpose: "Job applications and employment inquiries" },
  { name: "Compliance",           email: "compliance@[domain].com",     purpose: "HIPAA, legal, and compliance matters" },
  { name: "Partnerships",         email: "partnerships@[domain].com",   purpose: "Technology and referral partnership inquiries" },
];

const specialties = [
  "Primary Care / Family Medicine", "Internal Medicine", "Cardiology",
  "Behavioral Health / Psychiatry", "Telehealth / Virtual Care",
  "Orthopedics & Sports Medicine", "Urgent Care", "Radiology & Imaging",
  "Physical Therapy & Rehabilitation", "Dermatology", "Gastroenterology",
  "OB/GYN", "Neurology", "Pediatrics", "Oncology / Hematology",
  "Ambulatory Surgery Center (ASC)", "Hospital / Health System", "Other",
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's Start Improving Your Revenue Today"
        subtitle="Ready to take control of your revenue cycle? Our team is standing by to answer your questions, schedule a free audit, or simply discuss your practice's billing challenges — with no obligation."
        crumbs={[{ label: "Contact" }]}
        ctaLabel="Get a Free Audit →"
        ctaHref="/free-audit"
      />

      {/* Contact info + form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

          {/* Left: Info + Departments */}
          <div>
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-6 leading-tight">
              Multiple Ways to Reach Us
            </h2>

            {/* Business info */}
            <div className="space-y-3 mb-8">
              {[
                { icon: "📞", label: "Phone",        value: "[PHONE NUMBER — e.g., (800) 000-0000]" },
                { icon: "✉️", label: "General Email", value: "info@[companyname].com" },
                { icon: "💼", label: "Sales Email",   value: "sales@[companyname].com" },
                { icon: "🛠️", label: "Billing Support",value: "support@[companyname].com" },
                { icon: "📍", label: "Main Office",   value: "[Street Address, City, State, ZIP]" },
                { icon: "🕐", label: "Business Hours", value: "Monday–Friday: 8:00 AM – 6:00 PM [Timezone] | Saturday: By Appointment" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 bg-ice rounded-xl p-4 border-l-4 border-l-cyan">
                  <div className="text-2xl">{c.icon}</div>
                  <div>
                    <div className="text-xs text-body uppercase tracking-widest font-semibold">{c.label}</div>
                    <div className="text-charcoal font-medium text-sm">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Department-Specific Contacts */}
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3">
              Department-Specific Contacts
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-4 py-3 font-semibold">Department</th>
                    <th className="text-left px-4 py-3 font-semibold">Email</th>
                    <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((d, idx) => (
                    <tr key={d.email} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
                      <td className="px-4 py-3 font-semibold text-navy">{d.name}</td>
                      <td className="px-4 py-3">
                        <a href={`mailto:${d.email}`} className="text-cyan hover:underline">{d.email}</a>
                      </td>
                      <td className="px-4 py-3 text-body">{d.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-ice rounded-2xl p-7 lg:p-8 border border-gray-100 lg:sticky lg:top-28 self-start">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-2">
                  Message Sent!
                </h3>
                <p className="text-body">We'll respond within 2 business hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-1">
                  Send Us a Message
                </h3>
                <p className="text-body text-xs mb-4">All submissions acknowledged within 2 business hours.</p>

                {/* First + Last */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">First Name *</label>
                    <input required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">Last Name *</label>
                    <input required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">Email Address *</label>
                    <input type="email" required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">Phone Number *</label>
                    <input type="tel" required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Organization / Practice Name *</label>
                  <input required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                </div>

                {/* Specialty + Providers */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">Specialty *</label>
                    <select required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white">
                      <option value="">Select...</option>
                      {specialties.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">Number of Providers</label>
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white">
                      <option value="">Select...</option>
                      {["1", "2–5", "6–15", "16–50", "50+"].map((v) => <option key={v}>{v}</option>)}
                    </select>
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Inquiry Type *</label>
                  <select required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white">
                    <option value="">Select...</option>
                    <option>General Inquiry</option>
                    <option>Free Audit</option>
                    <option>Partnership</option>
                    <option>Careers</option>
                    <option>Press</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Message *</label>
                  <textarea required rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                </div>

                {/* Preferred Callback Time */}
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Preferred Callback Time</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white">
                    <option value="">Select...</option>
                    <option>Morning (8am–12pm)</option>
                    <option>Afternoon (12pm–5pm)</option>
                    <option>Evening (5pm–8pm)</option>
                    <option>Anytime</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-cyan text-white font-bold py-3.5 rounded-lg hover:bg-[#0090B0] transition-colors text-sm">
                  ▶ Send Message →
                </button>
                <p className="text-xs text-body text-center leading-relaxed">
                  🔒 HIPAA Notice: Do not submit Protected Health Information (PHI) through this form.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}