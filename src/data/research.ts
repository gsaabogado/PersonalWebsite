export interface ResearchTopic {
  title: string;
  titleEs?: string;
  description: string;
  descriptionEs?: string;
}

export interface ResearchArea {
  id: "applied-econometrics" | "energy-modeling";
  title: string;
  titleEs?: string;
  shortDescription: string;
  shortDescriptionEs?: string;
  longDescription: string;
  longDescriptionEs?: string;
  topics: ResearchTopic[];
  icon: string; // SVG path
}

export const researchAreas: ResearchArea[] = [
  {
    id: "applied-econometrics",
    title: "Applied Econometrics",
    titleEs: "Econometría Aplicada",
    shortDescription: "Using econometric methods for causal inference to study the effects of environmental phenomena on human welfare.",
    shortDescriptionEs: "Uso de métodos econométricos de inferencia causal para estudiar los efectos de los fenómenos ambientales en el bienestar humano.",
    longDescription:
      "My applied econometrics research focuses on using causal inference methods to understand the relationship between environmental quality and socioeconomic outcomes. I study how air pollution affects productivity, health, well-being, and behavior — from court decisions in India to crime rates in Mexico City. My work also evaluates the effectiveness of environmental policies such as Low Emission Zones in European cities.",
    longDescriptionEs:
      "Mi investigación en econometría aplicada se centra en el uso de métodos de inferencia causal para comprender la relación entre la calidad ambiental y los resultados socioeconómicos. Estudio cómo la contaminación del aire afecta la productividad, la salud, el bienestar y el comportamiento — desde decisiones judiciales en India hasta tasas de criminalidad en la Ciudad de México. Mi trabajo también evalúa la efectividad de políticas ambientales como las Zonas de Bajas Emisiones en ciudades europeas.",
    topics: [
      {
        title: "Air Pollution & Productivity",
        titleEs: "Contaminación del aire y productividad",
        description: "Studying how air quality affects the productivity of high-skill labor, using novel identification strategies and large administrative datasets.",
        descriptionEs: "Estudio de cómo la calidad del aire afecta la productividad del trabajo de alta cualificación, utilizando estrategias de identificación novedosas y grandes bases de datos administrativos.",
      },
      {
        title: "Environmental Policy Evaluation",
        titleEs: "Evaluación de políticas ambientales",
        description: "Evaluating the causal effects of environmental regulations like Low Emission Zones on air quality, well-being, and unintended consequences.",
        descriptionEs: "Evaluación de los efectos causales de regulaciones ambientales como las Zonas de Bajas Emisiones sobre la calidad del aire, el bienestar y las consecuencias no deseadas.",
      },
      {
        title: "Pollution & Human Behavior",
        titleEs: "Contaminación y comportamiento humano",
        description: "Investigating the nonlinear effects of pollution on crime, court decisions, school attendance, and other behavioral outcomes.",
        descriptionEs: "Investigación de los efectos no lineales de la contaminación sobre la criminalidad, las decisiones judiciales, la asistencia escolar y otros resultados de comportamiento.",
      },
    ],
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    id: "energy-modeling",
    title: "Energy Modeling",
    titleEs: "Modelación Energética",
    shortDescription: "Design and implementation of optimization models and agent-based models for energy policy analysis.",
    shortDescriptionEs: "Diseño e implementación de modelos de optimización y modelos basados en agentes para el análisis de política energética.",
    longDescription:
      "My energy modeling research combines optimization models and agent-based approaches to analyze public policies for the decarbonization of energy systems. I work on multi-model comparison exercises to assess Net Zero pathways, study the role of energy storage in renewable energy uptake, and design agent-based models to understand household adoption of green technologies. This work spans collaborative projects across institutions in the US, Europe, and Latin America.",
    longDescriptionEs:
      "Mi investigación en modelación energética combina modelos de optimización y enfoques basados en agentes para analizar políticas públicas para la descarbonización de los sistemas energéticos. Trabajo en ejercicios de comparación multimodelo para evaluar trayectorias hacia cero emisiones netas, estudio el papel del almacenamiento de energía en la adopción de renovables, y diseño modelos basados en agentes para comprender la adopción de tecnologías verdes por parte de los hogares. Este trabajo abarca proyectos colaborativos en instituciones de EE.UU., Europa y Latinoamérica.",
    topics: [
      {
        title: "Net Zero Pathways",
        titleEs: "Trayectorias hacia cero emisiones netas",
        description: "Multi-model comparison exercises assessing technology pathways and distributional effects of Net Zero emissions targets.",
        descriptionEs: "Ejercicios de comparación multimodelo que evalúan las trayectorias tecnológicas y los efectos distributivos de las metas de cero emisiones netas.",
      },
      {
        title: "Energy Storage & Renewables",
        titleEs: "Almacenamiento de energía y renovables",
        description: "Model comparison approaches to understand the role of energy storage in the integration and uptake of renewable energy sources.",
        descriptionEs: "Enfoques de comparación de modelos para comprender el papel del almacenamiento de energía en la integración y adopción de fuentes de energía renovable.",
      },
      {
        title: "Power System Modeling",
        titleEs: "Modelación de sistemas eléctricos",
        description: "Analysis of power system dynamics under policy changes, including the effects of natural gas price variations on US-Mexico systems.",
        descriptionEs: "Análisis de la dinámica de los sistemas eléctricos bajo cambios de política, incluyendo los efectos de las variaciones en los precios del gas natural en los sistemas de EE.UU. y México.",
      },
      {
        title: "Agent-Based Models",
        titleEs: "Modelos basados en agentes",
        description: "Design and implementation of agent-based models to understand households' adoption of green technologies and the energy transition.",
        descriptionEs: "Diseño e implementación de modelos basados en agentes para comprender la adopción de tecnologías verdes por parte de los hogares y la transición energética.",
      },
      {
        title: "Renewable Energy Integration",
        titleEs: "Integración de energía renovable",
        description: "Scenario analysis for integrating renewable energy sources into national energy systems, with focus on Mexico and developing economies.",
        descriptionEs: "Análisis de escenarios para integrar fuentes de energía renovable en los sistemas energéticos nacionales, con enfoque en México y economías en desarrollo.",
      },
    ],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export function getResearchArea(id: string): ResearchArea | undefined {
  return researchAreas.find((area) => area.id === id);
}
