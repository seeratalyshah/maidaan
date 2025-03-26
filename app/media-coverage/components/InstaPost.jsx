import Image from 'next/image';

const InstaPostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full">
      {/* Profile Section */}
      <div className="flex items-center px-4 py-3">
        <Image
          src={post.user_profile}
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full border-2 border-red-400"
        />
        <span className="ml-3 font-semibold text-gray-800">{post.user_name}</span>
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

      {/* Tagline */}
      <div className="p-4">
        <p className="text-gray-800 font-medium">{post.tag_line}</p>
      </div>

      {/* Hashtags Footer */}
      <div className="px-4 pb-3 text-sm text-gray-500 text-center border-t border-gray-200 pt-2 mt-auto">
        {post.hash_tags}
      </div>
    </div>
  );
};

export default InstaPostCard;
