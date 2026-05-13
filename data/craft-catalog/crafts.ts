export type CraftItem = {
  slug:        string;
  title:       string;
  categories:  string[];
  disciplines: string[];
  hasAssessment:   boolean;
  hasTranslation:  boolean;
};

export const crafts: CraftItem[] = [
  {
    slug: "heating-repair",
    title: "Heating Repair",
    categories: ["Heating"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "heating-maintenance",
    title: "Heating Maintenance",
    categories: ["Heating"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "heating-installation",
    title: "Heating Installation",
    categories: ["Heating"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "heat-pumps",
    title: "Heat Pumps",
    categories: ["Heating"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "furnace-service",
    title: "Furnace Service",
    categories: ["Heating"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "ductless-mini-split",
    title: "Ductless Mini Split AC Systems",
    categories: ["Air Conditioning"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "ac-repair",
    title: "AC Repair",
    categories: ["Air Conditioning"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "ac-installation",
    title: "AC Installation",
    categories: ["Air Conditioning"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "hvac-maintenance",
    title: "HVAC Maintenance",
    categories: ["Maintenance"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "indoor-air-quality",
    title: "Indoor Air Quality",
    categories: ["Air Quality"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "duct-replacement",
    title: "Duct Replacement",
    categories: ["Air Quality"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "duct-sealing",
    title: "Duct Sealing",
    categories: ["Air Quality"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "duct-cleaning",
    title: "Duct Cleaning",
    categories: ["Air Quality"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "air-scrubber",
    title: "Air Scrubber",
    categories: ["Air Quality"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "maintenance-program",
    title: "Maintenance Program",
    categories: ["Maintenance"],
    disciplines: ["Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "uv-germicidal-lights",
    title: "UV Germicidal Lights",
    categories: ["Air Quality"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "thermostats",
    title: "Thermostats",
    categories: ["Maintenance"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "zone-systems",
    title: "Zone Systems",
    categories: ["Maintenance"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
];

// Note: CATEGORIES and DISCIPLINES kept for compatibility; filter bar removed in v2.
export const CATEGORIES = [
  "All Categories",
  "Heating",
  "Air Conditioning",
  "Maintenance",
  "Air Quality",
] as const;

export const DISCIPLINES = [
  "All Disciplines",
  "Residential",
  "Commercial",
] as const;
