import FeaturedMedia from "@/app/media-coverage/sections/FeaturedMedia";
import InternationalMedia from "@/app/media-coverage/sections/InternationalMedia";
import MediaContact from "@/app/media-coverage/sections/MediaContact";
import NationalMedia from "@/app/media-coverage/sections/NationalMedia";
import SocialMedia from "@/app/media-coverage/sections/SocialMedia";
import VideoSocialMediaCoverage from "@/app/media-coverage/sections/VideoMedia";
import React from "react";
import MediaHeroSection from "./sections/MediaHeroSection";

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
