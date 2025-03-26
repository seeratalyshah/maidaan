"use client";
import Link from "next/link";
import { FaFutbol, FaGraduationCap, FaHandsHelping } from "react-icons/fa";
const footBallTraining = [
  {
    amount: "£50",
    description: "Provides a full kit & football gear for one child.",
  },
  {
    amount: "£150",
    description: " Covers one month of elite coaching for a player.",
  },
  {
    amount: "£500",
    description: "Sponsors a child's full training & tournament participation.",
  },
  {
    amount: "£1,000",
    description:
      "Helps fund nationwide football trials & international travel.",
  },
];

const education = [
  {
    amount: "£20",
    description:
      "Registers the birth of a street child, giving them legal identity.",
  },
  {
    amount: "£27",
    description:
      "Ensures a street child is enrolled in school with basic supplies.",
  },
  {
    amount: "£90",
    description: "Provides meals for street-connected youth for a month.",
  },
  {
    amount: "£3000",
    description:
      "Supports vocational training for a youth who cannot return to school.",
  },
];

const sponsorship = [
  {
    amount: "£500",
    description:
      "Sponsor a child for one full year, including football training, education, and meals.",
  },
  {
    amount: "£1,500+",
    description:
      "Corporate Sponsorship opportunities, including branding on kits, tournaments, and training camps.",
  },
];
export default function DonateSection() {
  return (
    <section className="bg-[#F5F5F5] p-4 md:p-16 lg:p-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bebas">
          <span className="text-green-600"> Donate Now – </span>Make a Real
          Difference
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Every contribution brings us one step closer to empowering children
          through football. Your generosity ensures that they have the right to
          play, learn, and succeed.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6 mb-16">
        {/* Football Development */}
        <div className="bg-white py-10 px-4 shadow-md">
          <div className="flex items-center justify-center gap-3">
            <FaFutbol className="text-green-600 text-lg md:text-2xl lg:text-3xl xl:text-4xl" />
            <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bebas text-gray-800">
              Football Development & Training
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 rounded-xl mt-10">
            {footBallTraining.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center border border-green-600 text-center bg-white rounded-xl p-6 transition-transform duration-300 hover:shadow-2xl hover:bg-green-200 hover:text-white hover:scale-105 w-[100%] max-w-[180px] min-h-[150px]"
              >
                {/* amount */}
                <h2 className="text-2xl font-semibold text-gray-900 mt-4">
                  {item.amount}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Welfare */}
        <div className="bg-white py-10 px-4 shadow-md">
          <div className="flex items-center justify-center gap-3">
            <FaGraduationCap className="text-green-600 text-lg md:text-2xl lg:text-3xl xl:text-4xl" />
            <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bebas text-gray-800">
              Education & Welfare
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 rounded-xl mt-10">
            {education.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up-right"
                data-aos-delay={index * 300}
                className="flex flex-col items-center border border-green-600 text-center bg-white rounded-xl p-6 transition-transform duration-300 hover:shadow-2xl hover:bg-green-200 hover:text-white hover:scale-105 w-full max-w-[180px] min-h-[150px]"
              >
                {/* amount */}
                <h2 className="text-2xl font-semibold text-gray-900 mt-4">
                  {item.amount}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Sponsorship & Long-Term Support */}
      <div className="flex justify-center">
        <div className="bg-white py-10 px-10 w-full max-w-[900px] shadow-md md:col-span-2 my-8">
          <div className="flex items-center justify-center gap-3">
            <FaHandsHelping className="text-green-600 text-lg md:text-2xl lg:text-3xl xl:text-4xl" />
            <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bebas text-gray-800">
              Sponsorship & Long-Term Support
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 rounded-xl mt-10">
            {sponsorship.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center border border-green-600 text-center bg-white rounded-xl p-6 transition-transform duration-300 hover:shadow-2xl hover:bg-green-200 hover:text-white hover:scale-105 w-[100%] max-w-[250px] min-h-[150px]"
              >
                {/* amount */}
                <h2 className="text-2xl font-semibold text-gray-900 mt-4">
                  {item.amount}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link
        href="https://www.justgiving.com/page/maidaan-for-street-children-1715347748770"
        target="_blank"
      >
        <div className="mt-8 text-center">
          <button className="bg-green-600 text-white px-6 py-3 text-lg font-semibold uppercase shadow-md hover:bg-green-700 transition">
            Donate Now
          </button>
        </div>
      </Link>
    </section>
  );
}
