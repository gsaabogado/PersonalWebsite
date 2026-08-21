export interface Tool {
  id: string;
  href: string;
  date: string;
  title: { en: string; es: string };
  kind: { en: string; es: string };
  description: { en: string; es: string };
  audience: { en: string; es: string };
}

export const tools: Tool[] = [
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
