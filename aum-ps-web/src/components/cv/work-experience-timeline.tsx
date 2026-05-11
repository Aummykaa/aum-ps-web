"use client";

import { useMemo, useState } from "react";

export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location?: string;
  startLabel: string;
  endLabel: string | null;
  current: boolean;
  summary: string;
  achievements?: string[];
};

const ACCENT_PRIMARY = "#ab0608";
const ACCENT_MINT = "#90b5a2";
const ACCENT_CORAL = "#cb484b";

/** Work history — aligned to CV / resume content. */
export const PLACEHOLDER_EXPERIENCES: ExperienceItem[] = [
  {
    id: "ocp-sg",
    role: "Product Owner (B2B/B2C Digital Agricultural Product)",
    organization: "OCP Singapore",
    startLabel: "Sep 2025",
    endLabel: null,
    current: true,
    summary:
      "Leading a digital agricultural product lane with a focus on validation in real farming contexts.",
    achievements: [
      "Built and validated a crop monitoring product prototype using Replit and ChatGPT, conducting field tests, together with user interviews with farmers to evaluate usability, crop monitoring workflows, and feature effectiveness in actual farming environments.",
    ],
  },
  {
    id: "sp-wellness",
    role: "Product Owner (Client Project: B2C Wellness Service)",
    organization: "Seven Peaks Software",
    startLabel: "Feb 2025",
    endLabel: "Aug 2025",
    current: false,
    summary:
      "Service design and delivery for a B2C wellness client, from journey mapping through launch.",
    achievements: [
      "Designed the user journey for the entire service, including the user flow in the application and the operation flow with the designers and clients.",
      "Implemented Stripe for seamless credit/debit card and PromptPay payments.",
    ],
  },
  {
    id: "sp-scg",
    role: "Product Manager (Client Project: SCG – Nexter Living)",
    organization: "Seven Peaks Software",
    startLabel: "Jul 2023",
    endLabel: "Feb 2025",
    current: false,
    summary:
      "Client delivery for SCG Nexter Living—proposals through go-live and operational improvement.",
    achievements: [
      "Collaborated with the BD team to craft client proposals through contract signing.",
      "Reduce Manual Work by up to 30% by revising the supply chain operations flow and replacing some manual tasks with automation.",
    ],
  },
  {
    id: "sp-rever",
    role: "Product Owner (Client Project: Rever Automotive)",
    organization: "Seven Peaks Software",
    startLabel: "Jun 2023",
    endLabel: "Nov 2023",
    current: false,
    summary:
      "Cross-system alignment and integrations for an automotive client program.",
    achievements: [
      "Collaborated with system architects to streamline operations and integrate 3rd-party systems, including SAP Financial Module and the logistics system.",
    ],
  },
  {
    id: "freshket",
    role: "Product Owner",
    organization: "Freshket (Polar Bear Mission Company Limited)",
    startLabel: "Sep 2022",
    endLabel: "May 2023",
    current: false,
    summary:
      "Internal sales tooling and sales-process redesign for CRM cost and efficiency.",
    achievements: [
      "Within four months, redesigning the sales process and developing internal sales solutions reduced CRM's annual cost by more than 50% or 2 million baht.",
    ],
  },
  {
    id: "chef-yim",
    role: "Product Owner Manager",
    organization: "Chef Yim / Cho Yim (Central Food Retail B2B Platform)",
    startLabel: "Oct 2021",
    endLabel: "Aug 2022",
    current: false,
    summary:
      "B2B platform order flow and scrum-led delivery for Central Food Retail.",
    achievements: [
      "Re-designed the order flow with 3rd-party developers, increasing the order success rate to 80%.",
      "Increased sales revenue by 10X daily within 3 months by managing a scrum team to build a sales solution in one month.",
    ],
  },
  {
    id: "exxon",
    role: "System Change Coordinator",
    organization: "ExxonMobil Limited (Esso Smiles Thailand)",
    startLabel: "Oct 2021",
    endLabel: "Aug 2022",
    current: false,
    summary:
      "Loyalty and portable EDC experience design—field research with pump attendants and territory managers.",
    achievements: [
      "Designed the end-to-end earn-and-redeem points flow for the portable EDC system.",
      "Conducted an online usability testing event with 12 pump attendants and four territory managers to gather feedback on the new Android EDC.",
    ],
  },
];

const MONTH_ORDER: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function monthYearToNumber(label: string): number {
  const m = label.match(/^([A-Za-z]{3})\s+(\d{4})$/);
  if (!m?.[1] || !m[2]) return 0;
  const mon = MONTH_ORDER[m[1]] ?? 0;
  const year = Number.parseInt(m[2], 10);
  return year * 12 + mon;
}

function endSortKey(exp: ExperienceItem): number {
  if (exp.current || exp.endLabel == null) return Number.POSITIVE_INFINITY;
  return monthYearToNumber(exp.endLabel);
}

function startSortKey(exp: ExperienceItem): number {
  return monthYearToNumber(exp.startLabel);
}

const INITIAL_ROLE_COUNT = 3;

function sortExperiences(list: ExperienceItem[]): ExperienceItem[] {
  return [...list].sort((a, b) => {
    if (a.current !== b.current) return a.current ? -1 : 1;
    const endDiff = endSortKey(b) - endSortKey(a);
    if (endDiff !== 0) return endDiff;
    const startDiff = startSortKey(b) - startSortKey(a);
    if (startDiff !== 0) return startDiff;
    return a.organization.localeCompare(b.organization);
  });
}

function isDetailVisible(
  openMap: Record<string, boolean | undefined>,
  expId: string,
  index: number,
): boolean {
  return openMap[expId] ?? index === 0;
}

export function WorkExperienceTimeline({
  items = PLACEHOLDER_EXPERIENCES,
}: {
  items?: ExperienceItem[];
}) {
  const sorted = useMemo(() => sortExperiences(items), [items]);
  const [detailOpen, setDetailOpen] = useState<Record<string, boolean | undefined>>(
    {},
  );
  const [listExpanded, setListExpanded] = useState(false);

  const hasHiddenRoles = sorted.length > INITIAL_ROLE_COUNT;
  const visibleRoles = listExpanded
    ? sorted
    : sorted.slice(0, INITIAL_ROLE_COUNT);

  const toggleDetail = (expId: string, index: number) => {
    if (index === 0) return;
    setDetailOpen((prev) => {
      const current = isDetailVisible(prev, expId, index);
      return { ...prev, [expId]: !current };
    });
  };

  const periodLabel = (exp: ExperienceItem) =>
    `${exp.startLabel} — ${exp.endLabel ?? "Present"}`;

  return (
    <section aria-labelledby="work-heading">
      <h2
        id="work-heading"
        className="text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-label"
      >
        Working Experience
      </h2>

      <ol
        className="relative mt-9 max-w-3xl pl-0 lg:mt-11"
        style={{
          borderLeftWidth: 2,
          borderLeftStyle: "solid",
          borderLeftColor: `${ACCENT_MINT}55`,
        }}
      >
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
              {/* Timeline node */}
              <span
                className="absolute -left-[10px] top-1.5 flex h-[18px] w-[18px] rounded-full border-2 bg-background"
                style={
                  exp.current
                    ? {
                        borderColor: ACCENT_PRIMARY,
                        boxShadow: `0 0 0 3px ${ACCENT_MINT}40, 0 0 0 1px ${ACCENT_CORAL}30`,
                      }
                    : {
                        borderColor: `${ACCENT_MINT}b3`,
                        boxShadow: `inset 0 0 0 1px ${ACCENT_CORAL}35`,
                      }
                }
                aria-hidden
              />

              <div className="rounded-xl border border-text/[0.06] bg-background/55 px-4 py-4 transition-[background-color,border-color,box-shadow] duration-300 ease-out sm:px-5 sm:py-5">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-base font-semibold text-text sm:text-lg">
                    {exp.role}
                  </h3>
                  {exp.current ? (
                    <span
                      className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ring-1 ring-[#ab0608]/35"
                      style={{
                        backgroundColor: `${ACCENT_PRIMARY}10`,
                        color: ACCENT_PRIMARY,
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
                            style={{ color: ACCENT_MINT }}
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
                                    backgroundColor: ACCENT_CORAL,
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
                    className="mt-4 text-sm font-medium text-[#ab0608] underline decoration-[#cb484b]/45 underline-offset-[5px] outline-none transition-[opacity,transform] duration-300 ease-out hover:decoration-[#90b5a2] hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#90b5a2]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:mt-5"
                    aria-expanded={detailVisible}
                    aria-controls={`work-detail-${exp.id}`}
                  >
                    {detailVisible ? "View less" : "View more"}
                  </button>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>

      {hasHiddenRoles ? (
        <div className="mt-10 lg:mt-11">
          <button
            type="button"
            onClick={() => setListExpanded((e) => !e)}
            className="text-sm font-medium text-[#ab0608] underline decoration-[#cb484b]/45 underline-offset-[5px] outline-none transition-[opacity,transform] duration-300 ease-out hover:decoration-[#90b5a2] hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#90b5a2]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-expanded={listExpanded}
          >
            {listExpanded ? "View less roles" : "View more roles"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
