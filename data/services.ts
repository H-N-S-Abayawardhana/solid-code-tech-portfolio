export type Service = {
  id: string;
  title: string;
  summary: string;
  description: string;
  benefits: string[];
  idealClients: string;
};

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom software development",
    summary:
      "Purpose-built systems that match how your organisation actually works.",
    description:
      "We engineer applications around your workflows, data, and compliance requirements—so you are not forced to reshape the business around an off-the-shelf product.",
    benefits: [
      "Architecture aligned with growth and integration needs",
      "Clear ownership of code, documentation, and environments",
      "Security and performance considered from day one",
    ],
    idealClients:
      "Mid-size and enterprise teams replacing spreadsheets, legacy tools, or fragmented internal systems.",
  },
  {
    id: "web-applications",
    title: "Web application development",
    summary:
      "Fast, resilient web products for customers, partners, and internal teams.",
    description:
      "From customer-facing platforms to operational consoles, we deliver interfaces that stay responsive under load and remain maintainable as features evolve.",
    benefits: [
      "Modern front ends with disciplined state and accessibility",
      "APIs designed for stability and clear versioning",
      "Deployment pipelines that support frequent, safe releases",
    ],
    idealClients:
      "Product companies and in-house IT groups launching or scaling browser-based software.",
  },
  {
    id: "mobile-apps",
    title: "Mobile app development",
    summary:
      "Native-quality experiences on iOS and Android, built for real-world use.",
    description:
      "We build mobile products with offline awareness, secure authentication, and analytics hooks where they matter—without unnecessary complexity.",
    benefits: [
      "Thoughtful navigation and performance on mid-range devices",
      "Store-ready release process and update strategy",
      "Shared domain models with web backends where appropriate",
    ],
    idealClients:
      "Brands and B2B providers extending their service to the field, retail floor, or on-the-go professionals.",
  },
  {
    id: "ui-ux",
    title: "UI / UX design",
    summary:
      "Interfaces that reduce friction and reinforce trust in your product.",
    description:
      "We combine research-backed structure with restrained visual design—so screens feel familiar to international users and credible to executives.",
    benefits: [
      "Component libraries that scale across teams",
      "Prototypes that align stakeholders before build",
      "Design systems that developers can implement faithfully",
    ],
    idealClients:
      "Teams preparing a new product, redesign, or design-to-development handover.",
  },
  {
    id: "cloud",
    title: "Cloud-based solutions",
    summary:
      "Reliable hosting, scaling, and observability without vendor lock-in by default.",
    description:
      "We help you choose and operate cloud services that fit your budget, region, and regulatory context—then document how everything fits together.",
    benefits: [
      "Infrastructure as code and environment parity",
      "Cost visibility and right-sizing recommendations",
      "Backups, monitoring, and incident-ready runbooks",
    ],
    idealClients:
      "Organisations modernising infrastructure or launching SaaS offerings.",
  },
  {
    id: "api-integrations",
    title: "API integrations",
    summary:
      "Connect your product to payments, CRM, ERP, and industry-specific platforms.",
    description:
      "We map data flows, handle authentication edge cases, and build retries and logging so integrations fail gracefully—not silently.",
    benefits: [
      "Mapping and validation of third-party contracts",
      "Idempotent jobs and clear error surfaces for support teams",
      "Documentation for future engineers and partners",
    ],
    idealClients:
      "Companies stitching together best-of-breed tools or exposing their own APIs to partners.",
  },
  {
    id: "ecommerce",
    title: "E-commerce solutions",
    summary:
      "Stores and B2B ordering flows that convert and integrate with operations.",
    description:
      "We implement storefronts, catalogues, and checkout experiences with inventory, tax, and fulfilment systems in mind.",
    benefits: [
      "Performance-focused product and search experiences",
      "Integration with ERP, WMS, and marketing stacks",
      "Testing plans for promotions and peak traffic",
    ],
    idealClients:
      "Retailers, manufacturers selling direct, and distributors digitising repeat orders.",
  },
  {
    id: "maintenance",
    title: "Software maintenance and support",
    summary:
      "Keep production systems current, secure, and understandable.",
    description:
      "Beyond break-fix work, we offer structured maintenance: dependency updates, security patches, minor enhancements, and knowledge transfer.",
    benefits: [
      "Defined response times and escalation paths",
      "Release notes and change records stakeholders can follow",
      "Roadmap input based on usage and incident trends",
    ],
    idealClients:
      "Teams who inherited a codebase or need a steady partner after launch.",
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
