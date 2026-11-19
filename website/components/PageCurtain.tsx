"use client";
import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Route-change wipe: when the pathname changes, a jungle panel (lime edge)
 * covers the new page before first paint, then lifts away. Skips the very
 * first load (the intro handles that) and prefers-reduced-motion.
 */
export default function PageCurtain() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement | null>(null);
  const first = useRef(true);

  useLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.remove("is-lifting");
    el.classList.add("is-covering");
    // Force a reflow so the lift animation restarts on every navigation.
    void el.offsetWidth;
    el.classList.remove("is-covering");
    el.classList.add("is-lifting");
    const done = () => el.classList.remove("is-lifting");
    el.addEventListener("animationend", done, { once: true });
    return () => el.removeEventListener("animationend", done);
  }, [pathname]);

  return (
    <div ref={ref} className="page-curtain" aria-hidden>
      <span className="page-curtain__mark">DRU.</span>
    </div>
  );
}
