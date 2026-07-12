/**
 * Footer — VertexForge
 * 3-column layout: branding, navigation links, contact info
 * Social icons + copyright bar
 */

import Link from "next/link";

/* Social icon links */
const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/pushAbhi",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/code-abhay/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/code_abhayy",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const FOOTER_LINKS = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
  Services: [
    { href: "/services#fullstack", label: "Full-Stack Development" },
    { href: "/services#devops", label: "DevOps & CI/CD" },
    { href: "/services#cloud", label: "Cloud Infrastructure" },
    { href: "/services#api", label: "API Design" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone text-cream/80" aria-label="Site footer">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Column 1: Brand ── */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group w-fit" aria-label="VertexForge home">
              <div className="w-8 h-8 rounded-lg bg-amber flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <polygon points="9,2 16,6.5 16,11.5 9,16 2,11.5 2,6.5" stroke="white" strokeWidth="1.5" fill="none"/>
                  <polygon points="9,5.5 13,8 13,12 9,14.5 5,12 5,8" fill="white" opacity="0.6"/>
                </svg>
              </div>
              <span className="text-lg font-700 text-cream">
                Vertex<span className="text-amber">Forge</span>
              </span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-cream/60 max-w-xs">
              Full-stack development & DevOps for fast-moving SaaS teams. We
              build, scale, and ship — so you can focus on growth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    w-9 h-9 rounded-lg
                    flex items-center justify-center
                    bg-cream/10 text-cream/60
                    hover:bg-amber hover:text-white
                    transition-all duration-200
                  "
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Columns 2 & 3: Navigation ── */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-700 uppercase tracking-widest text-cream/40 mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5" role="list">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-cream/60 hover:text-amber transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Copyright Bar ── */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/40">
            © {currentYear} VertexForge. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-cream/40">
            <Link href="/privacy" className="hover:text-cream/70 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream/70 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
