import React from "react";
import Image from "next/image";
import heroImage from "@/app/images/media-images/resgistration-bg.webp";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[60vh]">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Slide Image"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="object-[50%_57%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Content Over Image */}
      <div className="absolute bottom-0 top-1/1 left-0 right-0">
        <div className="flex flex-col items-center justify-center gap-4 bg-green-900 bg-opacity-70 py-10">
          <h1 className="text-xl md:text-7xl uppercase tracking-[0.1rem] leading-[7.5rem] mb-1 text-white font-bebas">
            Player Registration Form
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
