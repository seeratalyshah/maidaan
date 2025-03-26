import React from "react";
import bgImage from "../../../public/images/layout-images/footer-bg.jpg";
import bgImage2 from "../../../public/images/layout-images/footer-bg2.png";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../../../public/images/layout-images/maidan-white-logo.png";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Media Coverage", path: "/media-coverage" },
  { name: "Support", path: "/support-maidaan" },
  { name: "Blogs", path: "/blogs" },
  { name: "Player Registration", path: "/player-registration" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer>
      <div
        className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white w-full px-4 md:px-16 lg:px-24 max-w-3xl">
          <h2 className="text-4xl font-bold uppercase text-green-500">
            Subscribe
          </h2>
          <p className="text-2xl font-semibold mt-1">TO OUR NEWSLETTER</p>

          {/* Input Field & Button */}
          <div className="mt-6 flex flex-col gap-2 md:gap-0 md:flex-row justify-center">
            <input
              type="email"
              placeholder="Your email ..."
              className="p-3 text-black w-full max-w-md border-none outline-none"
            />
            <button className="bg-green-600 text-white px-6 py-3 font-bold text-sm uppercase hover:bg-green-700 transition">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div className="relative bg-black text-white py-10 text-center opacity-95">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `url(${bgImage2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="cursor-pointer w-[68px] h-[68px] hidden md:block rounded-md"
              priority
            />
          </Link>

          {/* Description */}
          <p className="mt-3 max-w-4xl text-sm mb-10">
            The connection between fans and clubs in the Championship is deeply
            rooted, creating a unique atmosphere that resonates with the essence
            of the beautiful game.
          </p>

          {/* Quick Links */}
          <ul className="flex flex-wrap justify-center gap-4 text-sm mb-10">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <li className="text-gray-400 hover:text-white">{item.name}</li>
              </Link>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5 mt-5">
            <a
              href="https://www.facebook.com/Maidaanpk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-xl hover:text-green-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/maidaanpk01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-xl hover:text-green-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@maidaanpk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-xl hover:text-green-600"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@Maidaanpk01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-xl hover:text-green-600"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/maidaanpk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-xl hover:text-green-600"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-10 text-sm">
            <span className="text-gray-400">
              Like-themes © All Rights Reserved - 2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
