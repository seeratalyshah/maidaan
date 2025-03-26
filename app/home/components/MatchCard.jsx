import Image from "next/image";
import React from "react";

const MatchCard = ({ item }) => {
  return (
    <div className="text-black px-5 flex flex-col items-center gap-4 bg-white opacity-90 shadow-md">
      <div className="bg-green-600 text-white px-6 py-2 text-sm">
        {item.title}
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-8">
        <div className="flex items-center gap-4">
          <Image
            src={item.team_one_icon}
            alt="Atleticos FC"
            className="w-10 h-10 md:w-16 md:h-16"
          />
          {/* <p className="text-sm font-bold mt-2">{item.team_one}</p> */}
        </div>
        {/* <p className="text-sm md:text-lg font-bold">— : —</p> */}
        <p className="text-sm font-bold mt-2 max-w-[200px]">{item.match}</p>
        <div className="flex items-center gap-4">
          {/* <p className="text-sm font-bold mt-2">{item.team_two}</p> */}
          <Image
            src={item.team_two_icon}
            alt="Ailton FC"
              className="w-10 h-10 md:w-16 md:h-16"
          />
        </div>
      </div>
      <div className="">
        <p className="text-sm text-gray-600 text-center mb-4">{item.date}</p>
        {/* <p className="text-sm mb-4 text-center mt-1">{item.time}</p> */}
      </div>
    </div>
  );
};

export default MatchCard;
