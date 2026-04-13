"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeWhoWeServe } from "@/data/home";

const ease = [0.22, 1, 0.36, 1] as const;

const segmentIcons: Record<string, React.ReactNode> = {
  Startups: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M12 2C6.5 2 3 7 3 12c0 1.5.5 3 1 4l2-2" />
      <path d="M12 2c5.5 0 9 5 9 10 0 1.5-.5 3-1 4l-2-2" />
      <path d="M12 8v8M9 11l3-3 3 3" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  ),
  "Small & Medium Businesses": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" strokeWidth={2} />
      <path d="M2 12h20" />
    </svg>
  ),
  Enterprises: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" strokeWidth={2} />
    </svg>
  ),
  "E-Commerce": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  ),
  Healthcare: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  Education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Fintech: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  "Logistics & Operations": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
};

export function WhoWeServe() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 md:py-28" aria-labelledby="who-we-serve-heading">
      <Container>
        <SectionHeader
          eyebrow={homeWhoWeServe.eyebrow}
          titleId="who-we-serve-heading"
          title={homeWhoWeServe.title}
          description={homeWhoWeServe.intro}
        />
        <ul className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeWhoWeServe.segments.map((s, i) => (
            <li key={s.title} className="flex min-h-0">
              <motion.article
                className="flex h-full min-h-[240px] w-full flex-col rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition-[border-color,box-shadow] duration-300 hover:border-stone-300/90 hover:shadow-md sm:min-h-[260px] lg:min-h-[272px]"
                initial={
                  reduce ? undefined : { opacity: 0, y: 18, scale: 0.98 }
                }
                whileInView={
                  reduce ? undefined : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, margin: "-48px" }}
                transition={{
                  duration: 0.45,
                  ease,
                  delay: reduce ? 0 : i * 0.06,
                }}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        scale: 1.035,
                        transition: { duration: 0.22, ease },
                      }
                }
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {segmentIcons[s.title]}
                </div>
                <h3 className="font-display text-base font-semibold text-stone-900">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </motion.article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
