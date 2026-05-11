import Link from "next/link";
import type { ReactNode } from "react";

const presetClasses = {
  hero: [
    "group inline-flex items-center justify-center gap-2 rounded-full bg-[#ab0608] px-8 py-3.5 text-sm font-semibold text-white",
    "shadow-[0_2px_14px_-3px_rgba(171,6,8,0.18)] hover:shadow-[0_8px_28px_-6px_rgba(171,6,8,0.22)]",
    "transition-[transform,box-shadow,background-color] duration-300 hover:bg-[#8a0507]",
    "motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  ].join(" "),
  section: [
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#ab0608] px-8 py-3.5 text-sm font-semibold text-white",
    "shadow-[0_2px_14px_-3px_rgba(171,6,8,0.18)] transition-[transform,box-shadow,background-color] duration-300 hover:bg-[#8a0507]",
    "motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  ].join(" "),
  download: [
    "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#ab0608] px-9 py-3.5 text-sm font-semibold text-white",
    "shadow-[0_2px_16px_-4px_rgba(171,6,8,0.35)] transition-[transform,box-shadow,background-color,opacity] duration-300 ease-out hover:bg-[#8a0507]",
    "hover:shadow-[0_12px_36px_-14px_rgba(171,6,8,0.4)] motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#90b5a2]/70 focus-visible:ring-offset-[6px] focus-visible:ring-offset-background active:translate-y-0",
  ].join(" "),
} as const;

export type CTAPreset = keyof typeof presetClasses;

type CTAButtonProps = {
  href: string;
  preset: CTAPreset;
  children: ReactNode;
  className?: string;
  download?: string | boolean;
  ariaLabel?: string;
};

/** Primary branded link / anchor with shared motion and focus rings. */
export function CTAButton({
  href,
  preset,
  children,
  className = "",
  download,
  ariaLabel,
}: CTAButtonProps) {
  const merged = `${presetClasses[preset]} ${className}`.trim();
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        {...(download != null ? { download: download === true ? "" : download } : {})}
        className={merged}
        aria-label={ariaLabel}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {isExternal ? (
          <span className="sr-only"> (opens in a new tab)</span>
        ) : null}
      </a>
    );
  }

  if (download != null) {
    return (
      <a
        href={href}
        download={download === true ? "" : download}
        className={merged}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={merged} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
