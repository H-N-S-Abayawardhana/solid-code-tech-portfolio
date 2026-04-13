import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { AboutHero } from "@/components/sections/AboutHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name}: mission, values, and how we work with clients on custom software, mobile apps, and AI solutions.`,
  alternates: { canonical: "/about" },
};

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "6+", label: "Technologies" },
  { value: "3+", label: "Countries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Quality as a Habit",
    body: "Testing, code review, and clean architecture are part of every day — not a phase squeezed in before a deadline.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" strokeWidth={2} />
      </svg>
    ),
    title: "Transparency First",
    body: "Clear scope, honest timelines, and open communication at every stage — no surprises, no hidden costs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Speed with Purpose",
    body: "We move fast without cutting corners — focused sprints, rapid iteration, and continuous delivery that keeps you ahead.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Built to Last",
    body: "Every system we ship is designed for maintainability — clean code, solid documentation, and architecture that scales.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Founded in Sri Lanka",
    body: "SolidCode Technologies was founded in Battaramulla with a clear mission — deliver software that businesses are proud to use.",
  },
  {
    year: "2023",
    title: "Mobile & Web Expertise",
    body: "Expanded capabilities across Flutter, React Native, and Next.js — delivering polished apps for clients across multiple industries.",
  },
  {
    year: "2024",
    title: "AI & Enterprise Solutions",
    body: "Launched AI-powered platforms including VetLink and ResearcherAI, proving our capability in intelligent, production-grade software.",
  },
  {
    year: "2025",
    title: "Going Global",
    body: "Serving clients internationally — bringing the same commitment to quality, transparency, and long-term partnership to every engagement.",
  },
];

const strengths = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="15" y1="4" x2="9" y2="20" />
      </svg>
    ),
    title: "Engineering Excellence",
    body: "Clean architecture, rigorous code review, and production-grade standards on every project.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Fast Delivery",
    body: "Focused sprints and continuous deployment — we move at speed without sacrificing quality.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "True Partnership",
    body: "We work as an extension of your team — transparent, honest, and always aligned with your goals.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v1.5c1.2.7 2 2 2 3.5a4 4 0 0 1-8 0c0-1.5.8-2.8 2-3.5V17H8a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2V9.5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4z" />
      </svg>
    ),
    title: "AI-Ready Expertise",
    body: "Real AI capability — LLMs, ML pipelines, and intelligent automation — integrated into production products.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* ── Who We Are ── */}
      <section className="py-16 md:py-24" aria-labelledby="intro-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">About us</p>
                <h2
                  id="intro-heading"
                  className="mt-3 font-display text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl"
                >
                  Built by engineers.<br />Driven by impact.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                  SolidCode Technologies is a software development company based in
                  Battaramulla, Sri Lanka — built by engineers who care deeply about
                  code quality, user experience, and delivering software that works in
                  production.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  We work with startups, growing businesses, and enterprises across
                  mobile, web, AI, and cloud — bringing the same commitment to quality
                  to every engagement, regardless of size.
                </p>
                <div className="mt-8">
                  <ButtonLink href="/contact" variant="primary">
                    Work with us
                  </ButtonLink>
                </div>
              </div>
            </Reveal>

            {/* Stats grid */}
            <Reveal delay={0.1}>
              <ul className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <li
                    key={s.label}
                    className="rounded-2xl border border-border bg-stone-50 p-6 text-center shadow-[var(--shadow-soft)]"
                  >
                    <p className="font-display text-4xl font-bold text-accent">{s.value}</p>
                    <p className="mt-2 text-sm font-medium text-muted">{s.label}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Mission & Vision ── */}
      <section
        className="border-y border-border bg-stone-950 py-16 md:py-24"
        aria-labelledby="mission-heading"
      >
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <article className="relative rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/20 text-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <h2 id="mission-heading" className="font-display text-xl font-semibold text-white">
                  Our Mission
                </h2>
                <p className="mt-3 text-base leading-relaxed text-stone-300">
                  To deliver world-class software solutions that empower every
                  business — big or small — to grow, compete, and succeed in
                  the digital age.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="relative rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/20 text-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h2 className="font-display text-xl font-semibold text-white">
                  Our Vision
                </h2>
                <p className="mt-3 text-base leading-relaxed text-stone-300">
                  To become a globally trusted technology partner known for
                  code quality, innovation, and lasting client relationships.
                </p>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Core Values ── */}
      <section
        className="bg-stone-50 py-16 md:py-24"
        aria-labelledby="values-heading"
      >
        <Container>
          <SectionHeader
            eyebrow="Our values"
            titleId="values-heading"
            title="Principles we live by"
            description="The standards we hold ourselves to — on every project, for every client."
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.title}>
                <Reveal delay={0.05 * i}>
                  <article className="group h-full rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-md">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      {v.icon}
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-stone-900">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {v.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Our Story — Timeline ── */}
      <section className="py-16 md:py-24" aria-labelledby="story-heading">
        <Container>
          <SectionHeader
            eyebrow="Our journey"
            titleId="story-heading"
            title="How we got here"
            description="From a small studio in Sri Lanka to a growing global technology partner."
          />
          <div className="relative mt-2">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-border sm:block" aria-hidden />
            <ol className="space-y-10">
              {timeline.map((t, i) => (
                <li key={t.year} className="relative sm:pl-20">
                  <Reveal delay={0.07 * i}>
                    {/* Year bubble */}
                    <div className="absolute left-0 hidden h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-background text-xs font-bold text-accent sm:flex">
                      {t.year}
                    </div>
                    <div className="rounded-xl border border-border bg-stone-50/60 p-6 shadow-[var(--shadow-soft)]">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:hidden">
                        {t.year}
                      </p>
                      <h3 className="font-display text-lg font-semibold text-stone-900">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                        {t.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ── What Sets Us Apart ── */}
      <section
        className="border-t border-border bg-stone-50 py-16 md:py-24"
        aria-labelledby="strengths-heading"
      >
        <Container>
          <SectionHeader
            eyebrow="Why SolidCode"
            titleId="strengths-heading"
            title="What sets us apart"
            description="We combine deep technical expertise with a genuine commitment to your success — every time."
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={0.06 * i}>
                  <article className="group h-full rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-md">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      {s.icon}
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-stone-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-border bg-stone-950 py-20 md:py-24">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Let's work together</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to build something exceptional?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-400">
                Tell us about your project — your goals, timeline, and
                challenges. We'll get back to you within one business day.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" variant="inverse">
                  Start a Project
                </ButtonLink>
                <ButtonLink href="/portfolio" variant="secondary" className="border-stone-600 !text-stone-300 hover:border-stone-500 hover:bg-white/5">
                  View our work
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
