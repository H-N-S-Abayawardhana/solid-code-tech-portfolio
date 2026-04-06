import { site } from "@/lib/site";

/** About page video hero — paths and copy (layout matches home / services heroes). */
export const aboutPageHero = {
  videoSrc: "/about.mp4",
  posterSrc: "/heroimg.jpg",
  title: "A software partner for organisations that cannot afford ambiguity.",
  belowStrip: `${site.name} exists to help businesses ship reliable digital products and internal systems—with engineering judgement, design craft, and communication that stands up in board-level conversations. Want to go deeper on how we work and who we are? Explore the sections below—or reach out directly.`,
  /** Faster than the default 0.3 used on home/services — tune 0.5–1 as you like. */
  playbackRate: 0.82,
} as const;
