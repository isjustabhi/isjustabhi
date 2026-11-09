export const MEDIUM_PROFILE_URL = "https://medium.com/@isjustabhi";
export const MEDIUM_FEED_URL = "https://medium.com/feed/@isjustabhi";

export type MediumPost = {
  title: string;
  url: string;
  date: string;
  excerpt: string;
  cover?: string;
  readingMinutes: number;
};

function unwrap(value: string) {
  return value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function tag(block: string, name: string) {
  const match = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return match ? unwrap(match[1]) : "";
}

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function coverFrom(html: string) {
  const match = html.match(
    /src="(https:\/\/(?:cdn-images-\d+|miro)\.medium\.com[^"]+)"/i,
  );
  return match?.[1];
}

function parseItem(block: string): MediumPost | null {
  const title = tag(block, "title");
  const rawLink = tag(block, "link");
  const url = rawLink.split("?")[0];
  if (!title || !url) return null;
  const html = tag(block, "content:encoded") || tag(block, "description");
  const text = stripHtml(html);
  const words = text.split(" ").filter(Boolean).length;
  return {
    title,
    url,
    date: tag(block, "pubDate"),
    excerpt: text.slice(0, 220).replace(/\s+\S*$/, "") + (text.length > 220 ? "…" : ""),
    cover: coverFrom(html),
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });
    if (!response.ok) return [];
    const xml = await response.text();
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)]
      .map((match) => parseItem(match[1]))
      .filter((post): post is MediumPost => Boolean(post));
  } catch {
    return [];
  }
}

export function formatMediumDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
