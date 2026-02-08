export interface Conference {
  title: string;
  event: string;
  city: string;
  country: string;
  year: number;
}

export const conferences: Conference[] = [
  {
    title: "The Transnational Effect of Temperatures on Remittances",
    event: "Gothenburg Environmental Economics Workshop",
    city: "Gothenburg",
    country: "Sweden",
    year: 2026,
  },
  {
    title: "The Transnational Effect of Temperatures on Remittances",
    event: "First Colloquium of Regional Economists",
    city: "Merida",
    country: "Mexico",
    year: 2025,
  },
  {
    title: "The Impact of Temperature Variations on Emergency Department Visits",
    event: "BIS Conference on Climate and the Environment",
    city: "Bogota",
    country: "Colombia",
    year: 2025,
  },
  {
    title: "The Air Quality Effects of Uber",
    event: "First Latin-American Environmental Economics Conference",
    city: "Bogota",
    country: "Colombia",
    year: 2025,
  },
  {
    title: "The Health and Labor Effects of Crop Residue Fires",
    event: "Mapping Environmental and Energy Policies Workshop",
    city: "Frankfurt",
    country: "Germany",
    year: 2025,
  },
  {
    title: "Income Shocks, Adaptation, and Temperature-Related Mortality: Evidence from the Mexican Labor Market",
    event: "EARE Annual Conference",
    city: "Leuven",
    country: "Belgium",
    year: 2024,
  },
  {
    title: "The Unintended Consequences of Environmental Policies: Evidence from Madrid Central",
    event: "MEEP Workshop",
    city: "Hamburg",
    country: "Germany",
    year: 2024,
  },
  {
    title: "Income Shocks, Adaptation, and Temperature-Related Mortality: Evidence from the Mexican Labor Market",
    event: "IAERE Annual Conference",
    city: "Pescara",
    country: "Italy",
    year: 2024,
  },
  {
    title: "The Air Quality Effects of Uber",
    event: "IEA World Congress",
    city: "Medellin",
    country: "Colombia",
    year: 2023,
  },
  {
    title: "The Air Quality Effects of Uber",
    event: "ICEE World Congress",
    city: "Cagliari",
    country: "Italy",
    year: 2023,
  },
  {
    title: "The Unaccounted Effects of Low Emission Zones: Evidence from Madrid Central",
    event: "IAERE Annual Conference",
    city: "Naples",
    country: "Italy",
    year: 2023,
  },
  {
    title: "The Air Quality Effects of Uber",
    event: "EAERE Annual Conference",
    city: "Rimini",
    country: "Italy",
    year: 2022,
  },
  {
    title: "The Unaccounted Effects of Low Emission Zones: Evidence from Madrid Central",
    event: "Mannheim Conference on Energy and the Environment",
    city: "Mannheim",
    country: "Germany",
    year: 2022,
  },
  {
    title: "The Air Quality Effects of Uber",
    event: "BSE Workshop: The Distributional Consequences of Environmental Policies",
    city: "Berlin",
    country: "Germany",
    year: 2022,
  },
  {
    title: "Towards the Decarbonization of the Transportation Sector",
    event: "CMCC Annual Conference",
    city: "Lecce",
    country: "Italy",
    year: 2021,
  },
  {
    title: "The Nonlinear Effects of Pollution on Crime: Evidence from Mexico City and New York",
    event: "EAERE Annual Conference",
    city: "Berlin",
    country: "Germany",
    year: 2020,
  },
  {
    title: "Make Sure the Kids are OK: Indirect Effects of Air Pollution on Well-Being",
    event: "Verein für Socialpolitik",
    city: "Leipzig",
    country: "Germany",
    year: 2019,
  },
  {
    title: "Air Pollution and the Productivity of High-Skill Labor: Evidence from Court Hearings",
    event: "EAERE Annual Conference",
    city: "Manchester",
    country: "United Kingdom",
    year: 2019,
  },
  {
    title: "Analysing Scenarios for the Integration of Renewable Energy Sources in the Mexican Energy System",
    event: "Seventh Latin-American Meeting of Energy Economics",
    city: "Buenos Aires",
    country: "Argentina",
    year: 2019,
  },
  {
    title: "External Costs of Electricity Transmission Infrastructure: Evidence from Well-Being Data",
    event: "World Congress of Environmental and Resource Economists",
    city: "Gothenburg",
    country: "Sweden",
    year: 2018,
  },
  {
    title: "Air Pollution and the Productivity of High-Skill Labor: Evidence from Court Hearings",
    event: "Meeting of the Latin-American and Caribbean Economic Association",
    city: "Guayaquil",
    country: "Ecuador",
    year: 2018,
  },
  {
    title: "Make Sure the Kids are OK: Indirect Effects of Air Pollution on Well-Being",
    event: "Essen Health Conference",
    city: "Essen",
    country: "Germany",
    year: 2017,
  },
  {
    title: "External Costs of Electricity Transmission Infrastructure: Evidence from Well-Being Data",
    event: "Mannheim Energy Conference",
    city: "Mannheim",
    country: "Germany",
    year: 2017,
  },
  {
    title: "External Costs of Electricity Transmission Infrastructure: Evidence from Well-Being Data",
    event: "European Conference of the International Association of Energy Economists",
    city: "Vienna",
    country: "Austria",
    year: 2017,
  },
];

export function getConferencesByYear(): Map<number, Conference[]> {
  const grouped = new Map<number, Conference[]>();
  const sorted = [...conferences].sort((a, b) => b.year - a.year);
  for (const conf of sorted) {
    const existing = grouped.get(conf.year) || [];
    existing.push(conf);
    grouped.set(conf.year, existing);
  }
  return grouped;
}
