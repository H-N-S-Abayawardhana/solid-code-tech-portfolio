import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { processSteps } from "@/data/process";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Work — Our Process",
  description: `How ${site.name} delivers software: discovery, planning, design, development, testing, launch, and ongoing support — every step explained.`,
  alternates: { canonical: "/process" },
};

const stepIcons: React.ReactNode[] = [
  // Discovery
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>,
  // Planning
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>,
  // Design
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><circle cx="11" cy="11" r="2" />
  </svg>,
  // Development
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="15" y1="4" x2="9" y2="20" />
  </svg>,
  // Testing
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>,
  // Launch
  <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M22 2L11 13" /><path d="M22 2L15 22l-4-9-9-4 19-7z" />
  </svg>,
  // Support
  <svg key="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
  </svg>,
];

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Full Visibility",
    body: "You see progress every week — real builds, real demos, and documented decisions at every stage.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "No Surprises",
    body: "Scope, timelines, and risks are made explicit before build work begins — so there are no late-stage shocks.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Quality Built In",
    body: "Testing, code review, and observability are part of every sprint — not an afterthought squeezed in before launch.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border bg-stone-950 py-20 md:py-28">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" aria-hidden />
        <Container className="relative">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              How we work
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              A clear process from first call to long-term support.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-400 sm:text-lg">
              Every engagement follows a structured 7-step delivery model — giving you predictable outcomes, transparent progress, and software built to last.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="inverse">
                Start a Project
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="border-stone-600 !text-stone-300 hover:border-stone-500 hover:bg-white/5">
                View Services
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Why Our Process Works ── */}
      <section className="border-b border-border bg-stone-50 py-14 md:py-16">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={0.06 * i}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-stone-900">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Process Steps ── */}
      <section className="py-16 md:py-24" aria-label="Delivery workflow">
        <Container>
          <ol className="relative space-y-0">
            {processSteps.map((step, i) => (
              <li key={step.step} className="group relative">
                <Reveal delay={0.04 * i}>
                  <div className="grid gap-8 border-b border-border py-12 last:border-b-0 md:grid-cols-12 md:gap-16 md:py-14">

                    {/* Step indicator column */}
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-accent bg-accent/10 text-accent">
                          {stepIcons[i]}
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                            Step {String(step.step).padStart(2, "0")}
                          </span>
                          <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
                            {step.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    {/* Content column */}
                    <div className="md:col-span-8 space-y-5">
                      <p className="text-lg font-medium leading-relaxed text-stone-800">
                        {step.summary}
                      </p>
                      <p className="text-base leading-relaxed text-muted">
                        {step.detail}
                      </p>
                      {/* Deliverable tag */}
                      <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span className="text-xs font-semibold text-accent">
                          {["Findings summary", "Delivery roadmap", "Validated designs", "Working software", "Test report", "Go-live runbook", "Support SLA"][i]}
                        </span>
                      </div>
                    </div>

                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-border bg-stone-950 py-20 md:py-24">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Ready to begin</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let's walk through your project together.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone-400">
                Share your goals and we'll map out the right starting point — whether that's a discovery session, a technical review, or a full build plan.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" variant="inverse">
                  Book a free consultation
                </ButtonLink>
                <ButtonLink href="/portfolio" variant="secondary" className="border-stone-600 !text-stone-300 hover:border-stone-500 hover:bg-white/5">
                  See our work
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
