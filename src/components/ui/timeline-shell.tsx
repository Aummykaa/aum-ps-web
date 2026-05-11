import type { ReactNode } from "react";

import {
  TIMELINE_CORAL,
  TIMELINE_MINT,
  TIMELINE_PRIMARY,
} from "@/lib/config/timeline-accents";

type TimelineRailProps = {
  children: ReactNode;
  className?: string;
};

/** Vertical rail + `<ol>` for experience-style timelines. */
export function TimelineRail({ children, className = "" }: TimelineRailProps) {
  return (
    <ol
      className={`relative mt-9 max-w-3xl pl-0 lg:mt-11 ${className}`.trim()}
      style={{
        borderLeftWidth: 2,
        borderLeftStyle: "solid",
        borderLeftColor: `${TIMELINE_MINT}55`,
      }}
    >
      {children}
    </ol>
  );
}

export function TimelineMarker({ current }: { current: boolean }) {
  return (
    <span
      className="absolute -left-[10px] top-1.5 flex h-[18px] w-[18px] rounded-full border-2 bg-background"
      style={
        current
          ? {
              borderColor: TIMELINE_PRIMARY,
              boxShadow: `0 0 0 3px ${TIMELINE_MINT}40, 0 0 0 1px ${TIMELINE_CORAL}30`,
            }
          : {
              borderColor: `${TIMELINE_MINT}b3`,
              boxShadow: `inset 0 0 0 1px ${TIMELINE_CORAL}35`,
            }
      }
      aria-hidden
    />
  );
}

type TimelineCardProps = {
  children: ReactNode;
};

export function TimelineCard({ children }: TimelineCardProps) {
  return (
    <div className="rounded-xl border border-text/[0.06] bg-background/55 px-4 py-4 transition-[background-color,border-color,box-shadow] duration-300 ease-out sm:px-5 sm:py-5">
      {children}
    </div>
  );
}
