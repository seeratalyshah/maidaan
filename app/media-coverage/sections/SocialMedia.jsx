"use client";
import React, { useEffect, useState } from "react";
import InstaPostCard from "../components/InstaPost";
import FacebookPostCard from "../components/FacebookPostCard";
import TikTokPostCard from "../components/TikTokPostCard";
import YoutubePostCard from "../components/YoutubePostCard";
import LinkedInPost from "../components/LinkedInPost";
import logo from "@/public/images/home-images/maidaan-home-logo.png";
import firstPost from "@/public/images/media-images/firstpost.jpeg";
import secondPost from "@/public/images/media-images/secondpost.jpeg";
import thirdPost from "@/public/images/media-images/thirdpost.jpeg";
import fbPost1 from "@/public/images/media-images/fbPost1.jpg";
import fbPost2 from "@/public/images/media-images/fbPost2.jpg";
import fbPost3 from "@/public/images/media-images/fbPost3.jpg";
import linkPost1 from "@/public/images/media-images/linkPost1.jpg";
import linkPost2 from "@/public/images/media-images/linkPost2.png";
import linkPost3 from "@/public/images/media-images/linkPost3.png";

const SocialMedia = () => {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [facebookPosts, setFacebookPosts] = useState([]);
  const [linkedInPosts, setLinkedInPosts] = useState([]);
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  // Fetch latest tweets and Instagram posts (You can replace this with API calls to your backend)
  useEffect(() => {
    // Mocking Instagram post fetching
    setInstagramPosts([
      {
        id: 1,
        user_name: "maidaanpk01",
        user_profile: logo,
        image_url: firstPost,
        tag_line: "✨ From Streets to Stadiums 📣",
        hash_tags:
          "#SportsforDevelopment #YouthDevelopment #ProudAchievement #FutureStars",
      },
      {
        id: 2,
        user_name: "maidaanpk01",
        user_profile: logo,
        image_url: secondPost,
        tag_line: "🎉⚽Our Proud Shaheens🦅💚",
        hash_tags: "#Maidaan #PakistanFootball #MuslimhandsPK #lamsomebody",
      },
      {
        id: 3,
        user_name: "maidaanpk01",
        user_profile: logo,
        image_url: thirdPost,
        tag_line:
          "Four players from Pakistan Street Child Football Team have been called up for the Pakistan National U-17 Team Camp in Abbottabad for the 2024 SAFF U-17 Championship, taking place from 20 - 30 September 2024 in Thimphu, Bhutan! ⚽",
        hash_tags: "#Maidaan #PakistanFootball #saffy17 #lamsomebody",
      },
    ]);

    // Mock Facebook post data
    setFacebookPosts([
      {
        id: 1,
        user_name: "Maidaan Pakistan",
        user_profile: logo,
        image_url: fbPost1,
        tag_line: "𝐋𝐞𝐟𝐭 𝐌𝐢𝐝𝐟𝐢𝐞𝐥𝐝 𝐌𝐚𝐠𝐢𝐜𝐢𝐚𝐧𝐬!",
        hash_tags:
          "#LeftMidfielder  #GameChangers #Iamsomebody #PakistanFootball",
        description:
          "Swift, creative, and unstoppable—our Left Midfielders own the game with precise passes, explosive runs, and game-changing assists! From defense to attack, they control the rhythm. 🔥💪",
      },
      {
        id: 2,
        user_name: "Maidaan Pakistan",
        user_profile: logo,
        image_url: fbPost2,
        tag_line: "🎾 𝐖𝐡𝐚𝐭 𝐢𝐬 𝐓𝐞𝐪𝐛𝐚𝐥𝐥?",
        hash_tags:
          "#Teqball #Balochistan #Pakistan #Sports #Football #Quetta #MuslimHands #SmashForGlory",
        description:
          "Teqball is a unique and modern sport that combines elements of 𝗳𝗼𝗼𝘁𝗯𝗮𝗹𝗹 𝗮𝗻𝗱 𝘁𝗮𝗯𝗹𝗲 𝘁𝗲𝗻𝗻𝗶𝘀. Playing on a curved table requires players to skillfully control the ball using precision, speed, and intelligence. The sport is rapidly gaining popularity worldwide, and young athletes in Pakistan are also embracing it with enthusiasm.",
      },
      {
        id: 3,
        user_name: "Maidaan Pakistan",
        user_profile: logo,
        image_url: fbPost3,
        tag_line: "CENTER MIDFIELDERS - The Heart of the Game! ⚽🔥",
        hash_tags:
          "#Maidaan #Iamsomebody #midfielder #PakistaniFootball #GameChangers",
        description:
          "Our Center Midfielders are the engine of the team—controlling possession, creating chances, and dictating the pace of the game. From defensive grit to attacking vision, these players do it all! Great teams are built around great midfielders – and these rising stars are ready to make an impact! 💪",
      },
    ]);

    // Mock LinkedIn post data
    setLinkedInPosts([
      {
        id: 1,
        user_name: "Maidaan Pakistan",
        user_profile: logo,
        image_url: linkPost1,
        tag_line:
          "📢 We’re Hiring! 𝐂𝐒𝐑 & 𝐅𝐮𝐧𝐝𝐫𝐚𝐢𝐬𝐢𝐧𝐠 𝐒𝐩𝐞𝐜𝐢𝐚𝐥𝐢𝐬𝐭 for Maidaan – Be Part of 𝐏𝐚𝐤𝐢𝐬𝐭𝐚𝐧’𝐬 𝐋𝐚𝐫𝐠𝐞𝐬𝐭 𝐆𝐫𝐚𝐬𝐬𝐫𝐨𝐨𝐭𝐬 𝐅𝐨𝐨𝐭𝐛𝐚𝐥𝐥 𝐈𝐧𝐢𝐭𝐢𝐚𝐭𝐢𝐯𝐞! ⚽",
        hash_tags:
          "#Hiring hashtag#Fundraising hashtag#CSR hashtag#FootballForChange hashtag#Maidaan",
        description:
          "Do you have a passion for youth development, corporate social responsibility (CSR), and fundraising? Do you want to play a key role in securing sponsorships and funding for Pakistan’s rising football stars? If yes, Maidaan wants YOU!",
      },
      {
        id: 2,
        user_name: "Maidaan Pakistan",
        user_profile: logo,
        image_url: linkPost2,
        tag_line:
          "The Biggest Grassroots Football Camp in Pakistan is Here! 🇵🇰⚽",
        hash_tags:
          "#Maidaan hashtag#MuslimHands hashtag#Football hashtag#Pakistan hashtag#Qatar hashtag#StreetChildWorldCup hashtag#IAmSomebody hashtag#Soccer hashtag#PakistanFootball",
        description:
          "The Maidaan 2025 Camp has officially kicked off in Wazirabad, bringing together 167 young talents from across Pakistan!",
      },
      {
        id: 3,
        user_name: "Maidaan Pakistan",
        user_profile: logo,
        image_url: linkPost3,
        tag_line:
          "What If Pakistan Street Child Football Team Players Became Prime Minister/President, or Superheroes?",
        hash_tags:
          "#Maidaan #Iamsomebody #midfielder #PakistaniFootball #GameChangers",
        description:
          "Imagine a world where the inspiring players of the Pakistan Street Child Football Team become leaders or superheroes! 🚀⚽",
      },
    ]);

    // Mock TikTok Posts
    setYoutubeVideos([
      {
        id: 1,
        user_name: "Maidaan",
        user_profile: logo,
        video_url: "https://www.youtube.com/embed/klCK_MnDN_Y", // Replace with actual TikTok embed URL
        caption: "I AM SOMEBODY | Movie Trailer",
        hash_tags: "#iamsomebody #Maidaan",
      },
      {
        id: 2,
        user_name: "Maidaan",
        user_profile: logo,
        video_url: "https://www.youtube.com/embed/KGTKjzDckP4", // Replace with actual TikTok embed URL
        caption:
          "Penalties | Final Match | Team Pakistan (MHFC) vs Sola FK | Norway Cup 2023 Ekeberg, Oslo | Maidaan",
        hash_tags: "#silverware #maidaan #nc23",
      },
      {
        id: 3,
        user_name: "Maidaan",
        user_profile: logo,
        video_url: "https://www.youtube.com/embed/kTiTU0W4MGk", // Replace with actual TikTok embed URL
        caption:
          "Match 6 | Quarter Final | Team Pakistan (MHFC) vs Sandviken IL | Full Match | Norway Cup 2023 Oslo",
        hash_tags: "#maidaan #nc23 #pff",
      },
    ]);
  }, []);
  return (
    <section className="bg-[#F5F5F5] p-4 md:p-16 lg:p-24">
      <div className="mx-auto">
        <h1 className="text-4xl md:text-5xl font-bebas mb-10">
          Follow Us on Social Media
        </h1>

        {/* Latest Instagram Posts Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bebas mb-6 text-green-600 text-left">
            Latest Instagram Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramPosts.map((post) => (
              <InstaPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        {/* TikTok Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bebas mb-6 text-green-600 text-left">
            Latest Youtube Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.map((post) => (
              <YoutubePostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        {/* Latest Facebook Posts Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bebas mb-6 text-green-600 text-left">
            Latest Facebook Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facebookPosts.map((post) => (
              <FacebookPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Latest LinkedIn Posts Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bebas mb-6 text-green-600 text-left">
            Latest LinkedIn Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkedInPosts.map((post) => (
              <LinkedInPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
