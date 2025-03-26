"use client";

import { useState } from "react";
import HeroSection from "./HeroSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Handle form submission (API call, email sending, etc.)
  };

  return (
    <div className="">
      <HeroSection />
      <section className="px-4 md:px-16 lg:px-24 mb-16 md:my-24 lg:my-32">
        <div className="max-w-3xl mx-auto p-8 bg-white border-t border-slate-100 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold uppercase leading-snug mb-4 text-center text-green-600">
            Contact
          </h1>
          <p className="text-gray-600 text-center mt-2">
             Can reach out for queries
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.organization}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full max-w-[150px] bg-green-600 text-white py-3 hover:bg-green-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-10 text-center">
            <p className="text-gray-700">
              
            </p>
            <p className="text-lg font-semibold text-green-700">
              info@maidaan.com
            </p>
            <p className="text-lg font-semibold text-green-700">
              +92 300 1234567
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
