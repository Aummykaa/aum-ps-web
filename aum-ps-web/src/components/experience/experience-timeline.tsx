"use client";

import { useCallback, useMemo, useState } from "react";

import { SectionTitle } from "@/components/ui/section-title";
import {
  TimelineCard,
  TimelineMarker,
  TimelineRail,
} from "@/components/ui/timeline-shell";
import type { ExperienceItem } from "@/data/work-experience";
import { PLACEHOLDER_EXPERIENCES } from "@/data/work-experience";
import {
  TIMELINE_CORAL,
  TIMELINE_MINT,
  TIMELINE_PRIMARY,
} from "@/lib/config/timeline-accents";
import { sortExperienceItems } from "@/lib/work-experience/sort-work-experience";

export type { ExperienceItem } from "@/data/work-experience";

const INITIAL_ROLE_COUNT = 3;

function isDetailVisible(
  openMap: Record<string, boolean | undefined>,
  expId: string,
  index: number,
): boolean {
  return openMap[expId] ?? index === 0;
}

const linkButtonClass =
  "text-sm font-medium text-[#ab0608] underline decoration-[#cb484b]/45 underline-offset-[5px] outline-none transition-[opacity,transform] duration-300 ease-out hover:decoration-[#90b5a2] hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#90b5a2]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ExperienceTimeline({
  items = PLACEHOLDER_EXPERIENCES,
}: {
  items?: ExperienceItem[];
}) {
  const sorted = useMemo(() => sortExperienceItems(items), [items]);
  const [detailOpen, setDetailOpen] = useState<
    Record<string, boolean | undefined>
  >({});
  const [listExpanded, setListExpanded] = useState(false);

  const hasHiddenRoles = sorted.length > INITIAL_ROLE_COUNT;
  const visibleRoles = listExpanded
    ? sorted
    : sorted.slice(0, INITIAL_ROLE_COUNT);

  const toggleDetail = useCallback((expId: string, index: number) => {
    if (index === 0) return;
    setDetailOpen((prev) => {
      const current = isDetailVisible(prev, expId, index);
      return { ...prev, [expId]: !current };
    });
  }, []);

  const periodLabel = (exp: ExperienceItem) =>
    `${exp.startLabel} — ${exp.endLabel ?? "Present"}`;

  return (
    <section aria-labelledby="work-heading">
      <SectionTitle id="work-heading">Working Experience</SectionTitle>

      <TimelineRail>
        {visibleRoles.map((exp, index) => {
          const globalIndex = sorted.findIndex((x) => x.id === exp.id);
          const detailVisible = isDetailVisible(detailOpen, exp.id, globalIndex);
          const isFirst = globalIndex === 0;
          const achievements = exp.achievements ?? [];

          return (
            <li
              key={exp.id}
              className={`relative pb-12 pl-9 sm:pl-11 ${
                index === visibleRoles.length - 1 ? "pb-0" : ""
              }`}
            >
              <TimelineMarker current={exp.current} />

              <TimelineCard>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-base font-semibold text-text sm:text-lg">
                    {exp.role}
                  </h3>
                  {exp.current ? (
                    <span
                      className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ring-1 ring-[#ab0608]/35"
                      style={{
                        backgroundColor: `${TIMELINE_PRIMARY}10`,
                        color: TIMELINE_PRIMARY,
                      }}
                    >
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm font-medium text-text">
                  {exp.organization}
                  {exp.location ? (
                    <span className="font-normal text-label">
                      {" "}
                      · {exp.location}
                    </span>
                  ) : null}
                </p>
                <p className="mt-2 flex items-start gap-2 border-l-[3px] border-[#ab060835] pl-3 text-sm tabular-nums text-label sm:text-[0.9375rem]">
                  <span>{periodLabel(exp)}</span>
                </p>

                <div id={`work-detail-${exp.id}`} className="mt-4">
                  {isFirst || detailVisible ? (
                    <div className="border-t border-mint/20 pt-4 animate-journey-panel">
                      <p className="max-w-prose text-sm leading-[1.78] text-text sm:text-[0.9375rem]">
                        {exp.summary}
                      </p>
                      {achievements.length > 0 ? (
                        <div className="mt-4">
                          <p
                            className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                            style={{ color: TIMELINE_MINT }}
                          >
                            Highlights
                          </p>
                          <ul className="mt-2 space-y-2">
                            {achievements.map((line, ai) => (
                              <li
                                key={`${exp.id}-a-${ai}`}
                                className="flex gap-2.5 text-sm leading-snug text-text sm:text-[0.9375rem]"
                              >
                                <span
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                                  style={{
                                    backgroundColor: TIMELINE_CORAL,
                                    opacity: 0.85,
                                  }}
                                  aria-hidden
                                />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="border-t border-mint/15 pt-3">
                      <p className="max-w-prose text-sm leading-relaxed text-text/70 line-clamp-2 sm:text-[0.9375rem]">
                        {exp.summary}
                      </p>
                    </div>
                  )}
                </div>

                {!isFirst ? (
                  <button
                    type="button"
                    onClick={() => toggleDetail(exp.id, globalIndex)}
                    className={`mt-4 sm:mt-5 ${linkButtonClass}`}
                    aria-expanded={detailVisible}
                    aria-controls={`work-detail-${exp.id}`}
                  >
                    {detailVisible ? "View less" : "View more"}
                  </button>
                ) : null}
              </TimelineCard>
            </li>
          );
        })}
      </TimelineRail>

      {hasHiddenRoles ? (
        <div className="mt-10 lg:mt-11">
          <button
            type="button"
            onClick={() => setListExpanded((e) => !e)}
            className={linkButtonClass}
            aria-expanded={listExpanded}
          >
            {listExpanded ? "View less roles" : "View more roles"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
