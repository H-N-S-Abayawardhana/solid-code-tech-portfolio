import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  action,
}: SectionHeaderProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const maxW = align === "center" ? "max-w-2xl" : "max-w-2xl";

  return (
    <div
      className={`mb-12 md:mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${align === "center" ? "items-center" : ""}`}
    >
      <div className={`${alignCls} ${maxW}`}>
        {eyebrow ? (
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent sm:text-xs">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={titleId}
          className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
