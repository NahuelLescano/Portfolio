export const ui = {
  "nav.home": {
    en: "Home",
    es: "Inicio",
  },
  "nav.experience": {
    en: "Experience",
    es: "Experiencia",
  },
  "nav.projects": {
    en: "Projects",
    es: "Proyectos",
  },
  "nav.about": {
    en: "About",
    es: "Acerca de",
  },
  "nav.contact": {
    en: "Contact",
    es: "Contacto",
  },
  "sections.experience": {
    en: "Work Experience",
    es: "Experiencia laboral",
  },
  "sections.projects": {
    en: "Projects",
    es: "Proyectos",
  },
  "sections.about": {
    en: "About Me",
    es: "Sobre Mi",
  },
  "hero.greeting": {
    en: "Hello, I'm Nahuel",
    es: "Hola, soy Nahuel",
  },
  "hero.description": {
    en: "I am a <strong>Systems Analyst and full stack developer</strong>. Specialized in building efficient and scalable web and mobile applications. I combine solid academic background (ORT/UBA) with real experience in <strong>React, Python, .NET and cloud architectures</strong>",
    es: "Soy <strong>Analista en Sistemas y desarrollador full stack</strong>. Especializado en construir aplicaciones web y móviles eficientes y escalables. Combino una sólida formación académica (ORT/UBA) con experiencia real en <strong>React, Python, .NET y arquitecturas cloud</strong>",
  },
  "hero.contact": {
    en: "Contact me",
    es: "Contactame",
  },
  "hero.downloadCv": {
    en: "Download CV",
    es: "Descargar CV",
  },
  "about.description": {
    en: "My profile is a hybrid between engineering and agile development. I started my education in <strong>Computer Engineering (UBA)</strong>, where I forged a solid logical foundation, and consolidated my technical profile by graduating as <strong>Systems Analyst at ORT</strong>. I complemented this academic training with the intensity of a bootcamp, which gave me the versatility to quickly adapt to changing environments. Today, I apply this combination of theory and practice developing real solutions with <strong>Python, React and Databases</strong>. I'm motivated by writing clean, scalable code that solves concrete business problems.",
    es: "Mi perfil es un híbrido entre la ingeniería y el desarrollo ágil. Comencé mi formación en <strong>Ingeniería en Informática (UBA)</strong>, donde forjé una sólida base lógica, y consolidé mi perfil técnico graduándome como <strong>Analista de Sistemas en ORT</strong>. Complementé esta formación académica con la intensidad de un bootcamp, lo que me dio la versatilidad para adaptarme rápido a entornos cambiantes. Hoy, aplico esa combinación de teoría y práctica desarrollando soluciones reales con <strong>Python, React y Bases de Datos</strong>. Me motiva escribir código limpio, escalable y que resuelva problemas de negocio concretos.",
  },
  "footer.rights": {
    en: "Almost all rights reserved.",
    es: "Casi todos los derechos reservados.",
  },
} as const;

export type UIKeys = keyof typeof ui;
export type Languages = keyof (typeof ui)[UIKeys];

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split("/");
  if (lang in ui["nav.experience"]) return lang as Languages;
  return "en";
};

export const useTranslations = (lang: Languages) => {
  return function t(key: UIKeys) {
    return ui[key][lang] || ui[key]["en"];
  };
}
