import { fallbackRepos } from "@/data/github";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/users/isjustabhi/repos?per_page=100&sort=updated",
      { next: { revalidate: 3600 } },
    );
    if (!response.ok) {
      return NextResponse.json({ source: "fallback", repos: fallbackRepos });
    }
    const data = await response.json();
    return NextResponse.json({ source: "github", repos: data });
  } catch {
    return NextResponse.json({ source: "fallback", repos: fallbackRepos });
  }
}
