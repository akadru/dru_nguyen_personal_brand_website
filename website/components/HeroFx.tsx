"use client";
import { useEffect, useRef } from "react";

/**
 * Homepage hero interactivity. Drop it inside the hero <section>; it wires
 * itself to that parent:
 *
 *  - Cursor spotlight: a soft lime glow follows the mouse (fine pointers only).
 *  - Marker cycle: the lime marker sweeps through every [data-hero-word]
 *    (Operator → Builder → Experimenter) and jumps to the word you hover.
 *
 * The words are looked up fresh on every tick because the SplitText headline
 * reveal re-renders the heading's inner HTML. Under prefers-reduced-motion
 * nothing runs and the server-rendered state (Experimenter highlighted) stays.
 */
const START_DELAY = 1800; // let the headline reveal finish first
const INTERVAL = 2600;

export default function HeroFx() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spot = spotRef.current;
    const root = spot?.parentElement;
    if (!spot || !root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // ---- Marker cycle ------------------------------------------------------
    const words = () => Array.from(root.querySelectorAll<HTMLElement>("[data-hero-word]"));
    let index = Math.max(0, words().findIndex((w) => w.classList.contains("is-active")));
    let hovering = false;
    let inView = true;

    const activate = (i: number) => {
      index = i;
      words().forEach((w, n) => w.classList.toggle("is-active", n === i));
    };

    let timer: number | undefined;
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        if (hovering || !inView || document.hidden) return;
        const count = words().length;
        if (count) activate((index + 1) % count);
      }, INTERVAL);
    }, START_DELAY);

    const onOver = (e: PointerEvent) => {
      const word = e.target instanceof Element ? e.target.closest("[data-hero-word]") : null;
      if (word) {
        hovering = true;
        const i = words().indexOf(word as HTMLElement);
        if (i !== -1 && i !== index) activate(i);
      } else {
        hovering = false;
      }
    };
    root.addEventListener("pointerover", onOver);

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    });
    io.observe(root);

    // ---- Cursor spotlight (mouse / trackpad only) -------------------------
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let raf = 0;
    let mx = 0;
    let my = 0;
    const paint = () => {
      raf = 0;
      spot.style.setProperty("--mx", `${mx}px`);
      spot.style.setProperty("--my", `${my}px`);
    };
    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
      if (!raf) raf = requestAnimationFrame(paint);
    };
    const onEnter = () => spot.classList.add("is-on");
    const onLeave = () => {
      spot.classList.remove("is-on");
      hovering = false;
    };
    if (finePointer) {
      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerenter", onEnter);
    }
    root.addEventListener("pointerleave", onLeave);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      root.removeEventListener("pointerover", onOver);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={spotRef} className="hero-spotlight" aria-hidden />;
}
