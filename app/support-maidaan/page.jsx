import DonateSection from "@/app/support-maidaan/sections/DonateSection";
import HeroSection from "@/app/support-maidaan/sections/HeroSection";
import HowToDonate from "@/app/support-maidaan/sections/HowToDonate";
import MainSection from "@/app/support-maidaan/sections/MainSection";
import WhySupportMaidaan from "@/app/support-maidaan/sections/WhySupportMaidan";
import React from "react";

const Support = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <HeroSection />
      <MainSection />
      <DonateSection />
      <HowToDonate />
      <WhySupportMaidaan />
    </div>
  );
};

export default Support;
