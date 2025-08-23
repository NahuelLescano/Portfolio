import type { NavItem } from '@/types/navItems'

export const NAV_ITEMS: NavItem[] = [
  { title: 'Inicio', label: 'inicio', href: '#top' },
  { title: 'Experiencia', label: 'experiencia', href: '/#experience' },
  { title: 'Proyectos', label: 'proyectos', href: '/#projects' },
  { title: 'Sobre mi', label: 'sobre-mi', href: '/#about-me' },
  {
    title: 'Contacto',
    label: 'contacto',
    href: 'mailto:nahuellescano1012@gmail.com',
  },
] as const
