/**
 * Home Page — VertexForge
 * Sections: Hero, Services Highlights, Featured Projects (carousel), ContactTeaser
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroAnimation } from "./components/HeroAnimation";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";
import ContactTeaser from "./components/ContactTeaser";

export const metadata: Metadata = {
  title: "VertexForge — Full-Stack Development & DevOps for SaaS Teams",
  description:
    "We build and scale SaaS products end-to-end — full-stack engineering, cloud infrastructure, and DevOps. Ship faster with VertexForge.",
};

/* ────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────── */

const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Full-Stack Development",
    description:
      "End-to-end product engineering with React, Next.js, Node.js, and TypeScript. From MVP to production scale.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    title: "DevOps & CI/CD",
    description:
      "Automated pipelines, zero-downtime deploys, and observability. GitHub Actions, Docker, Kubernetes.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Cloud Infrastructure",
    description:
      "AWS, GCP, and Vercel architecture designed for reliability, cost-efficiency, and seamless scaling.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
        <polyline points="13 2 13 9 20 9"/>
      </svg>
    ),
    title: "API Design & Integration",
    description:
      "RESTful and GraphQL APIs built to scale. Third-party integrations, webhooks, and payment systems.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    title: "SaaS Architecture",
    description:
      "Multi-tenancy, billing, auth, and role-based access — the foundational layers done right from day one.",
  },
];

const PROJECTS = [
  {
    title: "Pulseboard Analytics",
    description:
      "Real-time SaaS analytics dashboard with multi-tenant data isolation, custom chart widgets, and CSV export.",
    tags: ["Next.js", "Postgres", "Recharts", "Stripe"],
    imageSrc: "/placeholder.svg",
    imageAlt: "Pulseboard analytics dashboard interface",
  },
  {
    title: "FlowDeploy CI/CD",
    description:
      "Internal deployment platform supporting 12 microservices with zero-downtime blue-green deploys.",
    tags: ["GitHub Actions", "Docker", "k8s", "Terraform"],
    imageSrc: "/placeholder.svg",
    imageAlt: "FlowDeploy CI/CD pipeline interface",
  },
  {
    title: "Nexus Onboarding",
    description:
      "Customer onboarding flow engine with conditional branching, e-signature, and CRM sync for a B2B SaaS.",
    tags: ["React", "Node.js", "HubSpot API", "Docusign"],
    imageSrc: "/placeholder.svg",
    imageAlt: "Nexus customer onboarding flow interface",
  },
  {
    title: "VaultAPI Gateway",
    description:
      "API gateway with rate limiting, key rotation, usage analytics, and developer portal for a fintech client.",
    tags: ["Fastify", "Redis", "AWS Lambda", "PostgreSQL"],
    imageSrc: "/placeholder.svg",
    imageAlt: "VaultAPI developer gateway interface",
  },
  {
    title: "ScaleStack Infra",
    description:
      "Full cloud migration from monolith to microservices on AWS ECS with auto-scaling and cost optimisation.",
    tags: ["AWS ECS", "RDS", "CloudFront", "Pulumi"],
    imageSrc: "/placeholder.svg",
    imageAlt: "ScaleStack cloud infrastructure diagram",
  },
];

/* ────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-16"
        aria-label="Hero"
      >
        {/* Decorative background blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blush/60 blur-3xl opacity-70" />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-parchment/80 blur-3xl opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-sage/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">

            {/* ── Left: Copy ── */}
            <HeroAnimation>
              <div>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blush border border-border text-xs font-600 text-stone-light mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse-soft" aria-hidden="true" />
                  Full-Stack Development & DevOps
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-800 text-stone leading-[1.1] mb-5">
                  Engineering SaaS
                  <br />
                  products that{" "}
                  <span className="gradient-text">
                    actually scale
                  </span>
                </h1>

                {/* Sub-headline */}
                <p className="text-base lg:text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  VertexForge partners with fast-moving SaaS teams to design,
                  build, and ship — full-stack, cloud infra, and DevOps,
                  all under one roof.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    id="hero-primary-cta"
                    className="
                      inline-flex items-center gap-2
                      px-6 py-3.5 rounded-xl text-sm font-700
                      bg-amber text-white
                      hover:bg-amber-dark active:scale-95
                      transition-all duration-200 shadow-md hover:shadow-lg
                    "
                  >
                    Start a Project
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    id="hero-secondary-cta"
                    className="
                      inline-flex items-center gap-2
                      px-6 py-3.5 rounded-xl text-sm font-600
                      border border-border text-stone
                      hover:bg-blush hover:border-amber/40 active:scale-95
                      transition-all duration-200
                    "
                  >
                    Explore Services
                  </Link>
                </div>

                {/* Social proof */}
                <div className="mt-10 flex items-center gap-6">
                  {[
                    { value: "40+", label: "Projects shipped" },
                    { value: "98%", label: "Client satisfaction" },
                    { value: "5yr", label: "In the field" },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center">
                      <p className="text-xl font-800 text-stone">{value}</p>
                      <p className="text-xs text-muted">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </HeroAnimation>

            {/* ── Right: Dashboard Mockup ── */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Web dashboard — behind, centered */}
              <div
                className="
                  relative w-full max-w-lg lg:max-w-none
                  rounded-2xl overflow-hidden shadow-2xl
                  border border-border
                  animate-float
                "
                style={{ animationDelay: "0s" }}
              >
                <Image
                  src="/dashboard-web.jpg"
                  alt="SaaS analytics dashboard showing MRR metrics and revenue graph"
                  width={640}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Mobile mockup — overlapping bottom-left, white border */}
              <div
                className="
                  absolute -bottom-6 -left-4 lg:-left-8
                  w-36 sm:w-44 lg:w-52
                  rounded-2xl overflow-hidden
                  border-4 border-white shadow-2xl
                  animate-float z-10
                "
                style={{ animationDelay: "1.5s" }}
              >
                <Image
                  src="/dashboard-mobile.jpg"
                  alt="SaaS analytics mobile app view"
                  width={208}
                  height={370}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div
                className="
                  absolute -top-4 -right-2 lg:-right-4
                  glass-card rounded-xl px-3 py-2
                  shadow-lg animate-float z-10
                "
                style={{ animationDelay: "0.8s" }}
                aria-hidden="true"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-600 text-stone">Live on prod</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted" aria-hidden="true">
          <span className="text-xs font-500">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-amber animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES HIGHLIGHTS
          ═══════════════════════════════════════════ */}
      <section
        className="section-py bg-cream"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-xl mb-12">
            <p className="text-xs font-700 uppercase tracking-widest text-amber mb-3">
              What We Do
            </p>
            <h2
              id="services-heading"
              className="text-3xl lg:text-4xl font-800 text-stone mb-4"
            >
              The full engineering stack — done right
            </h2>
            <p className="text-muted leading-relaxed">
              We cover every technical layer your SaaS needs to launch, scale,
              and operate reliably at any size.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="
                inline-flex items-center gap-2
                text-sm font-600 text-amber
                hover:text-amber-dark transition-colors duration-200
              "
            >
              View all services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED PROJECTS — Horizontal carousel
          ═══════════════════════════════════════════ */}
      <section
        className="section-py bg-surface-alt overflow-hidden border-y border-border"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-700 uppercase tracking-widest text-amber mb-3">
                Our Work
              </p>
              <h2
                id="projects-heading"
                className="text-3xl lg:text-4xl font-800 text-stone"
              >
                Featured Projects
              </h2>
            </div>
            <p className="text-sm text-muted">
              Scroll to explore →
            </p>
          </div>
        </div>

        {/* Carousel container — CSS scroll snap + scroll-driven scale reveal */}
        <div
          className="
            flex gap-5 overflow-x-auto
            scroll-smooth snap-x snap-mandatory
            pb-6 pt-2
            px-4 sm:px-6 lg:px-8
            scrollbar-thin scrollbar-track-transparent scrollbar-thumb-sage
          "
          role="list"
          aria-label="Featured projects"
          style={{
            /* Ensure first card aligns to page content */
            paddingLeft: "max(1rem, calc((100vw - 80rem) / 2 + 2rem))",
            paddingRight: "max(1rem, calc((100vw - 80rem) / 2 + 2rem))",
          }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT TEASER
          ═══════════════════════════════════════════ */}
      <ContactTeaser />
    </>
  );
}
