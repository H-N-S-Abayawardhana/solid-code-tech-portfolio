"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

const dimensions = {
  header: { w: 400, h: 92 },
  footer: { w: 320, h: 80 },
} as const;

const DARK_LOGO_PATHS = ["/portfolio", "/contact"];

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const pathname = usePathname();
  const useDark = variant === "footer" || DARK_LOGO_PATHS.some((p) => pathname.startsWith(p));
  const logoSrc = useDark ? site.logoDarkSrc : site.logoSrc;
  const { w, h } = dimensions[variant];
  const heightClass =
    variant === "header"
      ? "h-[3.75rem] sm:h-16 md:h-[4.75rem]"
      : "h-14 sm:h-16";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm ${className}`}
      aria-label={`${site.name} — Home`}
    >
      <Image
        src={logoSrc}
        alt=""
        width={w}
        height={h}
        priority={variant === "header"}
        className={`w-auto max-w-[min(100%,14rem)] object-contain object-left sm:max-w-[min(100%,22rem)] md:max-w-[28rem] ${heightClass}`}
      />
    </Link>
  );
}
