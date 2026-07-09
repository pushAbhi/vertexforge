"use client";

import { motion } from "framer-motion";
import { ServiceDetailCardProps } from "../../types/types";

export default function ServiceDetailCard({ id, icon, title, summary, description, benefits, i }: ServiceDetailCardProps) {
    return (
        <>
            <motion.article
                initial={{ opacity: 0, x: i%2? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
                className="
                    relative
                    rounded-2xl p-6 lg:p-7
                    transition-all duration-300 cursor-default
                "
            >
            <article
                key={id}
                id={id}
                className={`
                    grid lg:grid-cols-2 gap-12 lg:gap-20 items-start
                    ${i % 2 !== 0 ? "lg:[direction:rtl] *:[direction:ltr]!" : ""}
                `}
                >
                {/* Visual Block */}
                <div className="flex items-start">
                    <div className="
                    w-full rounded-2xl bg-blush border border-border p-8 lg:p-10
                    flex flex-col items-center justify-center min-h-48 gap-4
                    ">
                    <div className="w-16 h-16 rounded-2xl bg-cream border border-border flex items-center justify-center text-amber shadow-sm">
                        {icon}
                    </div>
                    <p className="text-sm font-600 text-stone-light text-center max-w-xs">{summary}</p>
                    </div>
                </div>

                {/* Text Block */}
                <div>
                    <h2 className="text-2xl lg:text-3xl font-800 text-stone mb-4">{title}</h2>
                    <p className="text-muted leading-relaxed mb-6">{description}</p>

                    <h3 className="text-sm font-700 text-stone mb-3">What&apos;s included:</h3>
                    <ul className="space-y-2.5" role="list">
                    {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="w-5 h-5 rounded-full bg-sage/50 flex items-center justify-center flex-none mt-0.5" aria-hidden="true">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2 2 4-4" stroke="#3d3027" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        {benefit}
                        </li>
                    ))}
                    </ul>
                </div>
                </article>
            </motion.article>
        </>
    )
}