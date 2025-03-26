import MatchSlider from "@/app/media-coverage/sections/MatchesSlider";
import NewsBlogs from "./home/sections/NewsBlogs";
import Players from "./home/sections/Players";
import HeroVideoSection from "./home/components/HeroVideoSection";
import VideoGallerySection from "./home/sections/VideoGallerySection";

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
