import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeSections } from "@/data/home";

const points = [
  {
    title: "Engineering standards",
    body: "Peer review, automated checks, and staging environments that mirror production. Fewer late surprises and cleaner releases.",
  },
  {
    title: "Clear commercial shape",
    body: "Milestones tie to outcomes you can report upward. Scope changes go through a written change path, not informal backlog growth.",
  },
  {
    title: "Design and engineering together",
    body: "Product designers sit with engineers through build so interfaces stay usable, accessible, and technically coherent.",
  },
  {
    title: "After go-live",
    body: "Maintenance windows, minor enhancements, and documentation are part of the engagement—not a handover slide deck on the last day.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="border-y border-border bg-stone-50/50 py-20 md:py-28"
      aria-labelledby="why-heading"
    >
      <Container>
        <SectionHeader
          eyebrow={homeSections.whyUs.eyebrow}
          titleId="why-heading"
          title={homeSections.whyUs.title}
          description={homeSections.whyUs.description}
        />
        <ol className="grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
          {points.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={0.05 * i}>
                <article className="flex gap-5">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-stone-50 text-sm font-semibold text-accent"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-stone-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {p.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
