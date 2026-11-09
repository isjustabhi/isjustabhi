import { CinematicIntro } from "@/components/layout/CinematicIntro";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { Providers } from "@/components/providers";
import { profile } from "@/data/profile";
import { publications } from "@/data/publications";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · isjustabhi`,
  },
  description: site.description,
  keywords: [
    "Abhiram Varma",
    "Abhiram Nandimandalam",
    "AI Engineer",
    "Data Scientist",
    "isjustabhi",
    "Abhi",
    "LLM-HyPZ",
    "University of Arizona",
    "badminton",
  ],
  authors: [{ name: profile.fullName, url: site.url }],
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: "isjustabhi",
    locale: "en_US",
    type: "profile",
  },
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: ["Abhiram Varma", "Abhi", "isjustabhi"],
  jobTitle: profile.officialTitle,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Arizona",
  },
  email: profile.emails.professional,
  url: site.url,
  sameAs: [
    profile.links.github,
    profile.links.linkedin,
    profile.links.scholar,
    profile.links.orcid,
    profile.links.university,
    profile.links.medium,
  ],
};

const articleJsonLd = publications
  .filter((pub) => pub.doi)
  .map((pub) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: pub.title,
    author: pub.authors.map((name) => ({ "@type": "Person", name })),
    datePublished: String(pub.year),
    identifier: pub.doi,
    url: `https://doi.org/${pub.doi}`,
  }));

const introScript = `try{if(sessionStorage.getItem('isjustabhi-intro-a')==='1')document.documentElement.dataset.intro='done'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} bg-ink text-mist antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, ...articleJsonLd]),
          }}
        />
        <Providers>
          <CinematicIntro />
          <ProgressBar />
          <Nav />
          <CommandPalette />
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
