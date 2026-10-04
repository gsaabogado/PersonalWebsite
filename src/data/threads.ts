// Data threads published on X (Spanish) and LinkedIn (English). Each gets a
// page at /data/<slug>/ and /es/data/<slug>/ with its figures, a short text and
// the link to its code. The text is the post's LinkedIn text.

export interface ThreadFigure {
  src: { en: string; es: string };
  alt: { en: string; es: string };
}

export interface Thread {
  slug: string;
  date: string;
  title: { en: string; es: string };
  summary: { en: string; es: string };
  body: { en: string[]; es: string[] };
  figures: ThreadFigure[];
  code: string;
  sources: string;
}

const REPO = "https://github.com/gsaabogado/post-de-x-y-linkedin/tree/main";

export const threads: Thread[] = [
  {
    slug: "mexico-fiscal-profiles",
    date: "2026-10",
    title: {
      en: "Who pays and who receives in Mexico, by age?",
      es: "¿Quién paga y quién recibe en México, según la edad?",
    },
    summary: {
      en: "Mexicans pay more in contributions than they receive from the government only between ages 23 and 59. A simple illustrative exercise shows why births matter so much for public finances.",
      es: "Solo entre los 23 y los 59 años los mexicanos pagan más contribuciones de lo que reciben del gobierno. Un ejercicio ilustrativo muestra por qué los nacimientos pesan tanto en las finanzas públicas.",
    },
    body: {
      en: [
        "How much does an average person in Mexico pay in contributions, and how much does that person receive from the government, at each age? I calculated it with the 2024 household income and spending survey (ENIGH) and the public accounts. Only between ages 23 and 59 do people pay more than they receive. In pesos of August 2026, the balance peaks at 46,722 pesos a year at age 35 (about US$2,740) and falls to minus 109,796 pesos at age 70 (about US$6,440).",
        "The number of people at each age matters more for the budget. Those aged 23 to 59 put in a net 2.3 trillion pesos a year (US$137 billion). The young and the old receive 2.8 trillion (US$165 billion).",
        "What would happen to these figures if fertility stayed at 1.2 or 1.46 children per woman until 2075? In a simple illustrative exercise, the gap between what people pay and what they receive would go from 1.4% of GDP today to between 7.6% and 9.2%. While this is not a precise forecast, it shows why births matter so much for public finances.",
        "The last chart follows the deficit per person in both scenarios. With fewer children it would be lower until 2056, with less school to pay for. From 2048 workers would be missing, and by 2075 it would reach 22,502 pesos against 18,998 (about US$1,320 against US$1,110).",
        "Note that this exercise does not identify the government deficit per se, because taxes paid by companies and spending that reaches no particular person are left out.",
      ],
      es: [
        "Calculé cuánto paga en contribuciones y cuánto recibe del gobierno una persona promedio en México a cada edad, con la ENIGH 2024 y las cuentas públicas. Solo entre los 23 y los 59 años se paga más de lo que se recibe. A los 70 el saldo es de −109,796 pesos al año.",
        "Podemos también ver qué sucede cuando consideramos el número de personas en cada rango de edad, lo cual es más relevante para cuestiones de presupuesto. Quienes tienen de 23 a 59 años aportan 2.3 billones de pesos netos al año. Los más jóvenes y los mayores reciben 2.8 billones.",
        "Podemos preguntarnos qué sucedería con estas figuras si la fecundidad se queda en 1.2 o 1.46 hijos por mujer hasta 2075. Con este simple ejercicio ilustrativo podemos observar cómo el déficit total pasaría de 1.4% del PIB a entre 7.6% y 9.2%.",
        "La gráfica sigue el déficit por persona en ambos escenarios. Con menos hijos sería menor hasta 2056, con menos escuela que pagar. Desde 2048 faltarían trabajadores y en 2075 llegaría a 22,502 pesos contra 18,998.",
        "El déficit de estas figuras no es el del gobierno, porque faltan los impuestos de las empresas y el gasto que no llega a una persona en particular.",
      ],
    },
    figures: [
      { src: { en: "/images/data/fiscal-f1-en.webp", es: "/images/data/fiscal-f1-es.webp" },
        alt: { en: "Contributions paid and transfers received per person by age, Mexico 2024", es: "Contribuciones pagadas y transferencias recibidas por persona a cada edad, México 2024" } },
      { src: { en: "/images/data/fiscal-f2-en.webp", es: "/images/data/fiscal-f2-es.webp" },
        alt: { en: "Contributions paid and transfers received in total by age, Mexico 2024", es: "Contribuciones pagadas y transferencias recibidas en total por edad, México 2024" } },
      { src: { en: "/images/data/fiscal-f3-en.webp", es: "/images/data/fiscal-f3-es.webp" },
        alt: { en: "Contributions and transfers by age in 2075 with 1.2 and 1.46 children per woman", es: "Contribuciones y transferencias por edad en 2075 con 1.2 y 1.46 hijos por mujer" } },
      { src: { en: "/images/data/fiscal-f4-en.webp", es: "/images/data/fiscal-f4-es.webp" },
        alt: { en: "Average deficit per person, 2025 to 2075, with 1.2 and 1.46 children per woman", es: "Déficit promedio por persona, 2025 a 2075, con 1.2 y 1.46 hijos por mujer" } },
    ],
    code: `${REPO}/01-mexico-fiscal-profiles`,
    sources: "INEGI, ENIGH 2024, Encuesta Intercensal 2025 y Estadística de Nacimientos Registrados 2025. CONAPO, Proyecciones de la población 2020-2070. SHCP, SAT, Cuenta Pública y SEP. FRED.",
  },
  {
    slug: "solar-panels",
    date: "2026-09",
    title: {
      en: "Who has solar panels in Mexico?",
      es: "¿Quién tiene paneles solares en México?",
    },
    summary: {
      en: "Mexican homes with solar panels nearly doubled between 2020 and 2025. Panels cluster at the top of the income distribution and in homes with air conditioning.",
      es: "Los hogares mexicanos con paneles solares casi se duplicaron entre 2020 y 2025. Los paneles se concentran en los hogares de más ingreso y en los que tienen aire acondicionado.",
    },
    body: {
      en: [
        "Mexico's 2025 Intercensal Survey (INEGI) carries a figure that went almost unnoticed. The share of Mexican homes with solar panels nearly doubled in five years, from 0.81% to 1.53%.",
        "The map shows two solar Mexicos. In the mountains, panels stand in for a grid that never arrived. In the cities they cluster in Monterrey, Durango, Zapopan and Mérida, far more than in Mexico City.",
        "The 2020 census microdata show who has them. The richest 10% of urban households were 6 times as likely to have a panel as the poorest 10%. At the same income, homes with air conditioning were 3 to 7 times as likely.",
        "That creates a paradox for CFE, the state utility. 99 in 100 households pay a subsidised electricity rate, and only the heaviest users pay the full tariff (DAC). That is exactly where panels are going up. In municipalities where the most households paid DAC, there are 2.6 times as many panels today as where almost nobody paid it. Each of those households is revenue that no longer goes into maintaining the grid, and with panels and a battery, a blackout becomes someone else's problem.",
      ],
      es: [
        "La Encuesta Intercensal 2025 de INEGI trae un dato que pasó casi inadvertido. Los hogares mexicanos con paneles solares casi se duplicaron en cinco años, de 0.81% a 1.53%.",
        "El mapa muestra dos Méxicos solares. En la sierra, los paneles sustituyen a una red que no llega. En las ciudades, se concentran en Monterrey, Durango, Zapopan y Mérida, mucho más que en la Ciudad de México.",
        "Con los microdatos del censo 2020 se puede ver quién los tiene. El 10% de hogares urbanos con más ingreso tenía panel 6 veces más que el 10% con menos, y con el mismo ingreso, los hogares con aire acondicionado lo tienen entre 3 y 7 veces más.",
        "Eso abre una paradoja para CFE. 99 de cada 100 hogares pagan la luz con subsidio, y solo los que más consumen pagan la tarifa completa (DAC). Justo ahí se están poniendo paneles. En los municipios donde más hogares pagaban DAC, hoy hay 2.6 veces más paneles que donde casi nadie la pagaba. Cada uno de esos hogares es dinero que deja de entrar para mantener la red, y con panel y batería el apagón se vuelve problema de otros.",
      ],
    },
    figures: [
      { src: { en: "/images/data/solar-f1_map_2025-en.webp", es: "/images/data/solar-f1_map_2025-es.webp" },
        alt: { en: "Map of the share of homes with a solar panel by municipality, 2025", es: "Mapa del porcentaje de viviendas con panel solar por municipio, 2025" } },
      { src: { en: "/images/data/solar-f2_deciles_2020-en.webp", es: "/images/data/solar-f2_deciles_2020-es.webp" },
        alt: { en: "Share of homes with a solar panel by income decile, cities and rural areas, 2020", es: "Viviendas con panel solar por decil de ingreso, ciudades y campo, 2020" } },
      { src: { en: "/images/data/solar-f3_ac_2020-en.webp", es: "/images/data/solar-f3_ac_2020-es.webp" },
        alt: { en: "Urban homes with a solar panel by income decile, with and without air conditioning, 2020", es: "Viviendas urbanas con panel solar por decil, con y sin aire acondicionado, 2020" } },
      { src: { en: "/images/data/solar-f4_concentration_2020-en.webp", es: "/images/data/solar-f4_concentration_2020-es.webp" },
        alt: { en: "Concentration curves of solar panels by income, 2020", es: "Curvas de concentración de paneles solares por ingreso, 2020" } },
    ],
    code: `${REPO}/06-mexico-solar-income`,
    sources: "INEGI, Encuesta Intercensal 2025 y Censo de Población y Vivienda 2020 (cuestionario ampliado). CFE. WorldPop 2025.",
  },
  {
    slug: "mexico-gdp",
    date: "2026-09",
    title: {
      en: "Where is Mexico's GDP produced?",
      es: "¿Dónde se produce el PIB de México?",
    },
    summary: {
      en: "Half of Mexico's GDP is produced in a strip 250 km wide, but per person the centre stops standing out and output falls from north to south.",
      es: "La mitad del PIB de México se produce en una franja de 250 km, pero por persona el centro deja de destacar y el PIB disminuye de norte a sur.",
    },
    body: {
      en: [
        "Half of Mexico's GDP is produced in a strip 250 km wide from north to south, between 18.5° and 20.75° north. It runs from Guadalajara to Veracruz through Mexico City. From east to west, half fits in 340 km, between Mexico City and León, Guanajuato.",
        "To see it, I added up the whole country's GDP by latitude and by longitude, using estimates of GDP in cells of about 28 km for 2021. The total is 34.2 trillion pesos of August 2026 (2.0 trillion dollars).",
        "Half of the population also lives in that strip. If we divide each strip's GDP by the people who live in it, the centre stops standing out and GDP per person falls from north to south. North of the Tropic of Cancer lie 48% of the territory, 21% of the population and 29% of GDP, so each person there produces on average 1.5 times as much as one in the south. From east to west, the oil region of Campeche stands out.",
        "Place by place, output per person varies a lot. Half of Mexicans live in places that generate 30% of GDP, and the 10% who live where the most is produced generate 22%. There, GDP per person exceeds 433,000 pesos a year (25,400 dollars), against less than 123,000 pesos (7,200 dollars) in the bottom 10%. This is inequality between places, not between people, and it probably falls short, because within each state the source spreads GDP mostly by population.",
      ],
      es: [
        "La mitad del PIB de México se produce en una franja de 250 km de norte a sur, entre los 18.5° y los 20.75° de latitud norte. Va de Guadalajara a Veracruz y pasa por la Ciudad de México. De este a oeste, la mitad cabe en 340 km, entre la Ciudad de México y León, Guanajuato.",
        "Para verlo sumé el PIB de todo el país por latitud y por longitud, con estimaciones del PIB en celdas de unos 28 km para 2021. En total son 34.2 billones de pesos de agosto de 2026 (2.0 billones de dólares).",
        "En esa misma franja vive también la mitad de la población. Si dividimos el PIB de cada franja entre la gente que vive en ella, el centro deja de destacar y el PIB por persona disminuye de norte a sur. Al norte del Trópico de Cáncer está el 48% del territorio, el 21% de la población y el 29% del PIB, así que cada persona produce en promedio 1.5 veces lo que una del sur. De este a oeste, destaca la zona petrolera de Campeche.",
        "Lugar por lugar, lo que se produce por persona cambia mucho. La mitad de los mexicanos vive en lugares que generan el 30% del PIB, y el 10% que vive donde más se produce genera el 22%. En esos lugares el PIB por persona pasa de 433,000 pesos al año (25,400 dólares), contra menos de 123,000 pesos (7,200 dólares) en el 10% de más abajo. Es desigualdad entre lugares, no entre personas, y probablemente se queda corta, porque dentro de cada estado la fuente reparte el PIB sobre todo según la población.",
      ],
    },
    figures: [
      { src: { en: "/images/data/gdp-f1-en.webp", es: "/images/data/gdp-f1-es.webp" },
        alt: { en: "Mexico's GDP folded onto latitude and longitude, 2021", es: "PIB de México sumado por latitud y longitud, 2021" } },
      { src: { en: "/images/data/gdp-per-person-en.webp", es: "/images/data/gdp-per-person-es.webp" },
        alt: { en: "GDP per person by band of latitude and longitude, 2021", es: "PIB por persona por franja de latitud y longitud, 2021" } },
      { src: { en: "/images/data/gdp-f2-en.webp", es: "/images/data/gdp-f2-es.webp" },
        alt: { en: "Lorenz curve of GDP between places, 2021", es: "Curva de Lorenz del PIB entre lugares, 2021" } },
    ],
    code: `${REPO}/04-mexico-gdp-marginals`,
    sources: "Rossi-Hansberg y Zhang (2025), NBER WP 33458, versión 2, 2021. INEGI, PIB e INPC. WorldPop 2025. FRED.",
  },
];
