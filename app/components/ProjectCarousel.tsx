/**
 * ProjectCarousel — VertexForge
 * Auto-playing 3-card carousel with Framer Motion.
 * Center card is active (full size), left/right cards are faded and scaled down.
 * On hover: pauses auto-play. Hovering a side card makes it the active card.
 */

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

interface ProjectSlideProps {
  project: Project;
  role: "prev" | "active" | "next";
  onClick?: () => void;
  onHoverChange: (paused: boolean) => void;
}

interface DotsProps {
  projects: Project[];
  activeIndex: number;
  goTo: (index: number) => void;
}

const AUTO_PLAY_INTERVAL = 4000; // ms

/* ── Card Component (top-level, not nested) ── */
function ProjectSlide({ project, role, onClick, onHoverChange }: ProjectSlideProps) {
  const isActive = role === "active";

  return (
    <motion.div
      layout
      onClick={onClick}
      className={`
        relative rounded-2xl overflow-hidden border
        transition-all duration-500 ease-out
        ${isActive
          ? "flex-2 opacity-100 z-10 border-amber/30 shadow-2xl cursor-default"
          : "flex-[0.6] opacity-40 z-0 border-border shadow-sm cursor-pointer hover:opacity-70"
        }
      `}
      onMouseEnter={() => {
        onHoverChange(true);
        if (!isActive && onClick) onClick();
      }}
      onMouseLeave={() => onHoverChange(false)}
      style={{ minHeight: isActive ? "420px" : "380px" }}
    >
      {isActive ? (
        <div className="flex flex-col md:flex-row h-full bg-cream">
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-56 md:h-auto bg-blush shrink-0">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-stone/20 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-xs font-700 uppercase tracking-widest text-amber mb-3"
            >
              Featured Project
            </motion.p>
            <motion.h3
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-2xl lg:text-3xl font-800 text-stone mb-4"
            >
              {project.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-base text-muted leading-relaxed mb-6"
            >
              {project.description}
            </motion.p>

            {/* Tech Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-wrap gap-2"
              aria-label="Technologies used"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    text-xs font-600 px-3 py-1 rounded-full
                    bg-sage/30 border border-sage/50 text-stone-light
                  "
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      ) : (
        /* Side cards — image only with overlay title */
        <div className="relative h-full w-full bg-blush">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            className="object-cover"
            sizes="300px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-stone/60 to-stone/10" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white text-lg font-700">{project.title}</p>
            <p className="text-white/70 text-sm mt-1 line-clamp-1">{project.description}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ── Dots indicator (top-level, not nested) ── */
function Dots({ projects, activeIndex, goTo }: DotsProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {projects.map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          aria-label={`Go to project ${i + 1}`}
          className={`
            rounded-full transition-all duration-300
            ${i === activeIndex
              ? "w-8 h-2.5 bg-amber"
              : "w-2.5 h-2.5 bg-sage/50 hover:bg-sage"
            }
          `}
        />
      ))}
    </div>
  );
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = projects.length;

  const prevIndex = (activeIndex - 1 + count) % count;
  const nextIndex = (activeIndex + 1) % count;

  /* ── Auto-play ── */
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, AUTO_PLAY_INTERVAL);
  }, [count]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isPaused, startAutoPlay, stopAutoPlay]);

  /* ── Navigate ── */
  const goTo = (index: number) => {
    setActiveIndex(index);
    if (!isPaused) {
      stopAutoPlay();
      startAutoPlay();
    }
  };

  if (count === 0) return null;

  return (
    <div className="w-full">
      <div className="flex gap-4 lg:gap-6 items-stretch max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectSlide
          project={projects[prevIndex]}
          role="prev"
          onClick={() => goTo(prevIndex)}
          onHoverChange={setIsPaused}
        />
        <ProjectSlide
          project={projects[activeIndex]}
          role="active"
          onHoverChange={setIsPaused}
        />
        <ProjectSlide
          project={projects[nextIndex]}
          role="next"
          onClick={() => goTo(nextIndex)}
          onHoverChange={setIsPaused}
        />
      </div>

      <Dots projects={projects} activeIndex={activeIndex} goTo={goTo} />
    </div>
  );
}