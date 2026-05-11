import { CTAButton } from "@/components/ui/cta-button";
import { SectionTitle } from "@/components/ui/section-title";
import {
  TimelineCard,
  TimelineMarker,
  TimelineRail,
} from "@/components/ui/timeline-shell";
import { educationTimelineEntries } from "@/data/education-timeline";
import { SITE_MEDIUM_URL } from "@/lib/config/site-urls";
import { TIMELINE_PRIMARY } from "@/lib/config/timeline-accents";

export function EducationPsychologyJourney() {
  return (
    <section
      aria-labelledby="education-heading"
      className="bg-transparent px-4 py-[5rem] sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          id="education-heading"
          variant="heroEyebrow"
          animate
          animationDelayMs={40}
        >
          Education &amp; psychology journey
        </SectionTitle>
        <h3
          className="animate-fade-rise mt-5 max-w-3xl text-pretty text-2xl font-semibold leading-snug tracking-tight text-text sm:text-[1.75rem]"
          style={{ animationDelay: "80ms" }}
        >
          Journey from Software Development to Understanding the Human Mind
        </h3>
        <div
          className="animate-fade-rise mt-6 max-w-[40rem] space-y-6 text-pretty text-base leading-[1.85] text-text sm:text-[1.0625rem]"
          style={{ animationDelay: "120ms" }}
        >
          <p>
            My journey began in software development and evolved into product
            management. Over time, I realized that what drives me most is
            understanding people deeply — their emotions, behaviors, and real
            needs.
          </p>
          <p>
            I hope to combine technology and psychology to create meaningful
            products, foster genuine human connection, and contribute to better
            mental well-being.
          </p>
        </div>

        <TimelineRail>
          {educationTimelineEntries.map((entry, index) => (
            <li
              key={entry.id}
              className={`animate-fade-rise relative pb-12 pl-9 sm:pl-11 ${
                index === educationTimelineEntries.length - 1 ? "pb-0" : ""
              }`}
              style={{
                animationDelay: index === 0 ? "160ms" : "220ms",
              }}
            >
              <TimelineMarker current={entry.current} />

              <TimelineCard>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-base font-semibold text-text sm:text-lg">
                    {entry.degree}
                  </h3>
                  {entry.current ? (
                    <span
                      className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ring-1 ring-[#ab0608]/35"
                      style={{
                        backgroundColor: `${TIMELINE_PRIMARY}10`,
                        color: TIMELINE_PRIMARY,
                      }}
                    >
                      In progress
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm font-medium text-text">
                  {entry.institution}
                </p>
                <p className="mt-2 flex items-start gap-2 border-l-[3px] border-[#ab060835] pl-3 text-sm tabular-nums text-label sm:text-[0.9375rem]">
                  <span>{entry.periodLabel}</span>
                </p>

                <div className="mt-4 border-t border-mint/20 pt-4">
                  <p className="max-w-prose text-sm leading-[1.78] text-text sm:text-[0.9375rem]">
                    {entry.body}
                  </p>
                </div>
              </TimelineCard>
            </li>
          ))}
        </TimelineRail>

        <div
          className="animate-fade-rise mt-16 max-w-[40rem] rounded-[1.25rem] border border-text/[0.09] bg-background p-8 sm:p-10"
          style={{ animationDelay: "280ms" }}
        >
          <p className="text-[0.9375rem] font-semibold text-text">
            Writing &amp; reflection
          </p>
          <p className="mt-3 text-sm leading-[1.8] text-text sm:text-[0.9625rem]">
            Writing has become another way for me to reflect, and to understand
            both people and myself more deeply.
          </p>
          <CTAButton
            href={SITE_MEDIUM_URL}
            preset="section"
            className="mt-8"
          >
            Read on Medium
            <span className="text-xs text-white/90" aria-hidden>
              ↗
            </span>
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
