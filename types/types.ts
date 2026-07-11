/* ──────────────────────────────────────────────────
   Types - ContactForm
   ────────────────────────────────────────────────── */
export interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
    recaptcha?: string;
}

export type FormState = "idle" | "submitting" | "success" | "error";

/* ──────────────────────────────────────────────────
   Types - ProjectCard
   ────────────────────────────────────────────────── */

export type ProjectCardPosition = "left" | "center" | "right" | "hidden";

export interface ProjectCardProps {
    project: Project;
    position: ProjectCardPosition;
    setActiveIndex: (index: number) => void;
    index: number;
}

/* ──────────────────────────────────────────────────
   Types - ProjectCard
   ────────────────────────────────────────────────── */

export interface Project {
    title: string;
    description: string;
    tags: string[];
    imageSrc: string;
    imageAlt: string;
}

export interface ProjectCarouselProps {
    projects: Project[];
}

export interface ProjectSlideProps {
    project: Project;
    role: "prev" | "active" | "next";
    onClick?: () => void;
    onHoverChange: (paused: boolean) => void;
}

export interface DotsProps {
    projects: Project[];
    activeIndex: number;
    goTo: (index: number) => void;
}

/* ──────────────────────────────────────────────────
   Types - ServiceCard
   ────────────────────────────────────────────────── */

export interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    /** Stagger delay index for entrance animation */
    index?: number;
}

export interface ServiceDetailCardProps {
    id: string;
    icon: React.ReactNode;
    title: string;
    summary: string;
    description: string;
    benefits: string[];
    i: number;
}
