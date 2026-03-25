import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { processSteps } from "@/data/process";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process",
  description: `How ${site.name} delivers software: discovery, planning, design, development, testing, launch, and support—explained for international stakeholders.`,
};

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-border bg-stone-50 py-16 md:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Process
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            A delivery model you can explain to procurement—and to your CEO.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Each stage produces artefacts your organisation can keep: decisions
            are documented, risks are visible, and progress is measured against
            agreed outcomes rather than vague “sprints completed.”
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-label="Delivery workflow">
        <Container>
          <ol className="relative space-y-0">
            {processSteps.map((step, i) => (
              <li key={step.step} className="relative pl-0 md:pl-0">
                <div className="grid gap-8 border-b border-border py-12 last:border-b-0 md:grid-cols-12 md:gap-12 md:py-14">
                  <div className="md:col-span-3">
                    <Reveal delay={0.04 * i}>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Step {step.step}
                      </span>
                      <h2 className="mt-2 font-display text-2xl font-medium text-stone-900">
                        {step.title}
                      </h2>
                    </Reveal>
                  </div>
                  <div className="md:col-span-9">
                    <Reveal delay={0.06 + 0.04 * i}>
                      <p className="text-base font-medium text-stone-800">
                        {step.summary}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-muted">
                        {step.detail}
                      </p>
                    </Reveal>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border bg-background py-14 md:py-16">
        <Container className="rounded-lg border border-border bg-stone-50/80 p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
          <div>
            <h2 className="font-display text-xl font-medium text-stone-900 md:text-2xl">
              Need a tailored governance pack?
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              We can align RACI matrices, reporting templates, and security
              questionnaires to your enterprise standards during onboarding.
            </p>
          </div>
          <ButtonLink href="/contact" className="mt-6 shrink-0 md:mt-0">
            Speak with delivery
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
