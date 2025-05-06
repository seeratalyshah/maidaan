import MatchSlider from "@/app/media-coverage/sections/MatchesSlider";
import NewsBlogs from "./home/sections/NewsBlogs";
import Players from "./home/sections/Players";
import HeroVideoSection from "./home/components/HeroVideoSection";
import VideoGallerySection from "./home/sections/VideoGallerySection";

/* app/page.jsx  – Home page metadata */

export const metadata = {
  title: "Maidaan Football Academy – Grass-roots Trials, Tournaments & News",
  description:
    "Follow Maidaan’s nationwide trials, elite training camps and international tournaments. Empowering Pakistan’s street-connected youth through football.",
  keywords: [
    "Maidaan",
    "Pakistan football trials",
    "Norway Cup 2025",
    "Street Child Football World Cup USA 2026",
    "grassroots football Pakistan",
    "youth soccer academy",
    "Muslim Hands",
    "football camp Islamabad",
  ],

  // canonical URL for the homepage
  alternates: { canonical: "https://maidaan.org.uk/" },

  openGraph: {
    type: "website",
    url: "https://maidaan.org.uk/",
    title: "Maidaan – Pakistan’s Largest Grass-roots Football Movement",
    description:
      "Nationwide trials, elite player development, global tournaments and life-changing opportunities for marginalised youth.",
    siteName: "Maidaan Football Academy",
  },

  twitter: {
    card: "summary_large_image",
    creator: "@MaidaanFC",          
    title: "Maidaan – Trials, Camps & International Tournaments",
    description:
      "Track Maidaan’s upcoming Norway Cup 2025, Street Child World Cup USA 2026 and more.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: "index,follow,max-image-preview:large",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <div>
        <HeroVideoSection />
        <MatchSlider />
      </div>
      <NewsBlogs />
      <Players />
      <VideoGallerySection />
    </div>
  );
}
