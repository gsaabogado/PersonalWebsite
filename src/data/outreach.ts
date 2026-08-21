/**
 * Configuration for the "Temperature and emergency visits" outreach section.
 *
 * One source of truth for slugs, module order and bilingual titles. The section
 * is hub-and-spoke on purpose: every module is one screen with its own URL and
 * is reachable in one click from the rail, so nothing has to be scrolled past
 * to get anywhere.
 */

export type Lang = "en" | "es";

export const SECTION_BASE: Record<Lang, string> = {
  en: "/temperature-and-emergency-visits",
  es: "/es/temperatura-y-urgencias",
};

export interface OutreachModule {
  id: string;
  /** Empty slug = the hub itself. */
  slug: Record<Lang, string>;
  /** Modules are titled as questions a practitioner would actually ask. */
  question: Record<Lang, string>;
  /** Short label for the persistent rail. */
  short: Record<Lang, string>;
  /** One line on what the module answers. */
  blurb: Record<Lang, string>;
  /** hidden = the page builds and is linkable, but is off the rail and the hub. */
  status: "live" | "soon" | "hidden";
}

export const MODULES: OutreachModule[] = [
  {
    id: "curve",
    slug: { en: "temperature-curve", es: "curva-de-temperatura" },
    question: {
      en: "Does temperature send people to the emergency room?",
      es: "¿La temperatura manda gente a urgencias?",
    },
    short: { en: "The response", es: "La respuesta" },
    blurb: {
      en: "The whole temperature response, on the day itself and accounting for the following 30 days.",
      es: "La respuesta completa a la temperatura, el mismo día y contando los 30 días siguientes.",
    },
    status: "live",
  },
  {
    id: "cold",
    slug: { en: "the-cold-surprise", es: "la-sorpresa-del-frio" },
    question: {
      en: "Why is cold the surprise?",
      es: "¿Por qué el frío es la sorpresa?",
    },
    short: { en: "The cold surprise", es: "La sorpresa del frío" },
    blurb: {
      en: "Emergency demand responds to temperature almost linearly, which is not how mortality behaves.",
      es: "La demanda de urgencias responde a la temperatura de forma casi lineal, que no es como se comporta la mortalidad.",
    },
    status: "live",
  },
  {
    id: "who",
    slug: { en: "who-is-affected", es: "a-quien-afecta" },
    question: { en: "Who is most affected?", es: "¿A quién afecta más?" },
    short: { en: "Who", es: "Quién" },
    blurb: {
      en: "Six age groups and both sexes, estimated separately.",
      es: "Seis grupos de edad y ambos sexos, estimados por separado.",
    },
    status: "live",
  },
  {
    id: "conditions",
    slug: { en: "which-conditions", es: "que-padecimientos" },
    question: { en: "Which conditions?", es: "¿Qué padecimientos?" },
    short: { en: "Conditions", es: "Padecimientos" },
    blurb: {
      en: "Fifteen diagnostic chapters, ranked by how much they move with temperature.",
      es: "Quince capítulos diagnósticos, ordenados por cuánto se mueven con la temperatura.",
    },
    status: "live",
  },
  {
    id: "projections",
    slug: { en: "midcentury", es: "mediados-de-siglo" },
    question: { en: "What does 2050 look like?", es: "¿Cómo se ve 2050?" },
    short: { en: "Midcentury", es: "Mediados de siglo" },
    blurb: {
      en: "Illustrative projections to midcentury, and what they imply for spending.",
      es: "Proyecciones ilustrativas a mediados de siglo, y lo que implican para el gasto.",
    },
    status: "live",
  },
  {
    id: "geography",
    slug: { en: "mexico-in-the-data", es: "mexico-en-los-datos" },
    question: { en: "What does the data cover?", es: "¿Qué cubren los datos?" },
    short: { en: "Coverage", es: "Cobertura" },
    blurb: {
      en: "Descriptive maps of reporting coverage, visit rates and temperature exposure.",
      es: "Mapas descriptivos de cobertura de reporte, tasas de visitas y exposición a temperatura.",
    },
    status: "hidden",
  },
  {
    id: "method",
    slug: { en: "how-we-know", es: "como-lo-sabemos" },
    question: { en: "How do we know?", es: "¿Cómo lo sabemos?" },
    short: { en: "Method", es: "Método" },
    blurb: {
      en: "The design, the robustness checks, and the data and code behind every number.",
      es: "El diseño, las pruebas de robustez, y los datos y el código detrás de cada número.",
    },
    status: "hidden",
  },
];

export function modulePath(m: OutreachModule, lang: Lang): string {
  return `${SECTION_BASE[lang]}/${m.slug[lang]}`;
}

/** Paired paths for the language switch, since the slugs are translated. */
export function outreachAlternatePath(pathname: string): string | null {
  const clean = pathname.replace(/\/$/, "");
  if (clean === SECTION_BASE.en) return SECTION_BASE.es;
  if (clean === SECTION_BASE.es) return SECTION_BASE.en;
  for (const m of MODULES) {
    if (clean === `${SECTION_BASE.en}/${m.slug.en}`) return `${SECTION_BASE.es}/${m.slug.es}`;
    if (clean === `${SECTION_BASE.es}/${m.slug.es}`) return `${SECTION_BASE.en}/${m.slug.en}`;
  }
  return null;
}

/** Citation and access details, shown wherever a number can be downloaded. */
export const PAPER = {
  authors: "Luis Sarmiento, Francesco Pietro Colelli and Filippo Pavanello",
  journal: "Journal of Economic Behavior & Organization",
  title: {
    en: "Emergency department visits and temperature: Evidence from Mexico",
    es: "Visitas a urgencias y temperatura: evidencia de México",
  },
  dataDoi: "10.5281/zenodo.21873500",
  dataUrl: "https://doi.org/10.5281/zenodo.21873500",
  codeUrl: "https://github.com/FPavanello/tmp_er_admissions",
} as const;
