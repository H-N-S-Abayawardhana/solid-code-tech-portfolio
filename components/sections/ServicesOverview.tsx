import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeSections } from "@/data/home";
import { services } from "@/data/services";

const overview = services.slice(0, 6);

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="services-overview-heading">
      <Container>
        <SectionHeader
          eyebrow={homeSections.services.eyebrow}
          titleId="services-overview-heading"
          title={homeSections.services.title}
          description={homeSections.services.description}
          action={
            <ButtonLink href="/services" variant="secondary" className="hidden sm:inline-flex">
              All services
            </ButtonLink>
          }
        />
        <Reveal delay={0.05}>
          <ul className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {overview.map((s, i) => (
              <li key={s.id} className="flex min-h-0">
                <Reveal
                  delay={0.04 * i}
                  className="flex min-h-0 w-full flex-1 flex-col"
                >
                  <article className="group flex min-h-0 flex-1 flex-col rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition-[border-color,box-shadow] duration-300 hover:border-stone-300/90 hover:shadow-md">
                    <h3 className="shrink-0 font-display text-lg font-semibold leading-snug text-stone-900">
                      <Link
                        href={`/services#${s.id}`}
                        className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-colors group-hover:text-accent"
                      >
                        {s.title}
                        <span
                          className="ml-1 inline-block translate-x-0 text-accent opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                          aria-hidden
                        >
                          →
                        </span>
                      </Link>
                    </h3>
                    <p className="mt-3 min-h-0 flex-1 text-sm leading-relaxed text-muted">
                      {s.summary}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="mt-10 sm:hidden">
          <ButtonLink href="/services" variant="secondary" className="w-full">
            All services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
