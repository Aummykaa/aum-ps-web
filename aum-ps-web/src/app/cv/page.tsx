import type { Metadata } from "next";
import Image from "next/image";

import { HowIWork } from "@/components/cv/how-i-work";
import { ResumeDownloadSection } from "@/components/cv/resume-download-section";
import { WorkExperienceTimeline } from "@/components/cv/work-experience-timeline";

export const metadata: Metadata = {
  title: "My path",
  description:
    "How I work and grow — journey, experience, and résumé in one narrative.",
};

export default function CVPage() {
  return (
    <div className="relative flex flex-1 flex-col">
      <div className="pointer-events-none fixed inset-0 z-0 min-h-[100dvh] w-full overflow-hidden">
        <Image
          src="/cv-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-left sm:object-[28%_center]"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background from-[0%] via-background/[0.94] via-[48%] to-background/[0.28] sm:via-[52%]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28">
        <div className="mx-auto w-full max-w-5xl text-text">
          <p
            className="animate-fade-rise text-xs font-semibold uppercase tracking-[0.24em] text-label sm:text-[0.8125rem]"
            style={{ animationDelay: "40ms" }}
          >
            Professional profile
          </p>
          <h1
            className="animate-fade-rise mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#1c3521] sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
            style={{ animationDelay: "90ms" }}
          >
            My Skills &amp; Experiences
          </h1>
          <p
            className="animate-fade-rise mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#1c3521]/92 sm:text-lg sm:leading-relaxed"
            style={{ animationDelay: "150ms" }}
          >
            A collection of the experiences and capabilities that shaped my
            journey across engineering, product management, and psychology.
          </p>

          <div className="mt-16 flex flex-col gap-20 lg:mt-[4.25rem] lg:gap-24">
            <div className="animate-fade-rise" style={{ animationDelay: "180ms" }}>
              <HowIWork />
            </div>

            <div
              className="animate-fade-rise rounded-[1.25rem] border border-text/[0.08] bg-surface px-8 py-10 sm:p-10"
              style={{ animationDelay: "200ms" }}
            >
              <WorkExperienceTimeline />
            </div>

            <ResumeDownloadSection animationDelayMs={220} />
          </div>
        </div>
      </div>
    </div>
  );
}
