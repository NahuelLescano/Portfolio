import type { Tag } from "@/types/tags";

export interface Project {
    title: string
    description: string
    link?: string
    tags: Tag[]
    github: string
    image: string
    alt: string
};

export type Projects = Project[];
