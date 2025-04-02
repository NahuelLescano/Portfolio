import ReactIcon from "@/icons/Reactjs.astro";
import ReduxIcon from "@/icons/Redux.astro";
import CssIcon from "@/icons/CSS.astro";
import ExpressIcon from "@/icons/Express.astro";

import type { Tags } from "@/types/tags";

export const TAGS: Tags = {
    REACT: {
        name: "React.js",
        class: "bg-black text-sky",
        icon: ReactIcon,
    },

    REDUX: {
        name: "Redux.js",
        class: "bg-black text-[#764abc]",
        icon: ReduxIcon,
    },

    CSS: {
        name: "CSS",
        class: "bg-black text-yellow",
        icon: CssIcon,
    },

    EXPRESS: {
        name: "Express.js",
        class: "bg-black text-white",
        icon: ExpressIcon,
    }
} as const;
