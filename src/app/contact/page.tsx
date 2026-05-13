"use client";
import { useState } from "react";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";

const departments = [
  { name: "General Inquiries", email: "info@[domain].com", desc: "Questions and general information" },
  { name: "Sales & Consultations", email: "sales@[domain].com", desc: "Pricing, audits, new clients" },
  { name: "Billing Support", email: "support@[domain].com", desc: "Existing client billing questions" },
  { name: "Credentialing", email: "credentialing@[domain].com", desc: "Provider credentialing inquiries" },
  { name: "HR & Careers", email: "careers@[domain].com", desc: "Job applications and employment" },
  { name: "Compliance", email: "compliance@[domain].com", desc: "HIPAA, legal, and compliance" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's Start Improving Your Revenue Today"
        subtitle="Ready to take control of your revenue cycle? Our team is standing by to answer your questions, schedule a free audit, or simply discuss your practice's billing challenges — with no obligation."
        crumbs={[{ label: "Contact" }]}
      />

      {/* Contact info + form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-6 leading-tight">
              Multiple Ways to Reach Us
            </h2>
            <div className="space-y-5 mb-8">
              {[
                { icon: "📞", label: "Phone", value: "[(XXX) XXX-XXXX]" },
                { icon: "✉️", label: "Email", value: "info@[domain].com" },
                { icon: "📍", label: "Headquarters", value: "[Street Address, City, State, ZIP]" },
                { icon: "🕐", label: "Hours", value: "Mon–Fri 8AM–6PM [TZ] | Sat by appointment" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 bg-ice rounded-xl p-4 border-l-4 border-l-cyan">
                  <div className="text-3xl">{c.icon}</div>
                  <div>
                    <div className="text-xs text-body uppercase tracking-widest font-semibold">
                      {c.label}
                    </div>
                    <div className="text-charcoal font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-3">
              Department Contacts
            </p>
            <div className="space-y-2">
              {departments.map((d) => (
                <div key={d.email} className="flex flex-wrap justify-between gap-2 bg-white border border-gray-100 rounded-lg p-3 hover:border-cyan transition-colors">
                  <div>
                    <div className="font-semibold text-navy text-sm">{d.name}</div>
                    <div className="text-body text-xs">{d.desc}</div>
                  </div>
                  <a href={`mailto:${d.email}`} className="text-cyan text-xs font-semibold self-center">
                    {d.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
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
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-2">
                  Send Us a Message
                </h3>
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
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Email *</label>
                  <input type="email" required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Phone *</label>
                  <input type="tel" required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Organization / Practice *</label>
                  <input required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                </div>
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
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">Message *</label>
                  <textarea required rows={4} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-cyan bg-white" />
                </div>
                <button type="submit" className="w-full bg-cyan text-white font-bold py-3.5 rounded-lg hover:bg-[#0090B0] transition-colors text-sm">
                  Send Message →
                </button>
                <p className="text-xs text-body text-center">
                  🔒 HIPAA notice: Do not submit PHI through this form.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}