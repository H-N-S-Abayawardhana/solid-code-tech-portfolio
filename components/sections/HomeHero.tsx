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
  VIDEO_HERO_SUBTEXT_CLASS,
} from "@/components/sections/videoHeroContent";
import { homeHero } from "@/data/home";
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

const HOME_VIDEO_SRC = "/174086-850404739.mp4";
const HOME_POSTER_SRC = "/heroimg.jpg";

function HeroOnImage({ animated }: { animated: boolean }) {
  const sub = homeHero.subheading?.trim();
  const main = (
    <>
      <h1 id="hero-heading" className={VIDEO_HERO_HEADLINE_CLASS}>
        {homeHero.headline}
      </h1>
      {sub ? (
        <p className={VIDEO_HERO_SUBTEXT_CLASS}>{sub}</p>
      ) : null}
      <div className={VIDEO_HERO_CTA_ROW_CLASS}>
        <ButtonLink href="/contact" className={VIDEO_HERO_PRIMARY_BTN_CLASS}>
          {homeHero.ctaPrimary}
        </ButtonLink>
        <ButtonLink
          href="/services"
          variant="secondary"
          className={VIDEO_HERO_SECONDARY_BTN_CLASS}
        >
          {homeHero.ctaSecondary}
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
      <motion.h1 variants={item} id="hero-heading" className={VIDEO_HERO_HEADLINE_CLASS}>
        {homeHero.headline}
      </motion.h1>
      {sub ? (
        <motion.p variants={item} className={VIDEO_HERO_SUBTEXT_CLASS}>
          {sub}
        </motion.p>
      ) : null}
      <motion.div variants={item} className={VIDEO_HERO_CTA_ROW_CLASS}>
        <ButtonLink href="/contact" className={VIDEO_HERO_PRIMARY_BTN_CLASS}>
          {homeHero.ctaPrimary}
        </ButtonLink>
        <ButtonLink
          href="/services"
          variant="secondary"
          className={VIDEO_HERO_SECONDARY_BTN_CLASS}
        >
          {homeHero.ctaSecondary}
        </ButtonLink>
      </motion.div>
    </motion.div>
  );
}

function HeroBelowImage() {
  return (
    <div className="max-w-2xl xl:max-w-3xl">
      <p className="text-[15px] leading-relaxed text-stone-600 sm:text-base">
        {homeHero.footnote}
        <Link
          href="/process"
          className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
        >
          {homeHero.footnoteLinkLabel}
        </Link>
        .
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-stone-400">{site.name}</p>
    </div>
  );
}

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className={`border-b border-border ${VIDEO_HERO_HEADER_OVERLAP_CLASS}`}
      aria-labelledby="hero-heading"
    >
      <div className={VIDEO_HERO_BAND_CLASS}>
        <div className="pointer-events-none absolute inset-0">
          <VideoHeroMedia
            videoSrc={HOME_VIDEO_SRC}
            posterSrc={HOME_POSTER_SRC}
            playbackRate={DEFAULT_VIDEO_PLAYBACK_RATE}
            prefersReducedMotion={reduce ?? false}
          />
        </div>
        <VideoHeroDecorativeLayers />

        <Container className={VIDEO_HERO_CONTAINER_CLASS}>
          <HeroOnImage animated={!reduce} />
        </Container>
      </div>

      <div className="border-t border-border bg-stone-50/90">
        <Container className="pt-12 pb-8 md:pt-14 md:pb-9 lg:pt-16 lg:pb-10">
          <HeroBelowImage />
        </Container>
      </div>
    </section>
  );
}
