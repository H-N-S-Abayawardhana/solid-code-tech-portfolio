import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeSections } from "@/data/home";
import { services } from "@/data/services";

const overview = services.slice(0, 6);

const serviceIcons: Record<string, React.ReactNode> = {
  "web-development": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 8l3 3-3 3M13 14h4" />
    </svg>
  ),
  "mobile-app-development": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" strokeWidth={2} />
    </svg>
  ),
  "cloud-devops": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  "ai-ml": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v1.5c1.2.7 2 2 2 3.5a4 4 0 0 1-8 0c0-1.5.8-2.8 2-3.5V17H8a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2V9.5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4z" />
      <circle cx="12" cy="6" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  "ui-ux-design": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2.5} />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2.5} />
    </svg>
  ),
  "custom-software": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="15" y1="4" x2="9" y2="20" />
    </svg>
  ),
};

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
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {serviceIcons[s.id]}
                    </div>
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
