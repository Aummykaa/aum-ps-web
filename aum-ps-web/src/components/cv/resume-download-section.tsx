import { CTAButton } from "@/components/ui/cta-button";

const RESUME_PATH = "/resume.pdf";

function PdfGlyph({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v6h6M9 13h6M9 17h6M9 9h2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ResumeDownloadSection({
  animationDelayMs = 220,
}: {
  animationDelayMs?: number;
}) {
  return (
    <section
      aria-labelledby="download-cv-heading"
      className="animate-fade-rise"
      style={{ animationDelay: `${animationDelayMs}ms` }}
    >
      <div className="rounded-[1.5rem] border border-text/[0.08] bg-gradient-to-b from-mint/[0.12] to-background px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-[4.5rem]">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2
            id="download-cv-heading"
            className="text-balance text-2xl font-semibold tracking-tight text-[#1c3521] sm:text-[1.65rem] sm:leading-snug lg:text-[1.85rem]"
          >
            Interested in my one-page résumé?
          </h2>
          <div className="mt-10 sm:mt-12">
            <CTAButton
              href={RESUME_PATH}
              preset="download"
              download="resume.pdf"
              ariaLabel="Download résumé PDF"
            >
              <PdfGlyph className="text-white/95" />
              Download Résumé
              <span className="sr-only">
                Downloads résumé PDF from this site
              </span>
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
