"use client";
import { useEffect, useRef } from "react";

/**
 * Custom magnetic cursor — a lime dot that follows the pointer and grows
 * into a lime ring over interactive elements. Mix-blend-mode: difference,
 * so it stays visible against any brand background.
 * Disabled on touch / coarse pointers.
 */
export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFine) return;

    const dot = dotRef.current;
    if (!dot) return;

    let raf = 0;
    let x = -100, y = -100;
    let tx = -100, ty = -100;

    const apply = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      dot.style.transform = `translate3d(${x - 7}px, ${y - 7}px, 0)`;
      raf = requestAnimationFrame(apply);
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive =
        target.closest("a, button, input, textarea, select, [data-magnetic]") !== null;
      dot.classList.toggle("is-hovering", interactive);
    };
    const onDown = () => dot.classList.add("is-pressed");
    const onUp = () => dot.classList.remove("is-pressed");
    const onLeave = () => { tx = -100; ty = -100; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(apply);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={dotRef} className="magnetic-cursor" aria-hidden />;
}
