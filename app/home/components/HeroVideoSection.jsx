"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function HeroVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [aspectRatio, setAspectRatio] = useState(0.5625); // fallback 16:9 aspect ratio

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const updateAspectRatio = () => {
      const video = videoRef.current;
      if (video && video.videoWidth && video.videoHeight) {
        const ratio = video.videoHeight / video.videoWidth;
        setAspectRatio(ratio);
      }
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadedmetadata", updateAspectRatio);
    }

    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", updateAspectRatio);
      }
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden mt-[90px] lg:mt-0">
      <div
        className="w-full"
        style={{ aspectRatio: `${1 / aspectRatio}` }} // aspect-ratio: width / height
      >
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://s3.eu-central-1.amazonaws.com/strategytracker.net/assets-mh/maidaan/videos/homevideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <button
        onClick={togglePlay}
        className="absolute bottom-2 lg:bottom-4 xl:bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black shadow-lg rounded-full p-2 hover:bg-gray-200 transition"
      >
        {isPlaying ? <Pause size={22} /> : <Play size={22} />}
      </button>
    </section>
  );
}
