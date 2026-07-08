/**
 * ContactTeaser — VertexForge
 * Mini contact form (Name, Email, Message) used above the footer on the Home page.
 * Client-side controlled with basic validation and success state.
 */

"use client";

import { useState, useId } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.message.trim()) errors.message = "Message is required.";
  else if (data.message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  return errors;
}

export default function ContactTeaser() {
  const id = useId();
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormState("submitting");

    /* Simulated submit — replace with EmailJS / Resend later */
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormState("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="bg-blush border-y border-border section-py"
      aria-labelledby="teaser-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Copy */}
          <div>
            <p className="text-xs font-700 uppercase tracking-widest text-amber mb-3">
              Let&apos;s Work Together
            </p>
            <h2
              id="teaser-heading"
              className="text-3xl lg:text-4xl font-800 text-stone mb-4 leading-tight"
            >
              Have a project in mind?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Tell us about your SaaS idea or challenge. We&apos;ll get back to
              you within one business day.
            </p>

            {/* Trust signals */}
            <ul className="space-y-2.5" role="list">
              {[
                "No commitment required",
                "Reply within 24 hours",
                "Free initial consultation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                  <span className="w-5 h-5 rounded-full bg-sage/60 flex items-center justify-center flex-none" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#3d3027" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div>
            {formState === "success" ? (
              <div
                className="bg-cream rounded-2xl border border-sage/60 p-8 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="w-14 h-14 rounded-full bg-sage/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="#3d3027" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-700 text-stone mb-2">Message Sent!</h3>
                <p className="text-muted text-sm">
                  Thanks! We&apos;ll be in touch within one business day.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-5 text-sm font-600 text-amber hover:text-amber-dark transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-cream rounded-2xl border border-border p-6 lg:p-8 space-y-4"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor={`${id}-name`}
                    className="block text-sm font-600 text-stone mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id={`${id}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    aria-describedby={errors.name ? `${id}-name-error` : undefined}
                    aria-invalid={!!errors.name}
                    className={`
                      w-full px-4 py-2.5 rounded-xl text-sm
                      bg-cream border transition-colors duration-200
                      placeholder:text-subtle text-stone
                      focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber
                      ${errors.name ? "border-red-300" : "border-border"}
                    `}
                  />
                  {errors.name && (
                    <p id={`${id}-name-error`} className="mt-1 text-xs text-red-500" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor={`${id}-email`}
                    className="block text-sm font-600 text-stone mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    aria-describedby={errors.email ? `${id}-email-error` : undefined}
                    aria-invalid={!!errors.email}
                    className={`
                      w-full px-4 py-2.5 rounded-xl text-sm
                      bg-cream border transition-colors duration-200
                      placeholder:text-subtle text-stone
                      focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber
                      ${errors.email ? "border-red-300" : "border-border"}
                    `}
                  />
                  {errors.email && (
                    <p id={`${id}-email-error`} className="mt-1 text-xs text-red-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor={`${id}-message`}
                    className="block text-sm font-600 text-stone mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id={`${id}-message`}
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    aria-describedby={errors.message ? `${id}-message-error` : undefined}
                    aria-invalid={!!errors.message}
                    className={`
                      w-full px-4 py-2.5 rounded-xl text-sm
                      bg-cream border transition-colors duration-200
                      placeholder:text-subtle text-stone resize-none
                      focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber
                      ${errors.message ? "border-red-300" : "border-border"}
                    `}
                  />
                  {errors.message && (
                    <p id={`${id}-message-error`} className="mt-1 text-xs text-red-500" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="teaser-submit"
                  disabled={formState === "submitting"}
                  className="
                    w-full py-3 px-6 rounded-xl text-sm font-600
                    bg-amber text-white
                    hover:bg-amber-dark active:scale-[0.98]
                    disabled:opacity-60 disabled:cursor-not-allowed
                    transition-all duration-200 shadow-sm hover:shadow-md
                    flex items-center justify-center gap-2
                  "
                >
                  {formState === "submitting" ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
