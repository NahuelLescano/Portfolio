import type { NavItem } from '@/types/navItems'

export const NAV_ITEMS: NavItem[] = [
  { title: 'Inicio', label: 'inicio', url: '#top' },
  { title: 'Proyectos', label: 'proyectos', url: '/#projects' },
  { title: 'Sobre mi', label: 'sobre-mi', url: '/#about-me' },
  {
    title: 'Contacto',
    label: 'contacto',
    url: 'mailto:nahuellescano1012@gmail.com',
  },
] as const
