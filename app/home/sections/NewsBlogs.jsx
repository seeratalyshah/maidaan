import React from "react";
import NewsCard from "../components/NewsCard";
import NewssCard from "../components/NewssCard";
import { newsCards, shortNews } from "@/app/data";
import NationwideTrials from "../components/NationwideTrials";

const NewsBlogs = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 px-4 md:px-16 lg:px-24 gap-8">
      <div className="col-span-1 lg:col-span-2">
        <div className="mb-4">
          <p className="text-green-600 text-lg font-bebas">Our Blog</p>
          <h1 className="text-4xl md:text-5xl font-bebas">Recent club news</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsCards.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {shortNews.map((item) => (
            <NewssCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <div className="mb-4">
          <p className="text-green-600 text-lg font-bebas">
            Trials
          </p>
          <h1 className="text-4xl md:text-5xl font-bebas">Nationwide Trials</h1>
        </div>
        <div className="">
          {/* <FootballStandings /> */}
          <NationwideTrials />
        </div>
      </div>
    </div>
  );
};

export default NewsBlogs;
