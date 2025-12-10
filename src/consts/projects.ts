import type { Project } from '@/types/projects'
import { TAGS } from './tags'

export const PROJECTS: Project[] = [
  {
    title: 'NS Plus - Editor de diagramas web',
    description: `
    Co-desarrollé esta herramienta web para la creación de diagramas de flujo y UML, utilizada activamente en el ámbito académico.
    Mi foco principal fue el motor de renderizado: implementé la lógica de manipulación del DOM con JavaScript Vanilla para lograr una interfaz fluida     y sin dependencias pesadas.
    Además, lideré la integración de nuevas features como la importación de archivos legacy y la modernización de la UI.
        `,
    tags: [TAGS.PHP, TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
    image: '/Projects/nsp.webp',
    alt: 'Captura de pantalla del proyecto: NS Plus',
  },
  {
    title: 'Mobile App Compra Venta - Android Nativo',
    description: `
    Aplicación nativa para compra-venta de alimentos, desarrollada 100% en Kotlin priorizando la experiencia de usuario (UX).
    Utilicé Jetpack Compose para construir una interfaz moderna y declarativa. 
    Implementé la arquitectura de navegación completa, gestión de estado global y el consumo de APIs REST para el catálogo de productos en tiempo real.
        `,
    github: 'https://github.com/ErneDainesi/Parcial-TP3-Grupo-1',
    tags: [TAGS.KOTLIN, TAGS.ANDROID],
    image: '/Projects/food.webp',
    alt: 'Captura de pantalla del proyecto: Compra Venta Mobile App',
  },
  {
    title: 'Bodu Games - Marketplace de juegos de mesa',
    description: `
   Desarrollo Full Stack colaborativo de una plataforma e-commerce para juegos de mesa. 
   En el frontend, implementé React y Redux para manejar un flujo de compras complejo y filtros dinámicos. 
   Diseñé la interfaz de usuario utilizando CSS puro para lograr una identidad visual única, asegurando la comunicación fluida con un backend en Express.
    `,
    link: 'https://front-project-board-games.vercel.app/',
    github: 'https://github.com/dasava11/front_project_board_games',
    tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.REDUX, TAGS.CSS, TAGS.EXPRESS],
    image: '/Projects/bodu.webp',
    alt: 'Captura de pantalla del proyecto: Bodu Games',
  },
  {
    title: 'Dogs - Página de perros favoritos',
    description: `
    Single Page Application (SPA) Full Stack que consume datos de una API externa y base de datos propia.
    Desarrollé funcionalidades avanzadas de búsqueda, filtrado y ordenamiento del lado del cliente y servidor. 
    Implementé formularios controlados para la creación de nuevas razas, gestionando el estado global de la aplicación con Redux y el backend con Express.
    `,
    github: 'https://github.com/nahuellescano/dogs-client',
    tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.REDUX, TAGS.CSS, TAGS.EXPRESS],
    image: '/Projects/dogs.webp',
    alt: 'captura de pantalla del proyecto: Dogs App',
  },
  {
    title: 'Rick And Morty - Modern Web App',
    description: `
    Aplicación de alto rendimiento desarrollada para explorar un stack tecnológico moderno (Vite + Bun).
    Implementé una 'Screaming Architecture' para garantizar la escalabilidad y mantenibilidad del código.
    Sustituí Redux por Zustand para una gestión de estado más ligera y eficiente, logrando una experiencia de usuario instantánea con Tailwind CSS.
    `,
    link: 'https://rick-and-morty-five-iota.vercel.app/',
    github: 'https://github.com/NahuelLescano/Rick-and-Morty-new',
    tags: [TAGS.TYPESCRIPT, TAGS.REACT, TAGS.ZUSTAND, TAGS.TAILWIND, TAGS.VITE],
    image: '/Projects/Rick-and-Morty.webp',
    alt: 'Rick And Morty Project Image',
  },
]
