export type TagsName =
    | "React.js"
    | "Redux.js"
    | "CSS"
    | "Express.js";

export interface Tag {
    name: TagsName
    class: string
    icon: any
};

export interface Tags {
    REACT: Tag
    REDUX: Tag
    CSS: Tag
    EXPRESS: Tag
};
