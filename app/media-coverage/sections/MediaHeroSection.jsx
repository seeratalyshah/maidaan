"use client";
import Image from "next/image";
import maidaanMedia1 from "@/public/images/media-images/maidaanmedia1.jpeg";
import maidaanMedia3 from "@/public/images/media-images/maidaanmedia3.jpeg";
import maidaanMedia2 from "@/public/images/media-images/maidaanmedia2.jpg";
import { useEffect, useState } from "react";

const MediaHeroSection = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const header = document.getElementById("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    }
  }, []);

  return (
    <section className="relative bg-gray-900 text-white w-full h-[60vh] sm:h-[80vh]">
      <div className="grid sm:grid-cols-3 grid-rows-2 gap-[5px] h-full">
        {/* Collage Layout */}
        <div className="relative col-span-2 row-span-2 sm:block hidden">
          <Image
            src={maidaanMedia1}
            layout="fill"
            objectFit="cover"
            alt="Catcher"
            className="object-[50%_70%]"
          />
        </div>
        <div className="relative sm:block hidden">
          <Image
            src={maidaanMedia3}
            layout="fill"
            objectFit="cover"
            alt="Pitcher"
          />
        </div>
        <div className="relative">
          <Image
            src={maidaanMedia2}
            layout="fill"
            objectFit="cover"
            alt="Batter"
            className="sm:object-[50%_50%]"
          />
        </div>
      </div>

      {/* Hero Text Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-green-900 bg-opacity-90 px-8 py-10 text-center">
        <div className="absolute left-4 top-4 text-green-600 text-2xl md:text-5xl">
          ⚾
        </div>

        <h1 className="text-xl sm:text-3xl md:text-5xl font-bebas mb-4 text-white">
          Maidaan in the Spotlight –{" "}
          <span className="text-green-500">Global & National</span> Recognition
        </h1>
        <p className="uppercase tracking-wide text-md sm:text-lg text-white">
          Discover how Maidaan’s football initiative is transforming lives and
          gaining global recognition
        </p>

        <div className="absolute right-4 bottom-4 text-green-600 text-2xl md:text-5xl">
          ⚾
        </div>
      </div>
    </section>
  );
};

export default MediaHeroSection;
