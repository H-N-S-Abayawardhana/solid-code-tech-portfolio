import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeAbout } from "@/data/home";

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "6+", label: "Technologies Mastered" },
  { value: "3+", label: "Countries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

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
            <Reveal delay={0.16}>
              <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <li key={s.label} className="rounded-xl border border-border bg-background p-4 text-center shadow-[var(--shadow-soft)]">
                    <p className="font-display text-3xl font-bold text-accent">{s.value}</p>
                    <p className="mt-1 text-xs font-medium text-muted">{s.label}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
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
