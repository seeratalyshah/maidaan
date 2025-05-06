import Image from "next/image";
import { FaFutbol } from "react-icons/fa";
import whatwedo1 from "@/app/images/about-images/whatwedo1.webp";
import whatwedo2 from "@/app/images/about-images/whatwedo2.webp";

const WhatWeDo = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-16">
        {/* Left Side - Player Image */}
        <div className="w-full xl:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-bebas">
            <span className="text-green-600">What We Do </span>– A Holistic
            Approach to Football & Social Change
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed font-semibold">
            Grassroots Football Trials & Player Development
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Maidaan has successfully conducted nationwide football trials in 26+
            cities, including Karachi, Lahore, Peshawar, Islamabad, AJK, and GB.
          </p>
          <ul className="mt-4 text-gray-600 leading-relaxed">
            <li>
              <span className="text-green-600 font-semibold">
                1836+ players engaged
              </span>{" "}
              in open trials.
            </li>
            <li>
              <span className="text-green-600 font-semibold">
                167 top players{" "}
              </span>{" "}
              selected for elite training camps.
            </li>
            <li>
              <span className="text-green-600 font-semibold">
                Preparing players for Norway Cup 2025{" "}
              </span>{" "}
              Street Child World Cup USA 2026, and other global tournaments.
            </li>
          </ul>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our program identifies, trains, and nurtures young footballers,
            ensuring that those from underprivileged backgrounds receive the
            same opportunities as elite players.
          </p>
        </div>

        {/* Right Side - Text Content */}
        <div className="relative w-full xl:w-1/2 flex flex-col md:flex-row gap-6">
          <Image
            src={whatwedo1}
            alt="Coach Ryan Mitchell"
            width={"auto"}
            height={"auto"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <br />
      <div className="flex flex-col xl:flex-row items-center justify-between gap-16">
        {/* Left Side - Player Image */}
        <div className="relative w-full xl:w-1/2 flex flex-col md:flex-row gap-6">
          <Image
            src={whatwedo2}
            alt="Coach Ryan Mitchell"
            width={"auto"}
            height={"auto"}
            className="w-full object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="relative w-full xl:w-1/2 flex flex-col md:flex-row gap-6">
          {/* Vision Card */}
          <div className="w-full md:w-1/2 bg-slate-50 border shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaFutbol className="text-green-600 text-4xl" />
              <h2 className="text-green-900 text-4xl font-bebas">Our Vision</h2>
            </div>
            <p className="text-gray-700">
              To make <span className="font-semibold">Maidaan</span> a household
              name—a project that every institution, government, and football
              federation wants to partner with, and a movement that transforms
              lives through sports, education, and social inclusion.
            </p>
          </div>

          {/* Mission Card */}
          <div className="w-full md:w-1/2 bg-slate-50 border shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaFutbol className="text-green-600 text-4xl" />
              <h2 className="text-green-900 text-4xl font-bebas">
                Our Mission
              </h2>
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Develop football at the grassroots level and establish a
                structured pipeline for youth development.
              </li>
              <li>
                Use football as a tool for social change, providing pathways to
                education and vocational training.
              </li>
              <li>
                Digitally mobilize volunteers across Pakistan to support, train,
                and mentor young players.
              </li>
              <li>
                Ensure every child has a legal identity through birth
                registration and access to government services.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
