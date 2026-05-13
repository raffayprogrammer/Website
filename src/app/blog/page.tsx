import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Medical Billing Blog | RCM Resources & Insights | [Company Name]",
  description:
    "Expert articles, guides, and resources on medical billing, RCM, HIPAA compliance, coding updates, and practice management.",
};

const featured = {
  title: "10 Medical Billing Mistakes That Are Costing Your Practice Thousands",
  excerpt:
    "From eligibility verification gaps to undercoding, learn the top revenue leaks affecting independent practices — and how to fix them in 30 days.",
  category: "Billing Tips",
  date: "Coming Soon",
};

const posts = [
  { title: "The Complete Guide to Revenue Cycle Management in 2026", category: "RCM", desc: "End-to-end overview of modern RCM operations, KPIs, and benchmarks." },
  { title: "How to Reduce Your Claim Denial Rate Below 5%", category: "Denial Management", desc: "Proven strategies and root-cause analysis frameworks for denial reduction." },
  { title: "ICD-10-CM 2026 Updates Every Coder Needs to Know", category: "Coding Updates", desc: "What changed, what was deprecated, and what it means for your reimbursements." },
  { title: "What Is Prior Authorization and Why Is It Killing Your Cash Flow?", category: "Billing Tips", desc: "Inside the prior auth process and how to streamline approvals." },
  { title: "HIPAA Compliance Checklist for Medical Billing Companies", category: "HIPAA", desc: "A practical 25-point checklist to evaluate your billing partner's HIPAA posture." },
  { title: "How to Choose the Best Medical Billing Company for Your Practice", category: "RCM", desc: "Decision framework with 12 questions every administrator should ask." },
  { title: "Medical Billing for Telehealth: What You Need to Know in 2026", category: "Specialty Billing", desc: "State-by-state telehealth billing rules and best practices." },
  { title: "Understanding Your Accounts Receivable: AR Aging Report Explained", category: "RCM", desc: "How to read your AR aging and act on what matters." },
  { title: "CPT Code Updates for 2026: What Changed and What It Means for Your Revenue", category: "Coding Updates", desc: "Annual CPT changes and revenue impact." },
];

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Blog & Resources"
        title="Medical Billing & RCM Insights"
        subtitle="Industry articles, guides, coding updates, and practical resources from our team of certified RCM specialists."
        crumbs={[{ label: "Blog" }]}
      />

      {/* Featured */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-navy text-white rounded-2xl p-8 lg:p-10 grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-cyan/20 text-cyan border border-cyan/30 text-xs font-semibold px-3 py-1 rounded-full">
                  ⭐ Featured
                </span>
                <span className="text-white/60 text-xs uppercase tracking-widest">
                  {featured.category}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-3 leading-tight">
                {featured.title}
              </h2>
              <p className="text-white/70 mb-5">{featured.excerpt}</p>
              <span className="text-white/50 text-xs">{featured.date}</span>
            </div>
            <div className="lg:text-right">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-cyan text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#0090B0] transition-colors text-sm"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-7">
            Latest Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article
                key={p.title}
                className="bg-ice border border-gray-100 rounded-2xl overflow-hidden card-hover border-l-4 border-l-cyan"
              >
                <div className="h-32 bg-gradient-to-br from-navy to-cyan flex items-center justify-center">
                  <span className="text-white/30 text-4xl">📰</span>
                </div>
                <div className="p-5">
                  <span className="bg-cyan/10 text-cyan text-xs font-semibold px-2.5 py-1 rounded-full">
                    {p.category}
                  </span>
                  <h3 className="font-bold text-navy text-base font-[family-name:var(--font-poppins)] mt-3 mb-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed mb-3">{p.desc}</p>
                  <span className="text-cyan font-semibold text-sm">Coming Soon</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want These Insights in Your Inbox?"
        subtitle="Subscribe to our newsletter for monthly RCM tips, coding updates, and industry insights."
        primaryLabel="Get a Free Audit →"
        primaryHref="/free-audit"
        secondaryLabel="Browse FAQs"
        secondaryHref="/faq"
      />
    </PageLayout>
  );
}