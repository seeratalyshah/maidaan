import Image from "next/image";
import { FaRegEye, FaRegComment } from "react-icons/fa";

const NewssCard = ({ item }) => {
  return (
    <div className="relative flex bg-white overflow-hidden p-4 items-center gap-4">
      <div className="absolute top-2 right-2 bg-white border text-sm font-bold px-1 py-1 rounded-lg">
        <Image src={item.channelLogo} alt="geo-logo" className="w-4 h-4 rounded-lg" />
      </div>
      {/* Image Section */}
      <div className="w-32 h-24 flex-shrink-0">
        <Image
          src={item.image}
          alt="Football Match"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        <p className="text-gray-500 text-xs">{item.date}</p>
        <h3 className="font-bold text-sm text-gray-900 mt-1">{item.title}</h3>

        {/* Footer with icons */}
        <div className="flex justify-between items-center gap-2 mt-4">
          <div className="flex items-center gap-4  text-gray-500 text-xs">
            <div className="flex items-center gap-1">
              <FaRegEye className="text-green-600" /> {item.views}
            </div>
            <div className="flex items-center gap-1">
              <FaRegComment className="text-green-600" /> {item.comments}
            </div>
          </div>
          <span className="text-xs text-green-600 hover:text-green-700 cursor-pointer">
            Read More
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewssCard;
