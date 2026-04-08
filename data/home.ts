/** Home page copy — swap for CMS/API when ready */

export const homeHero = {
  headline:
    "Engineering the Digital Future For Every Business, Every Industry",
  subheading: "",
  ctaPrimary: "Start a Project",
  ctaSecondary: "Explore Services",
  /** Home hero secondary CTA — Services overview */
  ctaSecondaryHref: "/services",
  footnote:
    "We partner with startups, SMBs, and enterprises—from discovery through launch and beyond. ",
  footnoteLinkLabel: "Read our process",
} as const;

export const homeAbout = {
  eyebrow: "About us",
  title: "Who We Are",
  paragraphs: [
    "SolidCode Technologies is a technology startup built on one belief: great software changes everything. We are a team of passionate engineers, designers, and problem-solvers dedicated to turning ideas into reliable, high-performance digital products.",
    "We work with startups, small businesses, growing enterprises, and organizations of every kind — delivering solutions that are clean, scalable, and built to last. Whether you need a web platform, a mobile app, cloud infrastructure, or an intelligent AI-powered system, we bring the same commitment to quality to every project.",
    "Our name says it all — we write solid code.",
  ],
  missionLabel: "Mission",
  mission:
    "To deliver world-class software solutions that empower every business — big or small — to grow, compete, and succeed in the digital age.",
  visionLabel: "Vision",
  vision:
    "To become a globally trusted technology partner known for code quality, innovation, and lasting client relationships.",
} as const;

export const homeWhoWeServe = {
  eyebrow: "Who we serve",
  title: "Every Solution, Every Client",
  intro: "We build software for every type of business and every industry:",
  segments: [
    {
      title: "Startups",
      body: "From idea to MVP to funded product, we help founders move fast and build right.",
    },
    {
      title: "Small & Medium Businesses",
      body: "Digitize operations, automate workflows, and compete with the big players.",
    },
    {
      title: "Enterprises",
      body: "Modernize legacy systems, integrate AI, and scale without limits.",
    },
    {
      title: "E-Commerce",
      body: "High-converting online stores, inventory management, and payment systems.",
    },
    {
      title: "Healthcare",
      body: "Secure, compliant patient platforms, medical records systems, and telehealth tools.",
    },
    {
      title: "Education",
      body: "Learning management systems, student portals, and interactive education apps.",
    },
    {
      title: "Fintech",
      body: "Payment gateways, banking dashboards, and financial analytics platforms.",
    },
    {
      title: "Logistics & Operations",
      body: "Fleet management, supply chain tools, and real-time tracking systems.",
    },
  ],
} as const;

export const whyChooseUsPoints = [
  {
    title: "Code Quality First",
    body: "We write clean, reviewed, and tested code — every time. No shortcuts, no technical debt passed on to you. Our standards are production-grade from day one.",
  },
  {
    title: "Fast, Agile Delivery",
    body: "We work in focused sprints with weekly demos and continuous delivery. You always know where your project stands — and we move at startup speed without sacrificing quality.",
  },
  {
    title: "Transparent Communication",
    body: "Clear scope, honest timelines, and open collaboration—no surprises. You get visibility into progress, decisions, and trade-offs at every stage.",
  },
] as const;

export const homeSections = {
  services: {
    eyebrow: "Services",
    title: "What We Build",
    description:
      "End-to-end software—from web and mobile to cloud, AI, and bespoke systems tailored to how you work.",
  },
  whyUs: {
    eyebrow: "Why SolidCode Technologies",
    title: "Why Choose Us",
    description:
      "We combine engineering discipline with startup speed—so you get software you can trust and a partner you can count on.",
  },
  projects: {
    eyebrow: "Work",
    title: "Recent engagements",
    description:
      "Examples below are representative placeholders. Each engagement was structured around defined milestones and acceptance criteria.",
  },
  process: {
    eyebrow: "Our process",
    title: "How delivery runs",
    description:
      "A straightforward sequence of stages, with written outputs at each step so procurement and engineering stay aligned.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What clients say",
    description:
      "Feedback from programme sponsors. Names and organisations are sample placeholders for layout.",
  },
  finalCta: {
    title: "Ready to outline your next release?",
    body:
      "Send a short brief: goals, timeline, and constraints. We reply within two business days with next steps or a polite no if we are not the right fit.",
    primary: "Contact us",
    secondary: "Browse services",
  },
} as const;
