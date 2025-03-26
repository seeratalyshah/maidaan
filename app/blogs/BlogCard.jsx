import Image from "next/image";
import { FaRegEye, FaRegComment } from "react-icons/fa";
import Link from "next/link";

const BlogCard = ({ item }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden flex flex-col h-[450px]">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={item.image}
          alt="Football Match"
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute top-2 left-2 bg-white border text-sm font-bold px-1 py-1 rounded-lg">
          <Image
            src={item.newsChannels[0]}
            alt="news-logo"
            className="w-8 h-8 rounded-lg"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-gray-500 text-xs">{item.date}</p>
        <h3 className="font-bold text-lg text-gray-900 mt-1 uppercase">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 flex-grow overflow-hidden">
          {item.description}
        </p>

        {/* Footer with icons (Pinned to Bottom) */}
        <div className="flex justify-between items-center gap-2 mt-auto">
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            {/* <div className="flex items-center gap-1">
              <FaRegEye className="text-green-600" /> {item.views}
            </div>
            <div className="flex items-center gap-1">
              <FaRegComment className="text-green-600" /> {item.comments}
            </div> */}
          </div>
          <Link href={item.link} target="_blank">
            <span className="text-sm text-green-600 hover:text-green-700 cursor-pointer">
              Read More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
