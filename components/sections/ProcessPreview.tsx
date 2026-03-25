import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeSections } from "@/data/home";
import { processSteps } from "@/data/process";

const preview = processSteps.slice(0, 4);

export function ProcessPreview() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="process-preview-heading">
      <Container>
        <SectionHeader
          eyebrow={homeSections.process.eyebrow}
          titleId="process-preview-heading"
          title={homeSections.process.title}
          description={homeSections.process.description}
          action={
            <ButtonLink href="/process" variant="secondary" className="hidden sm:inline-flex">
              Full process
            </ButtonLink>
          }
        />
        <Reveal>
          <ol className="grid gap-0 md:grid-cols-4 md:divide-x md:divide-border">
            {preview.map((step, i) => (
              <li key={step.step} className="md:px-6 first:md:pl-0 last:md:pr-0 py-8 md:py-0 border-b border-border md:border-b-0">
                <Reveal delay={0.07 * i}>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                      Step {step.step}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-stone-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.summary}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Reveal>
        <p className="mt-10 text-center text-sm text-muted md:text-left">
          <Link href="/process" className="font-medium text-accent hover:underline">
            View all stages from discovery to support
          </Link>
          .
        </p>
        <div className="mt-6 md:hidden">
          <ButtonLink href="/process" variant="secondary" className="w-full">
            Full process
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
