"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  href?: string;
};

export function ProjectCard({ project, href }: ProjectCardProps) {
  const to = href ?? `/portfolio#${project.slug}`;
  const reduce = useReducedMotion();

  const CardInner = (
    <article className="flex h-full min-h-0 flex-col rounded-xl border border-border bg-background p-6 transition-colors duration-300 hover:border-stone-300/90">
      <p className="shrink-0 text-xs font-semibold uppercase tracking-wider text-accent">
        {project.category}
      </p>
      <h3 className="mt-3 shrink-0 font-display text-xl font-semibold leading-snug tracking-tight text-stone-900">
        {project.title}
      </h3>
      <p className="mt-3 shrink-0 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
      {/* Fills remaining row height so tags + outcome sit on a shared baseline */}
      <div className="min-h-0 flex-1" aria-hidden />
      <ul
        className="mt-5 flex shrink-0 flex-wrap gap-2"
        aria-label="Technology stack"
      >
        {project.stack.map((t) => (
          <li
            key={t}
            className="rounded-md border border-border bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-600"
          >
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-5 shrink-0 border-t border-border pt-4 text-sm font-medium text-stone-800">
        Outcome:{" "}
        <span className="font-normal text-muted">{project.outcome}</span>
      </p>
    </article>
  );

  const linkClass =
    "group flex h-full min-h-0 w-full flex-col rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  if (reduce) {
    return (
      <Link href={to} className={linkClass}>
        {CardInner}
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full min-h-0 w-full flex-col"
    >
      <Link href={to} className={linkClass}>
        {CardInner}
      </Link>
    </motion.div>
  );
}
