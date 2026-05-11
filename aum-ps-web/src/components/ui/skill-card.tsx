type SkillCardProps = {
  title: string;
  description: string;
  bullets: string[];
  tools?: string[];
};

const cardOuterClass = [
  "flex h-full flex-col rounded-xl border border-[#1c3521]/[0.1] bg-[#FFFFFF] p-5 sm:p-6",
  "shadow-[0_2px_20px_-12px_rgba(28,53,33,0.06)]",
  "transition-[transform,box-shadow,border-color] duration-300 ease-out",
  "motion-safe:hover:-translate-y-1 motion-safe:hover:border-[#ab0608]/25",
  "motion-safe:hover:shadow-[0_16px_48px_-20px_rgba(28,53,33,0.14),0_8px_20px_-12px_rgba(171,6,8,0.08)]",
  "motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none",
].join(" ");

/** Capability tile used in “My Skills” CV grid */
export function SkillCard({ title, description, bullets, tools }: SkillCardProps) {
  return (
    <article className={cardOuterClass}>
      <div className="flex items-start gap-3">
        <span
          className="mt-1 inline-block h-[1.35rem] w-1 shrink-0 rounded-full bg-[#ab0608]"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-[#1c3521]">
            {title}
          </h3>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-[#1c3521]/78">
            {description}
          </p>
        </div>
      </div>

      <ul className="mt-4 space-y-1.5 pl-0">
        {bullets.map((item, index) => (
          <li
            key={`${title}-${index}`}
            className="relative pl-[1.125rem] text-sm leading-snug text-[#1c3521]/88 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-[#90b5a2]/85"
          >
            {item}
          </li>
        ))}
      </ul>

      {tools && tools.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-[#1c3521]/[0.06] pt-4">
          {tools.map((tool) => (
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
  );
}
