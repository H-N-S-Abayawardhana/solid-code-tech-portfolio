"use client";

import { useState } from "react";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(formData: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (message.length < 20)
      next.message = "A few more details help us respond usefully.";

    return next;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const next = validate(formData);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Ready for API/CMS: POST /api/contact or server action
    setSubmitted(true);
    form.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6"
      noValidate
      aria-describedby={submitted ? "form-success" : undefined}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-800">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-stone-900 shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-sm text-red-700" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-800">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-stone-900 shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm text-red-700" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-stone-800">
          Company <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-stone-900 shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-stone-800">
          Subject <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-stone-900 shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-800">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full resize-y rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-stone-900 shadow-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="Briefly describe goals, timeline, and any technical context."
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-700" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Send inquiry
        </button>
        <p className="text-xs text-muted">
          By submitting, you agree to be contacted about this inquiry. Replace
          with your legal text before production.
        </p>
      </div>

      {submitted ? (
        <p
          id="form-success"
          className="rounded-lg border border-accent/30 bg-accent-subtle px-4 py-3 text-sm text-stone-800"
          role="status"
        >
          Thank you. This demo form does not send email yet—wire your endpoint or
          server action to complete the integration.
        </p>
      ) : null}
    </form>
  );
}
