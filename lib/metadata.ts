import type { Metadata } from "next";
import { site } from "@/lib/site";

const titleBase = site.name;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${titleBase} | Custom Software & Digital Products`,
    template: `%s | ${titleBase}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: titleBase,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: titleBase,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
