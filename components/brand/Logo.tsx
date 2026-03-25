"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

const dimensions = {
  header: { w: 260, h: 60 },
  footer: { w: 220, h: 52 },
} as const;

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const { w, h } = dimensions[variant];
  const heightClass = variant === "header" ? "h-11 sm:h-12" : "h-10 sm:h-11";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm ${className}`}
      aria-label={`${site.name} — Home`}
    >
      <Image
        src={site.logoSrc}
        alt=""
        width={w}
        height={h}
        priority={variant === "header"}
        className={`w-auto max-w-[min(100%,16rem)] object-contain object-left ${heightClass} sm:max-w-[17.5rem]`}
      />
    </Link>
  );
}
