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

interface Project {
    title: string;
    description: string;
    tags: string[];
    imageSrc: string;
    imageAlt: string;
}

export interface ProjectCardProps {
    project: Project;
    position: ProjectCardPosition;
    setActiveIndex: (index: number) => void;
    index: number;
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
