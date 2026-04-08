import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes: MetadataRoute.Sitemap = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/process",
  "/testimonials",
].map((path) => ({
  url: `${site.url.replace(/\/$/, "")}${path || "/"}`,
  lastModified: new Date(),
  changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
  priority: path === "" ? 1 : 0.85,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return routes;
}
