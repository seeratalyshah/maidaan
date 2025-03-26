"use client";
import Link from "next/link";
import { FaDonate } from "react-icons/fa";
import Image from "next/image";
import runnerUp from "@/images/support-images/runnerup-2018.jpg";

export default function HowToDonate() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <Image 
            src={runnerUp}
            alt="Donate to support" 
            className="w-full h-auto shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 md:pl-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bebas">
            <span className="text-green-600"></span>How to Donate?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We’ve partnered with{" "}
            <span className="font-semibold">JustGiving.com</span> to make
            donations secure and hassle-free. All donations will be received by{" "}
            <span className="font-semibold">Muslim Hands UK</span> and directly
            allocated to Maidaan's operations.
          </p>

          <div className="mt-6">
            <Link
              href="https://www.justgiving.com/page/maidaan-for-street-children-1715347748770"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white uppercase px-6 py-3 text-lg font-semibold shadow-md hover:bg-green-700 transition"
            >
              <FaDonate className="text-xl" />
              Donate via JustGiving
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
