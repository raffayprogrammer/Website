import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Site Guide & Wireframe Layouts | Design Reference | [Company Name]",
  description:
    "Internal wireframe layouts, CTA strategy, and trust-building element placement map for the [Company Name] website.",
};

const homepageZones = [
  { zone: 1,  section: "Navigation Bar: Logo | Menu | CTA Button",                      layout: "Fixed header, full-width",        height: "70px" },
  { zone: 2,  section: "Hero: BG image + overlay | H1 + Subtext + 2 CTAs",              layout: "Full-bleed hero",                 height: "600–700px" },
  { zone: 3,  section: "EHR Logo Strip (scrolling marquee)",                             layout: "Full-width ticker",               height: "80px" },
  { zone: 4,  section: "Animated Stats Counter (4–6 stats)",                             layout: "4-column flex row",               height: "160px" },
  { zone: 5,  section: "Value Proposition (headline + 3-column benefit icons)",          layout: "Container, 3-col",                height: "400px" },
  { zone: 6,  section: "Services Grid (11 service cards, 3-col, 4 rows)",                layout: "3-column card grid",              height: "800px" },
  { zone: 7,  section: "How It Works (6-step horizontal timeline)",                      layout: "Full-width numbered steps",       height: "400px" },
  { zone: 8,  section: "Industries Served (icon grid)",                                  layout: "5-col icon grid",                 height: "300px" },
  { zone: 9,  section: "Why Choose Us (split: left text/bullets, right visual)",         layout: "2-column split",                  height: "500px" },
  { zone: 10, section: "HIPAA/Security (dark blue BG, badges, lock icon)",              layout: "Full-width colored section",      height: "350px" },
  { zone: 11, section: "Testimonials (carousel or 3-col cards)",                         layout: "Card carousel",                   height: "400px" },
  { zone: 12, section: "Technology/Integrations (logo grid)",                            layout: "Logo grid, 6-col",                height: "250px" },
  { zone: 13, section: "Lead Capture Form + CTA",                                        layout: "2-col: left copy, right form",    height: "500px" },
  { zone: 14, section: "FAQ Preview (accordion, 4 questions)",                           layout: "Container, accordion",            height: "300px" },
  { zone: 15, section: "Final CTA Banner (full-color)",                                  layout: "Full-width CTA",                  height: "200px" },
  { zone: 16, section: "Footer (5-column + copyright bar)",                              layout: "Full-width dark footer",          height: "400px" },
];

const servicePageZones = [
  { zone: 1,  section: "Hero: Service name + headline + CTA",                            notes: "Service-specific background image" },
  { zone: 2,  section: "Breadcrumbs: Home > Services > [Service Name]",                 notes: "Schema breadcrumb markup" },
  { zone: 3,  section: 'Pain Points: "Are you struggling with..." (3-col icons)',        notes: "Creates empathy + relevance" },
  { zone: 4,  section: "Solution Description (2-col: copy left, visual right)",          notes: "Service-specific graphic or screenshot" },
  { zone: 5,  section: "Workflow Steps (numbered, horizontal or vertical)",              notes: "5–10 step process" },
  { zone: 6,  section: "Key Deliverables (icon list)",                                   notes: "What client receives" },
  { zone: 7,  section: "KPIs / Results Table",                                           notes: "Stats table with industry avg vs. our target" },
  { zone: 8,  section: "Who This Is For (practice types, 3-col cards)",                 notes: "Qualification section" },
  { zone: 9,  section: "Why [Company Name] for This Service (3-col differentiators)",   notes: "Shorter than homepage version" },
  { zone: 10, section: "Client Quote / Mini Case Study (single testimonial)",            notes: "Social proof for this service" },
  { zone: 11, section: "CTA: Free consultation for this service",                        notes: "Form or calendar embed" },
  { zone: 12, section: "Related Services (3 cards)",                                     notes: "Internal linking to adjacent services" },
  { zone: 13, section: "FAQ (3–5 service-specific questions, accordion)",                notes: "Featured snippet optimization" },
];

const ctaStrategy = [
  { type: "Primary CTA",   placement: "Hero, top of every page",       copy: '"Get Your Free Audit"',                        action: "Opens consultation form" },
  { type: "Secondary CTA", placement: "Hero (alternative)",             copy: '"Schedule a Free Consultation"',               action: "Opens calendar / form" },
  { type: "Sticky CTA",    placement: "Fixed header (mobile)",          copy: '"Free Audit →"',                               action: "Scrolls to form / opens modal" },
  { type: "In-Content CTA",placement: "Mid-page, after key sections",  copy: '"See How We Improve Your [Metric]"',           action: "Service-specific page" },
  { type: "Exit CTA",      placement: "Exit intent popup",              copy: '"Claim Your Free Audit Before I Leave"',       action: "Lead capture form" },
  { type: "Chat CTA",      placement: "Chat widget (proactive)",        copy: '"Need help with billing? Let\'s chat."',       action: "Live chat / chatbot" },
  { type: "Blog CTA",      placement: "End of every blog post",         copy: '"Want us to audit your billing? It\'s Free."', action: "Lead form" },
  { type: "Footer CTA",    placement: "Footer column",                  copy: '"Start Your Free Revenue Audit"',              action: "Contact page / form" },
];

const trustMap = [
  { element: "HIPAA Compliance Badge",          pages: "All pages",                      placement: "Header, footer, and contact form" },
  { element: "AAPC / AHIMA Certification Logos",pages: "Home, About, Services",          placement: "Above fold on About; footer global" },
  { element: "SOC 2 Badge",                     pages: "Home, Technology, HIPAA",        placement: "Security section" },
  { element: "Client Count (500+ Providers)",   pages: "Home, About, Why Choose Us",     placement: "Stats bar, hero subtext" },
  { element: "Collection Rate (98%+)",          pages: "Home, Pricing, Services",        placement: "Dedicated section + inline" },
  { element: "Client Testimonials",             pages: "Home, Service pages",            placement: "Callout cards" },
  { element: "Case Study Links",                pages: "Home, Why Choose Us",            placement: "Callout cards" },
  { element: "Real Faces (team photos)",        pages: "About, Careers",                 placement: "Leadership grid" },
  { element: "Google Reviews widget",           pages: "Home, Contact",                  placement: "Near contact form" },
];

export default function SiteGuidePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Design Reference"
        title="Recommended Wireframe Layouts & Site Guide"
        subtitle="Internal reference for the design, development, SEO, and marketing teams. All placeholder values in [BRACKET] must be replaced before publication."
        crumbs={[{ label: "Site Guide" }]}
        ctaLabel="View Business Info →"
        ctaHref="/business-info"
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          {/* 22.1 Homepage Wireframe */}
          <div className="mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-1">Section 22.1</p>
            <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-6">
              Homepage Wireframe (Top to Bottom)
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-4 py-3.5 font-semibold w-16">Zone</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Section</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Layout Type</th>
                    <th className="text-left px-4 py-3.5 font-semibold w-28">Height Est.</th>
                  </tr>
                </thead>
                <tbody>
                  {homepageZones.map((z, idx) => (
                    <tr key={z.zone} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
                      <td className="px-4 py-3 font-bold text-cyan">{z.zone}</td>
                      <td className="px-4 py-3 text-charcoal">{z.section}</td>
                      <td className="px-4 py-3 text-body text-xs">{z.layout}</td>
                      <td className="px-4 py-3 font-mono text-xs text-teal font-semibold">{z.height}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 22.2 Service Page Template */}
          <div className="mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-1">Section 22.2</p>
            <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-6">
              Service Page Template Wireframe
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-4 py-3.5 font-semibold w-16">Zone</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Section</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {servicePageZones.map((z, idx) => (
                    <tr key={z.zone} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
                      <td className="px-4 py-3 font-bold text-cyan">{z.zone}</td>
                      <td className="px-4 py-3 text-charcoal font-medium">{z.section}</td>
                      <td className="px-4 py-3 text-body text-xs leading-relaxed">{z.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 22.3 CTA Strategy Summary */}
          <div className="mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-1">Section 22.3</p>
            <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-6">
              CTA Strategy Summary
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-4 py-3.5 font-semibold">CTA Type</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Placement</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Copy Example</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {ctaStrategy.map((c, idx) => (
                    <tr key={c.type} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
                      <td className="px-4 py-3 font-semibold text-navy">{c.type}</td>
                      <td className="px-4 py-3 text-charcoal text-xs">{c.placement}</td>
                      <td className="px-4 py-3 text-cyan text-xs font-semibold italic">{c.copy}</td>
                      <td className="px-4 py-3 text-body text-xs">{c.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 22.4 Trust-Building Elements Placement Map */}
          <div className="mb-12">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-1">Section 22.4</p>
            <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-6">
              Trust-Building Elements Placement Map
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-4 py-3.5 font-semibold">Trust Element</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Pages</th>
                    <th className="text-left px-4 py-3.5 font-semibold">Placement</th>
                  </tr>
                </thead>
                <tbody>
                  {trustMap.map((t, idx) => (
                    <tr key={t.element} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
                      <td className="px-4 py-3 font-semibold text-navy">{t.element}</td>
                      <td className="px-4 py-3 text-charcoal text-xs">{t.pages}</td>
                      <td className="px-4 py-3 text-body text-xs">{t.placement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* End of Document */}
          <div className="bg-navy text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] mb-3">
              END OF DOCUMENT
            </h3>
            <p className="text-white/70 text-sm mb-2">
              Medical Billing &amp; RCM Website Strategy &amp; Implementation Blueprint
            </p>
            <p className="text-white/50 text-xs mb-4">
              Document prepared for internal use by design, development, SEO, and marketing teams.
            </p>
            <p className="text-amber font-semibold text-sm">
              All placeholder values in [BRACKET] must be replaced with verified company information before publication.
            </p>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}