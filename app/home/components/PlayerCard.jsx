const PlayerCard = ({ item }) => {
    return (
      <div className="p-6 text-center relative md:w-[500px] flex flex-col items-center justify-center z-10 w-full h-[300px] md:h-[400px]">
        {/* Large Number in Background (Behind the Card) */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <span className="text-[300px] font-bold text-white opacity-60">
            {item.number}
          </span>
        </div>
  
        {/* Player Name */}
        <h2 className="text-4xl font-bold text-black">{item.name}</h2>
  
        {/* Position */}
        <p className="text-sm font-semibold mt-3">
          POSITION: <span className="text-green-600">{item.position}</span>
        </p>
  
        {/* Button */}
        <button className="mt-4 bg-green-600 text-white py-2 px-6 font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-700 transition">
          FULL INFO →
        </button>
      </div>
    );
  };
  
  export default PlayerCard;
  