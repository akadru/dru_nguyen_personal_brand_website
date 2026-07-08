import { type ReactNode, type ElementType } from "react";

type Props = { children: ReactNode; className?: string; delay?: 0 | 1 | 2 | 3; as?: ElementType };

/**
 * Thin marker for the site-wide motion engine (components/SiteMotion.tsx):
 * emits data-reveal so its content rises + fades in on scroll (GSAP). A wrapper
 * carrying data-reveal yields to any more specific reveal inside it, so it never
 * double-animates the homepage's split-text / media effects. No animation logic
 * lives here, and content is visible by default (no stuck-hidden if JS is off).
 */
export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const dataProps: Record<string, string> = { "data-reveal": "" };
  if (delay) dataProps["data-reveal-delay"] = String(delay);
  return (
    <Tag className={className} {...dataProps}>
      {children}
    </Tag>
  );
}
