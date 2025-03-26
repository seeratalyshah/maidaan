"use client";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  A11y,
} from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import MatchCard from "../../home/components/MatchCard";
import muslimhandsLogo from "@/images/home-images/maidaan-muslimhands-logo.webp";
import grassRootLogo from "@/images/home-images/maidaan-grassroot-logo.webp";
import norwaycupLogo from "@/images/home-images/maidaan-norway-cup-logo.png";
import scuLogo from "@/images/home-images/maidaan-scu-logo.webp";
import maidaanLogo from "@/images/home-images/maidaan-home-logo.png";

export const matches = [
  {
    id: 1,
    title: "UPCOMING CAMP",
    match: "Maidaan Training Camp",
    team_one: "maidaanLogo",
    team_one_icon: maidaanLogo,
    team_two: "grassRootLogo",
    team_two_icon: grassRootLogo,
    date: "April, May, June 2025 – Islamabad",
    time: "2:51 pm",
  },
  {
    id: 2,
    title: "Upcoming Tournament",
    match: "Norway Cup 2025",
    team_one: "norwaycupLogo",
    team_one_icon: norwaycupLogo,
    team_two: "muslimhandsLogo",
    team_two_icon: muslimhandsLogo,
    date: "July, August 2025 – Oslo",
    time: "2:51 pm",
  },
  {
    id: 3,
    title: "Upcoming Tournament",
    match: "Street Child Football World Cup USA 2026",
    team_one: "scuLogo",
    team_one_icon: scuLogo,
    team_two: "muslimhandsLogo",
    team_two_icon: muslimhandsLogo,
    date: "April, May 2026 – USA",
    time: "2:51 pm",
  },
];

const MatchSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <section className="bg-[#F5F5F5] p-4 md:p-16 lg:p-24">
      <div className="mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={setSwiperInstance}
          className="w-full"
        >
          {matches.map((match) => (
            <SwiperSlide key={match.id}>
              <MatchCard item={match} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-8 mt-10">
          <button
            onClick={handlePrev}
            className="text-white bg-black p-3 cursor-pointer transition-opacity duration-300 hover-bg"
          >
            <HiOutlineArrowNarrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="text-white bg-black p-3 cursor-pointer transition-opacity duration-300 hover-bg"
          >
            <HiOutlineArrowNarrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MatchSlider;
