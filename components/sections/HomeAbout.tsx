import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeAbout } from "@/data/home";

export function HomeAbout() {
  return (
    <section
      className="border-b border-border bg-stone-50/40 pt-10 pb-20 md:pt-12 md:pb-28"
      aria-labelledby="home-about-heading"
    >
      <Container>
        <SectionHeader
          eyebrow={homeAbout.eyebrow}
          titleId="home-about-heading"
          title={homeAbout.title}
        />
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-5 lg:col-span-7">
            {homeAbout.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-lg font-semibold text-stone-900">
                  {homeAbout.missionLabel}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {homeAbout.mission}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-lg font-semibold text-stone-900">
                  {homeAbout.visionLabel}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {homeAbout.vision}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
