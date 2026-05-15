import type { Metadata } from "next";
import PageLayout from "@/components/shared/PageLayout";
import PageHero from "@/components/shared/PageHero";
import CtaBanner from "@/components/shared/CtaBanner";
import { blogPosts, contentCategories } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Medical Billing Blog | RCM Resources & Insights | [Company Name]",
  description:
    "Expert articles, guides, and resources on medical billing, revenue cycle management, HIPAA compliance, coding updates, and practice management from [Company Name].",
  keywords:
    "medical billing blog, RCM blog, healthcare billing resources, medical coding news, revenue cycle management tips",
};

const clusterColors: Record<string, string> = {
  "Billing Tips":       "bg-cyan/10 text-cyan",
  "RCM":                "bg-navy/10 text-navy",
  "Denial Management":  "bg-amber/10 text-amber",
  "Coding Updates":     "bg-teal/10 text-teal",
  "HIPAA":              "bg-blue-mid/10 text-blue-mid",
  "Specialty Billing":  "bg-purple-100 text-purple-700",
  "Practice Management":"bg-green-100 text-green-700",
  "Industry News":      "bg-orange-100 text-orange-700",
  "Credentialing":      "bg-rose-100 text-rose-700",
};

export default function BlogPage() {
  const featured = blogPosts[0];

  return (
    <PageLayout>
      <PageHero
        eyebrow="Blog & Resources"
        title="Medical Billing & RCM Insights"
        subtitle="Industry articles, guides, coding updates, and practical resources from our team of certified RCM specialists — 50 topics and growing."
        crumbs={[{ label: "Blog" }]}
        ctaLabel="Get a Free Audit →"
        ctaHref="/free-audit"
      />

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-navy text-white rounded-2xl p-8 lg:p-10 grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-cyan/20 text-cyan border border-cyan/30 text-xs font-semibold px-3 py-1 rounded-full">
                  ⭐ Featured
                </span>
                <span className="text-white/60 text-xs uppercase tracking-widest">
                  {featured.cluster}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-poppins)] mb-3 leading-tight">
                {featured.title}
              </h2>
              <p className="text-white/70 mb-3">{featured.desc}</p>
              <p className="text-cyan text-xs font-semibold">
                SEO Keyword: {featured.keyword}
              </p>
            </div>
            <div className="lg:text-right">
              <span className="inline-flex items-center gap-2 bg-cyan/20 border border-cyan/30 text-white font-semibold px-5 py-3 rounded-lg text-sm">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-12 bg-ice">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-cyan font-semibold uppercase tracking-widest text-sm mb-2">
              Content Categories
            </p>
            <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              Topic Clusters
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-5 py-3.5 font-semibold font-[family-name:var(--font-poppins)]">Category</th>
                  <th className="text-left px-5 py-3.5 font-semibold font-[family-name:var(--font-poppins)]">Topic Focus</th>
                  <th className="text-left px-5 py-3.5 font-semibold font-[family-name:var(--font-poppins)]">Target Audience</th>
                </tr>
              </thead>
              <tbody>
                {contentCategories.map((row, idx) => (
                  <tr key={row.category} className={idx % 2 === 0 ? "bg-white" : "bg-ice"}>
                    <td className="px-5 py-3 font-semibold text-navy">{row.category}</td>
                    <td className="px-5 py-3 text-charcoal">{row.topicFocus}</td>
                    <td className="px-5 py-3 text-body">{row.targetAudience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* All 50 Posts */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)]">
              50 Blog Topic Ideas
            </h2>
            <span className="bg-cyan text-white text-xs font-bold px-3 py-1.5 rounded-full">
              {blogPosts.length} Articles
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, idx) => (
              <article
                key={post.title}
                className="bg-ice border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow border-l-4 border-l-cyan flex flex-col"
              >
                <div className="h-24 bg-gradient-to-br from-navy to-blue-mid flex items-center justify-center shrink-0">
                  <span className="text-white/20 font-bold text-3xl font-[family-name:var(--font-poppins)]">
                    #{idx + 1}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        clusterColors[post.cluster] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {post.cluster}
                    </span>
                  </div>
                  <h3 className="font-bold text-navy text-sm font-[family-name:var(--font-poppins)] mb-2 leading-snug flex-1">
                    {post.title}
                  </h3>
                  <p className="text-body text-xs leading-relaxed mb-3">{post.desc}</p>
                  <p className="text-xs text-body border-t border-gray-100 pt-3 mt-auto">
                    <span className="font-semibold text-charcoal">Keyword: </span>
                    {post.keyword}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want These Insights in Your Inbox?"
        subtitle="Subscribe to our newsletter for monthly RCM tips, coding updates, and industry insights — straight from our certified billing specialists."
        primaryLabel="Get a Free Audit →"
        primaryHref="/free-audit"
        secondaryLabel="Browse FAQs"
        secondaryHref="/faq"
      />
    </PageLayout>
  );
}