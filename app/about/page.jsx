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
