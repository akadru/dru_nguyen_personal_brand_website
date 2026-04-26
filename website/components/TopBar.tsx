"use client";
import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/dru-nguyen" },
  { label: "Substack", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Threads", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "Email", href: "/contact" },
];

export default function TopBar() {
  return (
    <div
      className="hidden border-b md:block"
      style={{ background: "var(--brand-jungle)", borderColor: "rgba(176,190,197,0.15)" }}
    >
      <div className="mx-auto flex h-9 max-w-[1300px] items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="text-[10px] font-bold uppercase transition-colors hover:text-[var(--brand-lime)]"
              style={{ color: "var(--brand-pastel)", letterSpacing: "0.18em" }}
            >
              {s.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase" style={{ color: "var(--brand-pastel)", letterSpacing: "0.18em" }}>
          <span>Asia/Ho_Chi_Minh</span>
          <span style={{ color: "var(--brand-lime)" }}>·</span>
          <span>#DoingGoodWithData</span>
        </div>
      </div>
    </div>
  );
}
