import Link from "next/link";

export type SocialLink = {
  label: string;
  href: string;
  svg: React.ReactNode;
};

// Personal handles — Dru's three live channels.
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dru-nguyen-962a82318/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.56c0-1.32-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.65H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.97 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
    ),
  },
  {
    label: "Substack",
    href: "https://substack.com/@drunguyenx",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406H22.539zM1.46 10.812V24L12 18.11 22.54 24V10.812zM22.539 0H1.46v2.836H22.539z"/></svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/andrew.d.nguyen.3",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.696 4.533-4.696 1.312 0 2.686.235 2.686.235v2.97H15.83c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
    ),
  },
];

// ─────────────────────────────────────────────────────────────────

type Props = {
  variant?: "footer" | "topbar" | "grid";
  className?: string;
};

export default function SocialIcons({ variant = "footer", className = "" }: Props) {
  const base = {
    footer: "h-9 w-9",
    topbar: "h-4 w-4",
    grid:   "h-6 w-6",
  }[variant];

  const wrapper = {
    footer: "flex flex-wrap items-center gap-4",
    topbar: "flex items-center gap-5",
    grid:   "grid grid-cols-3 gap-3",
  }[variant];

  return (
    <ul className={`${wrapper} ${className}`}>
      {SOCIAL_LINKS.map((s) => (
        <li key={s.label}>
          <Link
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="group inline-flex items-center justify-center transition-colors"
            style={{ color: "var(--brand-pastel)" }}
          >
            <span
              className={`${base} transition-colors group-hover:text-[var(--brand-lime)]`}
              aria-hidden
            >
              {s.svg}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
