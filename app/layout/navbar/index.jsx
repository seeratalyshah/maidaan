"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import logo from "@/app/images/layout-images/maidan-white-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Media Coverage", path: "/media-coverage" },
    { name: "Support", path: "/support-maidaan" },
    { name: "Blogs", path: "/blogs" },
    { name: "Player Registration", path: "/player-registration" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full h-24 border-b border-[#747474] z-20 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : "bg-black"
      }`}
      id="header"
    >
      <div className="flex justify-between items-center h-full w-full mx-auto px-4 md:px-16 lg:px-24">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="cursor-pointer w-[68px] h-[68px] rounded-md"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-10">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <li
                  className={`text-[18px] font-normal font-bebas tracking-wide cursor-pointer ${
                    pathname === item.path
                      ? "text-green-600"
                      : "text-white hover:text-green-600"
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <FaUserCircle
            size={24}
            className="cursor-pointer text-white hover:text-green-600"
          />
          <FiSearch
            size={22}
            className="cursor-pointer text-white hover:text-green-600"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={handleMenu}
          className="lg:hidden cursor-pointer text-white"
        >
          <HiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen
            ? "fixed left-0 top-0 w-[65%] lg:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 ease-in p-10 duration-500"
        }`}
      >
        <div className="w-full flex justify-end items-center">
          <div onClick={handleMenu} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>

        <div className="flex flex-col py-4 gap-4">
          <ul>
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <li
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer py-4 hover:text-green-600 ${
                    pathname === item.path ? "text-green-600" : ""
                  }`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
          {/* Mobile Icons */}
          <div className="flex items-center gap-6 pt-4">
            <FaUserCircle
              size={24}
              className="cursor-pointer text-black hover:text-green-600"
            />
            <FiSearch
              size={22}
              className="cursor-pointer text-black hover:text-green-600"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
