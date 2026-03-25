export type ProjectCategory =
  | "SaaS platform"
  | "E-commerce"
  | "Corporate website"
  | "Business dashboard"
  | "Mobile app";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  stack: string[];
  outcome: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "vertex-ops",
    title: "Vertex Ops — workforce scheduling SaaS",
    category: "SaaS platform",
    summary:
      "Multi-tenant scheduling and compliance console for a UK facilities management group expanding across Europe.",
    stack: ["Next.js", "PostgreSQL", "AWS", "Stripe"],
    outcome:
      "Cut scheduling conflicts by roughly 40% in pilot regions and gave finance a single source for billable hours.",
    featured: true,
  },
  {
    slug: "northline-trade",
    title: "Northline Trade — B2B parts catalogue",
    category: "E-commerce",
    summary:
      "Authenticated catalogue, contract pricing, and repeat order flows for industrial distributors.",
    stack: ["React", "Node.js", "Elasticsearch", "SAP integration"],
    outcome:
      "Average order placement time dropped from twelve minutes to under four for returning buyers.",
    featured: true,
  },
  {
    slug: "harbor-capital-site",
    title: "Harbor Capital — institutional website",
    category: "Corporate website",
    summary:
      "Editorial site with fund literature, gated insights, and localised content for three regions.",
    stack: ["Next.js", "Headless CMS", "Vercel"],
    outcome:
      "Marketing ships updates without developer involvement for standard pages; compliance review time halved.",
    featured: true,
  },
  {
    slug: "pulse-analytics",
    title: "Pulse Analytics — executive dashboard",
    category: "Business dashboard",
    summary:
      "Near-real-time KPI views across retail POS, warehouse, and e-commerce channels.",
    stack: ["TypeScript", "Python", "BigQuery", "Looker embed"],
    outcome:
      "Leadership reviews moved from weekly spreadsheet packs to a single live dashboard adopted by eight countries.",
    featured: false,
  },
  {
    slug: "fieldlink-mobile",
    title: "Fieldlink — technician mobile app",
    category: "Mobile app",
    summary:
      "Offline-capable work orders, asset scans, and customer sign-off for a national service network.",
    stack: ["React Native", "Kotlin modules", "REST APIs"],
    outcome:
      "First-time fix rate improved and disputed jobs fell after structured photo and signature capture.",
    featured: false,
  },
  {
    slug: "ledgerflow",
    title: "Ledgerflow — practice management add-on",
    category: "SaaS platform",
    summary:
      "Time tracking, billing rules, and client portal for mid-size professional services firms.",
    stack: ["Vue", ".NET", "Azure SQL"],
    outcome:
      "Reduced revenue leakage from unrecorded time and shortened month-end close for finance teams.",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
