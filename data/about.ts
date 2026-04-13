import { site } from "@/lib/site";

/** About page video hero — paths and copy (layout matches home / services heroes). */
export const aboutPageHero = {
  videoSrc: "/about.mp4",
  posterSrc: "/heroimg.jpg",
  title: "We build software that businesses depend on.",
  belowStrip: `${site.name} is a technology company built on one belief — great software changes everything. We partner with startups, growing businesses, and enterprises to deliver mobile apps, web platforms, AI solutions, and enterprise systems that are engineered for quality and built to last.`,
  /** Faster than the default 0.3 used on home/services — tune 0.5–1 as you like. */
  playbackRate: 0.82,
} as const;
