import type { Project } from '@/types/projects'
import { TAGS } from './tags'

export const PROJECTS: Project[] = [
  {
    title: 'Bodu Games - Proyecto grupal de Henry',
    description:
      'Una página dónde podes encontrar tus juegos de mesa favoritos. Creado usando React y CSS puro',
    link: 'https://front-project-board-games.vercel.app/',
    github: 'https://github.com/dasava11/front_project_board_games',
    tags: [TAGS.REACT, TAGS.REDUX, TAGS.CSS, TAGS.EXPRESS],
    image: '/Projects/bodu.webp',
    alt: 'Captura de pantalla del proyecto: Bodu Games',
  },
  {
    title: 'Dogs - proyecto individual de henry',
    description:
      'Una página donde podrás ver tus perritos favoritos. fue creado usando react y express',
    github: 'https://github.com/nahuellescano/dogs-client',
    tags: [TAGS.REACT, TAGS.REDUX, TAGS.CSS, TAGS.EXPRESS],
    image: '/Projects/dogs.webp',
    alt: 'captura de pantalla del proyecto: Rick and Morty',
  },
  {
    title: 'Rick And Morty - Primer proyecto individual en Henry bootcamp',
    description:
      'Una página dedicada a la serie de Rick y Morty, donde encontrarás todos personajes favoritos. Hecho con React, Express y PostgreSQL',
    github: 'https://github.com/NahuelLescano/Rick-and-Morty-new',
    tags: [TAGS.REACT, TAGS.REDUX, TAGS.CSS],
    image: '/Projects/Rick-and-Morty.webp',
    alt: 'Rick And Morty Project Image',
  },
]
