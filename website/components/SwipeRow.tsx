"use client";
import { Children, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Mobile: a horizontal scroll-snap carousel (peek of the next card + dot
 * indicators). Desktop (md+): renders the normal CSS grid, unchanged.
 *
 * Desktop layout must match the section's original grid exactly, so pass the
 * same `md:grid-cols-*` and gap classes the section used before.
 */
type Props = {
  children: ReactNode;
  className?: string;      // outer wrapper (e.g. "mt-12")
  desktopGrid: string;     // e.g. "md:grid-cols-3" or "md:grid-cols-2 lg:grid-cols-3"
  desktopGap?: string;     // e.g. "md:gap-x-8 md:gap-y-14" | "md:gap-0"
  mobileGap?: string;      // gap between cards while swiping
  basis?: string;          // mobile card width (leaves a peek of the next)
  mobilePad?: string;      // horizontal padding on the track (for full-bleed sections)
  surface?: "light" | "dark"; // dot colors for the section background
};

export default function SwipeRow({
  children,
  className = "",
  desktopGrid,
  desktopGap = "md:gap-x-8 md:gap-y-14",
  mobileGap = "gap-4",
  basis = "basis-[82%]",
  mobilePad = "",
  surface = "light",
}: Props) {
  const items = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el || items.length < 2) return;
    const step = el.scrollWidth / items.length;
    const i = Math.round(el.scrollLeft / step);
    setActive(Math.min(items.length - 1, Math.max(0, i)));
  };

  // Reset to the first card when the set of items changes (e.g. blog filter).
  useEffect(() => {
    const el = trackRef.current;
    if (el) el.scrollLeft = 0;
    setActive(0);
  }, [items.length]);

  const dotActive = surface === "dark" ? "var(--brand-lime)" : "var(--brand-jungle)";
  const dotIdle = surface === "dark" ? "rgba(242,242,242,0.35)" : "rgba(10,27,36,0.22)";

  return (
    <div className={className}>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className={`flex ${mobileGap} ${mobilePad} snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid ${desktopGrid} ${desktopGap} md:overflow-visible md:px-0`}
      >
        {items.map((child, i) => (
          <div key={i} className={`shrink-0 ${basis} snap-start md:shrink md:basis-auto`}>
            {child}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className="mt-5 flex justify-center gap-2 md:hidden" aria-hidden>
          {items.map((_, i) => (
            <span
              key={i}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? 22 : 8,
                background: i === active ? dotActive : dotIdle,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
