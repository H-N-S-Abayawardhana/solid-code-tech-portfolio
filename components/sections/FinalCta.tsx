import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeSections } from "@/data/home";

const copy = homeSections.finalCta;

export function FinalCta() {
  return (
    <section className="border-t border-border bg-stone-950 py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                {copy.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-400">
                {copy.body}
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
              <ButtonLink href="/contact" variant="inverse">
                {copy.primary}
              </ButtonLink>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-stone-600 px-5 py-2.5 text-sm font-medium text-stone-100 transition-colors hover:border-stone-500 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
              >
                {copy.secondary}
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
