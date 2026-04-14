/** Increment when replacing `public/solidcodelogo.png` so Next.js Image and browsers fetch the new file (same path is otherwise cached). */
export const LOGO_CACHE_BUST = 4;

export const site = {
  name: "SolidCode Technologies",
  shortName: "SolidCode",
  logoSrc: `/logo.PNG?v=${LOGO_CACHE_BUST}`,
  logoDarkSrc: `/logo-dark.PNG?v=${LOGO_CACHE_BUST}`,
  tagline: "Built solid. Built to scale.",
  description:
    "SolidCode Technologies builds software solutions and AI solutions for global businesses: web and mobile apps, cloud & DevOps, LLM-powered features, UI/UX, and custom enterprise systems—engineered for quality and scale.",
  url: "https://www.solidcodetechnologies.com",
  email: "info@solidcodetechnologies.com",
  phone: "+94 743648116",
  address: {
    line1: "Battaramulla",
    line2: "Colombo, Sri Lanka",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/solid-code-technologies/posts/?feedView=all",
  },
  /** wa.me uses international digits only (no +); national leading 0 omitted after country code 94 */
  whatsapp: {
    href: "https://wa.me/94743648116",
    phoneDisplay: "+94 743648116",
  },
} as const;
