/**
 * Navbar — VertexForge
 * Sticky header with backdrop blur on scroll, mobile hamburger menu,
 * active link highlighting, and "Get in Touch" CTA.
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Navigation links config */
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Track scroll position to apply blur/shadow */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled
            ? "bg-cream/90 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
          }
        `}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-18 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="VertexForge home"
          >
            {/* Logo Mark */}
            <div className="w-8 h-8 rounded-lg bg-amber flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <polygon
                  points="9,2 16,6.5 16,11.5 9,16 2,11.5 2,6.5"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
                <polygon
                  points="9,5.5 13,8 13,12 9,14.5 5,12 5,8"
                  fill="white"
                  opacity="0.6"
                />
              </svg>
            </div>
            <span className="text-lg font-700 text-stone tracking-tight">
              Vertex<span className="text-amber">Forge</span>
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul
            className="hidden md:flex items-center gap-1"
            role="list"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                      relative px-4 py-2 rounded-lg text-sm font-500
                      transition-colors duration-200
                      ${isActive
                        ? "text-amber-dark"
                        : "text-muted hover:text-stone"
                      }
                    `}
                  >
                    {label}
                    {/* Active indicator */}
                    {isActive && (
                      <span
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-amber"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              id="navbar-cta"
              className="
                px-5 py-2.5 rounded-xl text-sm font-600
                bg-amber text-white
                hover:bg-amber-dark active:scale-95
                transition-all duration-200 shadow-sm hover:shadow-md
              "
            >
              Get in Touch
            </Link>
          </div>

          {/* ── Mobile Menu Toggle ── */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-surface transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Animated hamburger lines */}
            <span
              className={`block w-5 h-0.5 bg-stone rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-stone rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-stone rounded-full transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={`
          fixed inset-0 z-40 md:hidden
          transition-all duration-300
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-stone/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <nav
          className={`
            absolute top-0 right-0 bottom-0 w-72
            bg-cream shadow-2xl
            flex flex-col pt-20 pb-8 px-6
            transition-transform duration-300
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-surface transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5L15 15M15 5L5 15" stroke="#3d3027" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Mobile Logo */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-7 h-7 rounded-lg bg-amber flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <polygon points="9,2 16,6.5 16,11.5 9,16 2,11.5 2,6.5" stroke="white" strokeWidth="1.5" fill="none"/>
                <polygon points="9,5.5 13,8 13,12 9,14.5 5,12 5,8" fill="white" opacity="0.6"/>
              </svg>
            </div>
            <span className="text-base font-700 text-stone">
              Vertex<span className="text-amber">Forge</span>
            </span>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-1 flex-1" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                      flex items-center px-4 py-3 rounded-xl text-base font-500
                      transition-colors duration-200
                      ${isActive
                        ? "bg-blush text-amber-dark font-600"
                        : "text-muted hover:text-stone hover:bg-surface"
                      }
                    `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="
              block text-center px-6 py-3.5 rounded-xl text-sm font-600
              bg-amber text-white
              hover:bg-amber-dark transition-colors duration-200 shadow-sm
            "
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </>
  );
}
