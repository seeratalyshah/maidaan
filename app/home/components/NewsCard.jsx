import Image from "next/image";
import Link from "next/link";
import { FaRegEye, FaRegComment } from "react-icons/fa";

const NewsCard = ({ item }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={item.image}
          alt="Football Match"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-2 left-2 bg-white border text-sm font-bold px-1 py-1 rounded-lg">
          <Image
            src={item.channelLogo}
            alt="geo-logo"
            className="w-8 h-8 rounded-lg"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex-grow">
        <p className="text-gray-500 text-xs">{item.date}</p>
        <h3 className="font-bold text-lg text-gray-900 mt-1">{item.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
      </div>

      {/* Footer with icons */}
      <div className="p-4 flex justify-between items-center border-t mt-auto">
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <FaRegEye className="text-green-600" /> {item.views}
          </div>
          <div className="flex items-center gap-1">
            <FaRegComment className="text-green-600" /> {item.comments}
          </div>
        </div>
        <Link href={item.link} target="_blank">
          <span className="text-sm text-green-600 hover:text-green-700 cursor-pointer">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
