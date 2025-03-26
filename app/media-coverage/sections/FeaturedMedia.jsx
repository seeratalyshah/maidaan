import React from "react";
import news1 from "@/images/media-images/news1.webp";
import news7 from "@/images/media-images/news7.jpg";
import news8 from "@/images/media-images/news8.jpg";
import Image from "next/image";
import geoLogo from "@/images/news-logos/geo-logo.png";
import peLogo from "@/images/news-logos/pe-logo.png";
import theNewsLogo from "@/images/news-logos/the-news-logo.png";
import nrk from "@/images/news-logos/nrk.png";
import news9 from "@/images/media-images/news9.jpg";

const featuredNews = [
  {
    id: 1,
    image: news1,
    newsChannels: [peLogo],
    link: "https://mofa.gov.pk/press-releases/pakistan-qualifies-for-street-child-football-world-cup-final?mission=abu-dhabi",
    title: "Pakistan qualifies for Street Child Football World Cup Final",
    date: "October 14, 2018",
    description:
      "Pakistan has reached the final of the Street Child Football World Cup 2018. The event is held right before every FIFA World Cup to highlight the plight of street children all over the world.",
  },
  {
    id: 2,
    image: news7,
    newsChannels: [geoLogo],
    link: "https://www.geo.tv/latest/556740-pakistan-street-child-football-team-secures-spot-in-norway-cup-2024-playoffs",
    title:
      "Pakistan street child football team secures spot in Norway Cup 2024 playoffs",
    date: "July 30, 2024",
    description:
      "Playing under the name of Muslim Hands FC, Pakistan's U17 street child football team has grabbed a spot in the Norway Cup 2024 playoffs after their third consecutive victory as they defeated Oystese IL Oystese/Norheimsund 3-1 on Tuesday.",
  },
  {
    id: 3,
    image: news8,
    newsChannels: [theNewsLogo],
    link: "https://www.thenews.com.pk/print/1214377-win-for-pakistan-street-child-team",
    title: "Win for Pakistan street child team",
    date: "July 29, 2024",
    description:
      "ISLAMABAD: Pakistan’s street child football team Sunday got off to a winning start in the Norway Cup beating Norway’s Astoor Club 6-1 in Oslo (Norway). ",
  },
  {
    id: 4,
    image: news9,
    newsChannels: [nrk],
    link: "https://www.nrk.no/norge/muslim-hands-pakistan-_-et-lag-med-gategutter-pa-norway-cup-1.16504248",
    title:
      "From the Streets to the Norway Cup: 'They Came with Worn-Out Football Shoes Taped Together'",
    date: "Aug 04, 2023",
    description:
      "The Pakistani street football team has sparked enormous enthusiasm. Now, the 17-year-olds are ready for the Norway Cup final.",
  },
];

const FeaturedMedia = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24" id="featured-news">
      <div className="mx-auto">
        <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bebas">Latest Headlines</h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg overflow-hidden border-t border-slate-100 h-full flex flex-col"
            >
              <div className="flex justify-between items-end px-4 pb-2">
                <span className="text-md text-green-600 font-semibold">
                  News Channels
                </span>
                <div className="flex items-center gap-2 mt-2">
                  {item.newsChannels.map((news, index) => (
                    <Image
                      src={news}
                      alt="news-logo"
                      className="w-6 h-6 rounded-md"
                      key={index}
                    />
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div>
                <Image
                  src={item.image}
                  alt="Football Match"
                  className="w-full h-[200px] object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-gray-500 text-xs">{item.date}</p>
                <h3 className="text-lg font-bold text-gray-900 mt-1 uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 mb-4">
                  {item.description}
                </p>

                {/* Button at the bottom */}
                <div className="mt-auto">
                  <a href={item.link} target="_blank">
                    <button className="w-full px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-md font-medium">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMedia;
