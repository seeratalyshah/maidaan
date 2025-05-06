import Blogs from "./Blogs";
import HeroSection from "./HeroSection";

/* app/blogs/page.jsx  – Blogs landing metadata */

export const metadata = {
  title: "Maidaan Blogs – Stories of Street-Connected Football Talent",
  description:
    "Explore inspiring stories, match reports and player highlights from Maidaan’s grassroots football movement empowering Pakistan’s street children.",
  keywords: [
    "Maidaan blogs",
    "Pakistan street football stories",
    "Norway Cup updates",
    "youth football news",
    "street child world cup articles",
    "grassroots soccer Pakistan",
  ],

  alternates: { canonical: "https://maidaan.org.uk/blogs" },

  openGraph: {
    type: "website",
    url: "https://maidaan.org.uk/blogs",
    title: "Maidaan Blogs – Passion, Talent & Triumph",
    description:
      "Catch the latest headlines, local tournaments and behind-the-scenes journeys of young Maidaan athletes making their mark on the field.",
    siteName: "Maidaan Football Academy",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogSection() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <HeroSection />
      <Blogs />
    </div>
  );
}
