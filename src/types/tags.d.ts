export type TagName =
  | 'React'
  | 'Astro'
  | 'Redux'
  | 'Zustand'
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
  | 'Python'
  | 'FastAPI'
  | 'SQLAlchemy'
  | 'Docker'

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
  PYTHON: Tag
  FASTAPI: Tag
  SQLALCHEMY: Tag
  DOCKER: Tag
}
