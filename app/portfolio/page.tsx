import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Case-study style project summaries from ${site.name}: SaaS, e-commerce, corporate sites, dashboards, and mobile apps.`,
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-border bg-stone-50 py-16 md:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Portfolio
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            Work structured like case studies—not screenshot galleries.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The examples below are realistic placeholders for agency presentation.
            Replace summaries, stacks, and outcomes with your confidential
            client work when permitted.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-label="Project case studies">
        <Container>
          <ul className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2">
            {projects.map((p, i) => (
              <li
                key={p.slug}
                id={p.slug}
                className="flex h-full min-h-0 scroll-mt-28"
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
        </Container>
      </section>

      <section className="border-t border-border bg-stone-900 py-14 md:py-16">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-xl text-lg text-stone-200">
            Under NDA for your sector? We can walk through anonymised parallels
            in a private session.
          </p>
          <ButtonLink href="/contact" variant="inverse">
            Request a briefing
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
