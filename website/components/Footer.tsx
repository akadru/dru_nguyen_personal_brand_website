import Link from "next/link";

const cols = [
  {
    title: "Connect",
    items: [
      { label: "LinkedIn", href: "https://linkedin.com/in/dru-nguyen" },
      { label: "Substack", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
  {
    title: "Explore",
    items: [
      { label: "About", href: "/about" },
      { label: "Content", href: "/content" },
      { label: "Speaking", href: "/speaking" },
      { label: "Ventures", href: "/ventures" },
    ],
  },
  {
    title: "Read",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--brand-jungle)", color: "var(--brand-white)" }}>
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full text-xl font-extrabold"
                style={{ background: "var(--brand-jungle)", border: "1px solid var(--brand-pastel)", color: "var(--brand-lime)" }}
              >
                D
              </span>
              <div>
                <div className="text-xl font-extrabold tracking-tight">Dru Nguyen</div>
                <div className="text-xs" style={{ color: "var(--brand-pastel)" }}>Operator · AI Educator</div>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed" style={{ color: "var(--brand-pastel)" }}>
              Operator. Co-founder. Investor. AI-using operator becoming an educator across Skylight, Xood, and a six-business advisory portfolio.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div className="section-label" style={{ color: "var(--brand-lime)" }}>{col.title}</div>
              <ul className="mt-4 space-y-3">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <Link href={it.href} className="text-sm font-semibold hover:opacity-70" style={{ color: "var(--brand-white)" }}>
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="mt-14 flex flex-col gap-2 border-t pt-6 text-xs md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "rgba(176,190,197,0.2)", color: "var(--brand-pastel)" }}
        >
          <div>© {year} Dru Nguyen. All rights reserved.</div>
          <div className="font-semibold uppercase tracking-wider" style={{ color: "var(--brand-lime)", letterSpacing: "0.12em" }}>
            #DoingGoodWithData · #FutureOfWork
          </div>
        </div>
      </div>
    </footer>
  );
}
