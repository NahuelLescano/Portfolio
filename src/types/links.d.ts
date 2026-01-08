type LinkName =
  | "Inicio"
  | "Experiencia"
  | "Proyectos"
  | "Sobre mi"
  | "Contacto";

export interface Link {
  title: LinkName;
  label: string;
  url: string;
}
