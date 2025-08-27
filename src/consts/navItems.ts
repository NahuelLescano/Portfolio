import type { Link } from '@/types/links'

export const EXPERIENCE: Link = {
  title: 'Experiencia',
  label: 'experiencia',
  url: '/#experience',
} as const
export const PROJECTS: Link = {
  title: 'Proyectos',
  label: 'proyectos',
  url: '/#projects',
} as const

export const NAV_ITEMS: Link[] = [
  { title: 'Inicio', label: 'inicio', url: '#top' },
  EXPERIENCE,
  PROJECTS,
  { title: 'Sobre mi', label: 'sobre-mi', url: '/#about-me' },
  {
    title: 'Contacto',
    label: 'contacto',
    url: 'mailto:nahuellescano1012@gmail.com',
  },
] as const
