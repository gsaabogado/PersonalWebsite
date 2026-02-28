import type { Lang } from "./ui";

interface NavItem {
  label: string;
  href: string;
}

export function getNavigation(lang: Lang): NavItem[] {
  if (lang === "es") {
    return [
      { label: "Inicio", href: "/es/" },
      { label: "Investigación", href: "/es/research/" },
      { label: "Publicaciones", href: "/es/publications/" },
      { label: "Curriculum", href: "/es/cv/" },
      { label: "Contacto", href: "/es/contact/" },
    ];
  }

  return [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research/" },
    { label: "Publications", href: "/publications/" },
    { label: "Curriculum", href: "/cv/" },
    { label: "Contact", href: "/contact/" },
  ];
}

export function getContactPath(lang: Lang): string {
  return lang === "es" ? "/es/contact/" : "/contact/";
}

export function getResearchPath(lang: Lang): string {
  return lang === "es" ? "/es/research/" : "/research/";
}
