"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Horizontal card rail. It scrolls sideways on its own (trackpad side-swipe,
 * touch swipe, mouse drag, arrow buttons, keyboard) and never takes over
 * vertical page scroll: a normal up/down wheel or swipe moves the page past it.
 */
export default function StoryRail({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Mouse drag-to-scroll (touch already swipes natively). Snap is paused while
  // dragging and restored on release, which settles on the nearest card.
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { x: e.clientX, left: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
    el.style.scrollSnapType = "none";
    el.style.cursor = "grabbing";
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    const d = drag.current;
    if (!el || !d) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 3) d.moved = true;
    el.scrollLeft = d.left - dx;
  };
  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !drag.current) return;
    drag.current = null;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    el.style.cursor = "";
    el.style.scrollSnapType = "";
  };

  const step = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = 24;
    const w = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  const btn =
    "flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-200 disabled:cursor-default disabled:opacity-30 enabled:hover:scale-105";

  return (
    <>
      <div
        ref={ref}
        onScroll={update}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDragStart={(e) => e.preventDefault()}
        tabIndex={0}
        role="region"
        aria-label={label}
        data-lenis-prevent-touch
        className="mt-8 cursor-grab select-none snap-x snap-mandatory scroll-px-5 overflow-x-auto overscroll-x-contain outline-none [scrollbar-width:none] md:mt-12 md:scroll-px-10 min-[1400px]:scroll-pl-[max(2.5rem,calc((100%-1400px)/2+2.5rem))] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {/* Progress + arrows */}
      <div className="mx-auto mt-8 flex w-full max-w-[1400px] items-center gap-6 px-5 md:mt-10 md:px-10">
        <div className="h-[2px] flex-1 overflow-hidden" style={{ background: "rgba(176,190,197,0.18)" }} aria-hidden>
          <div
            className="h-full origin-left transition-transform duration-150"
            style={{ background: "var(--brand-lime)", transform: `scaleX(${Math.max(0.04, progress)})` }}
          />
        </div>
        <div className="hidden gap-3 md:flex">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={atStart}
            aria-label="Previous chapter"
            className={btn}
            style={{ borderColor: "rgba(173,251,73,0.5)", color: "var(--brand-lime)" }}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={atEnd}
            aria-label="Next chapter"
            className={btn}
            style={{ borderColor: "rgba(173,251,73,0.5)", color: "var(--brand-lime)" }}
          >
            →
          </button>
        </div>
      </div>
    </>
  );
}
