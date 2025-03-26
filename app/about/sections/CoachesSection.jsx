import Image from "next/image";
import headCoach from "@/images/about-images/head-coach.webp";
import assistantCoach from "@/images/about-images/assistance-coach.webp";
import sajidaliCoach from "@/images/about-images/sajidali-coach.webp";
import shahidfareedCoach from "@/images/about-images/shahidfareed-coach.webp";

export default function CoachesSection() {
  const coaches = [
    { name: "Muhammad Rasheed", position: "Head Coach", image: headCoach },
    { name: "Nadeem", position: "Assistance Coach", image: assistantCoach },
    { name: "Sajid Ali", position: "Coach", image: sajidaliCoach },
    { name: "Shahid Fareed", position: "Coach", image: shahidfareedCoach },
  ];

  return (
    <section className="px-4 md:px-16 lg:px-24">
      <div className="mx-auto">
      <h1 className="text-4xl md:text-5xl font-bebas mb-10 text-center">OUR COACHES</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div key={index} className="bg-white">
              {/* Ensure the image fills the container */}
              <div className="relative w-full h-80">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-4 pl-2">{coach.name}</h3>
              <p className="text-gray-600 pl-2">Position: {coach.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
