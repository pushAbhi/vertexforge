"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/homeData";

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === PROJECTS.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => resetTimeout();
  }, [activeIndex]);

  const getRelativeIndex = (index: number): number => {
    const len = PROJECTS.length;
    return (index - activeIndex + len) % len;
  };

  return (
    <section className="py-24 bg-cream w-full flex flex-col items-center">
      {/* Header Info Section matching your landing layout */}
      <div className="w-full max-w-7xl px-6 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-dark bg-blush px-3 py-1 rounded-full border border-border-subtle">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone mt-3">
            Featured Projects
          </h2>
        </div>
      </div>

      <div className="w-full bg-cream py-16 flex items-center justify-center overflow-hidden border-y border-border">
        
        {/* Stage Container - Height increased for dramatic spacing */}
        <div className="relative flex items-center justify-center w-full h-130 max-w-7xl px-4">
          {PROJECTS.map((project, index) => {
            const relIndex = getRelativeIndex(index);
            
            let position = "hidden"; 
            if (relIndex === 0) position = "center";
            else if (relIndex === 1) position = "right";
            else if (relIndex === PROJECTS.length - 1) position = "left";

            if (position === "hidden") return null;

            return (
              <motion.div
                key={project.title}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={position}
                variants={{
                  center: {
                    zIndex: 10,
                    scale: 1,
                    opacity: 1,
                    x: "0%",
                    filter: "blur(0px)",
                    cursor: "default",
                  },
                  left: {
                    zIndex: 5,
                    scale: 0.72,
                    opacity: 0.25,
                    x: "-65%",
                    filter: "blur(2px)",
                    cursor: "pointer",
                  },
                  right: {
                    zIndex: 5,
                    scale: 0.72,
                    opacity: 0.25,
                    x: "65%",
                    filter: "blur(2px)",
                    cursor: "pointer",
                  },
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="absolute w-full max-w-4xl bg-sage/90 border border-border/40 rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Horizontal Grid Structure: 16:9 Image Block Left, Description Box Right */}
                <div className="flex flex-col md:flex-row w-full h-full min-h-90 md:min-h-100 items-center justify-between">
                  
                  {/* Left Half: Image */}
                  <div className="relative w-full md:w-1/2 aspect-video self-center md:h-full">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width-768px) 100vw, 50vw"
                      className="object-cover object-center md:p-4 rounded-4xl"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Right Half: Content Frame */}
                  <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between items-center h-full text-neutral-100">
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed text-slate-800 font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* On-brand Technology Tags using fallback states */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-lg bg-amber px-3 py-1 text-xs font-mono text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Active Dot Indicators using Theme Colors */}
      <div className="flex gap-2.5 mt-10">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? "w-8 bg-amber" 
                : "w-2 bg-border hover:bg-subtle"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}