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
  label: "Get in touch",
  description: "Let's build something great together.",
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

function ContactHeroContent({ animated }: { animated: boolean }) {
  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
        {portfolioHeroData.label}
      </p>
      <h1 id="portfolio-hero-heading" className={`${VIDEO_HERO_HEADLINE_CLASS} max-w-4xl`}>
        {portfolioHeroData.description}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-400 sm:text-lg">
        Tell us about your project — your goals, timeline, and challenges. We'll get back to you within one business day with a clear path forward.
      </p>
  
  );
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

const trustPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: "Reply within 1 business day",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "No commitment required",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: "Free initial consultation",
  },
];
function ContactHeroBelow() {
  return (
    <div className="flex flex-col gap-6">
      
       <ul className="mt-8 flex flex-wrap gap-3">
            {trustPoints.map((t) => (
              <li
                key={t.text}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-green-600 px-4 py-2 text-sm text-stone-300"
              >
                <span className="text-white">{t.icon}</span>
                {t.text}
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

export function ContactHero() {
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
          <ContactHeroContent animated={!reduce} />
          
        </Container>
      </div>

      <div className="border-t border-border bg-stone-50/90">
        <Container className="py-10 md:py-14">
          <ContactHeroBelow />
          
        </Container>
      </div>
    </section>
  );
}