import type { Metadata } from "next";
import { site } from "@/lib/site";

const titleBase = site.name;

const ogImage = {
  url: "/heroimg.jpg",
  width: 1200,
  height: 630,
  alt: `${site.name} — software solutions and AI development`,
} as const;

export const seoKeywords = [
  "software solutions",
  "AI solutions",
  "custom software development",
  "AI development company",
  "web development",
  "mobile app development",
  "cloud solutions",
  "DevOps",
  "machine learning solutions",
  "enterprise software",
  "UK software company",
] as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${titleBase} | Software Solutions & AI Development`,
    template: `%s | ${titleBase}`,
  },
  description: site.description,
  keywords: [...seoKeywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${titleBase} | Software Solutions & AI Development`,
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${titleBase} | Software Solutions & AI Development`,
    description: site.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: site.logoSrc, type: "image/png" }],
    apple: site.logoSrc,
  },
};
