import Image from "next/image";
import Link from "next/link";

import { EducationPsychologyJourney } from "@/components/education-psychology-journey";

const btnShadow =
  "shadow-[0_2px_14px_-3px_rgba(171,6,8,0.18)] hover:shadow-[0_8px_28px_-6px_rgba(171,6,8,0.22)]";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      <div className="pointer-events-none fixed inset-0 z-0 min-h-[100dvh] w-full overflow-hidden">
        <Image
          src="/home-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-left sm:object-[30%_center]"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background from-[0%] via-background/[0.92] via-[44%] to-background/12 sm:via-[48%]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(40vh,18rem)] bg-gradient-to-t from-background/[0.5] via-transparent to-transparent sm:h-[26vh]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-[100dvh] flex-1 flex-col">
        <section
          aria-labelledby="hero-heading summary-heading"
          className="relative -mt-14 flex min-h-[100dvh] w-full shrink-0 flex-col overflow-hidden px-4 pb-[5.25rem] pt-[calc(3.5rem+5.25rem)] sm:px-6 sm:pb-24 sm:pt-[calc(3.5rem+6rem)] lg:pb-28 lg:pt-[calc(3.5rem+7rem)]"
        >
          <div className="relative z-10 mx-auto max-w-5xl">
            <div
              className="animate-fade-rise flex flex-col gap-10"
              style={{ animationDelay: "40ms" }}
            >
              <div className="min-w-0">
                <h1
                  id="hero-heading"
                  className="text-balance text-[2.125rem] font-normal leading-[1.12] tracking-[-0.02em] sm:text-5xl lg:text-[3.25rem]"
                >
                  <span className="block font-[family-name:var(--font-archivo-black)] text-base leading-[1.06] text-[#ab0608] drop-shadow-[0_1px_12px_rgba(255,255,255,0.55)] sm:text-xl lg:text-2xl">
                    Hello! I&apos;m Aum
                  </span>
                  <span className="mt-3 block font-[family-name:var(--font-archivo-black)] leading-[1.06] text-[#ab0608] drop-shadow-[0_1px_14px_rgba(255,255,255,0.6)]">
                    Parnchanok Skulbenja
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-pretty italic text-base leading-relaxed text-text drop-shadow-[0_1px_10px_rgba(255,255,255,0.65)] sm:text-lg">
                  “Passionate about creating meaningful impact, understanding people
                  and the human mind, and turning complex problems into tangible
                  solutions.”
                </p>
              </div>
            </div>

            <div className="relative mt-[3.75rem] max-w-[40rem] sm:mt-16">
              <h2
                id="summary-heading"
                className="animate-fade-rise text-xs font-semibold uppercase tracking-[0.28em] text-label"
                style={{ animationDelay: "120ms" }}
              >
                Professional summary
              </h2>
              <div
                className="animate-fade-rise mt-6 text-pretty text-base leading-[1.85] text-text sm:text-[1.0625rem]"
                style={{ animationDelay: "160ms" }}
              >
                <p>
                  Outcome-oriented Product Owner with 7+ years of experience
                  delivering B2B and B2C digital products across agritech,
                  wellness, retail, automotive, and loyalty platforms. Skilled in
                  product strategy, AI-assisted rapid prototyping, Agile delivery,
                  user research, and cross-functional collaboration, with a strong
                  human-centered mindset and a passion for solving complex
                  problems through practical digital solutions.
                </p>
              </div>
              <div
                className="animate-fade-rise mt-12"
                style={{ animationDelay: "200ms" }}
              >
                <Link
                  href="/cv"
                  className={`group inline-flex items-center justify-center gap-2 rounded-full bg-[#ab0608] px-8 py-3.5 text-sm font-semibold text-white transition-[transform,box-shadow,background-color] duration-300 hover:bg-[#8a0507] ${btnShadow} motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
                >
                  View My CV
                  <span
                    className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <EducationPsychologyJourney />
      </div>
    </div>
  );
}
