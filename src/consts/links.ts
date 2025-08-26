import type { Link } from '@/types/links'

export const CV_URL: Link = {
    title: 'CV',
    label: 'cv',
    url: './CV_Nahuel.pdf',
} as const

export const GITHUB_URL: Link = {
  title: 'GitHub',
  label: 'github',
  url: 'https://github.com/NahuelLescano',
} as const

export const LINKEDIN_URL: Link = {
  title: 'LinkedIn',
  label: 'linkedin',
  url: 'https://www.linkedin.com/in/nahuel-lescano-906a2618b/',
} as const

export const X_URL: Link = {
  title: 'X',
  label: 'x',
  url: 'https://x.com/nahuel0495',
} as const

export const EMAIL: Link = {
  title: 'Contacto',
  label: 'contacto',
  url: 'mailto:nahuellescano1012@gmail.com',
} as const

export const LINKS: Link[] = [
  {
    title: 'GitHub',
    label: 'github',
    url: 'https://github.com/NahuelLescano',
  },
  {
    title: 'LinkedIn',
    label: 'linkedin',
    url: 'https://www.linkedin.com/in/nahuel-lescano-906a2618b/',
  },
  {
    title: 'X',
    label: 'x',
    url: 'https://x.com/nahuel0495',
  },
] as const
