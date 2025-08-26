import type { Project } from '@/types/projects'
import { TAGS } from './tags'

export const PROJECTS: Project[] = [
  {
    title: 'NS Plus - Proyecto grupal de ORT',
    description: `
NSPlus es una extensión de los Diagramas de Nassi-Shneiderman desarrollada en ORT Argentina. Incorpora diagramas de clases similares a UML, permite importar archivos desde Umletino y mantiene compatibilidad con proyectos anteriores, ofreciendo una herramienta más moderna y clara para la enseñanza y el aprendizaje de programación.
        `,
    tags: [TAGS.PHP, TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
    image: '/Projects/nsp.webp',
    alt: 'Captura de pantalla del proyecto: NS Plus',
  },
  {
    title: 'Mobile App Compra Venta - Proyecto grupal de ORT',
    description: `
Desarrollé una aplicación móvil de compra y venta de alimentos en Kotlin utilizando Jetpack Compose, siguiendo diseños definidos en Figma. Gestioné el trabajo colaborativo con GitHub Projects y metodologías ágiles para el seguimiento de tareas y avances. Participé en Pair Programming y code reviews, contribuyendo a la calidad del código mediante Pull Requests. Además, reforcé el trabajo en equipo a través del uso de Git y flujos de control de versiones.
        `,
    github: 'https://github.com/ErneDainesi/Parcial-TP3-Grupo-1',
    tags: [TAGS.KOTLIN, TAGS.ANDROID],
    image: '/Projects/food.webp',
    alt: 'Captura de pantalla del proyecto: Compra Venta Mobile App',
  },
  {
    title: 'Bodu Games - Proyecto grupal de Henry',
    description:
      'Una página dónde podes encontrar tus juegos de mesa favoritos. Creado usando React y CSS puro',
    link: 'https://front-project-board-games.vercel.app/',
    github: 'https://github.com/dasava11/front_project_board_games',
    tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.REDUX, TAGS.CSS, TAGS.EXPRESS],
    image: '/Projects/bodu.webp',
    alt: 'Captura de pantalla del proyecto: Bodu Games',
  },
  {
    title: 'Dogs - proyecto individual de henry',
    description:
      'Una página donde podrás ver tus perritos favoritos. fue creado usando react y express',
    github: 'https://github.com/nahuellescano/dogs-client',
    tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.REDUX, TAGS.CSS, TAGS.EXPRESS],
    image: '/Projects/dogs.webp',
    alt: 'captura de pantalla del proyecto: Rick and Morty',
  },
  {
    title: 'Rick And Morty - Primer proyecto individual en Henry bootcamp',
    description:
      'Este proyecto es una aplicación web de Rick and Morty desarrollada con React, TypeScript, Bun, Vite y Tailwind CSS. Su arquitectura clara (“screaming architecture”), gestión de estado con Zustand y navegación fluida lo convierten en una base sólida para exploración de personajes. Además, su estructura modular y predisposición para despliegue moderno (Vercel) lo hacen ideal como proyecto educativo o portafolio.',
    link: 'https://rick-and-morty-five-iota.vercel.app/',
    github: 'https://github.com/NahuelLescano/Rick-and-Morty-new',
    tags: [TAGS.TYPESCRIPT, TAGS.REACT, TAGS.ZUSTAND, TAGS.TAILWIND, TAGS.VITE],
    image: '/Projects/Rick-and-Morty.webp',
    alt: 'Rick And Morty Project Image',
  },
]
