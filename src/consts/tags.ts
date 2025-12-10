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
  ZUSTAND: {
    name: 'Zustand',
    class: 'bg-black text-white',
    icon: 'ZustandIcon',
  },
  VITE: {
    name: 'Vite',
    class: 'bg-[#646cff] text-white',
    icon: 'ViteIcon',
  },
  EXPRESS: {
    name: 'Express',
    class: 'bg-black text-white',
    icon: 'ExpressIcon',
  },
  TAILWIND: {
    name: 'Tailwind',
    class: 'bg-[#003159] text-white',
    icon: 'TailwindIcon',
  },
  CSS: {
    name: 'CSS',
    class: 'bg-black text-yellow',
    icon: 'CssIcon',
  },
  HTML: {
    name: 'HTML',
    class: 'bg-black text-orange',
    icon: 'HtmlIcon',
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    class: 'bg-black text-yellow',
    icon: 'JavascriptIcon',
  },
  PHP: {
    name: 'PHP',
    class: 'bg-black text-purple',
    icon: 'PhpIcon',
  },
  KOTLIN: {
    name: 'Kotlin',
    class: 'bg-black text-purple',
    icon: 'KotlinIcon',
  },
  ANDROID: {
    name: 'Android',
    class: 'bg-black text-green',
    icon: 'AndroidIcon',
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    class: 'bg-black text-white',
    icon: 'TypescriptIcon',
  },
  PYTHON: {
    name: 'Python',
    class: 'bg-black text-yellow',
    icon: 'PythonIcon',
  },
} as const
