"use client";
import { useEffect, useRef, useState, type ReactNode, type JSX } from "react";

type Props = { children: ReactNode; className?: string; delay?: 0 | 1 | 2 | 3; as?: keyof JSX.IntrinsicElements };

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      // Fire a touch before the element scrolls into view (expand the root's
      // bottom edge) so content is already easing in by the time it's on screen —
      // no empty band that pops. threshold 0 keeps it responsive on fast scrolls.
      { threshold: 0, rootMargin: "0px 0px 12% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  return (
    // @ts-expect-error - dynamic tag
    <Tag ref={ref} className={`reveal${visible ? " is-visible" : ""}${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
