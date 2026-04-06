/** Services page video hero — copy + paths (layout matches home hero). */
export const servicesPageHero = {
  videoSrc: "/services-hero.mp4",
  posterSrc: "/heroimg.jpg",
  title: "Capabilities that cover the full product lifecycle.",
  belowStrip:
    "Each engagement is scoped to your context. Below is how we typically structure offerings—benefits you can evaluate, and client profiles that tend to see the strongest fit. Questions about scope or timelines? We are happy to recommend a sensible first step.",
} as const;

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
    id: "web-development",
    title: "Web Development",
    summary:
      "Fast, responsive, and scalable web applications tailored to your business goals.",
    description:
      "We design and develop fast, responsive, and scalable web applications tailored to your business goals. From marketing websites to complex SaaS platforms, we bring your web presence to life with modern frameworks and clean architecture.",
    benefits: [
      "Performance-focused builds with maintainable architecture",
      "Responsive experiences from marketing sites to complex SaaS",
      "Modern stacks aligned with your scale and integration needs",
    ],
    idealClients:
      "Teams launching or growing browser-based products, customer portals, and internal platforms.",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    summary:
      "Intuitive iOS and Android apps—native and cross-platform—with reliable, polished UX.",
    description:
      "We build intuitive mobile applications for iOS and Android — native and cross-platform. Whether it's a customer-facing app or an internal tool, we deliver smooth, reliable experiences that users love.",
    benefits: [
      "Native and cross-platform options matched to your roadmap",
      "Secure auth, offline-aware flows, and store-ready releases",
      "Shared models with web backends where it reduces duplication",
    ],
    idealClients:
      "Brands and B2B teams extending products to customers and staff in the field.",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    summary:
      "Infrastructure that scales with you—AWS, GCP, CI/CD, containers, and observability.",
    description:
      "We architect and manage cloud infrastructure that scales with your business. From AWS and Google Cloud to CI/CD pipelines, Docker, and Kubernetes — we ensure your systems are fast, secure, and always available.",
    benefits: [
      "Infrastructure-as-code and environment parity",
      "CI/CD pipelines for safe, frequent releases",
      "Monitoring, backups, and security-minded operations",
    ],
    idealClients:
      "Organizations modernizing hosting, launching SaaS, or tightening reliability and delivery.",
  },
  {
    id: "ai-ml",
    title: "AI / ML Solutions",
    summary:
      "LLM-powered features, automation, analytics, and vision—integrated into your product.",
    description:
      "We integrate artificial intelligence and machine learning into your products — from LLM-powered chatbots and automation tools to predictive analytics and computer vision systems. Smart software for the modern world.",
    benefits: [
      "Practical AI use cases scoped to real workflows",
      "Integration with your data, APIs, and compliance constraints",
      "Evaluation, monitoring, and iteration—not one-off demos",
    ],
    idealClients:
      "Product teams adding intelligence, automation, or analytics to customer and internal tools.",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    summary:
      "Beautiful, intuitive, conversion-focused experiences grounded in research and testing.",
    description:
      "We create user experiences that are beautiful, intuitive, and conversion-focused. Our design process includes research, wireframing, prototyping, and testing — ensuring every interaction feels effortless.",
    benefits: [
      "Research-backed information architecture and flows",
      "Prototypes that align stakeholders before engineering",
      "Design systems developers can implement faithfully",
    ],
    idealClients:
      "Teams shipping new products, redesigns, or needing a disciplined design-to-build handoff.",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    summary:
      "Bespoke systems—ERPs, CRMs, automation, APIs, and proprietary platforms—for your workflows.",
    description:
      "Every business has unique challenges. We build bespoke software solutions — ERPs, CRMs, automation tools, API integrations, and proprietary platforms — engineered precisely to fit your workflows and operations.",
    benefits: [
      "Workflow-aligned domain models and integrations",
      "Clear ownership of code, docs, and environments",
      "Security and scalability considered from day one",
    ],
    idealClients:
      "Organizations replacing spreadsheets, legacy tools, or fragmented systems with purpose-built software.",
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
