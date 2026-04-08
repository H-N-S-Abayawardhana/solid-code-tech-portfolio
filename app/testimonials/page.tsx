import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { testimonials } from "@/data/testimonials";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Client perspectives on working with ${site.name}: delivery discipline, integration work, and long-term support.`,
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="border-b border-border bg-stone-50 py-16 md:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Testimonials
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            Feedback from the people who sponsor the work.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Quotes below are illustrative placeholders with realistic tone—swap
            for approved client references when available.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-label="Client testimonials">
        <Container>
          <ul className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <li key={t.id}>
                <Reveal delay={0.04 * i}>
                  <figure className="h-full rounded-lg border border-border bg-background p-8 shadow-[var(--shadow-soft)]">
                    <blockquote>
                      <p className="text-base leading-relaxed text-stone-800 md:text-lg">
                        “{t.quote}”
                      </p>
                    </blockquote>
                    <figcaption className="mt-8 border-t border-border pt-6">
                      <p className="text-sm font-semibold text-stone-900">
                        {t.name}
                      </p>
                      <p className="text-sm text-muted">
                        {t.role}, {t.company}
                      </p>
                      <p className="mt-1 text-xs text-stone-500">{t.region}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border bg-stone-50 py-14 md:py-16">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-lg text-muted">
            References under NDA are available after initial qualification.
          </p>
          <ButtonLink href="/contact">Request references</ButtonLink>
        </Container>
      </section>
    </>
  );
}
