import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for business inquiries, project discussions, and partnership questions. Email, phone, and office placeholders included.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-stone-50 py-16 md:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            Start with a focused conversation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Share enough context for us to prepare useful questions. If we are
            not the right fit, we will say so and, where possible, suggest
            alternatives.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="contact-form-heading">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2
                id="contact-form-heading"
                className="font-display text-2xl font-medium text-stone-900"
              >
                Business inquiries
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Use the form for new projects, RFP follow-up, or partnership
                discussions. For support on an existing engagement, please use
                the channel provided in your statement of work.
              </p>
              <div className="mt-10 space-y-6 border-t border-border pt-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Email
                  </p>
                  <a
                    className="mt-1 inline-block text-base font-medium text-accent hover:underline"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Phone
                  </p>
                  <a
                    className="mt-1 inline-block text-base font-medium text-stone-900 hover:text-accent"
                    href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  >
                    {site.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Office
                  </p>
                  <address className="mt-1 not-italic text-base leading-relaxed text-muted">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </address>
                </div>
              </div>
              <p className="mt-10 text-sm text-muted">
                Response time: we aim to reply within two business days for
                qualified inbound enquiries.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] sm:p-8 md:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
