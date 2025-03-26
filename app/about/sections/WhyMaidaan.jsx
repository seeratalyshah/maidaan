import players from "@/public/images/media-images/news1.webp";
import playersSelected from "@/public/images/about-images/players_selected.webp";
import urban from "@/public/images/about-images/urban.webp";
import global from "@/public/images/about-images/global.webp";
import training from "@/public/images/about-images/training.webp";
import legal from "@/public/images/media-images/news5.jpeg";
import Image from "next/image";

const benefits = [
  {
    id: 1,
    icon: players,
    title: "1836+",
    description: "children participated in nationwide trials",
  },

  {
    id: 3,
    icon: playersSelected,
    title: "167 ",
    description:
      "players selected for elite training and international exposure",
  },

  {
    id: 4,
    icon: urban,
    title: "26+",
    description: "cities covered, from urban centers to remote communities",
  },
  {
    id: 2,
    icon: global,
    title: "FIFA/AFC-aligned development pipeline",
    description: "preparing young players for global football",
  },
  {
    id: 5,
    icon: legal,
    title: "Legal and educational support",
    description: "ensuring every child’s right to identity and learning",
  },
  {
    id: 6,
    icon: training,
    title: "Vocational training",
    description: "bridging the gap between football and future employment",
  },
];

const WhyMaidaan = () => {
  return (
    <section className="bg-[#F5F5F5] p-4 md:p-16 lg:p-24 lg:px-72">
      <div className="mx-auto">
        {/* Left Text Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bebas text-center mt-2 text-green-600">
            Why Maidaan Matters
          </h2>
          <p className="text-gray-600 mt-4 text-center mb-10">
            Join the Movement – Transform Lives Through Football!
          </p>
        </div>

        {/* Right Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <BenefitCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMaidaan;

// Benefit Card Component
function BenefitCard({ item }) {
  return (
    <div className="bg-white shadow-md text-center">
      <Image
        src={item.icon}
        alt="icon"
        width={500}
        height={200}
        className="w-full h-[200px] object-cover"
      />
      <h3 className="font-bold text-lg mt-4 uppercase py-1 px-4">
        {item.title}
      </h3>
      <p className="text-gray-600 px-4 pb-4">{item.description}</p>
    </div>
  );
}
