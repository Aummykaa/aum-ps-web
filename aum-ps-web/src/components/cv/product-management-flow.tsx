"use client";

import { useId, useState } from "react";

export type FlowPhase = {
  id: string;
  title: string;
  shortLabel: string;
  points: string[];
};

/** Clockwise order; Launch & Monitoring feeds back into Vision & Strategy. */
export const PM_PHASES: FlowPhase[] = [
  {
    id: "vision",
    title: "Product Vision & Strategy",
    shortLabel: "Vision & strategy",
    points: [
      "Connect mission and market context to durable product direction.",
      "Align leadership and stakeholders on outcomes, bets, and tradeoffs.",
      "Refresh the narrative as discovery and monitoring surface new signals.",
    ],
  },
  {
    id: "discovery",
    title: "Product Discovery",
    shortLabel: "Discovery",
    points: [
      "Design Thinking",
      "Client Management",
      "UX Research",
      "Competitive Research",
      "Market Research",
    ],
  },
  {
    id: "prototype",
    title: "Prototype & Testing",
    shortLabel: "Prototype & test",
    points: [
      "AI-assisted prototyping using Replit, ChatGPT, and Cursor",
      "Cross-functional collaboration with engineers, designers, and business teams",
      "Usability Testing",
      "Prototype iteration and testing",
    ],
  },
  {
    id: "delivery",
    title: "Product Delivery",
    shortLabel: "Delivery",
    points: [
      "Agile Scrum",
      "User Story Mapping",
      "Release Planning",
      "Rollout Planning",
    ],
  },
  {
    id: "launch",
    title: "Product Launch & Monitoring",
    shortLabel: "Launch & monitoring",
    points: [
      "Product Metrics & Analytics",
      "Issue Support",
      "Backlog Prioritization",
      "Issue Investigation",
    ],
  },
];

const N = PM_PHASES.length;
const CX = 220;
const CY = 220;
const R = 142;

function deg(i: number) {
  return -90 + i * (360 / N);
}

function pt(d: number) {
  const rad = (d * Math.PI) / 180;
  return { x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) };
}

function arcPath(fromIndex: number) {
  const a0 = deg(fromIndex);
  const a1 = deg((fromIndex + 1) % N);
  const p0 = pt(a0);
  const p1 = pt(a1);
  return `M ${p0.x.toFixed(2)} ${p0.y.toFixed(2)} A ${R} ${R} 0 0 1 ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`;
}

/** Arc index whose arrow *enters* `intoIndex` when moving clockwise. */
function incomingArcIndex(intoIndex: number) {
  return (intoIndex + N - 1) % N;
}

function labelPos(i: number) {
  const d = deg(i);
  const rad = (d * Math.PI) / 180;
  const inset = 40;
  return {
    x: CX + (R + inset) * Math.cos(rad),
    y: CY + (R + inset) * Math.sin(rad),
    anchor:
      Math.abs(Math.cos(rad)) > 0.55
        ? Math.cos(rad) > 0
          ? "start"
          : "end"
        : "middle",
    baseline: Math.sin(rad) > 0.38 ? "hanging" : "middle",
  };
}

function wrapLabel(s: string, maxChars: number) {
  if (s.length <= maxChars) return [s];
  const words = s.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (next.length > maxChars && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = next;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

export function ProductManagementFlow() {
  const uid = useId().replace(/:/g, "");
  const [selectedIndex, setSelectedIndex] = useState(1);
  const selected = PM_PHASES[selectedIndex];

  const brandMarker = `pm-arrow-brand-${uid}`;
  const goldMarker = `pm-arrow-gold-${uid}`;

  const incIn = incomingArcIndex(selectedIndex);

  return (
    <section aria-labelledby="professional-journey-heading">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <h2
          id="professional-journey-heading"
          className="text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-label"
        >
          My Professional Journey
        </h2>
        <p className="max-w-md text-xs text-label sm:text-right">
          Tap the loop or a stage below to explore how each part connects.
        </p>
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-[1.85] text-text sm:text-base">
        A continuous loop:{" "}
        <span className="font-semibold text-[#1c3521]">Launch &amp; Monitoring</span>{" "}
        informs the next cycle of{" "}
        <span className="font-semibold text-[#1c3521]">
          Product Vision &amp; Strategy
        </span>
        , so direction stays tied to real-world outcomes.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,26rem)_1fr]">
        <div className="flex flex-col items-center lg:items-stretch">
          <figure className="relative mx-auto w-full max-w-[20rem]">
            <figcaption id={`${uid}-diagram-desc`} className="sr-only">
              Circular flow of five phases. After Launch and Monitoring, work
              loops back to Product Vision and Strategy.
            </figcaption>
            <svg
              viewBox="45 35 352 382"
              className="h-auto w-full overflow-visible [-webkit-tap-highlight-color:transparent]"
              role="img"
              aria-describedby={`${uid}-diagram-desc`}
            >
              <defs>
                <marker
                  id={brandMarker}
                  viewBox="0 0 10 10"
                  refX={8}
                  refY={5}
                  markerWidth={6}
                  markerHeight={6}
                  orient="auto"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" className="fill-brand" />
                </marker>
                <marker
                  id={goldMarker}
                  viewBox="0 0 10 10"
                  refX={8}
                  refY={5}
                  markerWidth={5}
                  markerHeight={5}
                  orient="auto"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" className="fill-gold" />
                </marker>
              </defs>

              <circle cx={CX} cy={CY} r={72} className="fill-mint/14 stroke-none" />
              <text
                x={CX}
                y={CY - 6}
                textAnchor="middle"
                className="fill-text text-[11px] font-bold uppercase tracking-[0.14em]"
              >
                Loop
              </text>
              <text
                x={CX}
                y={CY + 12}
                textAnchor="middle"
                className="fill-label text-[9px] font-medium leading-tight"
              >
                ← back to Vision
              </text>

              {PM_PHASES.map((_, arcFrom) => {
                const isActiveTrail = arcFrom === incIn;
                return (
                  <path
                    key={`arc-${arcFrom}`}
                    d={arcPath(arcFrom)}
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth={isActiveTrail ? 4 : 2.6}
                    className={
                      isActiveTrail ? "stroke-gold" : "stroke-text/[0.12]"
                    }
                    markerEnd={`url(#${arcFrom % 2 === 0 ? brandMarker : goldMarker})`}
                  />
                );
              })}

              {PM_PHASES.map((phase, i) => {
                const active = selectedIndex === i;
                const { x, y } = pt(deg(i));
                return (
                  <g key={phase.id}>
                    <circle
                      cx={x}
                      cy={y}
                      r={active ? 17 : 14}
                      className={`pointer-events-none stroke-[1.5] ${
                        active
                          ? "fill-mint/45 stroke-brand stroke-[2]"
                          : i === 0
                            ? "fill-gold/22 stroke-brand/40"
                            : "fill-background stroke-text/[0.18]"
                      }`}
                    />
                    <text
                      x={x}
                      y={y + 5}
                      textAnchor="middle"
                      className="pointer-events-none fill-text text-[12px] font-bold"
                    >
                      {i + 1}
                    </text>
                    <circle
                      cx={x}
                      cy={y}
                      r={24}
                      className="cursor-pointer fill-transparent stroke-none outline-none"
                      aria-label={`Show details: ${phase.title}`}
                      aria-pressed={active}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedIndex(i)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedIndex(i);
                        }
                      }}
                    />
                  </g>
                );
              })}

              {PM_PHASES.map((phase, i) => {
                const lp = labelPos(i);
                const lines = wrapLabel(phase.shortLabel, 16);
                return (
                  <text
                    key={`lbl-${phase.id}`}
                    x={lp.x}
                    y={lp.y}
                    textAnchor={
                      lp.anchor === "start"
                        ? "start"
                        : lp.anchor === "end"
                          ? "end"
                          : "middle"
                    }
                    dominantBaseline={
                      lp.baseline === "hanging" ? "hanging" : "middle"
                    }
                    className="pointer-events-none fill-text text-[10.5px] font-semibold leading-[1.2]"
                  >
                    {lines.map((line, li) => (
                      <tspan key={li} x={lp.x} dy={li === 0 ? 0 : 12}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                );
              })}
            </svg>
          </figure>

          <div
            className="mt-8 flex w-full flex-col gap-2"
            role="tablist"
            aria-label="Product management stages"
          >
            {PM_PHASES.map((phase, i) => {
              const active = selectedIndex === i;
              return (
                <button
                  key={phase.id}
                  type="button"
                  role="tab"
                  id={`tab-${uid}-${phase.id}`}
                  aria-selected={active}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setSelectedIndex(i)}
                  className={`flex w-full items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left transition-[background-color,border-color,box-shadow] duration-200 sm:gap-4 sm:py-3 ${
                    active
                      ? "border-brand/20 bg-background shadow-[inset_0_0_0_1px_rgba(203,72,75,0.14)] ring-1 ring-gold/25"
                      : "border-transparent bg-background/70 hover:bg-mint/[0.09] hover:ring-1 hover:ring-text/[0.08]"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                      active
                        ? "bg-[#ab0608] text-white shadow-sm"
                        : "bg-gold/14 text-text ring-1 ring-text/[0.1]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0 text-sm font-semibold leading-snug text-text">
                    {phase.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          aria-live="polite"
          aria-labelledby={`tab-${uid}-${selected.id}`}
          className="rounded-[1.25rem] border border-text/[0.09] bg-surface px-6 py-6 sm:p-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-text/[0.1] pb-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-label">
                Stage {selectedIndex + 1} of {N}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-text sm:text-2xl">
                {selected.title}
              </h3>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-mint/18 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-text ring-1 ring-text/[0.1]">
              {selectedIndex === 0 ? (
                <>
                  Loop anchor
                  <span aria-hidden className="text-label">
                    ↺
                  </span>
                </>
              ) : selectedIndex === N - 1 ? (
                <>
                  Then Vision
                  <span aria-hidden className="text-label">
                    →
                  </span>
                  <span className="font-bold tabular-nums text-[#1c3521]">1</span>
                </>
              ) : (
                <>
                  Then stage {selectedIndex + 2}
                  <span aria-hidden className="text-label">
                    →
                  </span>
                </>
              )}
            </div>
          </div>
          <ul className="mt-6 space-y-4">
            {selected.points.map((point, idx) => (
              <li key={`${selected.id}-${idx}`} className="flex gap-3.5">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/16 text-[11px] font-bold text-text ring-1 ring-text/[0.1]"
                  aria-hidden
                >
                  {idx + 1}
                </span>
                <span className="text-sm leading-relaxed text-text sm:text-[0.9375rem]">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
