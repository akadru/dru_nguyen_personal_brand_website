"use client";
import { useEffect } from "react";

/**
 * Enables gentle proximity scroll-snap for the homepage only.
 * Adds `.snap-y` to <html> on mount, removes it on unmount, so the snap
 * behaviour never leaks onto other routes (which scroll normally).
 * The actual snap rules live in globals.css under `html.snap-y`.
 */
export default function ScrollSnap() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("snap-y");
    return () => root.classList.remove("snap-y");
  }, []);
  return null;
}
