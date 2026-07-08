/**
 * About Page — VertexForge
 * Mission, story, values, team, and stats
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactTeaser from "../components/ContactTeaser";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about VertexForge — who we are, our engineering philosophy, and the team behind your SaaS product.",
};

const TEAM = [
  { name: "Arjun Mehta", role: "Founder & Lead Engineer", initials: "AM" },
  { name: "Priya Rajan", role: "DevOps & Cloud Architect", initials: "PR" },
  { name: "Lena Fischer", role: "Full-Stack Engineer", initials: "LF" },
  { name: "Omar Hassan", role: "Backend & API Engineer", initials: "OH" },
];

const VALUES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    title: "Quality over shortcuts",
    description:
      "We write maintainable, tested, and documented code. Every PR goes through review. Speed without quality is debt.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Partnership, not vendor-ship",
    description:
      "We embed with your team, align with your roadmap, and care about your business outcomes — not just ticket closure.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Speed with intention",
    description:
      "Rapid iteration doesn't mean reckless decisions. We move fast by being deliberate about architecture from day one.",
  },
];

const STATS = [
  { value: "40+", label: "Projects Shipped" },
  { value: "15+", label: "SaaS Clients" },
  { value: "5yr", label: "Industry Experience" },
  { value: "98%", label: "Retention Rate" },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          PAGE HERO
          ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 bg-cream overflow-hidden" aria-label="About hero">
        {/* Background decoration */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blush/70 blur-3xl opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-xs font-700 uppercase tracking-widest text-amber mb-4">
              About VertexForge
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-800 text-stone leading-tight mb-6">
              We build the tech your<br />
              <span className="gradient-text">SaaS runs on</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              VertexForge is a boutique engineering studio specializing in
              full-stack product development and DevOps for SaaS companies.
              We work as an embedded team — delivering production-grade code,
              not generic consultancy.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS
          ═══════════════════════════════════════════ */}
      <section className="bg-stone py-12" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <dt className="text-3xl lg:text-4xl font-800 text-amber mb-1">{value}</dt>
                <dd className="text-sm text-cream/60">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STORY / MISSION
          ═══════════════════════════════════════════ */}
      <section className="section-py bg-cream" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-blush border border-border">
                <Image
                  src="/placeholder.svg"
                  alt="The VertexForge team collaborating"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-5 -right-5 glass-card rounded-xl p-4 shadow-xl">
                <p className="text-xs font-600 text-stone">Founded</p>
                <p className="text-2xl font-800 text-amber">2019</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-700 uppercase tracking-widest text-amber mb-3">
                Our Story
              </p>
              <h2 id="story-heading" className="text-3xl lg:text-4xl font-800 text-stone mb-5">
                Built by engineers, for product teams
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  VertexForge was founded in 2019 by engineers who had spent
                  years inside SaaS companies and saw the same problems repeat:
                  fragile deployments, untestable codebases, and infrastructure
                  that couldn&apos;t scale past Series A.
                </p>
                <p>
                  We set out to build an engineering partner that could operate
                  at the pace of fast-moving startups without compromising on
                  the fundamentals — clean architecture, automated testing, and
                  observable systems.
                </p>
                <p>
                  Today, we work with SaaS teams from seed to Series B, acting
                  as a dedicated engineering arm for product development,
                  cloud operations, and platform engineering.
                </p>
              </div>
              <Link
                href="/services"
                className="
                  inline-flex items-center gap-2 mt-7
                  px-5 py-2.5 rounded-xl text-sm font-600
                  bg-amber text-white
                  hover:bg-amber-dark transition-all duration-200 shadow-sm
                "
              >
                See what we offer
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          VALUES
          ═══════════════════════════════════════════ */}
      <section className="section-py bg-blush border-y border-border" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-700 uppercase tracking-widest text-amber mb-3">
              How We Work
            </p>
            <h2 id="values-heading" className="text-3xl lg:text-4xl font-800 text-stone">
              Our engineering values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-cream rounded-2xl border border-border p-7 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blush border border-border flex items-center justify-center text-amber mb-5">
                  {icon}
                </div>
                <h3 className="text-base font-700 text-stone mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TEAM
          ═══════════════════════════════════════════ */}
      <section className="section-py bg-cream" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-xs font-700 uppercase tracking-widest text-amber mb-3">
              The Team
            </p>
            <h2 id="team-heading" className="text-3xl lg:text-4xl font-800 text-stone mb-3">
              Who you&apos;ll be working with
            </h2>
            <p className="text-muted">
              A small, senior team — no juniors handed your project, no
              account managers in the way.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map(({ name, role, initials }) => (
              <div
                key={name}
                className="flex flex-col items-center text-center group"
              >
                {/* Avatar */}
                <div className="
                  relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl mb-4 overflow-hidden
                  bg-blush border-2 border-border
                  group-hover:border-amber/40 group-hover:shadow-md
                  transition-all duration-300
                  flex items-center justify-center
                ">
                  <span className="text-xl font-800 text-amber">{initials}</span>
                </div>
                <h3 className="text-sm font-700 text-stone">{name}</h3>
                <p className="text-xs text-muted mt-0.5">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <ContactTeaser />
    </>
  );
}
