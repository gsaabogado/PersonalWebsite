export interface Experience {
  dates: string;
  position: string;
  institution: string;
  activities: string[];
  country: string;
  url?: string;
}

export interface Education {
  dates: string;
  degree: string;
  institution: string;
  dissertation: string;
  country: string;
}

export interface Teaching {
  year: number;
  semester: string;
  institution: string;
  course: string;
  level?: string;
  country: string;
}

export interface VisitingScholar {
  year: number;
  semester: string;
  institution: string;
  topic: string;
  country: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface Language {
  name: string;
  level: number; // 1-5
}

export const experience: Experience[] = [
  {
    dates: "Jan 2026 – Present",
    position: "Postdoctoral Researcher",
    institution: "D-MTEC, ETH Zurich",
    activities: [
      "Applied econometrics and causal inference",
      "Research on energy transition, climate change, and environmental justice",
    ],
    country: "Switzerland",
    url: "https://mtec.ethz.ch/",
  },
  {
    dates: "Sep 2024 – Jan 2026",
    position: "Research Economist",
    institution: "Directorate of Economic Research, Bank of Mexico",
    activities: [
      "Applied econometrics and causal inference",
      "Research on environmental and economic policy",
    ],
    country: "Mexico",
  },
  {
    dates: "Sep 2022 – Sep 2024",
    position: "Environmental Economist",
    institution: "Euro-Mediterranean Center on Climate Change (CMCC)",
    activities: [
      "Applied econometrics and causal inference",
      "Design of micro-economic agent-based models",
      "Scientific support to institutional activities",
      "Mentoring of junior scholars",
      "Study the relationship between digitalization and the environment",
    ],
    country: "Italy",
    url: "https://www.cmcc.it/",
  },
  {
    dates: "Sep 2020 – Sep 2022",
    position: "Postdoctoral Researcher",
    institution: "Euro-Mediterranean Center on Climate Change (CMCC)",
    activities: [
      "Applied econometrics and causal inference",
      "Scientific support to institutional activities",
      "Study the relationship between digitalization and the environment",
    ],
    country: "Italy",
    url: "https://www.cmcc.it/",
  },
  {
    dates: "Apr 2017 – Sep 2020",
    position: "Research Associate",
    institution: "German Institute of Economic Research (DIW Berlin)",
    activities: [
      "Publication of scientific articles on energy and environmental economics",
      "Research on the effects of air pollution and air pollution control policies on productivity, health, and wellbeing",
    ],
    country: "Germany",
    url: "https://www.diw.de/en",
  },
  {
    dates: "Nov 2019 – Aug 2020",
    position: "Research Associate",
    institution: "Hertie School of Governance",
    activities: [
      "Study the relationship between daylight savings and transit patterns",
    ],
    country: "Germany",
    url: "https://www.hertie-school.org/en/",
  },
  {
    dates: "Sep 2012 – Sep 2014",
    position: "Business Executive",
    institution: "Banco del Bajío SA",
    activities: [
      "Financial advice to small and medium-sized companies",
    ],
    country: "Mexico",
    url: "https://www.bb.com.mx",
  },
];

export const education: Education[] = [
  {
    dates: "2017 – 2020",
    degree: "Doctor of Economics (Summa Cum Laude)",
    institution: "Berlin Institute of Technology (TU Berlin)",
    dissertation: "An Econometric Analysis of Environmental Phenomena",
    country: "Germany",
  },
  {
    dates: "2014 – 2016",
    degree: "M.S. Economics & Management",
    institution: "Humboldt University of Berlin",
    dissertation: "Electricity Production from Renewable Sources in Mexico: A Time Series Analysis",
    country: "Germany",
  },
  {
    dates: "2007 – 2012",
    degree: "B.S. International Business",
    institution: "University of La Salle Bajío",
    dissertation: "A Project of Foreign Direct Investment between Mexico and Colombia",
    country: "Mexico",
  },
];

export const teaching: Teaching[] = [
  {
    year: 2024,
    semester: "Winter",
    institution: "University of Bologna",
    course: "Environmental Economics and Policy",
    country: "Italy",
  },
  {
    year: 2024,
    semester: "Spring",
    institution: "University of Bologna",
    course: "Environmental Economics and Policy",
    country: "Italy",
  },
  {
    year: 2024,
    semester: "Spring",
    institution: "Politecnico di Milano",
    course: "Global Environmental Challenges",
    country: "Italy",
  },
  {
    year: 2023,
    semester: "Spring",
    institution: "University of Bologna",
    course: "Environmental Economics and Policy",
    country: "Italy",
  },
  {
    year: 2020,
    semester: "Summer",
    institution: "Berlin University of Technology",
    course: "Applied Econometrics for Energy and Environmental Economics",
    level: "Ph.D.",
    country: "Germany",
  },
  {
    year: 2019,
    semester: "Summer",
    institution: "Berlin University of Technology",
    course: "Applied Econometrics for Energy and Environmental Economics",
    level: "Ph.D.",
    country: "Germany",
  },
];

export const visitingScholar: VisitingScholar[] = [
  {
    year: 2024,
    semester: "Fall",
    institution: "KDI School of Public Policy",
    topic: "Environmental Economics and Policy",
    country: "South Korea",
  },
  {
    year: 2024,
    semester: "Fall",
    institution: "University of Tokyo",
    topic: "Comparing decarbonisation scenarios across the Atlantic",
    country: "Japan",
  },
  {
    year: 2023,
    semester: "Spring",
    institution: "University of Verona",
    topic: "Environmental Economics",
    country: "Italy",
  },
  {
    year: 2023,
    semester: "Spring",
    institution: "KDI School of Public Policy",
    topic: "Environmental Economics and Policy",
    country: "South Korea",
  },
];

export const technicalSkills: Skill[] = [
  { name: "R / RStudio", level: 5 },
  { name: "Quarto", level: 5 },
  { name: "Git", level: 5 },
  { name: "GAMS", level: 4 },
  { name: "Julia", level: 3 },
  { name: "Python", level: 2 },
];

export const languages: Language[] = [
  { name: "Spanish", level: 5 },
  { name: "English", level: 5 },
  { name: "Italian", level: 4 },
  { name: "German", level: 3 },
];
