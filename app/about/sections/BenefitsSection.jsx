"use client";
import grassroot from "@/public/images/about-images/grassroot.webp";
import expanding from "@/public/images/about-images/expanding.webp";
import womenFootball from "@/public/images/about-images/women-football.webp";
import sustainable from "@/public/images/about-images/maidaanfuture2.webp";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    id: 1,
    icon: grassroot,
    title: "FIFA/AFC Partnership",
    description:
      "Become Pakistan’s official grassroots football development program.",
  },

  {
    id: 3,
    icon: sustainable,
    title: "Self-Sustaining Social Enterprise",
    description:
      "Funding Maidaan through merchandise, sponsorships, and events.",
  },

  {
    id: 4,
    icon: expanding,
    title: "Expanding to 200+ Cities",
    description: "Reaching more underserved communities",
  },
  {
    id: 2,
    icon: womenFootball,
    title: "Women’s Football Initiative",
    description: "Launching female-focused training programs",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-[#F5F5F5] p-4 md:p-16 lg:p-24">
      <div className="mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Text Section */}
        <div>
          <h4 className="text-green-600 font-bebas text-lg">What’s Next?</h4>
          <h2 className="text-4xl md:text-5xl font-bebas text-gray-900 mt-2 uppercase">
            The Future of Maidaan
          </h2>
          <p className="text-gray-600 mt-4">
            Maidaan's future is focused on becoming Pakistan’s official
            grassroots football development program through a FIFA/AFC
            partnership. As a self-sustaining social enterprise, it aims to
            secure funding via merchandise, sponsorships, and events. Expansion
            plans include reaching over 50 cities to bring football to
            underserved communities. Additionally, Maidaan is committed to
            launching dedicated training programs for women, fostering
            inclusivity and growth in Pakistan’s football scene.
          </p>
          <Link
            href="https://www.justgiving.com/page/maidaan-for-street-children-1715347748770"
            target="_blank"
          >
            <button className="mt-6 bg-green-600 text-white px-6 py-3 font-bold flex items-center gap-2 hover:bg-green-700 transition">
              Help Us Build the Future of Pakistani Football! →
            </button>
          </Link>
        </div>

        {/* Right Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item) => (
            <BenefitCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

// Benefit Card Component
function BenefitCard({ item }) {
  return (
    <div className="bg-white p-6 shadow-md flex flex-col justify-center items-center text-center">
      <div className="text-green-600 text-5xl">
        <Image src={item.icon} alt="icon" />
      </div>
      <h3 className="font-bold text-lg mt-4 uppercase">{item.title}</h3>
      <p className="text-gray-600 mt-2">{item.description}</p>
    </div>
  );
}
