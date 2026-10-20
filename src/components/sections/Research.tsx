"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publications } from "@/data/publications";
import { copyText } from "@/lib/utils";
import { useState } from "react";

export function Research() {
  const [copied, setCopied] = useState<string | null>(null);

  return (
    <section id="research" className="border-b border-ink-line py-24">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Research"
          title="Published work, with the citation you can copy."
          description="LLM-HyPZ is the flagship paper. Bibliographic details come from IEEE Xplore, Crossref, and arXiv."
        />
        <div className="mt-12 grid gap-6">
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="rounded-3xl border border-ink-line bg-ink-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-signal">
                <span>{pub.year}</span>
                <span>{pub.type}</span>
                {pub.featured ? <span>Featured</span> : null}
              </div>
              <h3 className="display mt-4 max-w-4xl text-2xl text-mist">{pub.title}</h3>
              <p className="mt-3 text-sm text-mist-muted">{pub.authors.join(", ")}</p>
              <p className="mt-2 text-sm text-mist">{pub.venue}</p>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-mist-muted">
                {pub.abstract}
              </p>
              {pub.contribution ? (
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist-muted">
                  <span className="text-mist">Contribution. </span>
                  {pub.contribution}
                </p>
              ) : null}
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                {pub.arxiv ? (
                  <a href={pub.arxiv} className="text-signal" target="_blank" rel="noreferrer">
                    arXiv
                  </a>
                ) : null}
                {pub.doi ? (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    className="text-mist-muted hover:text-signal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DOI
                  </a>
                ) : null}
                {pub.pdf ? (
                  <a href={pub.pdf} className="text-mist-muted hover:text-signal" target="_blank" rel="noreferrer">
                    PDF / OSF
                  </a>
                ) : null}
                <button
                  type="button"
                  className="text-mist-muted hover:text-signal"
                  onClick={async () => {
                    await copyText(pub.citation);
                    setCopied(pub.id);
                    window.setTimeout(() => setCopied(null), 1800);
                  }}
                >
                  {copied === pub.id ? "Copied" : "Copy citation"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
