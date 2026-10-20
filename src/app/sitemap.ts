import { projects } from "@/data/projects";
import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = projects
    .filter((project) => project.caseStudy)
    .map((project) => ({
      url: `${site.url}${project.caseStudy}`,
      lastModified: new Date(),
    }));

  return [
    { url: site.url, lastModified: new Date() },
    { url: `${site.url}/projects`, lastModified: new Date() },
    { url: `${site.url}/research`, lastModified: new Date() },
    ...caseStudies,
  ];
}
