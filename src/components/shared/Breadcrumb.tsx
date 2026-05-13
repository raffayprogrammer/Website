import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-white/60">
      <Link href="/" className="hover:text-cyan transition-colors">Home</Link>
      {crumbs.map((c) => (
        <span key={c.label} className="flex items-center gap-2">
          <span>›</span>
          {c.href ? (
            <Link href={c.href} className="hover:text-cyan transition-colors">
              {c.label}
            </Link>
          ) : (
            <span className="text-white/90">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}