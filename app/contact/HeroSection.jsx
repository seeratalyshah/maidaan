import React from "react";
import Image from "next/image";
import maidanContact from "@/images/media-images/maidaancontact.webp";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[60vh]">
      {/* Background Image */}
      <Image
        src={maidanContact}
        alt="Slide Image"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="object-[50%_80%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Content Over Image */}
      <div className="absolute bottom-0 top-1/1 left-0 right-0">
        <div className="flex flex-col items-center justify-center gap-4 bg-green-900 bg-opacity-70 p-10">
          <h1 className="text-3xl md:text-7xl lg:text-8xl w-[300px] md:w-[800px] uppercase tracking-[0.1rem] font-bebas text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
