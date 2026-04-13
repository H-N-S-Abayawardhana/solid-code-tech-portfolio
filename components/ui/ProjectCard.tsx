"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  href?: string;
};

const categoryGradient: Record<ProjectCategory, string> = {
  "SaaS platform": "from-teal-700 via-teal-600 to-teal-500",
  "E-commerce": "from-indigo-700 via-indigo-600 to-indigo-400",
  "Corporate website": "from-stone-700 via-stone-600 to-stone-500",
  "Business dashboard": "from-violet-700 via-violet-600 to-violet-400",
  "Mobile app": "from-cyan-700 via-cyan-600 to-cyan-400",
};

const categoryLabel: Record<ProjectCategory, string> = {
  "SaaS platform": "SaaS",
  "E-commerce": "E-Commerce",
  "Corporate website": "Corporate",
  "Business dashboard": "Dashboard",
  "Mobile app": "Mobile App",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const tagVariants = {
  rest: { scale: 1, backgroundColor: "rgb(250 250 249)" },
  hover: {
    scale: 1.07,
    backgroundColor: "rgb(212 212 216)",
    transition: { type: "spring" as const, stiffness: 400, damping: 18 },
  },
};

export function ProjectCard({ project, href }: ProjectCardProps) {
  const to = href ?? `/portfolio#${project.slug}`;
  const reduce = useReducedMotion();
  const gradient = categoryGradient[project.category];
  const [rippleKey, setRippleKey] = useState(0);
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setRippleKey((k) => k + 1);
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  }

  const CardInner = (
    <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors duration-300 hover:border-stone-300/90">
      {/* Cover image / gradient banner */}
      <motion.div
        className="relative h-48 w-full shrink-0 overflow-hidden"
        variants={reduce ? undefined : itemVariants}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
              {categoryLabel[project.category]}
            </span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-md bg-black/50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {project.category}
        </span>
      </motion.div>

      {/* Card body */}
      <motion.div
        className="flex flex-1 flex-col p-6"
        variants={reduce ? undefined : containerVariants}
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, margin: "-30px" }}
      >
        <motion.h3
          className="font-display text-xl font-semibold leading-snug tracking-tight text-stone-900"
          variants={reduce ? undefined : itemVariants}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="mt-3 text-sm leading-relaxed text-muted"
          variants={reduce ? undefined : itemVariants}
        >
          {project.summary}
        </motion.p>

        <div className="min-h-0 flex-1" aria-hidden />

        <motion.ul
          className="mt-5 flex shrink-0 flex-wrap gap-2"
          aria-label="Technology stack"
          variants={reduce ? undefined : itemVariants}
        >
          {project.stack.map((t) => (
            <motion.li
              key={t}
              className="cursor-default rounded-md border border-border bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-600"
              variants={reduce ? undefined : tagVariants}
              initial="rest"
              whileHover="hover"
            >
              {t}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className="mt-5 shrink-0 border-t border-border pt-4 text-sm font-medium text-stone-800"
          variants={reduce ? undefined : itemVariants}
        >
          Outcome:{" "}
          <span className="font-normal text-muted">{project.outcome}</span>
        </motion.p>
      </motion.div>
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
      className="relative flex h-full min-h-0 w-full flex-col"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleClick}
    >
      {/* Expanding ring on click */}
      <AnimatePresence>
        {clicked && (
          <motion.span
            key={rippleKey}
            className="pointer-events-none absolute inset-0 rounded-xl"
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 1.06 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              border: "2px solid rgb(13 148 136)", // accent teal
              boxShadow: "0 0 0 4px rgba(13,148,136,0.18), 0 0 20px 4px rgba(13,148,136,0.12)",
            }}
          />
        )}
      </AnimatePresence>

      <Link href={to} className={linkClass}>
        {CardInner}
      </Link>
    </motion.div>
  );
}
