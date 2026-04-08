"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeWhoWeServe } from "@/data/home";

const ease = [0.22, 1, 0.36, 1] as const;

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
