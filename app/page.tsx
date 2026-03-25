import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TestimonialPreview } from "@/components/sections/TestimonialPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Solid Code Technology designs and builds custom software, web and mobile products, and cloud solutions for international businesses that need clear delivery and long-term support.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <ProcessPreview />
      <TestimonialPreview />
      <FinalCta />
    </>
  );
}
