import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 bg-white p-2 shadow-lg rounded-lg z-20">
      <a
        href="https://www.facebook.com/Maidaanpk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition"
      >
        <FaFacebook size={28} />
      </a>
      <a
        href="https://www.instagram.com/maidaanpk01/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 transition"
      >
        <FaInstagram size={28} />
      </a>
      <a
        href="https://www.tiktok.com/@maidaanpk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-700 transition"
      >
        <FaTiktok size={28} />
      </a>
      <a
        href="https://www.youtube.com/@Maidaanpk01"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-800 transition"
      >
        <FaYoutube size={28} />
      </a>
      <a
        href="https://www.linkedin.com/company/maidaanpk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 transition"
      >
        <FaLinkedin size={28} />
      </a>
    </div>
  );
};

export default SocialMedia;
