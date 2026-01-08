import type { Experience } from "@/types/experience";
import { TAGS } from "./tags";

export const EXPERIENCES_EN: Experience[] = [
  {
    date: "Aug 2025 - Present",
    title: "Full Stack Developer",
    company: "Kromee",
    description:
      "I participate in the end-to-end development of a multi-tenant SaaS platform for managing Artificial Intelligence agents. I build scalable backend services with Python (FastAPI/SQLAlchemy) and dynamic interfaces in React, ensuring security and performance.",
    tags: [TAGS.PYTHON, TAGS.FASTAPI, TAGS.SQLALCHEMY, TAGS.DOCKER, TAGS.REACT],
  },
] as const;