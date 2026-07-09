/**
 * Services Page — VertexForge
 * Detailed service breakdowns, process steps, and CTA
 */

import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import ServiceDetailCard from "@/components/ServiceDetailCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore VertexForge's full range of engineering services: full-stack development, DevOps, cloud infrastructure, API design, and SaaS architecture.",
};

const SERVICES_DETAIL = [
  {
    id: "fullstack",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Full-Stack Development",
    summary: "Complete product engineering — frontend, backend, and everything in between.",
    description:
      "We build pixel-perfect, performant user interfaces and robust server-side systems. Whether you're starting from a Figma file or scaling an existing product, we operate across the entire stack with a focus on maintainability.",
    benefits: [
      "React, Next.js 15, TypeScript — modern, type-safe frontend",
      "Node.js, Fastify, tRPC — fast, typed backend APIs",
      "PostgreSQL, Redis, Prisma — reliable data layer",
      "End-to-end testing with Playwright and Vitest",
      "Accessible, SEO-optimized UIs by default",
    ],
  },
  {
    id: "devops",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    title: "DevOps & CI/CD",
    summary: "Automated pipelines that give your team confidence to ship daily.",
    description:
      "We set up and maintain robust deployment workflows so your team can focus on product, not operations. From green-field CI setup to untangling legacy deployment scripts — we've seen it all.",
    benefits: [
      "GitHub Actions, CircleCI — automated test and deploy pipelines",
      "Docker, docker-compose — consistent local and prod environments",
      "Blue-green and canary deployments — zero downtime releases",
      "Observability: Datadog, Grafana, Sentry integration",
      "Automated security scanning and dependency auditing",
    ],
  },
  {
    id: "cloud",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
      </svg>
    ),
    title: "Cloud Infrastructure",
    summary: "Scalable, cost-efficient cloud architecture on AWS, GCP, and Vercel.",
    description:
      "We design and manage cloud environments that scale with your business without unexpectedly scaling your bill. Infrastructure as Code means every resource is versioned, reproducible, and auditable.",
    benefits: [
      "AWS, GCP, and Vercel — platform expertise across providers",
      "Terraform and Pulumi — fully declarative infrastructure",
      "Auto-scaling groups, managed databases, CDN configuration",
      "Cost monitoring and reserved instance optimization",
      "Multi-region and disaster recovery planning",
    ],
  },
  {
    id: "api",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
        <polyline points="13 2 13 9 20 9"/>
      </svg>
    ),
    title: "API Design & Integration",
    summary: "Well-designed APIs that your customers and integrations will love.",
    description:
      "APIs are products. We treat them with the same care as user interfaces — versioned, documented, secured, and built to last. We handle both your public-facing API and complex third-party integrations.",
    benefits: [
      "REST and GraphQL API design with OpenAPI documentation",
      "Webhook systems with delivery guarantees and retries",
      "Payment integrations: Stripe, Paddle, LemonSqueezy",
      "OAuth 2.0 / OIDC authentication flows",
      "Third-party SaaS integrations: HubSpot, Salesforce, Slack",
    ],
  },
  {
    id: "saas",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    title: "SaaS Architecture",
    summary: "The foundational layers your SaaS needs — built to last beyond Series A.",
    description:
      "Getting the architectural fundamentals right early saves enormous cost later. We implement multi-tenancy, billing, authentication, and RBAC in a way that doesn't create a ceiling for your growth.",
    benefits: [
      "Multi-tenant data isolation strategies (schema, row, instance)",
      "Auth with Clerk, Auth.js, or custom JWT implementation",
      "Role-based access control with fine-grained permissions",
      "Subscription billing with metered usage and feature flags",
      "Audit logs, team management, and SSO (SAML/OIDC)",
    ],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We spend 30–60 minutes understanding your product, tech stack, team, and goals. No sales fluff.",
  },
  {
    step: "02",
    title: "Technical Scoping",
    description:
      "We produce a clear technical proposal — scope, architecture, timeline, and cost. Transparent from day one.",
  },
  {
    step: "03",
    title: "Embedded Execution",
    description:
      "We work inside your tools (GitHub, Slack, Linear) and ship iteratively. Weekly demos, daily updates.",
  },
  {
    step: "04",
    title: "Handover & Support",
    description:
      "Clean documentation, knowledge transfer, and optional ongoing support. You own everything we build.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          PAGE HERO
          ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 bg-cream overflow-hidden" aria-label="Services hero">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-0 w-125 h-125 rounded-full bg-blush/60 blur-3xl opacity-60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-xs font-700 uppercase tracking-widest text-amber mb-4">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-800 text-stone leading-tight mb-6">
              Everything your SaaS<br />
              <span className="gradient-text">engineering needs</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              From the first line of product code to production infrastructure
              that scales — we cover the full technical surface of a modern SaaS.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICE DETAIL BLOCKS
          ═══════════════════════════════════════════ */}
      <section className="section-py bg-cream" aria-label="Service details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICES_DETAIL.map(({ id, icon, title, summary, description, benefits }, i) => (
            <ServiceDetailCard
              id={id}
              key={id}
              icon={icon}
              title={title}
              summary={summary}
              description={description}
              benefits={benefits}
              i={i}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROCESS
          ═══════════════════════════════════════════ */}
      <section className="section-py bg-stone" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-700 uppercase tracking-widest text-amber mb-3">
              How We Work
            </p>
            <h2 id="process-heading" className="text-3xl lg:text-4xl font-800 text-cream">
              Our process, from day one to delivery
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(({ step, title, description }) => (
              <div key={step} className="relative">
                {/* Connector line (hidden on last) */}
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-cream/10 -translate-y-1/2 z-0" aria-hidden="true" />

                <div className="relative bg-cream/5 border border-cream/10 rounded-2xl p-6 hover:bg-cream/10 transition-colors duration-300">
                  <div className="text-3xl font-800 text-amber/30 mb-3">{step}</div>
                  <h3 className="text-base font-700 text-cream mb-2">{title}</h3>
                  <p className="text-sm text-cream/50 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BANNER
          ═══════════════════════════════════════════ */}
      <section className="section-py bg-blush border-y border-border" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-800 text-stone mb-4">
            Ready to start building?
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Tell us about your SaaS — we&apos;ll put together a clear technical
            proposal within 48 hours, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              id="services-cta"
              className="
                inline-flex items-center gap-2
                px-6 py-3.5 rounded-xl text-sm font-700
                bg-amber text-white
                hover:bg-amber-dark transition-all duration-200 shadow-md
              "
            >
              Get a Free Proposal
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/about"
              className="
                inline-flex items-center gap-2
                px-6 py-3.5 rounded-xl text-sm font-600
                border border-border text-stone
                hover:bg-cream hover:border-amber/40 transition-all duration-200
              "
            >
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT FORM SECTION
          ═══════════════════════════════════════════ */}
      <section className="section-py bg-blush border-y border-border" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            
            {/* Left: Copy */}
            <div className="lg:col-span-2">
              <p className="text-xs font-700 uppercase tracking-widest text-amber mb-3">
                Let&apos;s Work Together
              </p>
              <h2 id="contact-heading" className="text-3xl lg:text-4xl font-800 text-stone mb-4 leading-tight">
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
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
