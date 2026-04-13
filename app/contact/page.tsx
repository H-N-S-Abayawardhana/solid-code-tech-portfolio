import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} for project inquiries, software development, and AI solutions. Based in Battaramulla, Colombo, Sri Lanka.`,
  alternates: { canonical: "/contact" },
};

const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Office",
    value: `${site.address.line1}, ${site.address.line2}`,
    href: "https://maps.google.com/?q=Battaramulla+Colombo+Sri+Lanka",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M21 2H3v16h5l3 3 3-3h7V2z" /><line x1="8" y1="8" x2="16" y2="8" /><line x1="8" y1="12" x2="14" y2="12" />
      </svg>
    ),
    label: "WhatsApp",
    value: site.whatsapp.phoneDisplay,
    href: site.whatsapp.href,
  },
];

const trustPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: "Reply within 1 business day",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "No commitment required",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: "Free initial consultation",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border bg-stone-950 py-20 md:py-28">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" aria-hidden />
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Get in touch
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let's build something great together.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-400 sm:text-lg">
            Tell us about your project — your goals, timeline, and challenges. We'll get back to you within one business day with a clear path forward.
          </p>

          {/* Trust pills */}
          <ul className="mt-8 flex flex-wrap gap-3">
            {trustPoints.map((t) => (
              <li
                key={t.text}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-300"
              >
                <span className="text-accent">{t.icon}</span>
                {t.text}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 md:py-24" aria-labelledby="contact-form-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            {/* Left — contact info */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h2
                  id="contact-form-heading"
                  className="font-display text-2xl font-semibold text-stone-900"
                >
                  Contact details
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Reach us directly or use the form — we're always happy to discuss your project.
                </p>
              </div>

              {/* Contact cards */}
              <ul className="space-y-4">
                {contactDetails.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.label === "Office" || c.label === "WhatsApp" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-xl border border-border bg-stone-50/60 p-4 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                        {c.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                          {c.label}
                        </p>
                        <p className="mt-0.5 truncate text-sm font-medium text-stone-800 group-hover:text-accent">
                          {c.value}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              {/* LinkedIn */}
              <div className="rounded-xl border border-border bg-stone-50/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Follow us</p>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-3 text-sm font-medium text-stone-800 transition-colors hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#0A66C2]">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn — SolidCode Technologies
                </a>
              </div>

              {/* Response note */}
              <div className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-5 w-5 shrink-0 text-accent">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" strokeWidth={2} />
                </svg>
                <p className="text-sm leading-relaxed text-stone-700">
                  We aim to respond to all inquiries within <strong>one business day</strong>. For urgent matters, reach us directly on WhatsApp.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] sm:p-8 md:p-10">
                <div className="mb-8">
                  <h3 className="font-display text-xl font-semibold text-stone-900">Send us a message</h3>
                  <p className="mt-2 text-sm text-muted">Fill in the details below and we'll be in touch shortly.</p>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
