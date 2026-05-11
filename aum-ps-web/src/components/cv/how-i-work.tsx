const CAPABILITIES: {
  title: string;
  description: string;
  bullets: string[];
  tools?: string[];
}[] = [
  {
    title: "Product Vision & Strategy",
    description:
      "Aligning business goals, user needs, and product direction into actionable strategy.",
    bullets: [
      "Stakeholder alignment",
      "Prioritization through impact analysis",
      "Product roadmap planning",
      "Success metric definition",
    ],
    tools: ["Miro", "Canva"],
  },
  {
    title: "Product Discovery",
    description:
      "Understanding users, validating assumptions, and identifying opportunities before building solutions.",
    bullets: [
      "Competitive and market research",
      "Product analytics",
      "User flow mapping",
      "Assumption mapping",
      "Design thinking",
      "AI-assisted research workflows",
    ],
    tools: ["NotebookLM", "Metabase"],
  },
  {
    title: "Product Delivery",
    description:
      "Turning ideas into scalable product experiences through collaboration and iterative delivery.",
    bullets: [
      "Agile and Scrum delivery",
      "Release planning",
      "Rollout and onboarding planning",
      "UAT/SIT coordination",
      "User training support",
    ],
  },
  {
    title: "Counseling Psychology",
    description:
      "Developing a deeper understanding of human behavior, emotions, communication, and mental well-being.",
    bullets: [
      "Deep and empathetic listening",
      "Socratic questioning",
      "Reflection and summarization",
      "Positive psychology approaches",
      "Statistics and behavioral analysis",
    ],
    tools: ["Jamovi"],
  },
  {
    title: "Project Management",
    description:
      "Coordinating people, timelines, and operational execution across cross-functional environments.",
    bullets: [
      "Resource planning",
      "Vendor coordination",
      "Work breakdown structures",
      "Timeline and task management",
      "Jira and ClickUp workflows",
    ],
    tools: ["Jira", "ClickUp"],
  },
  {
    title: "AI-assisted Prototyping",
    description:
      "Using AI-assisted workflows to accelerate prototyping, communication, and product experimentation.",
    bullets: [
      "Rapid prototype generation",
      "AI-assisted documentation",
      "Workflow automation",
      "Prompt-driven development",
      "Rapid iteration using AI tools",
    ],
    tools: ["Claude", "Cursor", "ChatGPT", "Replit"],
  },
];

export function HowIWork() {
  return (
    <section
      aria-labelledby="my-skills-heading"
      className="rounded-[1.25rem] border border-[#1c3521]/[0.08] bg-[#FFFFFF] px-5 py-10 sm:px-8 sm:py-11 lg:px-10 lg:py-12"
    >
      <h2
        id="my-skills-heading"
        className="text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-[#1c3521]/70"
      >
        My Skills
      </h2>
      <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-[#1c3521]/92 sm:text-[1.0625rem]">
        A practical overview of the skills, methods, and tools I&apos;ve used
        throughout my professional journey.
      </p>

      <ul className="mt-10 grid list-none gap-5 p-0 sm:mt-11 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-7">
        {CAPABILITIES.map((cap) => (
          <li key={cap.title} className="min-w-0">
            <article
              className={[
                "flex h-full flex-col rounded-xl border border-[#1c3521]/[0.1] bg-[#FFFFFF] p-5 sm:p-6",
                "shadow-[0_2px_20px_-12px_rgba(28,53,33,0.06)]",
                "transition-[transform,box-shadow,border-color] duration-300 ease-out",
                "motion-safe:hover:-translate-y-1 motion-safe:hover:border-[#ab0608]/25",
                "motion-safe:hover:shadow-[0_16px_48px_-20px_rgba(28,53,33,0.14),0_8px_20px_-12px_rgba(171,6,8,0.08)]",
                "motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 inline-block h-[1.35rem] w-1 shrink-0 rounded-full bg-[#ab0608]"
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-[#1c3521]">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-[#1c3521]/78">
                    {cap.description}
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-1.5 pl-0">
                {cap.bullets.map((item) => (
                  <li
                    key={item}
                    className="relative pl-[1.125rem] text-sm leading-snug text-[#1c3521]/88 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-[#90b5a2]/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {cap.tools && cap.tools.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2 border-t border-[#1c3521]/[0.06] pt-4">
                  {cap.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-full border border-[#ab0608]/15 bg-[#ab0608]/10 px-3 py-[0.3125rem] text-[0.75rem] font-medium leading-none text-[#ab0608] transition-[background-color,border-color,color] duration-200 ease-out hover:border-[#ab0608]/28 hover:bg-[#ab0608]/18 hover:text-[#8a0507]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
