export interface Tool {
  id: string;
  /** One path for both languages, or a path per language. */
  href: string | { en: string; es: string };
  date: string;
  title: { en: string; es: string };
  kind: { en: string; es: string };
  description: { en: string; es: string };
  audience: { en: string; es: string };
}

export const tools: Tool[] = [
  {
    id: "temperature-ed-visits",
    href: { en: "/temperature-and-emergency-visits/", es: "/es/temperatura-y-urgencias/" },
    date: "2026-08",
    title: {
      en: "Temperature and emergency department visits in Mexico",
      es: "Temperatura y visitas a urgencias en México",
    },
    kind: {
      en: "Interactive research companion",
      es: "Compañero interactivo de investigación",
    },
    description: {
      en: "How daily temperature moves emergency department visits across Mexico, from the universe of public hospitals, 2008 to 2021. Cold days reduce visits and the effect builds over the following month; hot days raise them on the day. Every figure is an estimate from the paper, with its confidence interval and the numbers behind it, by age, by diagnosis and projected to midcentury.",
      es: "Cómo la temperatura diaria mueve las visitas a urgencias en México, con la totalidad de los hospitales públicos, 2008 a 2021. Los días fríos reducen las visitas y el efecto se acumula durante el mes siguiente; los calurosos las aumentan el mismo día. Cada figura es una estimación del artículo, con su intervalo de confianza y los números detrás, por edad, por diagnóstico y proyectada a mediados de siglo.",
    },
    audience: {
      en: "Companion to a paper published in the Journal of Economic Behavior & Organization.",
      es: "Complemento de un artículo publicado en el Journal of Economic Behavior & Organization.",
    },
  },
  {
    id: "air-purifiers-trial",
    href: "/tools/air-purifiers-trial/",
    date: "2026-08",
    title: {
      en: "Air purifiers in schools: sizing a second trial",
      es: "Purificadores de aire en escuelas: dimensionar un segundo ensayo",
    },
    kind: {
      en: "Interactive power calculator",
      es: "Calculadora interactiva de poder estadístico",
    },
    description: {
      en: "How many schools would a second randomized trial of classroom air purifiers need to detect a given reduction in student absences, and at what cost. Every input is measured in our first Milan trial (5 schools, 95 classrooms); the page explains the design, the two data scenarios and the statistics in plain language.",
      es: "Cuántas escuelas necesitaría un segundo ensayo aleatorizado de purificadores de aire en aulas para detectar una reducción dada del ausentismo escolar, y a qué costo. Todos los insumos provienen de nuestro primer ensayo en Milán (5 escuelas, 95 aulas); la página explica el diseño, los dos escenarios de datos y la estadística en lenguaje llano.",
    },
    audience: {
      en: "Prepared for the Clean Indoor Air Initiative (Brown University).",
      es: "Preparada para la Clean Indoor Air Initiative (Brown University).",
    },
  },
];
