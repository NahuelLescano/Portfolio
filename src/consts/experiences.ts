import type { Experience } from '@/types/experience'
import { TAGS } from './tags'

export const EXPERIENCES: Experience[] = [
  {
    date: 'Agos 2025 - Actualidad',
    title: 'Full Stack Developer',
    company: 'Kromee',
    description:
      'Participo en el desarrollo end-to-end de una plataforma SaaS multi-tenant para la gestión de agentes con Inteligencia Artificial. Construyo servicios backend escalables con Python (FastAPI/SQLAlchemy) e interfaces dinámicas en React, asegurando seguridad y performance.',
    tags: [TAGS.PYTHON, TAGS.FASTAPI, TAGS.SQLALCHEMY, TAGS.DOCKER, TAGS.REACT],
  },
] as const
