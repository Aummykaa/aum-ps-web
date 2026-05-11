import { SectionTitle } from "@/components/ui/section-title";
import { SkillCard } from "@/components/ui/skill-card";
import { capabilities } from "@/data/capabilities";

export function HowIWork() {
  return (
    <section
      aria-labelledby="my-skills-heading"
      className="rounded-[1.25rem] border border-[#1c3521]/[0.08] bg-[#FFFFFF] px-5 py-10 sm:px-8 sm:py-11 lg:px-10 lg:py-12"
    >
      <SectionTitle id="my-skills-heading" variant="mutedCard">
        My Skills
      </SectionTitle>
      <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-[#1c3521]/92 sm:text-[1.0625rem]">
        A practical overview of the skills, methods, and tools I&apos;ve used
        throughout my professional journey.
      </p>

      <ul className="mt-10 grid list-none gap-5 p-0 sm:mt-11 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-7">
        {capabilities.map((cap) => (
          <li key={cap.title} className="min-w-0">
            <SkillCard
              title={cap.title}
              description={cap.description}
              bullets={cap.bullets}
              tools={cap.tools}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
