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
  image?: string; // path relative to /public, e.g. "/projects/vertex-ops.jpg"
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "taxi-app-flutter",
    title: "Taxi Booking App — Flutter Migration (iOS & Android)",
    category: "Mobile app",
    summary:
      "Migrated a legacy native taxi booking application to Flutter, creating a unified cross-platform codebase that works seamlessly on both iOS and Android.",
    stack: ["Flutter", "Dart", "BLoC", "Clean Architecture", "REST APIs"],
    outcome:
      "Unified both platforms into a single codebase, reduced maintenance overhead, improved UI consistency, and enabled faster future feature rollouts.",
    featured: true,
    image: "/taxi.png",
  },
  {
    slug: "realtime-messaging-app",
    title: "Real-Time Messaging App — Flutter",
    category: "Mobile app",
    summary:
      "A real-time messaging application built with a strong architectural foundation, supporting live communication with instant message delivery and scalable state management.",
    stack: ["Flutter", "Dart", "BLoC", "WebSockets", "Firebase", "Clean Architecture"],
    outcome:
      "Delivered a fully functional messaging system with live updates, predictable state management via BLoC, and a Clean Architecture foundation built for long-term scalability.",
    featured: true,
    image: "/gym.png",
  },
  {
    slug: "vetlink-ai",
    title: "VetLink — AI-Powered Veterinary Web App",
    category: "SaaS platform",
    summary:
      "AI-powered web application built for Kaduwela PetZone Hospital, streamlining veterinary workflows with intelligent features for pet management, appointments, and clinical insights.",
    stack: ["Next.js", "Python", "Machine Learning", "Vercel"],
    outcome:
      "Delivered a production-ready veterinary platform live at vet-link.vercel.app, bringing AI-driven efficiency to daily clinical and administrative operations.",
    featured: true,
    image: "/healthcare.png",
  },
  {
    slug: "upulni-express",
    title: "Upulni Express — Multi-Vendor Marketplace",
    category: "E-commerce",
    summary:
      "Multi-vendor marketplace web application built for Upulni Express, Sri Lanka, enabling multiple vendors to list and sell products through a unified storefront.",
    stack: ["ReactJS", "NodeJS"],
    outcome:
      "Delivered a fully functional multi-vendor marketplace for Upulni Express, Sri Lanka, empowering vendors to manage their own storefronts and streamlining the online shopping experience.",
    featured: false,
    image: "/upulini.png",
  },
  {
    slug: "researcher-ai",
    title: "ResearcherAI — AI-Powered Research Paper Assistant",
    category: "SaaS platform",
    summary:
      "AI-powered web application that assists users in discovering, summarising, and analysing research papers with intelligent recommendations.",
    stack: ["Next.js"],
    outcome:
      "Delivered a production-ready AI research assistant deployed at researcher-ai.vercel.app, helping users navigate academic literature faster and more efficiently.",
    featured: false,
    image: "/research.png",
    url: "https://researcher-ai.vercel.app/",
  },
  {
    slug: "newswhiz",
    title: "NewsWhiz — News Mobile App",
    category: "Mobile app",
    summary:
      "A Flutter mobile application built as a university project that delivers personalised news feeds and keeps students up to date with the latest headlines.",
    stack: ["Flutter"],
    outcome:
      "Completed as a university project, demonstrating mobile development skills with Flutter through a clean, functional news browsing experience.",
    featured: false,
    image: "/NewsWhiz.png",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
