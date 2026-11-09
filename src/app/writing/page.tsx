import { ArticleCard } from "@/components/writing/ArticleCard";
import { Container } from "@/components/ui/Container";
import { getMediumPosts, MEDIUM_PROFILE_URL } from "@/lib/medium";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Writing",
  description: "Journal notes by Abhi — actual Medium posts from @isjustabhi.",
  alternates: { canonical: "/writing" },
};

export default async function WritingPage() {
  const posts = await getMediumPosts();

  return (
    <div className="py-28">
      <Container panel>
        <p className="text-[11px] uppercase tracking-[0.28em] text-signal">Writing</p>
        <h1 className="display mt-6 max-w-3xl text-5xl text-mist sm:text-7xl">
          What I&apos;m building, learning, and thinking about.
        </h1>
        <p className="mt-6 max-w-2xl text-mist-muted">
          A personal journal on{" "}
          <a href={MEDIUM_PROFILE_URL} className="text-signal" target="_blank" rel="noreferrer">
            Medium @isjustabhi
          </a>
          . Titles, dates, and excerpts come from the public feed. Nothing here is invented.
        </p>
        <div className="mt-14">
          {posts.length ? (
            posts.map((post) => <ArticleCard key={post.url} post={post} featured />)
          ) : (
            <p className="border-t border-ink-line py-10 text-mist-muted">
              The feed didn&apos;t load. Visit{" "}
              <a href={MEDIUM_PROFILE_URL} className="text-signal" target="_blank" rel="noreferrer">
                medium.com/@isjustabhi
              </a>{" "}
              directly.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
