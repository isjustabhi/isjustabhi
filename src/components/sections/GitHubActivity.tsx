import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fallbackRepos, type RepoCard } from "@/data/github";
import { formatDate } from "@/lib/utils";

async function loadRepos(): Promise<RepoCard[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/isjustabhi/repos?per_page=100&sort=updated",
      { next: { revalidate: 3600 } },
    );
    if (!response.ok) return fallbackRepos;
    const data = (await response.json()) as Array<{
      name: string;
      description: string | null;
      html_url: string;
      homepage: string | null;
      language: string | null;
      stargazers_count: number;
      updated_at: string;
      fork: boolean;
      topics?: string[];
    }>;
    return data
      .filter((repo) => !repo.fork && repo.name !== "isjustabhi")
      .sort((a, b) => b.stargazers_count - a.stargazers_count || b.updated_at.localeCompare(a.updated_at))
      .slice(0, 8)
      .map((repo) => ({
        name: repo.name,
        description: repo.description ?? "Public repository.",
        htmlUrl: repo.html_url,
        homepage: repo.homepage || undefined,
        language: repo.language || undefined,
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at,
        topics: repo.topics,
      }));
  } catch {
    return fallbackRepos;
  }
}

export async function GitHubActivity() {
  const repos = await loadRepos();

  return (
    <section id="github" className="border-b border-ink-line py-24">
      <Container>
        <SectionHeading
          index="07"
          eyebrow="Open source"
          title="Public repositories, with a static fallback."
          description="Fetched from the GitHub API when available. No token is used in the frontend."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.htmlUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-ink-line p-6 hover:border-signal/40"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-mist">{repo.name}</h3>
                <span className="text-xs text-mist-faint">{repo.stars}★</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mist-muted">{repo.description}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-mist-faint">
                {repo.language ?? "Mixed"} · Updated {formatDate(repo.updatedAt)}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
