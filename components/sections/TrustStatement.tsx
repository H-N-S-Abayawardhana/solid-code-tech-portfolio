import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

export function TrustStatement() {
  return (
    <section
      className="border-b border-border bg-stone-50 py-14 md:py-16"
      aria-labelledby="trust-heading"
    >
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
            <h2
              id="trust-heading"
              className="max-w-md font-display text-2xl font-medium tracking-tight text-stone-900 md:text-3xl"
            >
              Built for boards, buyers, and the engineers who maintain the system.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              We work the way serious technology programmes expect: explicit
              scope, documented decisions, security-aware delivery, and
              communication that respects time zones and executive calendars.
              No theatre—just accountable software practice.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
