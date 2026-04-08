import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeSections } from "@/data/home";
import { testimonials } from "@/data/testimonials";

const preview = testimonials.slice(0, 2);

export function TestimonialPreview() {
  return (
    <section
      className="border-t border-border bg-background py-20 md:py-28"
      aria-labelledby="testimonial-preview-heading"
    >
      <Container>
        <SectionHeader
          eyebrow={homeSections.testimonials.eyebrow}
          titleId="testimonial-preview-heading"
          title={homeSections.testimonials.title}
          description={homeSections.testimonials.description}
          action={
            <ButtonLink href="/testimonials" variant="secondary" className="hidden sm:inline-flex">
              All testimonials
            </ButtonLink>
          }
        />
        <ul className="grid gap-8 md:grid-cols-2">
          {preview.map((t, i) => (
            <li key={t.id}>
              <Reveal delay={0.08 * i}>
                <figure className="h-full rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] sm:p-8">
                  <blockquote>
                    <p className="text-base leading-relaxed text-stone-800 sm:text-lg">
                      “{t.quote}”
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-6">
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
        <div className="mt-10 sm:hidden">
          <ButtonLink href="/testimonials" variant="secondary" className="w-full">
            All testimonials
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
