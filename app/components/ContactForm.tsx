"use client";

import { useState, useRef, useId } from "react";
import ReCAPTCHA from "react-google-recaptcha";

/* ──────────────────────────────────────────────────
   Types
   ────────────────────────────────────────────────── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  recaptcha?: string;
}

type FormState = "idle" | "submitting" | "success" | "error";

/* ──────────────────────────────────────────────────
   Validation
   ────────────────────────────────────────────────── */
function validate(data: FormData, captchaToken: string | null): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = "Your name is required.";
  else if (data.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.phone && !/^[+\d\s\-().]{7,20}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.subject.trim()) errors.subject = "Please select or enter a subject.";

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Please write at least 20 characters.";
  }

  if (!captchaToken) {
    errors.recaptcha = "Please complete the reCAPTCHA verification.";
  }

  return errors;
}

/* ──────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────── */
export default function ContactForm() {
  const id = useId();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token && errors.recaptcha) {
      setErrors((prev) => ({ ...prev, recaptcha: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formData, captchaToken);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(`${id}-${firstErrorField}`)?.focus();
      return;
    }

    setFormState("submitting");

    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ ...formData, captchaToken }),
      });
      
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated
      setFormState("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } catch {
      setFormState("error");
    }
  };

  /* ── Shared input classes ── */
  const inputBase = `
    w-full px-4 py-3 rounded-xl text-sm
    bg-cream border transition-colors duration-200
    placeholder:text-subtle text-stone
    focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber
  `;
  const inputError = "border-red-300";
  const inputNormal = "border-border";

  /* ── Success State ── */
  if (formState === "success") {
    return (
      <div
        className="bg-cream rounded-2xl border border-sage/60 p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-sage/30 flex items-center justify-center mx-auto mb-5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M6 14l6 6 11-11" stroke="#3d3027" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-2xl font-800 text-stone mb-2">Message Received!</h2>
        <p className="text-muted leading-relaxed">
          Thanks for reaching out. A member of our team will respond within
          one business day.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-6 text-sm font-600 text-amber hover:text-amber-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-cream rounded-2xl border border-border p-6 lg:p-8 space-y-5"
      aria-label="Contact form"
    >
      {/* Error banner */}
      {formState === "error" && (
        <div
          className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700"
          role="alert"
          aria-live="assertive"
        >
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:hello@vertexforge.dev" className="underline font-600">
            hello@vertexforge.dev
          </a>
        </div>
      )}

      {/* Name + Email row */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor={`${id}-name`} className="block text-sm font-600 text-stone mb-1.5">
            Full Name <span className="text-amber" aria-label="required">*</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            aria-invalid={!!errors.name}
            className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
          />
          {errors.name && (
            <p id={`${id}-name-error`} className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor={`${id}-email`} className="block text-sm font-600 text-stone mb-1.5">
            Email Address <span className="text-amber" aria-label="required">*</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
            aria-invalid={!!errors.email}
            className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
          />
          {errors.email && (
            <p id={`${id}-email-error`} className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Phone + Subject row */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Phone (optional) */}
        <div>
          <label htmlFor={`${id}-phone`} className="block text-sm font-600 text-stone mb-1.5">
            Phone{" "}
            <span className="text-muted font-400 text-xs">(optional)</span>
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
            aria-invalid={!!errors.phone}
            className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
          />
          {errors.phone && (
            <p id={`${id}-phone-error`} className="mt-1 text-xs text-red-500" role="alert">{errors.phone}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor={`${id}-subject`} className="block text-sm font-600 text-stone mb-1.5">
            Subject <span className="text-amber" aria-label="required">*</span>
          </label>
          <select
            id={`${id}-subject`}
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            aria-describedby={errors.subject ? `${id}-subject-error` : undefined}
            aria-invalid={!!errors.subject}
            className={`${inputBase} ${errors.subject ? inputError : inputNormal} cursor-pointer`}
          >
            <option value="" disabled>Select a topic…</option>
            <option value="New Project">New Project</option>
            <option value="Ongoing Support">Ongoing Engineering Support</option>
            <option value="DevOps / Cloud">DevOps / Cloud Infrastructure</option>
            <option value="Code Review">Code Review / Audit</option>
            <option value="Pricing">Pricing & Availability</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && (
            <p id={`${id}-subject-error`} className="mt-1 text-xs text-red-500" role="alert">{errors.subject}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor={`${id}-message`} className="block text-sm font-600 text-stone mb-1.5">
          Message <span className="text-amber" aria-label="required">*</span>
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project, tech stack, timeline, or any questions you have…"
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          aria-invalid={!!errors.message}
          className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
        />
        <div className="flex items-center justify-between mt-1">
          {errors.message ? (
            <p id={`${id}-message-error`} className="text-xs text-red-500" role="alert">{errors.message}</p>
          ) : (
            <span />
          )}
          <p className="text-xs text-subtle ml-auto">{formData.message.length} / 2000</p>
        </div>
      </div>

      {/* reCAPTCHA */}
      <div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
          onChange={handleCaptchaChange}
          onExpired={() => setCaptchaToken(null)}
          theme="light"
        />
        {errors.recaptcha && (
          <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.recaptcha}</p>
        )}
      </div>

      {/* Privacy note */}
      <p className="text-xs text-muted">
        By submitting this form you agree to our{" "}
        <a href="/privacy" className="underline hover:text-stone transition-colors">Privacy Policy</a>.
        We&apos;ll never share your data.
      </p>

      {/* Submit */}
      <button
        type="submit"
        id="contact-submit"
        disabled={formState === "submitting"}
        className="
          w-full py-3.5 px-6 rounded-xl text-sm font-700
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
          <>
            Send Message
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
