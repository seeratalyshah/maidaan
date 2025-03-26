"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

export default function VideoGallerySection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    console.log("clicked");
  };

  const videos = [
    {
      title: "I am somebody",
      src: "https://s3.eu-central-1.amazonaws.com/strategytracker.net/assets-mh/maidaan/videos/iamsomebody.mp4",
    },
    {
      title: "If I am PM",
      src: "https://s3.eu-central-1.amazonaws.com/strategytracker.net/assets-mh/maidaan/videos/if-i-am-PM.mp4",
    },
    {
      title: "Maidaan",
      src: "https://s3.eu-central-1.amazonaws.com/strategytracker.net/assets-mh/maidaan/videos/maidan.mp4",
    },
    {
      title: "Shahid Fareed Success Story",
      src: "https://s3.eu-central-1.amazonaws.com/strategytracker.net/assets-mh/maidaan/videos/shahid-fareed-success-story.mp4",
    },
    {
      title: "Sports Complex",
      src: "https://s3.eu-central-1.amazonaws.com/strategytracker.net/assets-mh/maidaan/videos/sports-complex.mp4",
    },
    {
      title: "Football Academy",
      src: "https://s3.eu-central-1.amazonaws.com/strategytracker.net/assets-mh/maidaan/videos/football-academy.mp4",
    },
  ];

  return (
    <>
      <div className="bg-[#F5F5F5] p-4 md:p-16 lg:p-24">
        <div className="flex flex-col items-center">
          <div className="mb-10 text-center">
            <p className="text-green-600 text-md font-bold mb-3">
              Video Gallery
            </p>
            <h1 className="text-4xl font-bold uppercase">
              Be Part of Football History
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="relative group cursor-pointer w-full">
                <div className="w-full h-[300px] px-10 bg-black text-white flex items-center justify-center">
                  <h2 className="font-bebas text-2xl lg:text-3xl xl:text-4xl">
                    {video.title}
                  </h2>
                </div>
                <button
                  onClick={() => openVideo(video)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
                >
                  <Play size={48} className="text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 bg-white text-black rounded-full p-2 z-10"
            >
              <X size={24} />
            </button>
            <video className="w-full" controls autoPlay>
              <source src={selectedVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
