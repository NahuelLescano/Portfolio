import type { Url } from "@/types/url.d";

export const CV_URL: Url = {
  title: "CV",
  label: "cv",
  url: "/CV_Nahuel.pdf",
} as const;

export const CV_URL_EN: Url = {
  title: "CV",
  label: "cv",
  url: "/CV_Nahuel_En.pdf",
} as const;

export const GITHUB_URL: Url = {
  title: "GitHub",
  label: "github",
  url: "https://github.com/NahuelLescano",
} as const;

export const LINKEDIN_URL: Url = {
  title: "LinkedIn",
  label: "linkedin",
  url: "https://www.linkedin.com/in/nahuel-lescano-906a2618b/",
} as const;

export const X_URL: Url = {
  title: "X",
  label: "x",
  url: "https://x.com/nahuel0495",
} as const;

export const EMAIL: Url = {
  title: "Contacto",
  label: "contacto",
  url: "mailto:nahuellescano1012@gmail.com",
} as const;

export const EMAIL_EN: Url = {
  title: "Contact",
  label: "contact",
  url: "mailto:nahuellescano1012@gmail.com",
} as const;

export const LINKS: Url[] = [GITHUB_URL, LINKEDIN_URL, X_URL] as const;
