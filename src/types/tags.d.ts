export type TagName =
  | 'React'
  | 'Astro'
  | 'Redux'
  | 'Node.js'
  | 'Express'
  | 'Tailwind CSS'
  | 'CSS'
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
  NODEJS: Tag
  EXPRESS: Tag
  TAILWIND: Tag
  JAVASCRIPT: Tag
  TYPESCRIPT: Tag
  CSS: Tag
}
