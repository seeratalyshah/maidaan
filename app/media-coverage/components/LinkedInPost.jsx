import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

const LinkedInPost = ({ post }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full">
      {/* Profile Section */}
      <div className="flex items-center px-4 py-3">
        <Image
          src={post.user_profile}
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full border-2 border-blue-500"
        />
        <span className="ml-3 font-semibold text-gray-800">
          {post.user_name}
        </span>
      </div>

      {/* Image Section */}
      <div className="w-full h-64 relative flex-grow">
        <Image
          src={post.image_url}
          alt={post.tag_line}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Tagline & Description */}
      <div className="p-4">
        <p className="text-gray-800 font-medium">{post.tag_line}</p>
        {post.description && (
          <p className="text-gray-600 text-sm mt-2">{post.description}</p>
        )}
      </div>

      {/* Hashtags Footer */}
      <div className="px-4 pb-3 text-sm text-gray-500 text-center border-t border-gray-200 pt-2 mt-auto">
        {post.hash_tags}
      </div>

      {/* Facebook Icon */}
      <div className="absolute top-3 right-3 text-blue-600 text-2xl">
        <FaFacebook />
      </div>
    </div>
  );
};

export default LinkedInPost;
