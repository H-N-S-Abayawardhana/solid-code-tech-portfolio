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
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            Real projects. Real outcomes.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            A curated selection of the software we have designed, built, and shipped — from mobile apps and AI platforms to marketplaces and enterprise tools.
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
            Have a project in mind? Let's talk about how we can help you build it.
          </p>
          <ButtonLink href="/contact" variant="inverse">
            Get in touch
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
