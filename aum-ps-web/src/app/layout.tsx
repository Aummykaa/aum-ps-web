import type { Metadata } from "next";
import { Archivo_Black, Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Parnchanok Skulbenja (Aum)",
    template: "%s · Parnchanok Skulbenja",
  },
  description:
    "Engineer and counseling psychology learner — building meaningful impact through people-centered problem solving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-background font-sans text-text leading-relaxed tracking-normal antialiased">
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[100] -translate-y-[120%] rounded-xl bg-[#ab0608] px-4 py-2.5 text-sm font-medium text-white opacity-0 shadow-[0_2px_8px_-2px_rgba(171,6,8,0.25)] transition-[transform,opacity] duration-200 focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/75 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main
          id="main-content"
          className="flex flex-1 flex-col focus:outline-none"
          tabIndex={-1}
        >
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
