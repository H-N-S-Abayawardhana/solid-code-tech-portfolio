import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { mainNav } from "@/data/navigation";
import { services } from "@/data/services";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

const footerServices = services.slice(0, 5);

export function Footer() {
  return (
    <footer className="relative border-t border-stone-200 bg-stone-100/80">
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-accent/35 to-transparent"
        aria-hidden
      />
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <Logo variant="footer" className="-ml-0.5" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Custom software, web and mobile applications, and cloud solutions
              for organisations that need clarity, quality, and a partner who
              stays after launch.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-700 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {footerServices.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-sm text-stone-700 hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              Contact
            </p>
            <address className="mt-4 not-italic">
              <p className="text-sm text-stone-700">
                <a
                  className="hover:text-accent"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-stone-700">
                <a className="hover:text-accent" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phone}
                </a>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
            </address>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-stone-200/90 pt-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="text-stone-600">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-stone-500">
            <span>Placeholder contact details</span>
            <Link
              href="/contact"
              className="text-stone-600 hover:text-accent"
            >
              Privacy (sample)
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
