import DonateSection from "@/app/support-maidaan/sections/DonateSection";
import HeroSection from "@/app/support-maidaan/sections/HeroSection";
import HowToDonate from "@/app/support-maidaan/sections/HowToDonate";
import MainSection from "@/app/support-maidaan/sections/MainSection";
import WhySupportMaidaan from "@/app/support-maidaan/sections/WhySupportMaidan";
import React from "react";

/* app/support/page.jsx  – Support / Donate metadata */

export const metadata = {
  title: "Support Maidaan – Empower Pakistan’s Street-Connected Youth",
  description:
    "Donate to Maidaan and help provide grass-roots football training, education, meals and legal identity for Pakistan’s most vulnerable children.",
  keywords: [
    "donate to Maidaan",
    "Pakistan street child charity",
    "football charity donation",
    "youth development Pakistan",
    "Muslim Hands football",
    "grassroots football sponsorship",
  ],

  alternates: { canonical: "https://maidaan.org.uk/support-maidaan" },

  openGraph: {
    type: "website",
    url: "https://maidaan.org.uk/support-maidaan",
    title: "Be Part of Pakistan’s Football Revolution – Support Maidaan",
    description:
      "Your generosity funds nationwide trials, elite coaching, education and life-skills training for street-connected children across Pakistan.",
    siteName: "Maidaan Football Academy",
  },

  robots: {
    index: true,
    follow: true,
  },
};

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
