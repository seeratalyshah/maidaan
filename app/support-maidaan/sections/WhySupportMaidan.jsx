import { FaFutbol, FaGlobe, FaBookOpen, FaCheckCircle } from "react-icons/fa";
import future from "../../../public/images/about-images/maidaan-2018.webp";
import Image from "next/image";

const benefits = [
  {
    id: 1,
    icon: FaFutbol,
    title: "Pakistan’s Largest Grassroots Football Initiative",
    description: "A project that empowers street-connected youth.",
  },

  {
    id: 3,
    icon: FaGlobe,
    title: "Global Recognition & Impact",
    description:
      "Representing Pakistan in Norway Cup, Street Child World Cup & international tournaments.",
  },

  {
    id: 4,
    icon: FaBookOpen,
    title: "More than Football",
    description:
      "Providing education, legal identity, meals, and life-changing opportunities.",
  },
  {
    id: 2,
    icon: FaCheckCircle,
    title: "Transparent & Accountable",
    description: "Donations are monitored & audited, ensuring maximum impact.",
  },
];

export default function WhySupportMaidaan() {
  return (
    <section className="bg-[#F5F5F5] p-6 md:p-12 lg:p-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bebas">
          Why Support <span className="text-green-600">Maidaan?</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Empowering street-connected youth through football, education, and
          life-changing opportunities.
        </p>
      </div>

      {/* Key Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {benefits.map((item) => (
          <BenefitCard key={item.id} item={item} />
        ))}
      </div>

      {/* Corporate Sponsorships */}
      <div className="mt-12 bg-white p-6 md:p-12 shadow-lg flex flex-col md:flex-row items-center md:items-start">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2">
          <Image src={future} alt="Sponsorship" className="w-full h-auto" />
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left mt-6 md:mt-0">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-bebas">
            Corporate & Large-Scale Sponsorships
          </h3>
          <p className="text-gray-600 mt-4">
            Want to make a larger impact? We offer custom sponsorship packages
            for companies and donors who want to fund:
          </p>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>
              ⚽ <strong>Nationwide Football Trials</strong> – Help discover and
              nurture hidden talents by funding large-scale trials across the
              country.
            </li>
            <li>
              🌍 <strong>International Player Sponsorships</strong> – Support
              young athletes in gaining international exposure and world-class
              training.
            </li>
            <li>
              🏟️ <strong>Infrastructure & Equipment Support</strong> –
              Contribute to building training facilities, stadiums, and
              providing essential equipment for aspiring players.
            </li>
          </ul>
          <p className="text-gray-600 mt-6">
            Thank you for being part of Maidaan’s mission to change lives
            through football! ⚽💙
          </p>
        </div>
      </div>
    </section>
  );
}

// Benefit Card Component
function BenefitCard({ item }) {
  const IconComponent = item.icon;

  return (
    <div className="bg-white p-6 shadow-md flex flex-col justify-center items-center text-center rounded-lg">
      <div className="text-green-600 text-5xl md:text-6xl">
        <IconComponent />
      </div>
      <h3 className="font-bold text-lg mt-4 uppercase">{item.title}</h3>
      <p className="text-gray-600 mt-2">{item.description}</p>
    </div>
  );
}
