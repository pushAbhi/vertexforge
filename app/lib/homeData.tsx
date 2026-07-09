/* ────────────────────────────────────────────────
   Data used by home page
   ──────────────────────────────────────────────── */

export const SERVICES = [
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
] as const;

export const PROJECTS = [
  {
    title: "Pulseboard Analytics",
    description:
      "Real-time SaaS analytics dashboard with multi-tenant data isolation, custom chart widgets, and CSV export.",
    tags: ["Next.js", "Postgres", "Recharts", "Stripe"],
    imageSrc: "/projectPulseboard.png",
    imageAlt: "Pulseboard analytics dashboard interface",
  },
  {
    title: "FlowDeploy CI/CD",
    description:
      "Internal deployment platform supporting 12 microservices with zero-downtime blue-green deploys.",
    tags: ["GitHub Actions", "Docker", "k8s", "Terraform"],
    imageSrc: "/flowDeploy.png",
    imageAlt: "FlowDeploy CI/CD pipeline interface",
  },
  {
    title: "Nexus Onboarding",
    description:
      "Customer onboarding flow engine with conditional branching, e-signature, and CRM sync for a B2B SaaS.",
    tags: ["React", "Node.js", "HubSpot API", "Docusign"],
    imageSrc: "/Nexus.png",
    imageAlt: "Nexus customer onboarding flow interface",
  },
  {
    title: "VaultAPI Gateway",
    description:
      "API gateway with rate limiting, key rotation, usage analytics, and developer portal for a fintech client.",
    tags: ["Fastify", "Redis", "AWS Lambda", "PostgreSQL"],
    imageSrc: "/VaultAPI.png",
    imageAlt: "VaultAPI developer gateway interface",
  },
  {
    title: "ScaleStack Infra",
    description:
      "Full cloud migration from monolith to microservices on AWS ECS with auto-scaling and cost optimisation.",
    tags: ["AWS ECS", "RDS", "CloudFront", "Pulumi"],
    imageSrc: "/ScaleStack.png",
    imageAlt: "ScaleStack cloud infrastructure diagram",
  },
] as const;