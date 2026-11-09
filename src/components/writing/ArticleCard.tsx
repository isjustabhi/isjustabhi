import { BuildIn } from "@/components/ui/BuildIn";
import { formatMediumDate, type MediumPost } from "@/lib/medium";

export function ArticleCard({ post, featured }: { post: MediumPost; featured?: boolean }) {
  return (
    <BuildIn>
    <a
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className="interactive-row group block border-t border-ink-line py-8"
    >
      <p className="text-[11px] uppercase tracking-[0.2em] text-mist-faint">
        {formatMediumDate(post.date)} · {post.readingMinutes} min
      </p>
      <h3 className={`display mt-3 text-mist ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
        {post.title}
      </h3>
      {post.excerpt ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-muted">{post.excerpt}</p>
      ) : null}
      <p className="mt-4 text-sm text-signal">Read on Medium</p>
    </a>
    </BuildIn>
  );
}
