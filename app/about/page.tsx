import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { AboutHero } from "@/components/sections/AboutHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name}: mission, values, and how we work with international clients on custom software and digital transformation.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Precision over noise",
    body: "We prefer clear writing, explicit assumptions, and decisions you can audit later—especially when programmes span multiple vendors and time zones.",
  },
  {
    title: "Ownership end to end",
    body: "Delivery includes runbooks, environments, and knowledge transfer. We do not optimise for a dramatic handover; we optimise for sustainable operations.",
  },
  {
    title: "Respect for your organisation",
    body: "Your policies, procurement rhythms, and risk appetite shape how we propose work. We adapt our cadence; we do not ask you to pretend you are a startup unless you are one.",
  },
  {
    title: "Quality as a habit",
    body: "Testing, review, and observability are part of daily work—not a phase squeezed in before a deadline.",
  },
];

const strengths = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="15" y1="4" x2="9" y2="20" />
      </svg>
    ),
    title: "Engineering Excellence",
    body: "Clean architecture, rigorous code review, and production-grade standards on every project — no shortcuts.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Fast Delivery",
    body: "Focused sprints, continuous deployment, and weekly demos — we move at speed without compromising quality.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Client Partnership",
    body: "We work as an extension of your team — transparent communication, honest timelines, and zero surprises.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v1.5c1.2.7 2 2 2 3.5a4 4 0 0 1-8 0c0-1.5.8-2.8 2-3.5V17H8a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2V9.5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4z" />
      </svg>
    ),
    title: "AI-Ready Expertise",
    body: "From LLM integrations to machine learning pipelines, we bring real AI capability — not just buzzwords.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <section className="py-16 md:py-24" aria-labelledby="intro-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2
                id="intro-heading"
                className="font-display text-2xl font-medium text-stone-900 md:text-3xl"
              >
                Who we are
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-muted">
              <p>
                SolidCode Technologies is a software development company based
                in Battaramulla, Sri Lanka — built by engineers who care deeply
                about code quality, user experience, and delivering software
                that actually works in production.
              </p>
              <p>
                We work with startups, growing businesses, and enterprises
                across mobile, web, AI, and cloud — bringing the same
                commitment to quality to every engagement, regardless of size.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="border-y border-border bg-background py-16 md:py-24"
        aria-labelledby="mission-heading"
      >
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <article>
                <h2
                  id="mission-heading"
                  className="font-display text-2xl font-medium text-stone-900"
                >
                  Mission
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  To deliver world-class software solutions that empower every
                  business — big or small — to grow, compete, and succeed in
                  the digital age.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.06}>
              <article>
                <h2 className="font-display text-2xl font-medium text-stone-900">
                  Vision
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  To become a globally trusted technology partner known for
                  code quality, innovation, and lasting client relationships.
                </p>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="why-exists-heading">
        <Container>
          <SectionHeader
            titleId="why-exists-heading"
            title="Why we exist"
          />
          <Reveal>
            <div className="rounded-lg border border-border bg-stone-50/80 p-8 md:p-10">
              <p className="text-base leading-relaxed text-muted md:text-lg">
                We started SolidCode Technologies because we believe every
                business deserves software that is built right — not just built
                fast. Every product we ship is something we are proud to put
                our name on. That standard drives every decision we make, from
                architecture to deployment.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        className="border-t border-border bg-stone-50 py-16 md:py-24"
        aria-labelledby="values-heading"
      >
        <Container>
          <SectionHeader
            titleId="values-heading"
            title="Core values"
            description="Principles we hire against and review against—internally and with clients."
          />
          <ul className="grid gap-8 md:grid-cols-2">
            {values.map((v, i) => (
              <li key={v.title}>
                <Reveal delay={0.05 * i}>
                  <article className="h-full rounded-lg border border-border bg-background p-6">
                    <h3 className="font-display text-lg font-medium text-stone-900">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                      {v.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="story-heading">
        <Container>
          <SectionHeader
            titleId="story-heading"
            title="Our story"
            description="Founded by engineers and product leaders who had seen both excellent and painful programmes from the inside, the firm began as a small specialist studio and grew through repeat engagement and referral."
          />
          <Reveal>
            <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              SolidCode Technologies was founded with a simple belief: great
              software changes everything. We started by building mobile apps
              and web platforms for local businesses in Sri Lanka, and quickly
              expanded our capabilities to include AI-powered applications,
              cloud infrastructure, and enterprise-grade systems. Today we
              serve clients globally — always with the same focus on quality,
              transparency, and long-term partnership.
            </p>
          </Reveal>
        </Container>
      </section>

      <section
        className="border-t border-border bg-background py-16 md:py-24"
        aria-labelledby="strengths-heading"
      >
        <Container>
          <SectionHeader
            titleId="strengths-heading"
            title="What sets us apart"
            description="We combine deep technical expertise with a genuine commitment to your success — every time."
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={0.06 * i}>
                  <article className="h-full rounded-xl border border-border bg-stone-50/60 p-6 transition-[border-color,box-shadow] duration-300 hover:border-stone-300/90 hover:shadow-md">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {s.icon}
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-stone-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border bg-stone-900 py-14 md:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-xl text-lg text-stone-200">
              Ready to work with a team that takes quality as seriously as you do?
            </p>
            <ButtonLink href="/contact" variant="inverse">
              Let's talk
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
