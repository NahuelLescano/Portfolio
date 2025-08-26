export type TagName =
  | 'React'
  | 'Astro'
  | 'Redux'
  | 'Zustand'
  | 'Node.js'
  | 'Vite'
  | 'Express'
  | 'Tailwind'
  | 'CSS'
  | 'HTML'
  | 'PHP'
  | 'Kotlin'
  | 'Android'
  | 'JavaScript'
  | 'TypeScript'

export interface Tag {
  name: TagName
  class: string
  icon: string
}

export interface Tags {
  REACT: Tag
  ASTRO: Tag
  REDUX: Tag
  ZUSTAND: Tag
  NODEJS: Tag
  VITE: Tag
  EXPRESS: Tag
  TAILWIND: Tag
  PHP: Tag
  KOTLIN: Tag
  ANDROID: Tag
  JAVASCRIPT: Tag
  TYPESCRIPT: Tag
  CSS: Tag
  HTML: Tag
}
