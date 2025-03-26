import Image from "next/image";
import { FaTrophy } from "react-icons/fa";

// import bgImage from "@/public/images/bg-img.png";

const MatchTicket = ({ item }) => {
  return (
    <div className="flex bg-white shadow-lg overflow-hidden">
      {/* Left Section (Date & Barcode) */}
      <div className="w-1/4 flex flex-col items-center justify-center gap-3 p-6 border-r-2 border-black border-dashed">
        <p className="text-gray-500 uppercase text-xs">{item.day}</p>
        <p className="text-4xl font-bold">{item.date}</p>
        <p className="text-green-600 font-bold uppercase text-xs">October</p>
        <Image src={item.barCode} alt="Barcode" className="w-12 mt-4" />
      </div>

      {/* Right Section (Match Info) */}
      <div className="w-3/4 p-4 md:p-8 flex flex-col gap-2 md:gap-4">
        <div className="flex items-center text-green-600 font-bold">
          <FaTrophy className="mr-2 text-sm md:text-lg" />
          <span className="text-sm md:text-lg">{item.title}</span>
        </div>

        <p className="text-gray-600 text-md mt-2">{item.location}</p>

        {/* Match Teams */}
        <div className="flex items-center mt-2">
          <Image src={item.teamOne} alt="Atleticos" className="w-6 h-6 mr-2" />
          <h3 className="font-semibold md:font-bold text-sm md:text-xl">
            {item.players}
          </h3>
          <Image src={item.teamTwo} alt="Salford" className="w-6 h-6 ml-2" />
        </div>

        {/* More Info Button */}
        <button className="mt-4 bg-green-800 hover:bg-green-600 text-white max-w-[150px] w-full px-4 py-3 text-sm font-bold uppercase">
          More Info →
        </button>
      </div>
    </div>
  );
};

export default MatchTicket;
