import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TestimonialPreview } from "@/components/sections/TestimonialPreview";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "Software Solutions & AI Solutions",
  description:
    "SolidCode Technologies delivers software solutions and AI solutions: custom web and mobile apps, cloud & DevOps, LLM and ML features, UI/UX, and enterprise systems for startups to global enterprises.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Software Solutions & AI Solutions | SolidCode Technologies",
    description:
      "Partner with SolidCode for end-to-end software solutions and AI solutions—built for reliability, security, and scale.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <ServicesOverview />
      <WhoWeServe />
      <WhyChooseUs />
      <FeaturedProjects />
      <ProcessPreview />
      <TestimonialPreview />
      <FinalCta />
    </>
  );
}
