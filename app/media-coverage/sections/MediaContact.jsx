"use client";

import { useState } from "react";

const MediaContact = () => {
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
    <section className="px-4 md:px-16 lg:px-24 mb-16 md:mb-24 lg:mb-32">
      <div className="max-w-4xl mx-auto p-8 bg-white border-t border-slate-100 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bebas mb-4 text-center text-green-600">
          Press & Media Inquiries
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Journalists and media professionals can reach out for inquiries.
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
            name="organization"
            placeholder="Your Organization (Optional)"
            value={formData.organization}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none appearance-none" // Removed arrow with appearance-none
          >
            <option value="" disabled>
              Select Inquiry Type
            </option>
            {/* Placeholder option */}
            <option value="Interview Request">Interview Request</option>
            <option value="Article Feature">Article Feature</option>
            <option value="General Query">General Query</option>
          </select>
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
              Submit Inquiry
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center">
          <p className="text-gray-700">For direct press inquiries, contact:</p>
          <p className="text-lg font-semibold text-green-700">
            press@maidaan.com
          </p>
          <p className="text-lg font-semibold text-green-700">
            +92 300 1234567
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediaContact;
