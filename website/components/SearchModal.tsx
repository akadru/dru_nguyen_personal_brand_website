"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { POSTS } from "@/lib/posts";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "/" && !open && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
    else setQ("");
  }, [open]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return POSTS.slice(0, 6);
    return POSTS.filter((p) =>
      [p.title, p.kind, p.pillar, p.topic].some((s) => s.toLowerCase().includes(term))
    );
  }, [q]);

  return (
    <>
      <button
        aria-label="Search"
        onClick={() => setOpen(true)}
        className="hidden h-9 items-center gap-2 rounded-full border px-3 text-xs font-bold uppercase md:inline-flex"
        style={{ borderColor: "rgba(176,190,197,0.3)", color: "var(--brand-pastel)", letterSpacing: "0.12em" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        Search
        <span
          className="ml-2 rounded px-1.5 py-0.5 text-[10px] font-bold"
          style={{ background: "rgba(173,251,73,0.15)", color: "var(--brand-lime)", letterSpacing: "0.05em" }}
        >
          ⌘K
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh] backdrop-blur-md"
          style={{ background: "rgba(10,27,36,0.85)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-2xl border shadow-2xl"
            style={{ background: "var(--brand-white)", borderColor: "var(--brand-pastel)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b px-5 py-4" style={{ borderColor: "var(--brand-pastel)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--brand-myrtle)" }}>
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search essays, frameworks, ventures…"
                className="flex-1 bg-transparent text-base outline-none"
                style={{ color: "var(--brand-jungle)" }}
              />
              <button
                onClick={() => setOpen(false)}
                className="rounded px-2 py-1 text-[10px] font-bold uppercase"
                style={{ background: "var(--brand-tea)", color: "var(--brand-jungle)", letterSpacing: "0.1em" }}
              >
                ESC
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <div className="p-10 text-center text-sm" style={{ color: "var(--brand-myrtle)" }}>
                  No matches. Try &ldquo;EOS&rdquo;, &ldquo;Xood&rdquo;, or &ldquo;Vietnam&rdquo;.
                </div>
              ) : (
                <ul>
                  {results.map((p, i) => (
                    <li key={p.title + i} className="border-b" style={{ borderColor: "rgba(176,190,197,0.25)" }}>
                      <Link
                        href={p.href}
                        onClick={() => setOpen(false)}
                        className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-[var(--brand-tea)]"
                      >
                        <span
                          className="mt-1 inline-flex h-6 shrink-0 items-center rounded px-2 text-[10px] font-extrabold uppercase"
                          style={{ background: "var(--brand-jungle)", color: "var(--brand-lime)", letterSpacing: "0.12em" }}
                        >
                          {p.kind}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-base font-extrabold leading-snug" style={{ color: "var(--brand-jungle)", letterSpacing: "-0.01em" }}>
                            {p.title}
                          </div>
                          <div className="mt-1 text-xs font-bold uppercase" style={{ color: "var(--brand-myrtle)", letterSpacing: "0.12em" }}>
                            The {p.pillar} · {p.topic} · {p.read}
                          </div>
                        </div>
                        <span className="text-lg" style={{ color: "var(--brand-myrtle)" }}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div
              className="flex items-center justify-between border-t px-5 py-3 text-[10px] font-bold uppercase"
              style={{ borderColor: "var(--brand-pastel)", color: "var(--brand-myrtle)", letterSpacing: "0.18em" }}
            >
              <span>{results.length} result{results.length === 1 ? "" : "s"}</span>
              <span>
                <kbd style={{ color: "var(--brand-jungle)" }}>↵</kbd> open · <kbd style={{ color: "var(--brand-jungle)" }}>esc</kbd> close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
