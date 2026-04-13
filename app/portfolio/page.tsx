"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Mobile app",
  "SaaS platform",
  "E-commerce",
  "Business dashboard",
  "Corporate website",
];

const stats = [
  { value: String(projects.length), label: "Projects" },
  { value: "5+", label: "Industries" },
  { value: "3+", label: "Countries" },
  { value: "100%", label: "Shipped" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border bg-stone-950 py-20 md:py-28">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" aria-hidden />
        <Container className="relative">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Our Work
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Real projects. Real outcomes.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-400 sm:text-lg">
              A curated selection of software we have designed, built, and shipped — from mobile apps and AI platforms to marketplaces and enterprise tools.
            </p>
          </Reveal>

          {/* Stats row */}
          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-wrap gap-8">
              {stats.map((s) => (
                <li key={s.label} className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-accent">{s.value}</span>
                  <span className="text-sm font-medium text-stone-400">{s.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* ── Filter Bar ── */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur-sm md:top-20">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-stone-400">
              Filter:
            </span>
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                    active === cat
                      ? "border-accent bg-accent text-white"
                      : "border-border bg-stone-50 text-stone-600 hover:border-accent/50 hover:text-accent"
                  }`}
                >
                  {cat}
                  <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${active === cat ? "bg-white/20 text-white" : "bg-stone-200 text-stone-500"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      {/* ── Project Grid ── */}
      <section className="py-14 md:py-20" aria-label="Project case studies">
        <Container>
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-muted">
              No projects in this category yet.
            </div>
          ) : (
            <ul className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <li
                  key={p.slug}
                  id={p.slug}
                  className="flex h-full min-h-0 scroll-mt-32"
                >
                  <Reveal
                    delay={0.05 * i}
                    className="flex h-full min-h-0 w-full flex-col"
                  >
                    <ProjectCard project={p} href={`/portfolio#${p.slug}`} />
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-border bg-stone-950 py-20 md:py-24">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Start building</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-400">
                Tell us about your idea — we'll get back to you within one business day with a clear path forward.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" variant="inverse">
                  Start a Project
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary" className="border-stone-600 !text-stone-300 hover:border-stone-500 hover:bg-white/5">
                  View Services
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
