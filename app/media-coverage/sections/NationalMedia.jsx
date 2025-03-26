"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import geoLogo from "../../../public/images/news-logos/geo-logo.png";
import nationLogo from "../../../public/images/news-logos/nation-logo.png";
import theNewsLogo from "../../../public/images/news-logos/the-news-logo.png";
import isbLogo from "../../../public/images/news-logos/islamabad.webp";
import inpLogo from "../../../public/images/news-logos/inp-logo.png";
import peLogo from "../../../public/images/news-logos/pe-logo.png";

const mediaCategories = [
  "All",
  "Geo News",
  "The Nation",
  "The News",
  "Islamabad Scene",
  "INP",
  "FIFA",
  "UN",
  "Al Jazeera",
  "Pakistan Embassy",
];

const mediaCoverage = [
  {
    id: 1,
    outlet: "Geo News",
    logo: geoLogo,
    title:
      "Pakistan street child football team secures spot in Norway Cup 2024 playoffs",
    summary:
      "Players of Pakistan's U17 street child football team, playing under the name of Muslim Hands FC, in Norway Cup 2024 in this group photo. — Reporter",
    link: "https://www.geo.tv/latest/556740-pakistan-street-child-football-team-secures-spot-in-norway-cup-2024-playoffs",
    video: "",
  },
  {
    id: 2,
    outlet: "Pakistan Embassy",
    logo: peLogo,
    title: "Pakistan qualifies for Street Child Football World Cup Final",
    summary:
      "Pakistan has reached the final of the Street Child Football World Cup 2018. The event is held right before every FIFA World Cup to highlight the plight of street children all over the world. This is Pakistan's highest ever spot in the tournament. ",
    link: "https://mofa.gov.pk/press-releases/pakistan-qualifies-for-street-child-football-world-cup-final?mission=abu-dhabi",
    video: "",
  },
  {
    id: 3,
    outlet: "The News",
    logo: theNewsLogo,
    title: "Win for Pakistan street child team",
    summary:
      "ISLAMABAD: Pakistan’s street child football team Sunday got off to a winning start in the Norway Cup beating Norway’s Astoor Club 6-1 in Oslo (Norway).",
    link: "https://www.thenews.com.pk/print/1214377-win-for-pakistan-street-child-team",
    video: "",
  },
  {
    id: 4,
    outlet: "The Nation",
    logo: nationLogo,
    title:
      "Pakistan Street Child Football Team reaches Oslo for Norway Cup 2024",
    summary:
      "LAHORE    -   The Pakistan Street Child Football Team reached Oslo, Norway, to participate in the Norway Cup 2024 on Saturday.",
    link: "https://www.nation.com.pk/28-Jul-2024/pakistan-street-child-football-team-reaches-oslo-for-norway-cup-2024",
    video: "",
  },
  {
    id: 5,
    outlet: "Islamabad Scene",
    logo: isbLogo,
    title: "Pakistan finishes Street Child Football World Cup runner up",
    summary:
      "Pakistan, after putting up a valiant show throughout the tournament, finished as runner-up in the Street Child Football World Cup 2022, after losing to Egypt in the final.",
    link: "https://www.islamabadscene.com/pakistan-finishes-street-child-football-world-cup-runner-up/",
    video: "",
  },
  {
    id: 6,
    outlet: "INP",
    logo: inpLogo,
    title:
      "Pakistan Street child football team reveals kit for Norway Cup 2024",
    summary:
      "The Pakistan Street Child Football Federation has unveiled its new kit for the Norway Cup 2024 as the national team departs for the tournament.",
    link: "https://www.inp.net.pk/news-detail/sports/pakistan-street-child-football-team-reveals-kit-for-norway-cup-2024",
    video: "",
  },
];

const NationalMedia = () => {
  const [selectedOutlet, setSelectedOutlet] = useState("All");

  const filteredMedia =
    selectedOutlet === "All"
      ? mediaCoverage
      : mediaCoverage.filter((item) => item.outlet === selectedOutlet);

  return (
    <section className="px-4 md:px-16 lg:px-24">
      <div className="mx-auto">
        <h1 className="text-4xl md:text-5xl font-bebas mb-10">
          <span className="text-green-600">Pakistan’s</span> Pride in the Media
        </h1>

        {/* Filters */}
        <div className="flex space-x-4 overflow-x-auto pb-4 border-b xl:overflow-x-visible">
          {mediaCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-md font-medium border rounded-md hover:opacity-80 whitespace-nowrap ${
                selectedOutlet === category
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedOutlet(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Media Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredMedia.length > 0 ? (
            filteredMedia.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg p-4 flex flex-col h-full"
              >
                <div className="flex items-start space-x-4">
                  <Image
                    src={item.logo}
                    alt="Outlet Logo"
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <h2 className="text-lg font-bold">{item.title}</h2>
                </div>
                <p className="text-gray-600 my-2">{item.summary}</p>
                <div className="mt-auto flex justify-end items-end">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 flex items-center"
                  >
                    Read More
                    <FaExternalLinkAlt className="ml-2" />
                  </a>
                </div>
                {item.video && (
                  <div className="mt-4">
                    <iframe
                      width="100%"
                      height="200"
                      src={item.video}
                      title="Media Coverage"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 mt-6">
              No news available for the selected outlet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NationalMedia;
