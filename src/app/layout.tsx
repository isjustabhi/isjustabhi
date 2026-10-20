import { CommandPalette } from "@/components/layout/CommandPalette";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { Providers } from "@/components/providers";
import { profile } from "@/data/profile";
import { publications } from "@/data/publications";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${profile.professionalName}`,
  },
  description: site.description,
  keywords: [
    "Abhiram Varma",
    "Abhiram Nandimandalam",
    "AI Engineer",
    "Data Scientist",
    "LLM-HyPZ",
    "University of Arizona",
  ],
  authors: [{ name: profile.fullName, url: site.url }],
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "profile",
  },
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} bg-ink text-mist antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, ...articleJsonLd]),
          }}
        />
        <Providers>
          <ProgressBar />
          <Nav />
          <CommandPalette />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
