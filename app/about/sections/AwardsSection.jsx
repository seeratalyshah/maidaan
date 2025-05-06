import Image from "next/image";
import maidaan2014 from "@/app/images/about-images/maidan-2014.webp";
import maidaan2015 from "@/app/images/about-images/maidan-2015.webp";
import maidaan2016 from "@/app/images/about-images/maidan-2016.webp";
import maidaan2017 from "@/app/images/about-images/maidan-2017.webp";
import maidaan2018 from "@/app/images/about-images/maidaan-2018.webp";
import maidaan2022 from "@/app/images/about-images/maidaan-2022.webp";
import maidaan2023 from "@/app/images/about-images/maidaan-2023.webp";
import maidaan2024 from "@/app/images/about-images/maidaan-2024.webp";

const awards = [
  {
    year: "2014",
    title: "Street Child Football World Cup Brazil",
    image: maidaan2014,
  },

  {
    year: "2015",
    title: "Chicago KICS Cup - 2nd Position",
    image: maidaan2015,
  },
  {
    year: "2016",
    title: "Gothia Cup China",
    image: maidaan2016,
  },
  {
    year: "2017",
    title: "Gothia Cup China",
    image: maidaan2017,
  },
  {
    year: "2018",
    title:
      "Champions of XI Nations Tournament Russia - The Future Depends On You",
    image: maidaan2018,
  },
  {
    year: "2022",
    title: "Runner Up Street Child World Cup Qatar",
    image: maidaan2022,
  },
  {
    year: "2023",
    title: "Norway Cup",
    image: maidaan2023,
  },
  {
    year: "2024",
    title: "Honor by Chief of Army Staff",
    image: maidaan2024,
  },
];

const AwardsSection = () => {
  return (
    <section className="bg-[#F5F5F5] p-4 md:p-16 lg:p-24">
      <h2 className="text-4xl md:text-5xl font-bebas">
        <span className="text-green-600">
          International Recognition & Achievements
        </span>
      </h2>
      <p className="mt-4 text-gray-600 leading-relaxed mb-10">
        Maidaan has received global recognition, representing Pakistan’s street
        children on the world football stage.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {awards.map((award, index) => (
          <div key={index} className="flex flex-col items-center shadow-xl">
            <Image
              src={award.image}
              alt={award.title}
              width={"auto"}
              height={"auto"}
              className="w-full h-[270px] object-cover"
            />
            <div className="p-4">
              <p className="mt-4 mb-2 text-green-600 text-xl font-semibold">
                {award.year}
              </p>
              <h3 className="text-lg font-bold uppercase">{award.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
