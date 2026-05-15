import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Free Resources & Downloads | Medical Billing Tools | [Company Name]",
  description:
    "Download free medical billing checklists, RCM benchmark reports, specialty billing guides, and revenue loss calculators. No cost. No obligation.",
  keywords:
    "free medical billing resources, RCM checklist download, medical billing guide, revenue cycle audit, billing benchmark report",
};

const leadMagnets = [
  {
    title: "Free Revenue Cycle Audit",
    offer: "30-min expert analysis of your billing performance + written report",
    delivery: "Scheduled call + written report",
    gateType: "Phone + email form",
    icon: "🎯",
    cta: "Schedule My Free Audit",
    href: "/free-audit",
    highlight: true,
  },
  {
    title: "Free Billing Health Checklist",
    offer: "10-point billing health checklist PDF — identify your top revenue gaps in minutes",
    delivery: "Instant email delivery",
    gateType: "Email only",
    icon: "✅",
    cta: "Get the Checklist",
    href: "/free-audit",
    highlight: false,
  },
  {
    title: "Revenue Loss Calculator",
    offer: "Interactive tool estimating your annual revenue loss from billing inefficiencies",
    delivery: "On-page tool, gated results",
    gateType: "Email + phone for results",
    icon: "🧮",
    cta: "Calculate My Revenue Loss",
    href: "/free-audit",
    highlight: false,
  },
  {
    title: "RCM KPI Benchmark Report",
    offer: "Industry collection rate, denial rate benchmarks PDF — see how your practice compares",
    delivery: "Instant email delivery",
    gateType: "Name + email + specialty",
    icon: "📊",
    cta: "Get the Benchmark Report",
    href: "/free-audit",
    highlight: false,
  },
  {
    title: "Specialty Billing Guide Download",
    offer: "30+ page specialty-specific billing guide tailored to your practice area",
    delivery: "Instant email delivery",
    gateType: "Name + email + specialty",
    icon: "📘",
    cta: "Download My Specialty Guide",
    href: "/free-audit",
    highlight: false,
  },
  {
    title: "Denial Management Webinar",
    offer: "Monthly live webinar on denial reduction strategies — with Q&A",
    delivery: "Registration form",
    gateType: "Full contact form",
    icon: "🎓",
    cta: "Register for Webinar",
    href: "/free-audit",
    highlight: false,
  },
];

const emailSequence = [
  { num: 1, timing: "Immediate", subject: "Your Free Revenue Cycle Audit Is Confirmed", focus: "Confirmation + what to expect + calendar link" },
  { num: 2, timing: "Day 2",     subject: "The #1 Billing Mistake Costing Your Practice Thousands", focus: "Educational — billing mistake + solution" },
  { num: 3, timing: "Day 4",     subject: "Your Free Revenue Benchmark Report Inside", focus: "Lead magnet delivery + stats" },
  { num: 4, timing: "Day 7",     subject: "How [Similar Practice] Increased Revenue by 35%", focus: "Case study relevant to their specialty" },
  { num: 5, timing: "Day 10",    subject: "Quick Question About Your Practice", focus: "Soft sales touchpoint — personalized" },
  { num: 6, timing: "Day 14",    subject: "5 Signs You Need to Outsource Billing", focus: "Educational blog post link" },
  { num: 7, timing: "Day 21",    subject: "Ready to Start? Here's What Onboarding Looks Like", focus: "Process overview + calendar link" },
  { num: 8, timing: "Day 30",    subject: "Last Chance: Your Revenue Gap Analysis Expires Soon", focus: "Urgency — reactivation email" },
];

const contentSilo = [
  { pillar: "/services/revenue-cycle-management", supporting: "What is RCM | RCM KPIs | RCM for Small Practices | RCM Trends 2025" },
  { pillar: "/services/medical-billing",          supporting: "Billing Mistakes | Clean Claim Rate | Billing Cycle Explained | Cost of Outsourcing" },
  { pillar: "/services/denial-management",        supporting: "Denial Codes Explained | How to Appeal | Denial Prevention | Overturn Rate" },
  { pillar: "/services/medical-coding",           supporting: "ICD-10 Updates | CPT Updates | Coding Audits | HCC Coding" },
  { pillar: "/services/credentialing",            supporting: "CAQH Guide | Credentialing Timeline | Medicare Enrollment | Payer Panels" },
  { pillar: "/industries",                        supporting: "Specialty-specific billing guides (one per specialty)" },
  { pillar: "/technology/hipaa-compliance",       supporting: "HIPAA Checklist | BAA Guide | PHI Protection | HIPAA vs. Billing" },
];

const primaryKeywords = [
  { keyword: "medical billing services",            volume: "18,000+", difficulty: "High",    priority: "Core" },
  { keyword: "revenue cycle management services",   volume: "12,000+", difficulty: "High",    priority: "Core" },
  { keyword: "medical billing company",             volume: "9,000+",  difficulty: "High",    priority: "Core" },
  { keyword: "outsource medical billing",           volume: "5,000+",  difficulty: "Medium",  priority: "Core" },
  { keyword: "medical billing outsourcing",         volume: "4,500+",  difficulty: "Medium",  priority: "Core" },
  { keyword: "medical coding services",             volume: "6,000+",  difficulty: "Medium",  priority: "Core" },
  { keyword: "denial management services",          volume: "2,200+",  difficulty: "Medium",  priority: "Core" },
  { keyword: "HIPAA compliant billing company",     volume: "1,800+",  difficulty: "Low-Med", priority: "High" },
  { keyword: "provider credentialing services",     volume: "3,000+",  difficulty: "Medium",  priority: "High" },
  { keyword: "prior authorization services",        volume: "4,000+",  difficulty: "Medium",  priority: "High" },
];

const secondaryKeywords = [
  "physician billing services",
  "medical billing for small practices",
  "healthcare revenue cycle management",
  "accounts receivable management medical",
  "eligibility verification services",
  "medical billing and coding company",
  "payment posting services medical billing",
  "charge entry services",
  "healthcare BPO services",
  "virtual medical assistant services",
];

const longTailKeywords = [
  "how to reduce medical billing denial rate",
  "best medical billing company for small practices",
  "medical billing services for telehealth providers",
  "behavioral health billing services USA",
  "cardiology billing and coding services",
  "how much does medical billing outsourcing cost",
  "HIPAA compliant revenue cycle management",
  "medical billing company with no long-term contracts",
  "physician credentialing services near me",
  "AR recovery services for medical practices",
];

const conversionPoints = [
  "Homepage lead form (top of page and bottom CTA)",
  'Every service page — "Get a Free [Service] Consultation" form',
  "Blog posts — content upgrade / lead magnet offers",
  'Exit intent popup — "Before you go, get your free audit"',
  "Sticky header CTA button on all pages",
  'FAQ page — "Still have questions? Talk to an expert" form',
  'Testimonials page — "See similar results for your practice" form',
  "Chat widget (Intercom / Drift / Crisp) — proactive message after 30 seconds",
];

const chatMessages = [
  { trigger: "Proactive (30 sec)", message: "Hi! Looking for help with medical billing? I'm here to answer any questions." },
  { trigger: "After 2 page views",  message: "Did you know we offer a free Revenue Cycle Audit? Want to learn more?" },
  { trigger: "On service pages",    message: "Questions about [service name]? Let's chat." },
  { trigger: "On pricing page",     message: "Want an exact pricing estimate for your practice? Let's talk." },
];

export default function ResourcesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Resources & Downloads"
        title="Free Tools to Grow Your Practice Revenue"
        subtitle="Checklists, guides, benchmark reports, and calculators — all free. Download what you need or schedule a personalized audit with our RCM specialists."
        crumbs={[{ label: "Resources" }]}
        ctaLabel="Get My Free Audit →"
        ctaHref="/free-audit"
      />

      {/* Lead Magnets */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">Free Downloads</p>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Primary Lead Magnets
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {leadMagnets.map((lm) => (
              <div
                key={lm.title}
                className={`rounded-2xl p-6 border flex flex-col ${
                  lm.highlight
                    ? "bg-navy text-white border-cyan"
                    : "bg-ice border-gray-100"
                }`}
              >
                <div className="text-3xl mb-3">{lm.icon}</div>
                <h3 className={`font-bold text-lg font-[family-name:var(--font-poppins)] mb-2 ${lm.highlight ? "text-white" : "text-navy"}`}>
                  {lm.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-3 flex-1 ${lm.highlight ? "text-white/80" : "text-body"}`}>
                  {lm.offer}
                </p>
                <div className={`text-xs mb-4 space-y-1 ${lm.highlight ? "text-white/60" : "text-body"}`}>
                  <div><span className="font-semibold">Delivery:</span> {lm.delivery}</div>
                  <div><span className="font-semibold">Gate:</span> {lm.gateType}</div>
                </div>
                <Link
                  href={lm.href}
                  className={`block text-center font-bold py-2.5 rounded-lg text-sm transition-colors ${
                    lm.highlight
                      ? "bg-cyan text-white hover:bg-[#0090B0]"
                      : "bg-navy text-white hover:bg-blue-mid"
                  }`}
                >
                  {lm.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Points */}
      <section className="py-14 bg-ice">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">Section 20.2</p>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Conversion Points — Where Leads Are Captured
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {conversionPoints.map((cp, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3">
                <span className="bg-cyan text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">{i + 1}</span>
                <p className="text-charcoal text-sm leading-relaxed">{cp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Nurture Sequence */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">Section 20.3</p>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Email Nurture Sequence (Post-Lead Capture)
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Email #</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Timing</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Subject Line</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Content Focus</th>
                </tr>
              </thead>
              <tbody>
                {emailSequence.map((e, idx) => (
                  <tr key={e.num} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
                    <td className="px-5 py-3.5 font-bold text-cyan">{e.num}</td>
                    <td className="px-5 py-3.5 text-charcoal font-semibold">{e.timing}</td>
                    <td className="px-5 py-3.5 text-charcoal">{e.subject}</td>
                    <td className="px-5 py-3.5 text-body text-xs">{e.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Chat Widget Strategy */}
      <section className="py-14 bg-ice">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">Section 20.5</p>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Chat Widget Strategy
            </h2>
            <p className="text-body text-sm mt-2">Intercom / Drift / Crisp — proactive message after 30 seconds</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {chatMessages.map((c) => (
              <div key={c.trigger} className="bg-white border border-gray-100 rounded-xl p-5 border-l-4 border-l-cyan">
                <p className="text-cyan font-semibold text-xs uppercase tracking-widest mb-2">{c.trigger}</p>
                <p className="text-charcoal text-sm leading-relaxed italic">&ldquo;{c.message}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO: Primary Keywords */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">Section 19 — SEO Strategy</p>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Primary Keywords (High Commercial Intent)
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Keyword</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Monthly Search Volume (est.)</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Difficulty</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Priority</th>
                </tr>
              </thead>
              <tbody>
                {primaryKeywords.map((kw, idx) => (
                  <tr key={kw.keyword} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
                    <td className="px-5 py-3 font-semibold text-navy">{kw.keyword}</td>
                    <td className="px-5 py-3 text-charcoal">{kw.volume}</td>
                    <td className="px-5 py-3 text-charcoal">{kw.difficulty}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        kw.priority === "Core" ? "bg-cyan/10 text-cyan border border-cyan/20" : "bg-teal/10 text-teal border border-teal/20"
                      }`}>
                        {kw.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Secondary + Long-tail */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-4">
                Secondary Keywords
              </h3>
              <ul className="space-y-2">
                {secondaryKeywords.map((kw) => (
                  <li key={kw} className="flex items-start gap-2.5 text-charcoal text-sm">
                    <span className="text-cyan font-bold mt-0.5 shrink-0">•</span>{kw}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-4">
                Long-Tail Keywords (Blog & Landing Pages)
              </h3>
              <ul className="space-y-2">
                {longTailKeywords.map((kw) => (
                  <li key={kw} className="flex items-start gap-2.5 text-charcoal text-sm">
                    <span className="text-cyan font-bold mt-0.5 shrink-0">•</span>{kw}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Silo Structure */}
      <section className="py-14 bg-ice">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">Section 19.5</p>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Content Silo Structure
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-3.5 font-semibold">Pillar Page (SEO Hub)</th>
                  <th className="text-left px-5 py-3.5 font-semibold">Supporting Content (Blog Posts)</th>
                </tr>
              </thead>
              <tbody>
                {contentSilo.map((row, idx) => (
                  <tr key={row.pillar} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
                    <td className="px-5 py-3.5 font-semibold text-cyan font-mono text-xs">{row.pillar}</td>
                    <td className="px-5 py-3.5 text-body text-xs leading-relaxed">{row.supporting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">Section 19.4</p>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Local SEO Strategy
            </h2>
          </div>
          <div className="bg-ice rounded-2xl p-6 border-l-4 border-l-cyan space-y-4">
            {[
              "Create Google Business Profile with all service categories",
              'Build location-specific landing pages for major metro markets: "Medical Billing Services in [City]"',
              "Target cities with high physician density: NYC, LA, Chicago, Dallas, Houston, Atlanta, Miami, Phoenix, Philadelphia, Boston",
              "Collect Google reviews from satisfied clients (with HIPAA-safe language)",
              "Local citations: Healthcare directories, chamber of commerce, BBB",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-charcoal">
                <span className="text-cyan font-bold mt-0.5 shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Start Capturing More Leads?"
        subtitle="Schedule your free Revenue Cycle Audit today and see exactly how much your practice is leaving on the table."
        primaryLabel="▶ Get My Free Audit →"
        primaryHref="/free-audit"
        secondaryLabel="Browse All Services"
        secondaryHref="/services"
      />
    </PageLayout>
  );
}