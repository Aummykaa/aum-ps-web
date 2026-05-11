"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ??
  "https://www.linkedin.com/in/parnchanok-skulbenja-44966b108";

type NavItem =
  | { href: string; label: string; kind: "internal" }
  | { href: string; label: string; kind: "external" };

const navItems: NavItem[] = [
  { href: "/", label: "Home", kind: "internal" },
  { href: "/cv", label: "CV", kind: "internal" },
  { href: LINKEDIN_URL, label: "LinkedIn", kind: "external" },
];

function navLinkClasses(active: boolean) {
  return [
    "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-[0.8125rem] font-medium uppercase tracking-[0.16em] transition-[background-color,color,box-shadow] duration-300 ease-out sm:px-5 sm:tracking-[0.2em]",
    active
      ? "bg-[#ab0608]/10 text-[#1c3521] shadow-[inset_0_0_0_1px_rgba(171,6,8,0.14)]"
      : "text-[#1c3521]/58 hover:bg-[#1c3521]/[0.04] hover:text-[#1c3521]",
  ].join(" ");
}

function ExternalMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

function isActive(pathname: string, item: NavItem): boolean {
  if (item.kind !== "internal") return false;
  return pathname === item.href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMenuOpen(false));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[#1c3521]/[0.06] bg-[#FFFFFF] shadow-[0_4px_32px_-12px_rgba(28,53,33,0.07)] supports-[backdrop-filter]:bg-[#FFFFFF]/97 supports-[backdrop-filter]:backdrop-blur-md"
    >
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <div className="flex min-w-0 flex-1 justify-start">
          <Link
            href="/"
            className="text-[0.6875rem] font-semibold uppercase tracking-[0.32em] text-[#1c3521]/50 transition-colors duration-300 ease-out hover:text-[#ab0608]"
          >
            Aum
          </Link>
        </div>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 md:flex"
          aria-label="Site navigation"
        >
          <ul className="flex list-none items-center gap-2 p-0 sm:gap-3 lg:gap-4">
            {navItems.map((item) => {
              const active = isActive(pathname, item);
              if (item.kind === "internal") {
                return (
                  <li key={item.href}>
                    <Link href={item.href} className={navLinkClasses(active)}>
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${navLinkClasses(false)} group`}
                  >
                    {item.label}
                    <ExternalMark className="text-[#1c3521]/35 opacity-80 transition-[color,opacity] duration-300 group-hover:text-[#ab0608]/70 group-hover:opacity-100" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#1c3521]/70 transition-[background-color,color] duration-300 ease-out hover:bg-[#1c3521]/[0.05] hover:text-[#1c3521] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden motion-safe:transition-[max-height,opacity] motion-safe:duration-[420ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          menuOpen
            ? "max-h-[min(90vh,22rem)] overflow-y-auto border-t border-[#1c3521]/[0.05] opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden border-t border-transparent opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex flex-col items-center gap-2 px-5 py-8 sm:px-8"
          aria-label="Mobile navigation"
        >
          <ul className="flex w-full max-w-xs list-none flex-col items-stretch gap-2 p-0">
            {navItems.map((item) => {
              const active = isActive(pathname, item);
              if (item.kind === "internal") {
                return (
                  <li key={item.href} className="w-full text-center">
                    <Link
                      href={item.href}
                      className={`${navLinkClasses(active)} w-full`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.href} className="w-full text-center">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${navLinkClasses(false)} group w-full`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      {item.label}
                      <ExternalMark className="text-[#1c3521]/35 group-hover:text-[#ab0608]/70" />
                    </span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
