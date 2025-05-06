import FeaturedMedia from "@/app/media-coverage/sections/FeaturedMedia";
import InternationalMedia from "@/app/media-coverage/sections/InternationalMedia";
import MediaContact from "@/app/media-coverage/sections/MediaContact";
import NationalMedia from "@/app/media-coverage/sections/NationalMedia";
import SocialMedia from "@/app/media-coverage/sections/SocialMedia";
import VideoSocialMediaCoverage from "@/app/media-coverage/sections/VideoMedia";
import React from "react";
import MediaHeroSection from "./sections/MediaHeroSection";

export const metadata = {
  title: "Media Coverage – Maidaan in the Global & National Spotlight",
  description:
    "Read the latest headlines and features about Maidaan’s street-connected footballers, nationwide trials, and international achievements.",
  keywords: [
    "Maidaan media coverage",
    "Pakistan street child football news",
    "Norway Cup 2025 press",
    "Street Child Football World Cup USA 2026",
    "Muslim Hands football initiative",
    "youth football Pakistan news",
  ],

  alternates: { canonical: "https://maidaan.org.uk/media-coverage" },

  openGraph: {
    type: "article",
    url: "https://maidaan.org.uk/media-coverage",
    title: "Maidaan in the News – Global & National Recognition",
    description:
      "From FIFA features to prime-time news, discover how Maidaan’s football programme is transforming lives and capturing headlines worldwide.",
    siteName: "Maidaan Football Academy",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const MediaCoverage = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <MediaHeroSection />
      <FeaturedMedia />
      <InternationalMedia />
      <NationalMedia />
      <VideoSocialMediaCoverage />
      <SocialMedia />
      <MediaContact />
    </div>
  );
};

export default MediaCoverage;
