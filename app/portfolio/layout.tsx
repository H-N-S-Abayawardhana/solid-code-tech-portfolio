import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Real projects from ${site.name}: mobile apps, SaaS platforms, AI solutions, e-commerce, and enterprise software — designed, built, and shipped.`,
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
