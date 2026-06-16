"use client";

import { useState } from "react";

type Variant = "dark" | "light";

export default function CopyPromptButton({
  text,
  variant = "dark",
  label = "Copy prompt",
}: {
  text: string;
  variant?: Variant;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers / iframes without clipboard permission
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } finally {
        document.body.removeChild(ta);
      }
    }
  };

  const darkStyle: React.CSSProperties = {
    background: copied ? "var(--brand-lime)" : "transparent",
    color: copied ? "var(--brand-jungle)" : "var(--brand-lime)",
    border: "1px solid var(--brand-lime)",
  };

  const lightStyle: React.CSSProperties = {
    background: copied ? "var(--brand-jungle)" : "transparent",
    color: copied ? "var(--brand-white)" : "var(--brand-jungle)",
    border: "1px solid var(--brand-jungle)",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={copied ? "Copied to clipboard" : label}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-extrabold uppercase transition-colors"
      style={{
        ...(variant === "light" ? lightStyle : darkStyle),
        letterSpacing: "0.14em",
        borderRadius: 6,
        fontFamily: "'Outfit', system-ui, sans-serif",
        cursor: "pointer",
      }}
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          {label}
        </>
      )}
    </button>
  );
}
