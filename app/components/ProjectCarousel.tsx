"use client";

import { useState, useEffect, useRef } from "react";
import { PROJECTS } from "@/lib/homeData";
import ProjectCard from "./ProjectCard";
import { ProjectCardPosition } from "../../types/types";

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
                    prevIndex === PROJECTS.length - 1 ? 0 : prevIndex + 1,
                ),
            5000,
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
                <div className="relative flex items-center justify-center w-80 sm:w-140 md:w-190 lg:w-full h-130 max-w-7xl px-4">
                    {PROJECTS.map((project, index) => {
                        const relIndex = getRelativeIndex(index);

                        let position: ProjectCardPosition = "hidden";
                        if (relIndex === 0) position = "center";
                        else if (relIndex === 1) position = "right";
                        else if (relIndex === PROJECTS.length - 1)
                            position = "left";

                        if (position === "hidden") return null;

                        return (
                            <ProjectCard
                                project={project}
                                position={position}
                                setActiveIndex={setActiveIndex}
                                key={index}
                                index={index}
                            />
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
