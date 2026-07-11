import { ProjectCardProps } from "../../types/types";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({
    project,
    position,
    setActiveIndex,
    index,
}: ProjectCardProps) {
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
}
