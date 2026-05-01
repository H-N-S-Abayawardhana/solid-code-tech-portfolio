"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  DEFAULT_VIDEO_PLAYBACK_RATE,
  VideoHeroDecorativeLayers,
  VideoHeroMedia,
  VIDEO_HERO_BAND_CLASS,
  VIDEO_HERO_HEADER_OVERLAP_CLASS,
} from "@/components/sections/VideoHeroMedia";
import {
  VIDEO_HERO_CONTAINER_CLASS,
  VIDEO_HERO_COPY_WRAP_CLASS,
  VIDEO_HERO_HEADLINE_CLASS,
} from "@/components/sections/videoHeroContent";
import { projects } from "@/data/projects";
import { site } from "@/lib/site";

const portfolioHeroData = {
  label: "Our Work",
  description: "Real projects. Real outcomes.",
  videoSrc: "/174086-850404739.mp4",
  posterSrc: "/portfolio-poster.jpg",
};

const stats = [
  { value: String(projects.length), label: "Projects" },
  { value: "5+", label: "Industries" },
  { value: "3+", label: "Countries" },
  { value: "100%", label: "Shipped" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease },
  },
};

function PortfolioHeroContent({ animated }: { animated: boolean }) {
  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
        {portfolioHeroData.label}
      </p>
      <h1 id="portfolio-hero-heading" className={`${VIDEO_HERO_HEADLINE_CLASS} max-w-4xl`}>
        {portfolioHeroData.description}
      </h1>
    </>
  );

  if (!animated) {
    return <div className={VIDEO_HERO_COPY_WRAP_CLASS}>{content}</div>;
  }

  return (
    <motion.div
      className={VIDEO_HERO_COPY_WRAP_CLASS}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p 
        variants={item}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4"
      >
        {portfolioHeroData.label}
      </motion.p>
      <motion.h1 
        variants={item} 
        id="portfolio-hero-heading" 
        className={`${VIDEO_HERO_HEADLINE_CLASS} max-w-4xl`}
      >
        {portfolioHeroData.description}
      </motion.h1>
    </motion.div>
  );
}

function PortfolioHeroBelow() {
  return (
    <div className="flex flex-col gap-6">
      <ul className="flex flex-wrap gap-x-12 gap-y-6 md:gap-x-20">
        {stats.map((s) => (
          <li key={s.label} className="flex flex-col">
            <span className="font-display text-3xl font-bold text-accent md:text-4xl">
              {s.value}
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
              {s.label}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 pt-4 border-t border-stone-200/60">
        <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
          {site.name} — Software Engineering Excellence
        </p>
        <div className="h-px flex-1 bg-stone-200/60" />
        <Link
          href="/contact"
          className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
        >
          Start a Project
        </Link>
      </div>
    </div>
  );
}

export function PortfolioHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className={`border-b border-border ${VIDEO_HERO_HEADER_OVERLAP_CLASS}`}
      aria-labelledby="portfolio-hero-heading"
    >
      <div className={VIDEO_HERO_BAND_CLASS}>
        <div className="pointer-events-none absolute inset-0">
          <VideoHeroMedia
            videoSrc={portfolioHeroData.videoSrc}
            posterSrc={portfolioHeroData.posterSrc}
            playbackRate={DEFAULT_VIDEO_PLAYBACK_RATE}
            prefersReducedMotion={reduce ?? false}
          />
        </div>
        <VideoHeroDecorativeLayers />

        <Container className={VIDEO_HERO_CONTAINER_CLASS}>
          <PortfolioHeroContent animated={!reduce} />
        </Container>
      </div>

      <div className="border-t border-border bg-stone-50/90">
        <Container className="py-10 md:py-14">
          <PortfolioHeroBelow />
        </Container>
      </div>
    </section>
  );
}