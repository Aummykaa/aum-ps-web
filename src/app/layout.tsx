import type { Metadata, Viewport } from "next";
import { Archivo_Black, Geist } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { getSiteOrigin, getSiteUrl } from "@/lib/site-url";

import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const metadataBase = getSiteOrigin();
const canonicalUrl = getSiteUrl("");
const ogLocale = "en_US";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1c3521" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase,
  alternates: { canonical: canonicalUrl },
  title: {
    default: "Parnchanok Skulbenja (Aum)",
    template: "%s · Parnchanok Skulbenja",
  },
  description:
    "Engineer and counseling psychology learner — building meaningful impact through people-centered problem solving.",
  openGraph: {
    type: "website",
    locale: ogLocale,
    url: canonicalUrl,
    siteName: "Parnchanok Skulbenja",
    title: "Parnchanok Skulbenja (Aum)",
    description:
      "Engineer and counseling psychology learner — building meaningful impact through people-centered problem solving.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parnchanok Skulbenja (Aum)",
    description:
      "Engineer and counseling psychology learner — building meaningful impact through people-centered problem solving.",
  },
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
      className={`${geistSans.variable} ${archivoBlack.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-background font-sans text-text leading-relaxed tracking-normal antialiased">
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[100] -translate-y-[120%] rounded-xl bg-[#ab0608] px-4 py-2.5 text-sm font-medium text-white opacity-0 shadow-[0_2px_8px_-2px_rgba(171,6,8,0.25)] transition-[transform,opacity] duration-200 focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/75 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Skip to content
        </a>
        <Navbar />
        <main
          id="main-content"
          className="flex flex-1 flex-col outline-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/65 focus-visible:ring-offset-2"
          tabIndex={-1}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
