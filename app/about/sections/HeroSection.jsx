import React from "react";
import Image from "next/image";
import aboutHeroImage from "../../../public/images/about-images/about-hero-image.webp";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Background Image */}
      <Image
        src={aboutHeroImage}
        alt="Slide Image"
        layout="fill"
        objectFit="cover"
        quality={90}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Content Over Image */}
      <div className="absolute bottom-0 top-1/2 left-0 right-0">
        <div className="flex flex-col items-center justify-center gap-4 bg-green-900 bg-opacity-70 py-10">
          <h1 className="text-3xl md:text-7xl lg:text-8xl text-center w-[300px] md:w-[900px] uppercase tracking-[0.1rem] font-bebas text-white">
            About Us – Maidaan
          </h1>
          <h1 className="text-xl md:text-4xl uppercase leading-tight text-white font-bebas">
            The Future of Football and Social Change in Pakistan
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
