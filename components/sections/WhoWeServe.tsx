import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeWhoWeServe } from "@/data/home";

export function WhoWeServe() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="who-we-serve-heading">
      <Container>
        <SectionHeader
          eyebrow={homeWhoWeServe.eyebrow}
          titleId="who-we-serve-heading"
          title={homeWhoWeServe.title}
          description={homeWhoWeServe.intro}
        />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeWhoWeServe.segments.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={0.04 * i}>
                <article className="h-full rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition-[border-color,box-shadow] duration-300 hover:border-stone-300/90 hover:shadow-md">
                  <h3 className="font-display text-base font-semibold text-stone-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
