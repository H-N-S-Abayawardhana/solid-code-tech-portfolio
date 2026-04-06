"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
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
  VIDEO_HERO_CTA_ROW_CLASS,
  VIDEO_HERO_HEADLINE_CLASS,
  VIDEO_HERO_PRIMARY_BTN_CLASS,
  VIDEO_HERO_SECONDARY_BTN_CLASS,
} from "@/components/sections/videoHeroContent";
import { servicesPageHero } from "@/data/services";
import { site } from "@/lib/site";

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

function ServicesHeroContent({ animated }: { animated: boolean }) {
  const main = (
    <>
      <h1 id="services-hero-heading" className={VIDEO_HERO_HEADLINE_CLASS}>
        {servicesPageHero.title}
      </h1>
      <div className={VIDEO_HERO_CTA_ROW_CLASS}>
        <ButtonLink href="/contact" className={VIDEO_HERO_PRIMARY_BTN_CLASS}>
          Start a Project
        </ButtonLink>
        <ButtonLink
          href="/process"
          variant="secondary"
          className={VIDEO_HERO_SECONDARY_BTN_CLASS}
        >
          How we work
        </ButtonLink>
      </div>
    </>
  );

  if (!animated) {
    return <div className={VIDEO_HERO_COPY_WRAP_CLASS}>{main}</div>;
  }

  return (
    <motion.div
      className={VIDEO_HERO_COPY_WRAP_CLASS}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={item} id="services-hero-heading" className={VIDEO_HERO_HEADLINE_CLASS}>
        {servicesPageHero.title}
      </motion.h1>
      <motion.div variants={item} className={VIDEO_HERO_CTA_ROW_CLASS}>
        <ButtonLink href="/contact" className={VIDEO_HERO_PRIMARY_BTN_CLASS}>
          Start a Project
        </ButtonLink>
        <ButtonLink
          href="/process"
          variant="secondary"
          className={VIDEO_HERO_SECONDARY_BTN_CLASS}
        >
          How we work
        </ButtonLink>
      </motion.div>
    </motion.div>
  );
}

function ServicesHeroBelow() {
  return (
    <div className="max-w-2xl xl:max-w-3xl">
      <p className="text-[15px] leading-relaxed text-stone-600 sm:text-base">
        {servicesPageHero.belowStrip}{" "}
        <Link
          href="/contact"
          className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
        >
          Get in touch
        </Link>
        .
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-stone-400">{site.name}</p>
    </div>
  );
}

export function ServicesHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className={`border-b border-border ${VIDEO_HERO_HEADER_OVERLAP_CLASS}`}
      aria-labelledby="services-hero-heading"
    >
      <div className={VIDEO_HERO_BAND_CLASS}>
        <div className="pointer-events-none absolute inset-0">
          <VideoHeroMedia
            videoSrc={servicesPageHero.videoSrc}
            posterSrc={servicesPageHero.posterSrc}
            playbackRate={DEFAULT_VIDEO_PLAYBACK_RATE}
            prefersReducedMotion={reduce ?? false}
          />
        </div>
        <VideoHeroDecorativeLayers />

        <Container className={VIDEO_HERO_CONTAINER_CLASS}>
          <ServicesHeroContent animated={!reduce} />
        </Container>
      </div>

      <div className="border-t border-border bg-stone-50/90">
        <Container className="pt-12 pb-8 md:pt-14 md:pb-9 lg:pt-16 lg:pb-10">
          <ServicesHeroBelow />
        </Container>
      </div>
    </section>
  );
}
