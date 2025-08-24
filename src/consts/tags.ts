import type { Tags } from '@/types/tags'

export const TAGS: Tags = {
  REACT: {
    name: 'React',
    class: 'bg-black text-sky',
    icon: 'ReactIcon',
  },
  ASTRO: {
    name: 'Astro',
    class: 'astro',
    icon: 'AstroIcon',
  },
  REDUX: {
    name: 'Redux',
    class: 'bg-black text-[#764abc]',
    icon: 'ReduxIcon',
  },
  NODEJS: {
    name: 'Node.js',
    class: 'nodejs',
    icon: 'NodejsIcon',
  },
  EXPRESS: {
    name: 'Express',
    class: 'bg-black text-white',
    icon: 'ExpressIcon',
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'tailwind',
    icon: 'TailwindIcon',
  },
  CSS: {
    name: 'CSS',
    class: 'bg-black text-yellow',
    icon: 'CssIcon',
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    class: 'javascript',
    icon: 'JavascriptIcon',
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    class: 'typescript',
    icon: 'TypescriptIcon',
  },
} as const
