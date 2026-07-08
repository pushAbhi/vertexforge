/**
 * Contact Page — VertexForge
 * Full form: Name, Email, Phone, Subject, Message
 * Google reCAPTCHA v2 checkbox
 * Client-side validation + success/error states
 */

import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with VertexForge. Start a project, ask a question, or just say hello. We reply within one business day.",
};

const CONTACT_INFO = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "hello@vertexforge.dev",
    href: "mailto:hello@vertexforge.dev",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Location",
    value: "Remote — Global",
    href: null,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Response Time",
    value: "Within 1 business day",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          PAGE HERO
          ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-8 bg-cream overflow-hidden" aria-label="Contact hero">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-0 w-125 h-125 rounded-full bg-blush/60 blur-3xl opacity-60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <p className="text-xs font-700 uppercase tracking-widest text-amber mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl font-800 text-stone leading-tight mb-4">
              Let&apos;s build something
              <br />
              <span className="gradient-text">great together</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Whether you&apos;re scoping a new project, looking for ongoing
              engineering support, or just want to chat about architecture —
              we&apos;re all ears.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT FORM + INFO
          ═══════════════════════════════════════════ */}
      <section className="section-py bg-cream" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* ── Left: Info Panel ── */}
            <aside className="lg:col-span-2 space-y-8">
              <div>
                <h2
                  id="contact-form-heading"
                  className="text-2xl font-800 text-stone mb-2"
                >
                  Contact information
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  Reach us directly or use the form — either way, you&apos;ll
                  hear from a real engineer, not an account rep.
                </p>
              </div>

              {/* Contact info items */}
              <ul className="space-y-4" role="list">
                {CONTACT_INFO.map(({ icon, label, value, href }) => (
                  <li key={label}>
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-blush border border-border flex items-center justify-center text-amber flex-none">
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs font-600 text-muted uppercase tracking-wide mb-0.5">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-600 text-stone hover:text-amber transition-colors duration-200"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-600 text-stone">{value}</p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Trust callout */}
              <div className="bg-blush border border-border rounded-2xl p-5">
                <h3 className="text-sm font-700 text-stone mb-3">What happens next?</h3>
                <ol className="space-y-2.5" role="list">
                  {[
                    "We review your message and requirements",
                    "An engineer (not a salesperson) replies",
                    "We schedule a discovery call if it's a good fit",
                    "You get a clear technical proposal within 48h",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="w-5 h-5 rounded-full bg-amber/20 border border-amber/30 flex items-center justify-center flex-none text-xs font-700 text-amber-dark">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* ── Right: Form ── */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
