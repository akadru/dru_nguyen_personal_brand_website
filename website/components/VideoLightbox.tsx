"use client";
import { useEffect, useState } from "react";

/**
 * GaryVee-style "Play Video" hero button that opens a YouTube lightbox.
 * Render only when a videoId exists — the hero hides it until Dru's
 * intro/sizzle video is ready (drop the YouTube ID into HERO_VIDEO_ID
 * in app/page.tsx).
 */
export default function VideoLightbox({ videoId, label = "Play Video" }: { videoId: string; label?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
        style={{ color: "var(--brand-white)", letterSpacing: "0.18em" }}
      >
        <span
          className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 transition-colors group-hover:bg-[var(--brand-lime)] group-hover:border-[var(--brand-lime)] group-hover:text-[var(--brand-jungle)]"
          style={{ borderColor: "var(--brand-lime)", color: "var(--brand-lime)" }}
          aria-hidden
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-10"
          style={{ background: "rgba(10,27,36,0.92)" }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal
          aria-label="Video player"
        >
          <button
            aria-label="Close video"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border transition-transform hover:rotate-90"
            style={{ borderColor: "rgba(242,242,242,0.4)", color: "var(--brand-white)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
          <div className="aspect-video w-full max-w-[1100px]" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
              title="Dru Nguyen — video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
