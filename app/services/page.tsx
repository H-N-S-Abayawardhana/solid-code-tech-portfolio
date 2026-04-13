import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software & AI Solutions Services",
  description: `${site.name} provides web development, mobile apps, cloud & DevOps, AI/ML integration, UI/UX design, and custom enterprise software for startups, SMBs, and global enterprises.`,
  alternates: { canonical: "/services" },
};

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
    </svg>
  ),
  "ui-ux-design": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
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

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {/* ── Service Quick Nav ── */}
      <nav className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur-sm md:top-20" aria-label="Jump to service">
        <Container>
          <ul className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {services.map((s, i) => (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500 transition-colors hover:bg-stone-100 hover:text-accent"
                >
                  <span className="font-bold text-accent/60">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* ── Service Entries ── */}
      <section className="py-16 md:py-20" aria-label="Service details">
        <Container className="space-y-0">
          {services.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-32 border-b border-border py-16 last:border-b-0 md:py-24"
            >
              <Reveal delay={0.04}>
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

                  {/* Left column */}
                  <div className="lg:col-span-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        {serviceIcons[s.id]}
                      </div>
                      <span className="font-display text-5xl font-bold text-stone-100 select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {s.summary}
                    </p>
                    <div className="mt-6">
                      <ButtonLink href="/contact" variant="primary" className="text-sm">
                        Discuss this service
                      </ButtonLink>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="lg:col-span-7 space-y-8">
                    <p className="text-base leading-relaxed text-muted">
                      {s.description}
                    </p>

                    {/* Benefits */}
                    <div className="rounded-xl border border-border bg-stone-50/60 p-6">
                      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-stone-700">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-accent">
                          <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                        What you get
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            <span className="text-sm leading-relaxed text-muted sm:text-base">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal clients */}
                    <div className="flex items-start gap-4 rounded-xl border border-accent/20 bg-accent/5 p-5">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-accent">Best fit for</h3>
                        <p className="mt-1 text-sm leading-relaxed text-stone-700 sm:text-base">
                          {s.idealClients}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </Reveal>
            </article>
          ))}
        </Container>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden border-t border-border bg-stone-950 py-20 md:py-24">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get started</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Not sure which service fits?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-400">
                Tell us about your challenge and we'll recommend the right approach — whether that's a short discovery, a technical review, or a full build.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" variant="inverse">
                  Book a free consultation
                </ButtonLink>
                <ButtonLink href="/portfolio" variant="secondary" className="border-stone-600 !text-stone-300 hover:border-stone-500 hover:bg-white/5">
                  See our work
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
