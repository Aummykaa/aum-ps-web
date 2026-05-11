import type { ElementType, ReactNode } from "react";

const variantClass = {
  /** CV work timeline / Working Experience heading */
  timeline: "text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-label",
  /** Home hero + education eyebrows */
  heroEyebrow:
    "text-xs font-semibold uppercase tracking-[0.28em] text-label",
  /** CV hero eyebrow (“Professional profile”) — paragraph, not heading */
  pageEyebrow:
    "text-xs font-semibold uppercase tracking-[0.24em] text-label sm:text-[0.8125rem]",
  /** Solid white capability card section title (“My Skills”) */
  mutedCard:
    "text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-[#1c3521]/70",
} as const;

export type SectionTitleVariant = keyof typeof variantClass;

type SectionTitleProps = {
  id?: string;
  as?: "h2" | "p";
  children: ReactNode;
  variant?: SectionTitleVariant;
  animate?: boolean;
  animationDelayMs?: number | string;
  className?: string;
};

/** Uppercase eyebrows / timeline titles across pages */
export function SectionTitle({
  id,
  as = "h2",
  children,
  variant = "timeline",
  animate = false,
  animationDelayMs,
  className = "",
}: SectionTitleProps) {
  const Cmp = as as ElementType;
  const base = variantClass[variant];
  const motion = animate ? "animate-fade-rise" : "";
  const merged = `${base} ${motion} ${className}`.trim();

  const style =
    animate && animationDelayMs != null
      ? ({ animationDelay: `${animationDelayMs}ms` } as const)
      : undefined;

  return (
    <Cmp id={id} className={merged} style={style}>
      {children}
    </Cmp>
  );
}
