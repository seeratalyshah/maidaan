import AboutSection from "@/app/about/sections/AboutSection";
import AwardsSection from "@/app/about/sections/AwardsSection";
import BenefitsSection from "@/app/about/sections/BenefitsSection";
import CoachesSection from "@/app/about/sections/CoachesSection";
import HeroSection from "@/app/about/sections/HeroSection";
import QuoteSection from "@/app/about/sections/QuoteSection";
import VideoSection from "@/app/about/sections/VideoSection";
import WhatWeDo from "@/app/about/sections/WhatWeDo";
import WhyMaidaan from "@/app/about/sections/WhyMaidaan";
import React from "react";

export const metadata = {
  title: "About Us – Maidaan, Pakistan’s Grass-roots Football Movement",
  description:
    "Maidaan is Pakistan’s largest grass-roots football programme, empowering street-connected and marginalised youth through sport, education and social change.",
  keywords: [
    "Maidaan",
    "Pakistani football",
    "grassroots football",
    "street child world cup",
    "Muslim Hands",
    "youth development",
    "social impact sports",
    "football academy Pakistan",
  ],

  // Optional: absolute URL to avoid duplicate-content issues
  alternates: { canonical: "https://maidaan.org.uk/about" },

  openGraph: {
    title: "Maidaan – Transforming Lives Through Football & Education",
    description:
      "Discover how Maidaan identifies talent across 26+ cities, offers elite training, legal identity support and global exposure for Pakistan’s street children.",
    url: "https://maidaan.org.uk/about",
    type: "article",
  },
};

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <HeroSection />
      <AboutSection />
      <WhyMaidaan />
      <WhatWeDo />
      <AwardsSection />
      <QuoteSection />
      <CoachesSection />
      <BenefitsSection />
      <VideoSection />
    </div>
  );
};

export default AboutUs;
