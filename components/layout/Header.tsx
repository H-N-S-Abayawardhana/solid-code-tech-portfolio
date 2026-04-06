"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { mainNav } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

/** Routes whose first section is the dark video hero (white nav at top). */
function isVideoHeroRoute(pathname: string) {
  if (pathname === "/") return true;
  if (pathname === "/about" || pathname.startsWith("/about/")) return true;
  if (pathname === "/services" || pathname.startsWith("/services/")) return true;
  return false;
}

function navLinkClass(active: boolean, light: boolean) {
  const activeMark = active
    ? light
      ? "underline decoration-white decoration-2 underline-offset-[6px]"
      : "underline decoration-[#050a30] decoration-2 underline-offset-[6px]"
    : "";
  if (light) {
    return active
      ? `text-white ${activeMark}`
      : "text-white/85 hover:text-white";
  }
  return active
    ? `text-[#050a30] ${activeMark}`
    : "text-stone-600 hover:text-[#050a30]";
}

function NavLink({
  href,
  label,
  light,
}: {
  href: string;
  label: string;
  light: boolean;
}) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`text-[15px] font-medium uppercase tracking-[0.14em] transition-colors lg:text-base ${navLinkClass(active, light)}`}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const reduce = useReducedMotion();

  const lightNav = isVideoHeroRoute(pathname) && !pastHero;

  useEffect(() => {
    const threshold = () =>
      Math.min(520, window.innerHeight * 0.68);

    const update = () => {
      setPastHero(window.scrollY > threshold());
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-transparent">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo variant="header" />

        <nav
          className="hidden items-center gap-7 xl:gap-8 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              light={lightNav}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href="/contact"
            variant="primary"
            className="px-4 py-2.5 text-[13px] font-semibold tracking-wide"
          >
            Start a project
          </ButtonLink>
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden ${
            lightNav
              ? "border-white/35 text-white"
              : "border-border text-stone-800"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 rounded-full transition-transform ${
                lightNav ? "bg-white" : "bg-stone-800"
              } ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-4 rounded-full transition-opacity ${
                lightNav ? "bg-white" : "bg-stone-800"
              } ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-4 rounded-full transition-transform ${
                lightNav ? "bg-white" : "bg-stone-800"
              } ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {mainNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 text-base font-medium uppercase tracking-[0.14em] transition-colors hover:bg-stone-100 ${
                      active
                        ? "text-[#050a30] underline decoration-[#050a30] decoration-2 underline-offset-[6px]"
                        : "text-stone-800 hover:text-[#050a30]"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <ButtonLink
                  href="/contact"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Start a project
                </ButtonLink>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
