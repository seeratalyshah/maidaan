import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InstagramPostCard = ({ post }) => {
  return (
    <div className="relative group overflow-hidden bg-white bg-opacity-10 backdrop-blur-md p-4 shadow-lg transition-all transform hover:scale-105 duration-300">
      {/* Instagram Image */}
      <div className="w-full h-[300px]  overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.caption}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Overlay Caption */}
      <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-300">
        <p className="text-white text-sm">{post.caption}</p>
      </div>

      {/* Instagram Icon */}
      <div className="absolute top-3 right-3 text-pink-500 text-2xl">
        <FaInstagram />
      </div>
    </div>
  );
};

export default InstagramPostCard;
