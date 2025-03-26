"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import { useState } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import sahilGull from "@/images/maidaan-players/sahil-gull-goalkeeper.webp";
import ubaidUllahkhan from "@/images/maidaan-players/ubaid-ullah-khan-defender.webp";
import aliAsif from "@/images/maidaan-players/ali-asif-midfielder.webp";
import abidAli from "@/images/maidaan-players/abid-ali-defender.webp";
import ahmadRazaKhan from "@/images/maidaan-players/ahmed-raza-khan-midfielder.webp";
import aadilAliKhan from "@/images/maidaan-players/Aadil-Ali-Khan-GoalKeeper.webp";
import abdulGhani from "@/images/maidaan-players/AbdulGhani-Forward.webp";
import abdulWahab from "@/images/maidaan-players/Abdul-Wahab-Midfielder.webp";
import asadNasir from "@/images/maidaan-players/Asad-Nasir-Defender.webp";
import daniyal from "@/images/maidaan-players/Daniyal-Midfielder.webp";
import faisalAfridi from "@/images/maidaan-players/Faisal-Afridi-Forward.webp";
import hamzaGul from "@/images/maidaan-players/Hamza-Gul-Defender.webp";
import muhammadAdil from "@/images/maidaan-players/Muhammad-Adeel-Defender.webp";
import muhammadAli from "@/images/maidaan-players/Muhammad-Ali-Midfielder.webp";
import muhammadAryan from "@/images/maidaan-players/Muhammad-Aryan-GoalKeeper.webp";
import muhammadEssa from "@/images/maidaan-players/Muhammad-Essa-Forward.webp";
import muhammadJunaid from "@/images/maidaan-players/Muhammad-Junaid-Midfielder.webp";
import muhammadKashif from "@/images/maidaan-players/Muhammad-Kashif-Forward.webp";
import muhammadKhan from "@/images/maidaan-players/Muhammad-Khan-Midfielder.webp";
import muhammadUsama from "@/images/maidaan-players/Muhammad-Usama-Midfielder.webp";
import owaisAhmad from "@/images/maidaan-players/Owais-Ahmad-Midfielder.webp";
import saudAhmad from "@/images/maidaan-players/Saud-Ahmad-Forward.webp";
import shahidAnjum from "@/images/maidaan-players/Shahid-Anjum-Forward.webp";
import shameerAli from "@/images/maidaan-players/Shahmeer-Ali-Forward.webp";
import tufailShinwari from "@/images/maidaan-players/Tufail-Shinwari-Forward.webp";

const players = [
  { id: 1, name: "Ali Asif", position: "MIDFIELDER", image: aliAsif },
  {
    id: 2,
    name: "Ubaid Ullah Khan",
    position: "DEFENDER",
    image: ubaidUllahkhan,
  },
  { id: 3, name: "Sahil Gull", position: "GOALKEEPER", image: sahilGull },
  { id: 4, name: "Abid Ali", position: "DEFENDER", image: abidAli },
  {
    id: 5,
    name: "Ahmad Raza Khan",
    position: "MIDFIELDER",
    image: ahmadRazaKhan,
  },
  {
    id: 6,
    name: "Aadil Ali Khan",
    position: "GOALKEEPER",
    image: aadilAliKhan,
  },
  { id: 7, name: "Abdul Ghani", position: "FORWARD", image: abdulGhani },
  { id: 8, name: "Abdul Wahab", position: "MIDFIELDER", image: abdulWahab },
  { id: 9, name: "Asad Nasir", position: "DEFENDER", image: asadNasir },
  { id: 10, name: "Daniyal", position: "MIDFIELDER", image: daniyal },
  { id: 11, name: "Faisal Afridi", position: "FORWARD", image: faisalAfridi },
  { id: 12, name: "Hamza Gul", position: "FORWARD", image: hamzaGul },
  { id: 13, name: "Muhammad Adeel", position: "DEFENDER", image: muhammadAdil },
  { id: 14, name: "Muhammad Ali", position: "MIDFIELDER", image: muhammadAli },
  {
    id: 15,
    name: "Muhammad Aryan",
    position: "GOALKEEPER",
    image: muhammadAryan,
  },
  { id: 16, name: "Muhammad Essa", position: "FORWARD", image: muhammadEssa },
  {
    id: 17,
    name: "Muhammad Junaid",
    position: "MIDFIELDER",
    image: muhammadJunaid,
  },
  {
    id: 18,
    name: "Muhammad Kashif",
    position: "FORWARD",
    image: muhammadKashif,
  },
  {
    id: 19,
    name: "Muhammad Khan",
    position: "MIDFIELDER",
    image: muhammadKhan,
  },
  {
    id: 20,
    name: "Muhammad Usama",
    position: "MIDFIELDER",
    image: muhammadUsama,
  },
  { id: 22, name: "Owais Ahmad", position: "MIDFIELDER", image: owaisAhmad },
  { id: 23, name: "Saud Ahmad", position: "FORWARD", image: saudAhmad },
  { id: 24, name: "Shahid Anjum", position: "FORWARD", image: shahidAnjum },
  { id: 25, name: "Shameer Ali", position: "FORWARD", image: shameerAli },
  {
    id: 26,
    name: "Tufail Shinwari",
    position: "FORWARD",
    image: tufailShinwari,
  },
];

const Players = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="flex flex-col items-center mb-10">
      <p className="text-green-600 text-md font-bold text-center mb-3">
        Our Team
      </p>
      <h1 className="text-4xl font-bold text-center uppercase">
        Meet Maidaan Players
      </h1>

      <div className="relative w-full mt-6">
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white bg-green-600 p-3 cursor-pointer shadow-md"
        >
          <HiOutlineArrowNarrowLeft size={24} />
        </button>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={5}
          spaceBetween={1}
          onSwiper={setSwiperInstance}
          className="w-full"
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile (extra small screens)
            640: { slidesPerView: 2 }, // Small screens
            768: { slidesPerView: 2 }, // Medium screens
            1024: { slidesPerView: 4 }, // Large screens
            1280: { slidesPerView: 5 }, // Extra large screens
          }}
        >
          {players.map((player) => (
            <SwiperSlide key={player.id}>
              <div className="relative group cursor-pointer flex items-center justify-center">
                <Image
                  src={player.image}
                  alt={player.name}
                  className="bg-gray-300"
                />

                <h2 className="text-xl font-semibold absolute bottom-3 left-3 bg-white p-2">
                  {player.name}
                </h2>
                <div className="absolute inset-0 bg-green-900 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white">
                  <p className="text-xl">{player.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white bg-green-600 p-3 cursor-pointer shadow-md"
        >
          <HiOutlineArrowNarrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Players;
