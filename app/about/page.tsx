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

const leadership = [
  {
    name: "James Whitmore",
    role: "Managing Director",
    bio: "Former engineering lead for multi-region SaaS platforms; focuses on delivery governance and client steering committees.",
  },
  {
    name: "Priya Natarajan",
    role: "Head of Delivery",
    bio: "Brings structured agile and enterprise PMO experience; owns resourcing, risk registers, and executive reporting.",
  },
  {
    name: "Daniel Fischer",
    role: "Principal Architect",
    bio: "Designs integration-heavy systems and cloud estates with an emphasis on security, cost transparency, and operability.",
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
                We are a multidisciplinary team of product strategists,
                designers, and engineers working across web, mobile, and cloud.
                Most of our clients operate internationally: they need vendors
                who understand compliance context, stakeholder diversity, and
                the reality of legacy systems.
              </p>
              <p>
                We are intentionally mid-sized. That keeps principals close to
                delivery and avoids the account-manager layers that slow
                decisions on complex builds.
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
                  To deliver software that organisations depend on—clearly
                  specified, carefully built, and straightforward to evolve.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.06}>
              <article>
                <h2 className="font-display text-2xl font-medium text-stone-900">
                  Vision
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  To be the first call for teams who have outgrown improvised
                  tools and generic agencies, and need a partner that combines
                  strategic calm with technical depth.
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
                Our clients are not buying slides—they are buying working
                software in production. That requires honest estimates,
                disciplined execution, and respect for the people who will run
                and extend the system for years. That standard guides every
                engagement we accept.
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
              Early work focused on replacing fragile internal tools for
              operations and finance teams. As integrations grew more complex,
              we invested in cloud architecture, security practice, and design
              operations. Today we support SaaS companies, industrial firms, and
              professional services networks across Europe, the Middle East, and
              North America—always with the same emphasis on clarity and
              long-term maintainability.
            </p>
          </Reveal>
        </Container>
      </section>

      <section
        className="border-t border-border bg-background py-16 md:py-24"
        aria-labelledby="leadership-heading"
      >
        <Container>
          <SectionHeader
            titleId="leadership-heading"
            title="Leadership"
            description="Representative profiles for presentation. Replace names, roles, and biographies with your actual leadership team."
          />
          <ul className="grid gap-8 md:grid-cols-3">
            {leadership.map((person, i) => (
              <li key={person.name}>
                <Reveal delay={0.06 * i}>
                  <article className="h-full rounded-lg border border-border p-6">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-stone-100 text-sm font-semibold text-stone-600"
                      aria-hidden
                    >
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="mt-5 font-display text-lg font-medium text-stone-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-medium text-accent">{person.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {person.bio}
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
              Ready to explore fit for your next programme?
            </p>
            <ButtonLink href="/contact" variant="inverse">
              Contact us
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
