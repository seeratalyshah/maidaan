import React from "react";
import Image from "next/image";
import maidaanBlog from "@/app/images/media-images/maidaanblog.jpeg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[70vh]">
      {/* Background Image */}
      <Image
        src={maidaanBlog}
        alt="Slide Image"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="object-top mt-[95px]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Content Over Image */}
      <div className="absolute bottom-0 top-1/1 left-0 right-0">
        <div className="flex flex-col items-center justify-center gap-4 bg-green-900 bg-opacity-70 p-10">
          <h1 className="text-3xl md:text-7xl lg:text-8xl w-[300px] md:w-[800px] uppercase tracking-[0.1rem] font-bebas text-white text-center">
            Blogs
          </h1>
          <p className="text-xl text-white font-semibold w-full max-w-[1000px] text-center">
            Maidan showcases the passion and talent of street children through
            inspiring sports stories, local tournaments, and player highlights.
            Experience the journey of young athletes making their mark on the
            field!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
