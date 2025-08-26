import type { Tag } from './tags'

export interface Project {
  title: string
  description: string
  link?: string
  github?: string
  tags: Tag[]
  image: string
  alt: string
}
