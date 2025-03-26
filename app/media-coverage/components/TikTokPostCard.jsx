import React from "react";

const TikTokPostCard = ({ post }) => {
  return (
    <div className="border shadow-lg overflow-hidden w-full h-[550px]">
      <iframe
        src={post.video_url}
        title="TikTok Video"
        allow="autoplay; encrypted-media"
        className="w-full h-full border-none"
      ></iframe>
    </div>
  );
};

export default TikTokPostCard;
