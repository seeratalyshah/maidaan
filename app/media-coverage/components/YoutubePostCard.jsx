import Image from "next/image";
import React from "react";

const YoutubePostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg border border-gray-200 overflow-hidden flex flex-col h-full">
      {/* TikTok Video Embed */}
      <div className="relative w-full h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]">
        <iframe
          src={post.video_url}
          title="TikTok Video"
          allow="autoplay; encrypted-media"
          className="w-full h-full border-none"
        ></iframe>
      </div>

      {/* Caption & Hashtags */}
      <div className="p-4">
        <p className="text-gray-800 font-medium">{post.caption}</p>
        {post.hash_tags && (
          <p className="text-gray-600 text-sm mt-2">{post.hash_tags}</p>
        )}
      </div>
    </div>
  );
};

export default YoutubePostCard;
