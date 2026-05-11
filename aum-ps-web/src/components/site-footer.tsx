const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ??
  "https://www.linkedin.com/in/parnchanok-skulbenja-44966b108";
const MEDIUM_URL =
  process.env.NEXT_PUBLIC_MEDIUM_ARTICLES_URL ??
  "https://medium.com/@AumPS_VisualEcho";

const footerLinks = [
  {
    href: process.env.NEXT_PUBLIC_CONTACT_MAILTO ?? "#",
    label: "Contact",
    decoration: "decoration-gold/60",
  },
  {
    href: LINKEDIN_URL,
    label: "LinkedIn",
    decoration: "decoration-mint/70",
  },
  {
    href: MEDIUM_URL,
    label: "Medium",
    decoration: "decoration-gold/60",
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-6 sm:py-14 lg:px-8">
        <p className="max-w-md text-sm leading-relaxed text-[#1c3521]">
          © {year}{" "}
          <span className="font-semibold text-[#ab0608]">
            Parnchanok Skulbenja
          </span>
          <span className="text-[#1c3521]">
            {" "}
            — personal site and curriculum vitae.
          </span>
        </p>
        <ul className="flex flex-wrap gap-x-10 gap-y-3 text-sm font-medium">
          {footerLinks.map(({ href, label, decoration }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`text-[#1c3521] transition-opacity duration-200 hover:opacity-75 hover:underline ${decoration} underline-offset-4`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
