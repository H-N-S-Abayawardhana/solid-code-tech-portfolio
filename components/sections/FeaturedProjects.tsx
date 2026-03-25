import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { homeSections } from "@/data/home";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section
      className="bg-stone-50 py-20 md:py-28"
      aria-labelledby="featured-projects-heading"
    >
      <Container>
        <SectionHeader
          eyebrow={homeSections.projects.eyebrow}
          titleId="featured-projects-heading"
          title={homeSections.projects.title}
          description={homeSections.projects.description}
          action={
            <ButtonLink href="/portfolio" variant="secondary" className="hidden sm:inline-flex">
              Full portfolio
            </ButtonLink>
          }
        />
        <ul className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <li key={p.slug} className="flex min-h-0 h-full">
              <Reveal
                delay={0.06 * i}
                className="flex h-full min-h-0 w-full flex-col"
              >
                <ProjectCard project={p} />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-10 sm:hidden">
          <ButtonLink href="/portfolio" variant="secondary" className="w-full">
            Full portfolio
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
