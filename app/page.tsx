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
  title: "Home",
  description:
    "SolidCode Technologies is a full-stack software engineering company: web, mobile, cloud, AI, UI/UX, and custom software—built solid, built to scale.",
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
