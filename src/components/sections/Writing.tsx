import { ArticleCard } from "@/components/writing/ArticleCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getMediumPosts, MEDIUM_PROFILE_URL } from "@/lib/medium";
import Link from "next/link";

export async function Writing() {
  const posts = (await getMediumPosts()).slice(0, 3);

  return (
    <section id="writing" className="scroll-mt-24 py-4 sm:py-5">
      <Container panel>
        <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index="03"
            eyebrow="Writing"
            title="Notes from the build."
            description="Actual posts from Medium. Nothing invented, nothing scraped from someone else."
          />
          <Link href="/writing" className="text-sm text-mist-muted underline-offset-4 hover:underline">
            All writing
          </Link>
        </div>
        {posts.length ? (
          <div>
            {posts.map((post) => (
              <ArticleCard key={post.url} post={post} featured />
            ))}
          </div>
        ) : (
          <p className="border-t border-ink-line py-10 text-mist-muted">
            The Medium feed is quiet right now.{" "}
            <a href={MEDIUM_PROFILE_URL} className="text-signal" target="_blank" rel="noreferrer">
              @isjustabhi on Medium
            </a>
            .
          </p>
        )}
      </Container>
    </section>
  );
}
