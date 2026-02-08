export interface NavItem {
  label: string;
  href: string;
}

export const navigationEN: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research/" },
  { label: "CV", href: "/cv/" },
  { label: "Contact", href: "/contact/" },
];

export const navigationES: NavItem[] = [
  { label: "Inicio", href: "/es/" },
  { label: "Investigación", href: "/es/research/" },
  { label: "CV", href: "/es/cv/" },
  { label: "Contacto", href: "/es/contact/" },
];
