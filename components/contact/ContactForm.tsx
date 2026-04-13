"use client";

import { useState } from "react";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-stone-50/60 px-4 py-3 text-sm text-stone-900 outline-none transition-[border-color,box-shadow] placeholder:text-stone-400 focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/20";

const labelClass = "block text-sm font-semibold text-stone-700";

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(formData: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (message.length < 20)
      next.message = "Please provide a bit more detail (at least 20 characters).";

    return next;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const next = validate(formData);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setLoading(true);
    // Simulate async — wire to API / server action here
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      form.reset();
    }, 800);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-5 py-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-accent">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <h4 className="font-display text-xl font-semibold text-stone-900">Message sent!</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Thank you for reaching out. We'll get back to you within one business day.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-medium text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="John Silva"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600" role="alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@company.com"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600" role="alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Company */}
        <div>
          <label htmlFor="company" className={labelClass}>
            Company <span className="text-xs font-normal text-stone-400">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your company name"
            className={inputClass}
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClass}>
            Service interested in <span className="text-xs font-normal text-stone-400">(optional)</span>
          </label>
          <select
            id="service"
            name="service"
            className={`${inputClass} cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>Select a service…</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>AI / ML Solutions</option>
            <option>Cloud & DevOps</option>
            <option>UI/UX Design</option>
            <option>Custom Software</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your project <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Describe your goals, timeline, and any technical details that will help us understand your project…"
          className={`${inputClass} resize-y`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-600" role="alert">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white shadow-sm transition-[background-color,opacity] hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60"
        >
          {loading ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </>
          )}
        </button>
        <p className="text-xs text-muted">
          We'll respond within one business day. Your information is kept private and never shared.
        </p>
      </div>
    </form>
  );
}
