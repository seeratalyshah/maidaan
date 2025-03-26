"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function HeroVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="https://s3.eu-central-1.amazonaws.com/strategytracker.net/assets-mh/maidaan/videos/homevideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={togglePlay}
        className="absolute bottom-3 right-[50%] bg-white text-black shadow-lg rounded-full p-2 hover:bg-gray-200 transition"
      >
        {isPlaying ? <Pause size={22} /> : <Play size={22} />}
      </button>
    </section>
  );
}
