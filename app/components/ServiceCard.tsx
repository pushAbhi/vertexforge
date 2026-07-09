/**
 * ServiceCard — VertexForge
 * Icon + title + description card with hover lift effect.
 * Used on Home highlights section and Services page.
 */

"use client";

import { motion } from "framer-motion";
import { ServiceCardProps } from "../../types/types";



export default function ServiceCard({
  icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className="
        group relative
        bg-sage/30 border border-border
        rounded-2xl p-6 lg:p-7
        hover:-translate-y-1.5 hover:shadow-lg hover:border-amber/40
        transition-all duration-300 cursor-default
      "
    >
      {/* Subtle hover background glow */}
      <div
        className="
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
          transition-opacity duration-300 pointer-events-none
          bg-linear-to-br from-blush/60 to-transparent
        "
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="
          w-12 h-12 rounded-xl mb-5
          bg-blush border border-border
          flex items-center justify-center
          text-amber
          group-hover:bg-amber group-hover:text-white group-hover:border-amber
          transition-all duration-300
        "
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-base font-700 text-stone mb-2 relative">{title}</h3>
      <p className="text-sm text-muted leading-relaxed relative">{description}</p>

      {/* Arrow indicator on hover */}
      <div
        className="
          mt-4 flex items-center gap-1.5 text-xs font-600 text-amber
          opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0
          transition-all duration-300 relative
        "
        aria-hidden="true"
      >
        Learn more
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </motion.article>
  );
}
