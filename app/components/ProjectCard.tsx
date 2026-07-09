/**
 * ProjectCard — VertexForge
 * Image + title + description + tech tags
 * Used in the horizontal scroll carousel on the Home page.
 */

import Image from "next/image";
import { ProjectCardProps } from "../../types/types";


export default function ProjectCard({
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  return (
    <article
      /* scroll-reveal applies CSS scroll-driven scale animation (globals.css) */
      className="
        scroll-reveal
        flex-none w-72 sm:w-80 lg:w-96
        bg-cream rounded-2xl overflow-hidden
        border border-border
        shadow-sm hover:shadow-xl hover:-translate-y-1
        transition-all duration-300 snap-center
      "
    >
      {/* Project Image */}
      <div className="relative h-44 w-full overflow-hidden bg-blush">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
        />
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 bg-linear-to-t from-stone/30 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-base font-700 text-stone mb-1.5">{title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                text-xs font-500 px-2.5 py-0.5 rounded-full
                bg-blush border border-border text-stone-light
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
