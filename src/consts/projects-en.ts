import type { Project } from "@/types/projects";
import { TAGS } from "./tags";

export const PROJECTS_EN: Project[] = [
  {
    title: "NS Plus - Web diagram editor",
    description: `
    Co-developed this web tool for creating flowcharts and UML diagrams, actively used in academic environments.
    My main focus was the rendering engine: I implemented DOM manipulation logic with Vanilla JavaScript to achieve a smooth interface without heavy dependencies.
    Additionally, I led the integration of new features like legacy file imports and UI modernization.
        `,
    tags: [TAGS.PHP, TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
    image: "/Projects/nsp.webp",
    alt: "Screenshot of NS Plus project",
  },
  {
    title: "Mobile App Buy & Sell - Native Android",
    description: `
    Native application for buying and selling food, developed 100% in Kotlin prioritizing user experience (UX).
    I used Jetpack Compose to build a modern and declarative interface.
    I implemented the complete navigation architecture, global state management, and REST API consumption for the real-time product catalog.
        `,
    github: "https://github.com/ErneDainesi/Parcial-TP3-Grupo-1",
    tags: [TAGS.KOTLIN, TAGS.ANDROID],
    image: "/Projects/food.webp",
    alt: "Screenshot of Buy & Sell Mobile App project",
  },
  {
    title: "Bodu Games - Board game marketplace",
    description: `
   Collaborative Full Stack development of an e-commerce platform for board games.
   On the frontend, I implemented React and Redux to handle a complex shopping flow and dynamic filters.
   I designed the user interface using pure CSS to achieve a unique visual identity, ensuring smooth communication with an Express backend.
     `,
    link: "https://front-project-board-games.vercel.app/",
    github: "https://github.com/dasava11/front_project_board_games",
    tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.REDUX, TAGS.CSS, TAGS.EXPRESS],
    image: "/Projects/bodu.webp",
    alt: "Screenshot of Bodu Games project",
  },
  {
    title: "Dogs - Favorite dogs page",
    description: `
     Full Stack Single Page Application (SPA) that consumes data from an external API and own database.
     I developed advanced search, filtering, and sorting functionalities on both client and server side.
     I implemented controlled forms for creating new breeds, managing the global application state with Redux and the backend with Express.
     `,
    github: "https://github.com/nahuellescano/dogs-client",
    tags: [TAGS.JAVASCRIPT, TAGS.REACT, TAGS.REDUX, TAGS.CSS, TAGS.EXPRESS],
    image: "/Projects/dogs.webp",
    alt: "Screenshot of Dogs App project",
  },
  {
    title: "Rick And Morty - Modern Web App",
    description: `
     High-performance application developed to explore a modern technology stack (Vite + Bun).
     I implemented a 'Screaming Architecture' to ensure code scalability and maintainability.
     I replaced Redux with Zustand for lighter and more efficient state management, achieving an instant user experience with Tailwind CSS.
     `,
    link: "https://rick-and-morty-five-iota.vercel.app/",
    github: "https://github.com/NahuelLescano/Rick-and-Morty-new",
    tags: [TAGS.TYPESCRIPT, TAGS.REACT, TAGS.ZUSTAND, TAGS.TAILWIND, TAGS.VITE],
    image: "/Projects/Rick-and-Morty.webp",
    alt: "Rick And Morty Project Image",
  },
];
