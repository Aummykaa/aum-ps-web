/** Replace with your Medium profile, publication, or article list URL. */
const mediumPsychologyArticlesUrl =
  process.env.NEXT_PUBLIC_MEDIUM_ARTICLES_URL ??
  "https://medium.com/@AumPS_VisualEcho";

const ACCENT_PRIMARY = "#ab0608";
const ACCENT_MINT = "#90b5a2";
const ACCENT_CORAL = "#cb484b";

type EducationTimelineEntry = {
  id: string;
  degree: string;
  institution: string;
  periodLabel: string;
  current: boolean;
  body: string;
};

const educationTimeline: EducationTimelineEntry[] = [
  {
    id: "be-ice",
    degree: "B.E., Information and Communication Engineering",
    institution: "Chulalongkorn University",
    periodLabel: "Aug 2013 — May 2017",
    current: false,
    body:
      "Relevant Coursework: Software Development, Technology Management, Networking, and Telecommunications",
  },
  {
    id: "ma-counseling",
    degree: "M.A., Counseling Psychology",
    institution: "Ramkhamhaeng University",
    periodLabel: "Expected 2027",
    current: true,
    body:
      "Relevant Coursework: Counseling Psychology theories and therapeutic approaches, including Cognitive Behavioral Therapy (CBT), Satir Model, Solution-Focused Brief Therapy (SFBT), Existential Therapy, and Gestalt Therapy, along with Statistics, Mental Health, Positive Psychology, Crisis Counseling, and Group and Family Counseling.",
  },
];

export function EducationPsychologyJourney() {
  return (
    <section
      aria-labelledby="education-heading"
      className="bg-transparent px-4 py-[5rem] sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="education-heading"
          className="animate-fade-rise text-xs font-semibold uppercase tracking-[0.28em] text-label"
          style={{ animationDelay: "40ms" }}
        >
          Education &amp; psychology journey
        </h2>
        <p
          className="animate-fade-rise mt-5 max-w-3xl text-pretty text-2xl font-semibold leading-snug tracking-tight text-text sm:text-[1.75rem]"
          style={{ animationDelay: "80ms" }}
        >
          Journey from Software Development to Understanding the Human Mind
        </p>
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

        <ol
          className="relative mt-9 max-w-3xl pl-0 lg:mt-11"
          style={{
            borderLeftWidth: 2,
            borderLeftStyle: "solid",
            borderLeftColor: `${ACCENT_MINT}55`,
          }}
        >
          {educationTimeline.map((entry, index) => (
            <li
              key={entry.id}
              className={`animate-fade-rise relative pb-12 pl-9 sm:pl-11 ${
                index === educationTimeline.length - 1 ? "pb-0" : ""
              }`}
              style={{
                animationDelay: index === 0 ? "160ms" : "220ms",
              }}
            >
              <span
                className="absolute -left-[10px] top-1.5 flex h-[18px] w-[18px] rounded-full border-2 bg-background"
                style={
                  entry.current
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

              <div className="rounded-xl border border-text/[0.06] bg-background/55 px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-base font-semibold text-text sm:text-lg">
                    {entry.degree}
                  </h3>
                  {entry.current ? (
                    <span
                      className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ring-1 ring-[#ab0608]/35"
                      style={{
                        backgroundColor: `${ACCENT_PRIMARY}10`,
                        color: ACCENT_PRIMARY,
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
              </div>
            </li>
          ))}
        </ol>

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
          <a
            href={mediumPsychologyArticlesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#ab0608] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_2px_14px_-3px_rgba(171,6,8,0.18)] transition-[transform,box-shadow,background-color] duration-300 hover:bg-[#8a0507] motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Read on Medium
            <span className="text-xs text-white/90" aria-hidden>
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
