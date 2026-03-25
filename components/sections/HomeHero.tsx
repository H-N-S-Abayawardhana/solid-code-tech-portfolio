"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
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

function HeroInner({ animated }: { animated: boolean }) {
  const blocks = (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs">
        {homeHero.eyebrow}
      </p>
      <h1
        id="hero-heading"
        className="mt-5 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-stone-900 sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]"
      >
        {homeHero.headline}
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        {homeHero.subheading}
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <ButtonLink href="/contact">{homeHero.ctaPrimary}</ButtonLink>
        <ButtonLink href="/portfolio" variant="secondary">
          {homeHero.ctaSecondary}
        </ButtonLink>
      </div>
      <p className="mt-10 max-w-xl text-sm leading-relaxed text-stone-500">
        {homeHero.footnote}
        <Link
          href="/process"
          className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
        >
          {homeHero.footnoteLinkLabel}
        </Link>
        .
      </p>
      <p className="mt-3 text-xs text-stone-400">{site.name}</p>
    </>
  );

  if (!animated) {
    return <div className="max-w-3xl">{blocks}</div>;
  }

  return (
    <motion.div
      className="max-w-3xl"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p variants={item} className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs">
        {homeHero.eyebrow}
      </motion.p>
      <motion.h1
        variants={item}
        id="hero-heading"
        className="mt-5 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-stone-900 sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]"
      >
        {homeHero.headline}
      </motion.h1>
      <motion.p
        variants={item}
        className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
      >
        {homeHero.subheading}
      </motion.p>
      <motion.div
        variants={item}
        className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <ButtonLink href="/contact">{homeHero.ctaPrimary}</ButtonLink>
        <ButtonLink href="/portfolio" variant="secondary">
          {homeHero.ctaSecondary}
        </ButtonLink>
      </motion.div>
      <motion.p
        variants={item}
        className="mt-10 max-w-xl text-sm leading-relaxed text-stone-500"
      >
        {homeHero.footnote}
        <Link
          href="/process"
          className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
        >
          {homeHero.footnoteLinkLabel}
        </Link>
        .
      </motion.p>
      <motion.p variants={item} className="mt-3 text-xs text-stone-400">
        {site.name}
      </motion.p>
    </motion.div>
  );
}

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-b border-border bg-background"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(231 229 228 / 0.55) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(231 229 228 / 0.55) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />
      </div>
      <Container className="relative py-20 md:py-28 lg:py-32">
        <HeroInner animated={!reduce} />
      </Container>
    </section>
  );
}
