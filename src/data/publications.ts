export interface WorkingPaper {
  series: string;
  doi?: string;
  url: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  url?: string;
  status: "published" | "revise-resubmit" | "under-review" | "working-paper";
  area: "econometrics" | "energy-modeling";
  question?: string;
  questionEs?: string;
  findings?: string[];
  findingsEs?: string[];
  image?: string;
  workingPaper?: WorkingPaper;
}

export const publications: Publication[] = [
  // === Published ===
  {
    title: "Policy implications of net-zero emissions: A multi-model analysis of United States emissions and energy system impacts",
    authors: "John Bistline, et al.",
    journal: "Energy and Climate Change, 100118",
    year: 2025,
    doi: "10.1016/j.egycc.2025.100191",
    status: "published",
    area: "energy-modeling",
    question: "What are the energy system and emissions impacts of achieving economy-wide net-zero in the United States across multiple models and policy scenarios?",
    questionEs: "¿Cuáles son los impactos en el sistema energético y las emisiones de alcanzar cero emisiones netas en Estados Unidos según múltiples modelos y escenarios de política?",
    findings: [
      "The Inflation Reduction Act amplifies near-term decarbonization, but additional policies have far larger impacts on long-run net-zero outcomes.",
      "Each dollar per metric ton of carbon pricing yields a 0.06–0.31% reduction in economy-wide CO2 across 14 models.",
      "Energy spending as a share of GDP decreases relative to today for many models — even under net-zero policies.",
    ],
    findingsEs: [
      "La Ley de Reducción de la Inflación amplifica la descarbonización a corto plazo, pero políticas adicionales tienen impactos mucho mayores en los resultados de cero emisiones netas a largo plazo.",
      "Cada dólar por tonelada métrica de precio al carbono genera una reducción del 0.06–0.31% en las emisiones de CO2 en 14 modelos.",
      "El gasto energético como proporción del PIB disminuye respecto a los niveles actuales en muchos modelos, incluso bajo políticas de cero emisiones netas.",
    ],
  },
  {
    title: "The Air Quality Effects of Uber",
    authors: "Luis Sarmiento, Yeong-Jae Kim",
    journal: "Journal of Urban Economics",
    year: 2026,
    url: "https://www.sciencedirect.com/science/article/pii/S0094119026000173",
    status: "published",
    area: "econometrics",
    question: "Does the entry of ride-sharing services like Uber causally improve urban air quality?",
    questionEs: "¿La entrada de servicios de transporte compartido como Uber mejora causalmente la calidad del aire urbano?",
    findings: [
      "The air quality index declines by approximately 1–2% in the year of Uber's entry into a city.",
      "The probability of unhealthy air quality episodes falls by 8–18% following Uber's introduction.",
      "Improvements result from substituting trips in older, less fuel-efficient vehicles with Uber rides in newer, cleaner cars.",
    ],
    findingsEs: [
      "El índice de calidad del aire disminuye aproximadamente un 1–2% en el año de entrada de Uber a una ciudad.",
      "La probabilidad de episodios de mala calidad del aire disminuye entre un 8–18% tras la introducción de Uber.",
      "Las mejoras resultan de la sustitución de viajes en vehículos más antiguos y menos eficientes por viajes en autos más nuevos y limpios de Uber.",
    ],
  },
  {
    title: "Occupation and Temperature-Related Mortality in Mexico",
    authors: "R. Daniel Bressler, Andrew Papp, Luis Sarmiento, Jeffrey Shrader, Alyssa Wilson",
    journal: "Journal of Human Resources",
    year: 2026,
    doi: "10.3368/jhr.0325-14131R2",
    url: "https://jhr.uwpress.org/content/early/2026/01/07/jhr.0325-14131R2",
    status: "published",
    area: "econometrics",
    question: "How does occupation shape vulnerability to temperature-related mortality in developing countries?",
    questionEs: "¿Cómo influye la ocupación en la vulnerabilidad a la mortalidad relacionada con la temperatura en países en desarrollo?",
    findings: [
      "Agricultural workers aged 15–24 are over 10 times more likely to die from heat than peers in professional or managerial jobs.",
      "People under 35 account for 75% of heat-related deaths — overturning the assumption that elderly populations are most vulnerable.",
      "Occupation is a critical and previously underappreciated driver of climate vulnerability in developing countries.",
    ],
    findingsEs: [
      "Los trabajadores agrícolas de 15 a 24 años tienen más de 10 veces más probabilidades de morir por calor que sus pares en empleos profesionales o gerenciales.",
      "Las personas menores de 35 años representan el 75% de las muertes relacionadas con el calor, contradiciendo la suposición de que las poblaciones mayores son las más vulnerables.",
      "La ocupación es un factor crítico y previamente subestimado de la vulnerabilidad climática en países en desarrollo.",
    ],
  },
  {
    title: "Health and Air Pollutant Emission Impacts of Net Zero CO2 by 2050 Scenarios from the Energy Modeling Forum 37",
    authors: "Daniel Loughlin, Luis Sarmiento, Johannes Emmerling, et al.",
    journal: "Energy and Climate Change, 100165",
    year: 2024,
    doi: "10.1016/j.egycc.2024.100165",
    status: "published",
    area: "energy-modeling",
    question: "What are the air quality and public health co-benefits of achieving net-zero CO2 emissions in the United States by 2050?",
    questionEs: "¿Cuáles son los cobeneficios en calidad del aire y salud pública de alcanzar cero emisiones netas de CO2 en Estados Unidos para 2050?",
    findings: [
      "Net-zero scenarios reduce NOx emissions by 37–80% and SO2 by up to 75% compared to 2020 levels.",
      "Health benefits from reduced mortality estimated at $65–250 billion in 2035 alone.",
      "Decarbonization yields large air quality co-benefits that grow over time as emission reductions become more stringent.",
    ],
    findingsEs: [
      "Los escenarios de cero emisiones netas reducen las emisiones de NOx entre un 37–80% y de SO2 hasta un 75% en comparación con los niveles de 2020.",
      "Los beneficios en salud por reducción de mortalidad se estiman entre $65–250 mil millones en 2035.",
      "La descarbonización genera grandes cobeneficios en calidad del aire que crecen con el tiempo a medida que las reducciones de emisiones se vuelven más estrictas.",
    ],
  },
  {
    title: "Carbon Management Technology Pathways for Reaching a US Economy-Wide Net-Zero Emissions Goal",
    authors: "Matthew Binsted, et al.",
    journal: "Energy and Climate Change, 100154",
    year: 2024,
    doi: "10.1016/j.egycc.2024.100154",
    status: "published",
    area: "energy-modeling",
    question: "What role do carbon capture, storage, and direct air capture technologies play in achieving economy-wide net-zero emissions in the US?",
    questionEs: "¿Qué papel juegan las tecnologías de captura, almacenamiento y captura directa de carbono para alcanzar cero emisiones netas en EE.UU.?",
    findings: [
      "Most models find it impossible to reach net-zero without CCS; average capture is ~1.3 Gt CO2/yr by 2050.",
      "Restricting access to CCS and/or direct air capture increases marginal abatement costs by a factor of 2 to 10.",
      "Hydrogen plays a small but valuable complementary role alongside the dominant contributions of point-source CCS and DACCS.",
    ],
    findingsEs: [
      "La mayoría de los modelos consideran imposible alcanzar cero emisiones netas sin CCS; la captura promedio es ~1.3 Gt CO2/año para 2050.",
      "Restringir el acceso a CCS y/o captura directa de aire aumenta los costos marginales de reducción por un factor de 2 a 10.",
      "El hidrógeno juega un papel pequeño pero valioso complementando las contribuciones dominantes del CCS de fuente puntual y DACCS.",
    ],
  },
  {
    title: "Comparing Net Zero Pathways across the Atlantic: A Model Inter-Comparison Exercise between the EMF-37 and ECEMF",
    authors: "Luis Sarmiento, et al.",
    journal: "Energy and Climate Change, 100144",
    year: 2024,
    doi: "10.1016/j.egycc.2024.100144",
    status: "published",
    area: "energy-modeling",
    question: "How do net-zero decarbonization pathways differ between the United States and the European Union?",
    questionEs: "¿Cómo difieren las trayectorias de descarbonización hacia cero emisiones netas entre Estados Unidos y la Unión Europea?",
    findings: [
      "First comparison of US and EU net-zero pathways using 28+ integrated assessment and energy models.",
      "Carbon capture and storage is more predominant in the US due to a steeper decarbonization schedule.",
      "Electricity's share of final energy projected to grow from ~20% (2020) to 17–63% by 2050 across scenarios.",
    ],
    findingsEs: [
      "Primera comparación de trayectorias de cero emisiones netas entre EE.UU. y la UE utilizando más de 28 modelos de evaluación integrada y energía.",
      "La captura y almacenamiento de carbono es más predominante en EE.UU. debido a un calendario de descarbonización más agresivo.",
      "Se proyecta que la participación de la electricidad en la energía final crezca de ~20% (2020) a 17–63% para 2050 según los escenarios.",
    ],
  },
  {
    title: "The Air Quality and Well-Being Effects of Low Emission Zones",
    authors: "Luis Sarmiento, Nicole Wägner, Aleksandar Zaklan",
    journal: "Journal of Public Economics 277, 105014",
    year: 2023,
    doi: "10.1016/j.jpubeco.2023.105014",
    status: "published",
    area: "econometrics",
    question: "Do low emission zones improve air quality and well-being, or do they produce unintended consequences?",
    questionEs: "¿Las zonas de bajas emisiones mejoran la calidad del aire y el bienestar, o producen consecuencias no deseadas?",
    findings: [
      "German LEZs reduce PM10 and NO2, but produce unintended increases in ozone and pollution spillovers into adjacent areas.",
      "Despite health benefits, LEZs cause transitory yet long-lasting reductions in residents' life satisfaction.",
      "The subjective well-being costs of restricted mobility appear to outweigh the perceived gains from improved health.",
    ],
    findingsEs: [
      "Las zonas de bajas emisiones alemanas reducen PM10 y NO2, pero producen aumentos no deseados de ozono y derrames de contaminación hacia áreas adyacentes.",
      "A pesar de los beneficios para la salud, las LEZ causan reducciones transitorias pero duraderas en la satisfacción con la vida de los residentes.",
      "Los costos en bienestar subjetivo por la movilidad restringida parecen superar los beneficios percibidos de la mejora en salud.",
    ],
  },
  {
    title: "Air Pollution and Court Decisions: Evidence from Ten Million Penal Cases in India",
    authors: "Luis Sarmiento, Adam Nowakowski",
    journal: "Environmental and Resource Economics 86, 605–644",
    year: 2023,
    doi: "10.1007/s10640-023-00805-2",
    status: "published",
    area: "econometrics",
    question: "Does air pollution exposure affect judicial decision-making in criminal cases?",
    questionEs: "¿La exposición a la contaminación del aire afecta la toma de decisiones judiciales en casos penales?",
    findings: [
      "Higher air pollution exposure leads to significantly more convictions by Indian judges across 10 million penal cases.",
      "Reducing average pollution by one standard deviation could lead to up to 145,000 fewer convictions among active cases.",
      "The mechanism operates through pollutants altering brain chemistry — causing fatigue, unstable risk preferences, and greater propensity to punish.",
    ],
    findingsEs: [
      "Una mayor exposición a la contaminación del aire lleva a significativamente más condenas por parte de jueces indios en 10 millones de casos penales.",
      "Reducir la contaminación promedio en una desviación estándar podría resultar en hasta 145,000 condenas menos entre los casos activos.",
      "El mecanismo opera a través de contaminantes que alteran la química cerebral, causando fatiga, preferencias de riesgo inestables y mayor propensión a castigar.",
    ],
  },
  {
    title: "The Nonlinear Effects of Pollution on Crime: Evidence from Mexico City and New York",
    authors: "Luis Sarmiento",
    journal: "Environmental Research — Health 1(2), p.021001",
    year: 2023,
    doi: "10.1088/2752-5309/ac9a65",
    status: "published",
    area: "econometrics",
    question: "Is the relationship between air pollution and crime linear, or does it follow a more complex nonlinear pattern?",
    questionEs: "¿La relación entre contaminación del aire y criminalidad es lineal, o sigue un patrón no lineal más complejo?",
    findings: [
      "Air pollution and crime follow an inverted U-shape: pollution first increases criminality, then decreases it at very high levels.",
      "Crime peaks at NowCast AQI values of ~150 and 116 in Mexico City; beyond these thresholds, avoidance behavior dominates.",
      "Analysis uses 2.9 million hourly observations — prior linear models may have mischaracterized the pollution-crime relationship.",
    ],
    findingsEs: [
      "La contaminación del aire y la criminalidad siguen una U invertida: la contaminación primero aumenta la criminalidad, luego la disminuye en niveles muy altos.",
      "La criminalidad alcanza su máximo en valores NowCast AQI de ~150 y 116 en la Ciudad de México; más allá de estos umbrales, el comportamiento de evasión domina.",
      "El análisis utiliza 2.9 millones de observaciones horarias; los modelos lineales previos pueden haber caracterizado erróneamente la relación contaminación-criminalidad.",
    ],
  },
  {
    title: "Equity Implications of Net-Zero Emissions: A Multi-Model Analysis of Energy Expenditures across Income Classes",
    authors: "John Bistline, et al.",
    journal: "Energy and Climate Change, 100118",
    year: 2023,
    doi: "10.1016/j.egycc.2023.100118",
    status: "published",
    area: "energy-modeling",
    question: "How are the costs of net-zero emissions policies distributed across income groups in the United States?",
    questionEs: "¿Cómo se distribuyen los costos de las políticas de cero emisiones netas entre los grupos de ingreso en Estados Unidos?",
    findings: [
      "Net-zero policy costs are unevenly distributed — lowest-income households face the largest percentage increase in energy expenditures.",
      "Per-capita rebates from climate policy revenues can offset energy burdens, creating net progressive outcomes.",
      "Seven-model comparison provides robust evidence on distributional effects across income groups.",
    ],
    findingsEs: [
      "Los costos de las políticas de cero emisiones netas se distribuyen desigualmente: los hogares de menores ingresos enfrentan el mayor aumento porcentual en gastos energéticos.",
      "Reembolsos per cápita de los ingresos de políticas climáticas pueden compensar las cargas energéticas, creando resultados netos progresivos.",
      "La comparación de siete modelos proporciona evidencia robusta sobre los efectos distributivos entre grupos de ingreso.",
    ],
  },
  {
    title: "Policy Reversals in Transitional Markets: The Effect of Changing Marginal Cost to Physical Order Dispatch",
    authors: "Raul Gutierrez-Meave, Juan Rosellon, Luis Sarmiento",
    journal: "Economics of Energy & Environmental Policy 13, no. 1 (2024)",
    year: 2023,
    doi: "10.5547/2160-5890.13.1.rgut",
    status: "published",
    area: "energy-modeling",
    question: "What are the consequences of reversing market-based electricity dispatch in favor of state-controlled physical order in Mexico?",
    questionEs: "¿Cuáles son las consecuencias de revertir el despacho de electricidad basado en mercado a favor del orden físico controlado por el estado en México?",
    findings: [
      "Mexico's 2021 dispatch reform increases the state company's market power to 99% of total generation by 2050.",
      "Renewable share in the generation mix drops from 72% to 51% under the new physical-order dispatch rule.",
      "Cumulative power sector emissions increase by 563 Mt CO2 — equivalent to ~€36 billion in carbon costs.",
    ],
    findingsEs: [
      "La reforma de despacho de México en 2021 aumenta el poder de mercado de la empresa estatal al 99% de la generación total para 2050.",
      "La participación de renovables en la mezcla de generación cae del 72% al 51% bajo la nueva regla de despacho por orden físico.",
      "Las emisiones acumuladas del sector eléctrico aumentan en 563 Mt CO2, equivalente a ~€36 mil millones en costos de carbono.",
    ],
  },
  {
    title: "Air Pollution and the Productivity of High-Skill Labor: Evidence from Court Hearings",
    authors: "Luis Sarmiento",
    journal: "Scandinavian Journal of Economics 124, 301–332",
    year: 2021,
    doi: "10.1111/sjoe.12458",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1111/sjoe.12458",
    status: "published",
    area: "econometrics",
    question: "Does air pollution affect the productivity of high-skill cognitive work?",
    questionEs: "¿La contaminación del aire afecta la productividad del trabajo cognitivo de alta cualificación?",
    findings: [
      "A 10 μg/m³ increase in PM2.5 lengthens court hearings by 6.8%; a 10 ppb increase in NO2 adds 5.1%.",
      "Reducing PM2.5 by 10 μg/m³ would save ~81,712 hearing minutes — equivalent to 56 days of court time.",
      "First evidence that air pollution impairs high-skill cognitive work, not just physical labor productivity.",
    ],
    findingsEs: [
      "Un aumento de 10 μg/m³ en PM2.5 alarga las audiencias judiciales un 6.8%; un aumento de 10 ppb en NO2 añade un 5.1%.",
      "Reducir el PM2.5 en 10 μg/m³ ahorraría ~81,712 minutos de audiencia, equivalente a 56 días de tiempo judicial.",
      "Primera evidencia de que la contaminación del aire afecta el trabajo cognitivo de alta cualificación, no solo la productividad del trabajo físico.",
    ],
  },
  {
    title: "Mexico and US Power Systems Under Variations in Natural Gas Prices",
    authors: "Luis Sarmiento, et al.",
    journal: "Energy Policy, 151, 113378",
    year: 2021,
    doi: "10.1016/j.enpol.2021.112378",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0301421521002482",
    status: "published",
    area: "energy-modeling",
    question: "How do natural gas price variations affect the power systems and emissions trajectories of the US and Mexico?",
    questionEs: "¿Cómo afectan las variaciones en los precios del gas natural a los sistemas eléctricos y las trayectorias de emisiones de EE.UU. y México?",
    findings: [
      "High natural gas prices boost carbon-intensive technologies short-term but accelerate renewable investment long-term.",
      "Low gas prices reduce coal use in the US, lowering short-term emissions but slowing the transition to renewables.",
      "Integrated framework linking three techno-economic models captures cross-border energy system interdependencies.",
    ],
    findingsEs: [
      "Los precios altos del gas natural impulsan tecnologías intensivas en carbono a corto plazo, pero aceleran la inversión en renovables a largo plazo.",
      "Los precios bajos del gas reducen el uso de carbón en EE.UU., disminuyendo las emisiones a corto plazo pero desacelerando la transición a renovables.",
      "Un marco integrado que vincula tres modelos tecnoeconómicos captura las interdependencias energéticas transfronterizas.",
    ],
  },
  {
    title: "The Role of Energy Storage in the Uptake of Renewable Energy: A Model Comparison Approach",
    authors: "Sara Giarola, et al.",
    journal: "Energy Policy, 151, 112159",
    year: 2021,
    doi: "10.1016/j.enpol.2021.112159",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0301421521000288",
    status: "published",
    area: "energy-modeling",
    question: "How does energy storage interact with climate policies to support renewable energy deployment across North America?",
    questionEs: "¿Cómo interactúa el almacenamiento de energía con las políticas climáticas para apoyar el despliegue de energía renovable en Norteamérica?",
    findings: [
      "Storage promotes emissions reduction at lower costs when renewable mandates are in place.",
      "Under carbon taxes alone, renewables compete with other low-carbon options, reducing the role of storage.",
      "Four-model comparison (GENeSYS-MOD, MUSE, NATEM, urbs-MX) across North America highlights modeling uncertainties.",
    ],
    findingsEs: [
      "El almacenamiento promueve la reducción de emisiones a menores costos cuando existen mandatos de energía renovable.",
      "Bajo impuestos al carbono solos, las renovables compiten con otras opciones bajas en carbono, reduciendo el papel del almacenamiento.",
      "Comparación de cuatro modelos (GENeSYS-MOD, MUSE, NATEM, urbs-MX) en Norteamérica destaca las incertidumbres de modelación.",
    ],
  },
  {
    title: "Analysing Scenarios for the Integration of Renewable Energy Sources in the Mexican Energy System",
    authors: "Luis Sarmiento, et al.",
    journal: "Energies, 12.17, 3270",
    year: 2020,
    doi: "10.3390/en12173270",
    url: "https://www.mdpi.com/1996-1073/12/17/3270",
    status: "published",
    area: "energy-modeling",
    question: "What is the cost-optimal pathway for integrating renewable energy sources in Mexico's energy system?",
    questionEs: "¿Cuál es la trayectoria costo-óptima para integrar fuentes de energía renovable en el sistema energético de México?",
    findings: [
      "Cost-optimal renewable shares by 2050: 75% for electricity, 90% for transportation, but only 5% for industrial heating.",
      "Mexico's official renewable targets are lower than the cost-optimal share — equivalent to a no-climate-policy scenario.",
      "Full decarbonization is technically feasible but requires substantially higher investment; current targets represent a missed economic opportunity.",
    ],
    findingsEs: [
      "Participación óptima de renovables para 2050: 75% para electricidad, 90% para transporte, pero solo 5% para calefacción industrial.",
      "Las metas oficiales de renovables de México son inferiores a la participación costo-óptima, equivalentes a un escenario sin política climática.",
      "La descarbonización total es técnicamente factible pero requiere inversiones sustancialmente mayores; las metas actuales representan una oportunidad económica perdida.",
    ],
  },
  {
    title: "The Effects of the 2013 Floods on Germany's Road Freight Traffic",
    authors: "Julio G. F. Gabela, Luis Sarmiento",
    journal: "Transportation Research Part D, S.1022774",
    year: 2020,
    doi: "10.1016/j.trd.2020.102274",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1361920919307278",
    status: "published",
    area: "econometrics",
    question: "How did the 2013 floods disrupt road freight traffic across Germany's national road network?",
    questionEs: "¿Cómo afectaron las inundaciones de 2013 al tráfico de carga por carretera en la red vial de Alemania?",
    findings: [
      "The 2013 floods affected 10% of all automatic traffic counters and 23% of all main roads in Germany.",
      "First study to quantify climate-related freight traffic variations across an entire national road network.",
      "Time-series outlier detection endogenously identifies affected counters and estimates the magnitude and duration of disruptions.",
    ],
    findingsEs: [
      "Las inundaciones de 2013 afectaron al 10% de todos los contadores automáticos de tráfico y al 23% de todas las carreteras principales de Alemania.",
      "Primer estudio en cuantificar las variaciones del tráfico de carga relacionadas con el clima en toda una red vial nacional.",
      "La detección de valores atípicos en series temporales identifica endógenamente los contadores afectados y estima la magnitud y duración de las interrupciones.",
    ],
  },

  // === Revise & Resubmit ===
  {
    title: "Emergency Room Visits and Temperature: Evidence from Mexico",
    authors: "Luis Sarmiento, Francesco Pietro Colelli, Filippo Pavanello",
    journal: "Journal of Economic Behavior and Organization (Revise and Resubmit)",
    year: 2024,
    status: "revise-resubmit",
    area: "econometrics",
    workingPaper: {
      series: "RFF Working Paper 25-11",
      url: "https://www.rff.org/publications/working-papers/emergency-department-visits-and-temperature-evidence-from-mexico/",
    },
    question: "How do temperatures affect emergency department visits in a developing country, and do the effects differ from mortality patterns?",
    questionEs: "¿Cómo afectan las temperaturas a las visitas a urgencias en un país en desarrollo, y difieren los efectos de los patrones de mortalidad?",
    findings: [
      "Cold temperatures reduce ED visits by up to 8.9% on the same day and cumulatively by 16.3% over 30 days; warm temperatures increase visits by up to 3.6%.",
      "Unlike mortality, which shows a U-shaped response, ED visits respond approximately linearly to temperature — with limited harvesting for heat.",
      "Children and teenagers are more sensitive to heat; older populations are more vulnerable to cold. Climate projections indicate ED usage will rise, adding an estimated $86 million in annual medical costs by midcentury.",
    ],
    findingsEs: [
      "Las temperaturas frías reducen las visitas a urgencias hasta un 8.9% el mismo día y un 16.3% acumulado en 30 días; las temperaturas cálidas las aumentan hasta un 3.6%.",
      "A diferencia de la mortalidad, que muestra una respuesta en forma de U, las visitas a urgencias responden de forma aproximadamente lineal a la temperatura, con cosecha limitada para el calor.",
      "Los niños y adolescentes son más sensibles al calor; las poblaciones mayores son más vulnerables al frío. Las proyecciones climáticas indican que el uso de urgencias aumentará, añadiendo un estimado de $86 millones en costos médicos anuales para mediados de siglo.",
    ],
  },
  {
    title: "Income Shocks, Adaptation, and Temperature-Related Mortality: Evidence from the Mexican Labor Market",
    authors: "Luis Sarmiento, Martino Gilli, Filippo Pavanello, Soheil Shayegh",
    journal: "Journal of the Association of Environmental and Resource Economists (Reject and Resubmit)",
    year: 2024,
    status: "revise-resubmit",
    area: "econometrics",
    workingPaper: {
      series: "CESifo Working Paper No. 11542",
      doi: "10.2139/ssrn.5067963",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5067963",
    },
    question: "Can positive income shocks help workers adapt to extreme temperatures and reduce temperature-related mortality?",
    questionEs: "¿Pueden los aumentos de ingreso ayudar a los trabajadores a adaptarse a temperaturas extremas y reducir la mortalidad relacionada con la temperatura?",
    findings: [
      "A 2019 wage and fiscal reform in Mexican border municipalities significantly reduced temperature-related mortality in treated areas.",
      "Income gains increased adaptive capacity through higher electricity expenditures and the purchase of electric heaters.",
      "Results provide causal evidence that redistribution policies funded by carbon taxes can simultaneously address climate vulnerability and socioeconomic inequality.",
    ],
    findingsEs: [
      "Una reforma salarial y fiscal de 2019 en municipios fronterizos de México redujo significativamente la mortalidad relacionada con la temperatura en las áreas tratadas.",
      "Los aumentos de ingreso incrementaron la capacidad adaptativa a través de mayores gastos en electricidad y la compra de calentadores eléctricos.",
      "Los resultados proporcionan evidencia causal de que las políticas de redistribución financiadas por impuestos al carbono pueden abordar simultáneamente la vulnerabilidad climática y la desigualdad socioeconómica.",
    ],
  },

  // === Under Review ===
  {
    title: "Recycling in a Globalised Economy",
    authors: "Eugénie Joltreau, Luis Sarmiento",
    journal: "Empirical Economics (Revise and Resubmit)",
    year: 2024,
    status: "revise-resubmit",
    area: "econometrics",
    workingPaper: {
      series: "RFF Working Paper 25-19",
      url: "https://www.rff.org/publications/working-papers/recycling-in-a-globalised-economy/",
    },
    question: "How do material imbalances between countries and recycling policies shape international waste trade?",
    questionEs: "¿Cómo influyen los desequilibrios de materiales entre países y las políticas de reciclaje en el comercio internacional de residuos?",
    findings: [
      "Countries experience material imbalances — disparities between production material needs and consumption waste — that drive international waste trade flows.",
      "Gravity model estimates show an elasticity of 0.8 between country-pair material imbalances and waste exports, confirming their role as a key determinant.",
      "Poorly designed recycling policies may encourage waste exports to developing countries rather than enhance domestic recycling, raising environmental and ethical concerns.",
    ],
    findingsEs: [
      "Los países experimentan desequilibrios de materiales —disparidades entre las necesidades de materiales de producción y los residuos de consumo— que impulsan los flujos de comercio internacional de residuos.",
      "Las estimaciones del modelo gravitacional muestran una elasticidad de 0.8 entre los desequilibrios de materiales por par de países y las exportaciones de residuos, confirmando su papel como determinante clave.",
      "Las políticas de reciclaje mal diseñadas pueden fomentar las exportaciones de residuos a países en desarrollo en lugar de mejorar el reciclaje doméstico, generando preocupaciones ambientales y éticas.",
    ],
  },
  // === Working Papers ===
  {
    title: "When the Boundary Layer Drops: Air Quality and Healthcare Use in Mexico",
    authors: "Piero Basaglia, Luis Sarmiento",
    journal: "",
    year: 2024,
    status: "working-paper",
    area: "econometrics",
    workingPaper: {
      series: "CESifo Working Paper No. 11901",
      doi: "10.2139/ssrn.5263620",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5263620",
    },
    question: "What is the causal impact of PM2.5 on emergency department demand across health conditions in a developing country?",
    questionEs: "¿Cuál es el impacto causal del PM2.5 en la demanda de urgencias según las condiciones de salud en un país en desarrollo?",
    findings: [
      "A marginal increase in PM2.5 leads to a 2.3% rise in emergency department visit rates, using boundary layer height as a quasi-random instrument.",
      "Effects vary significantly by age group and exposure levels, with most increases driven by respiratory conditions.",
      "First nationwide assessment of air pollution-attributable ED demand in a developing country, covering the universe of public hospital triage visits in Mexico.",
    ],
    findingsEs: [
      "Un aumento marginal en PM2.5 genera un incremento del 2.3% en las tasas de visitas a urgencias, utilizando la altura de la capa límite como instrumento cuasi-aleatorio.",
      "Los efectos varían significativamente por grupo de edad y niveles de exposición, con la mayoría de los aumentos impulsados por condiciones respiratorias.",
      "Primera evaluación a nivel nacional de la demanda de urgencias atribuible a la contaminación del aire en un país en desarrollo, cubriendo el universo de visitas de triaje en hospitales públicos de México.",
    ],
  },
  {
    title: "The Unintended Consequences of Low Emission Zones: Evidence from Madrid Central",
    authors: "Adrián Santonja, Luis Sarmiento, Nicole Wägner",
    journal: "",
    year: 2024,
    status: "working-paper",
    area: "econometrics",
    question: "Did Madrid's low emission zone improve city-wide air quality and health, or did it produce unintended consequences?",
    questionEs: "¿La zona de bajas emisiones de Madrid mejoró la calidad del aire y la salud de toda la ciudad, o produjo consecuencias no deseadas?",
    findings: [
      "While pollution fell within the restricted area, it increased in neighboring zones — leading to worse city-wide air quality overall.",
      "Aggregate effects suggest an increase in annual all-cause mortality of more than 900 additional deaths (3.7%).",
      "The policy exacerbated disparities in pollution exposure between high- and low-income neighborhoods.",
    ],
    findingsEs: [
      "Mientras la contaminación disminuyó dentro del área restringida, aumentó en zonas vecinas, empeorando la calidad del aire de toda la ciudad.",
      "Los efectos agregados sugieren un aumento en la mortalidad anual por todas las causas de más de 900 muertes adicionales (3.7%).",
      "La política exacerbó las disparidades en la exposición a la contaminación entre barrios de altos y bajos ingresos.",
    ],
  },
  {
    title: "Racial Inequalities in Regional Air Pollution Exposure in Mexico",
    authors: "Luis Sarmiento, Raúl Gutiérrez-Meave",
    journal: "",
    year: 2024,
    status: "working-paper",
    area: "econometrics",
    question: "Is there a persistent gap in air pollution exposure between Indigenous and non-Indigenous communities in Mexico, and what drives it?",
    questionEs: "¿Existe una brecha persistente en la exposición a la contaminación del aire entre comunidades indígenas y no indígenas en México, y qué la impulsa?",
    findings: [
      "Indigenous municipalities face a persistent PM2.5 exposure gap of more than 1 μg/m³ compared to non-Indigenous areas.",
      "Cooking fuel differences explain up to 14% of the gap; atmospheric and orographic conditions account for up to 40%, linked to historical displacement into rugged terrain.",
      "Equalizing biofuel cooking shares could prevent ~120 premature deaths annually, with benefits of up to $26 million USD.",
    ],
    findingsEs: [
      "Los municipios indígenas enfrentan una brecha persistente de exposición a PM2.5 de más de 1 μg/m³ en comparación con las áreas no indígenas.",
      "Las diferencias en combustible para cocinar explican hasta el 14% de la brecha; las condiciones atmosféricas y orográficas representan hasta el 40%, vinculadas al desplazamiento histórico hacia terrenos accidentados.",
      "Igualar las tasas de cocina con biocombustibles podría prevenir ~120 muertes prematuras anuales, con beneficios de hasta $26 millones USD.",
    ],
  },
  {
    title: "The Transnational Effect of Temperature on Remittances",
    authors: "Gonzalo Ares de Parga-Regalado, Daniel Osuna-Gomez, Luis Sarmiento",
    journal: "",
    year: 2024,
    status: "working-paper",
    area: "econometrics",
    question: "How do temperature shocks in both the US and Mexico affect remittance flows to Mexican municipalities?",
    questionEs: "¿Cómo afectan los choques de temperatura tanto en EE.UU. como en México a los flujos de remesas hacia municipios mexicanos?",
    findings: [
      "Remittances to Mexico increase when temperatures are abnormally high or low in Mexico, reflecting greater need in origin communities.",
      "Remittances decrease when US temperatures are extreme, as heat and cold negatively affect migrant labor outcomes in destination communities.",
      "Uses transnational data on undocumented migrant networks to trace the climate-remittance channel across borders.",
    ],
    findingsEs: [
      "Las remesas hacia México aumentan cuando las temperaturas son anormalmente altas o bajas en México, reflejando mayor necesidad en las comunidades de origen.",
      "Las remesas disminuyen cuando las temperaturas en EE.UU. son extremas, ya que el calor y el frío afectan negativamente los resultados laborales de los migrantes en las comunidades de destino.",
      "Utiliza datos transnacionales sobre redes de migrantes indocumentados para rastrear el canal clima-remesas a través de las fronteras.",
    ],
  },
  {
    title: "Inflation Smoothing Through Natural Disaster Relief Funds",
    authors: "Jesús Arellano, Irving Llamosas, Irving McLiberty, Luis Sarmiento, Diego Solórzano",
    journal: "",
    year: 2024,
    status: "working-paper",
    area: "econometrics",
    question: "Does Mexico's disaster relief fund (FONDEN) smooth or amplify post-disaster inflation?",
    questionEs: "¿El fondo de alivio ante desastres de México (FONDEN) suaviza o amplifica la inflación post-desastre?",
    findings: [
      "Municipalities receiving FONDEN support experience lower cumulative inflation during the first 4–5 months post-disaster, as timely aid mitigates supply constraints.",
      "From 8 to 11 months after a disaster, inflation rises in treated areas, reflecting inflationary pressures from accelerated infrastructure investment.",
      "Uses a fuzzy regression discontinuity design exploiting exogenous rainfall thresholds for FONDEN eligibility.",
    ],
    findingsEs: [
      "Los municipios que reciben apoyo del FONDEN experimentan menor inflación acumulada durante los primeros 4–5 meses post-desastre, ya que la ayuda oportuna mitiga las restricciones de oferta.",
      "De 8 a 11 meses después del desastre, la inflación aumenta en las áreas tratadas, reflejando presiones inflacionarias por la inversión acelerada en infraestructura.",
      "Utiliza un diseño de regresión discontinua difusa aprovechando umbrales exógenos de precipitación para la elegibilidad al FONDEN.",
    ],
  },
  {
    title: "Temperatures and Distribution Blackouts: From Mechanisms to Health Impacts",
    authors: "Francesco Pietro Colelli, Filippo Pavanello, Luis Sarmiento",
    journal: "",
    year: 2024,
    status: "working-paper",
    area: "energy-modeling",
    question: "Do extreme temperatures cause power distribution outages, and what are the resulting health consequences?",
    questionEs: "¿Las temperaturas extremas causan apagones en la red de distribución eléctrica, y cuáles son las consecuencias para la salud?",
    findings: [
      "30% of overload outages are attributable to temperature shocks, rising to nearly 70% during summer months.",
      "A planned outage coinciding with a day above 30°C increases daily mortality by 13% on the same day and 58% cumulatively over one week.",
      "Findings underscore the health risks of climate-driven grid stress in developing regions with rising demand for cooling.",
    ],
    findingsEs: [
      "El 30% de los apagones por sobrecarga son atribuibles a choques de temperatura, aumentando a casi 70% durante los meses de verano.",
      "Un apagón planificado que coincide con un día por encima de 30°C aumenta la mortalidad diaria un 13% el mismo día y un 58% acumulado en una semana.",
      "Los hallazgos subrayan los riesgos para la salud del estrés climático en la red eléctrica en regiones en desarrollo con demanda creciente de refrigeración.",
    ],
  },
  {
    title: "The Air Quality, Health, and Labor Supply Effects of Crop-Residue Burning",
    authors: "Luis Sarmiento, Jesús Arellano-González",
    journal: "",
    year: 2024,
    status: "working-paper",
    area: "econometrics",
    question: "What are the causal effects of agricultural crop-residue burning on air pollution, health, and labor supply in Mexico?",
    questionEs: "¿Cuáles son los efectos causales de la quema de residuos agrícolas sobre la contaminación del aire, la salud y la oferta laboral en México?",
    findings: [
      "Each additional burn within 25 km raises monthly PM2.5 by 0.022 μg/m³, increases mortality by 0.057%, and reduces daily labor supply by 0.066 minutes per worker.",
      "A 10% reduction in agricultural burns could yield over $16 million USD in annual social benefits.",
      "55% of benefits relate to lower mortality, 44% to reduced labor supply losses, and 1% to fewer ED admissions.",
    ],
    findingsEs: [
      "Cada quema adicional dentro de 25 km aumenta el PM2.5 mensual en 0.022 μg/m³, incrementa la mortalidad en 0.057% y reduce la oferta laboral diaria en 0.066 minutos por trabajador.",
      "Una reducción del 10% en las quemas agrícolas podría generar más de $16 millones USD en beneficios sociales anuales.",
      "El 55% de los beneficios se relacionan con menor mortalidad, 44% con la reducción de pérdidas de oferta laboral, y 1% con menos admisiones a urgencias.",
    ],
  },
  {
    title: "Indoor Air Quality and Student Welfare: The Effect of Air Purifiers in Schools",
    authors: "Jacopo Bonan, Francesco Granella, Stefania Renna, Luis Sarmiento",
    journal: "",
    year: 2024,
    status: "working-paper",
    area: "econometrics",
    workingPaper: {
      series: "RFF Working Paper 25-17",
      url: "https://media.rff.org/documents/WP_25-17.pdf",
    },
    question: "Can air purifiers in schools reduce children's exposure to pollution and improve attendance, learning, and well-being?",
    questionEs: "¿Pueden los purificadores de aire en escuelas reducir la exposición de los niños a la contaminación y mejorar la asistencia, el aprendizaje y el bienestar?",
    findings: [
      "Air purifiers reduce indoor PM2.5 concentrations by 32% and decrease student absenteeism by 12.5% in a cluster RCT across 95 primary school classes.",
      "Effects are larger among students with higher pre-treatment absenteeism; treated students report fewer respiratory symptoms and greater air quality awareness.",
      "Impact is greater when outdoor pollution is relatively low and diminishes as outdoor pollution intensifies, consistent with nonlinear marginal effects of air quality on health.",
    ],
    findingsEs: [
      "Los purificadores de aire reducen las concentraciones interiores de PM2.5 en un 32% y disminuyen el ausentismo estudiantil en un 12.5% en un ensayo aleatorio grupal en 95 clases de primaria.",
      "Los efectos son mayores entre estudiantes con mayor ausentismo previo al tratamiento; los estudiantes tratados reportan menos síntomas respiratorios y mayor conciencia sobre la calidad del aire.",
      "El impacto es mayor cuando la contaminación exterior es relativamente baja y disminuye a medida que la contaminación exterior se intensifica, consistente con efectos marginales no lineales de la calidad del aire sobre la salud.",
    ],
  },
];

export function getPublicationsByArea(area: Publication["area"]): Publication[] {
  return publications.filter((p) => p.area === area);
}

export function getPublicationsByStatus(status: Publication["status"]): Publication[] {
  return publications.filter((p) => p.status === status);
}

export function getRecentPublications(count: number = 4): Publication[] {
  return publications
    .filter((p) => p.status === "published" || p.status === "revise-resubmit")
    .sort((a, b) => b.year - a.year)
    .slice(0, count);
}
