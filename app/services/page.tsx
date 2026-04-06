import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `${site.name} delivers web development, mobile apps, cloud & DevOps, AI/ML, UI/UX design, and custom software for startups, SMBs, and enterprises.`,
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="py-16 md:py-20" aria-label="Service details">
        <Container className="space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-24 border-b border-border pb-16 last:border-b-0 last:pb-0 md:scroll-mt-28 md:pb-24"
            >
              <Reveal delay={0.04 * i}>
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                  <div className="lg:col-span-5">
                    <h2 className="font-display text-2xl font-medium tracking-tight text-stone-900 md:text-3xl">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-base font-medium text-stone-800">
                      {s.summary}
                    </p>
                  </div>
                  <div className="lg:col-span-7 space-y-8">
                    <p className="text-base leading-relaxed text-muted">
                      {s.description}
                    </p>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                        What you gain
                      </h3>
                      <ul className="mt-3 space-y-2 text-base text-muted">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border border-border bg-stone-50/80 p-5">
                      <h3 className="text-sm font-semibold text-stone-900">
                        Often a strong fit for
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                        {s.idealClients}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </Container>
      </section>

      <section className="border-t border-border bg-stone-50 py-14 md:py-16">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-medium text-stone-900">
              Not sure where to start?
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              Describe your situation—we will suggest a sensible first step,
              whether that is a short discovery, a technical review, or a scoped
              pilot.
            </p>
          </div>
          <ButtonLink href="/contact">Book a conversation</ButtonLink>
        </Container>
      </section>
    </>
  );
}
