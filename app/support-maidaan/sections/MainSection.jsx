import Image from "next/image";
import logo from "@/images/home-images/maidaan-home-logo.png"; 
import supportMainImage from "@/images/support-images/support-hero-img.webp"; 

const MainSection = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Side - Player Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src={supportMainImage}
            alt="Player with Trophy"
            className="shadow-lg h-[620px] object-cover"
          />
          <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8">
            <Image src={logo} alt="Atleticos Logo" className="w-24 md:w-32 rounded-lg bg-white shadow-lg border p-2" />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-bebas">
            <span className="text-green-600"> Join Us </span>in Transforming
            Lives Through Football
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At Maidaan, we believe in the power of football to change lives,
            build futures, and create opportunities for Pakistan’s most
            vulnerable children. Your support helps us provide training,
            education, meals, and a pathway to professional football for
            street-connected and marginalized youth.
          </p>
          <p className="mt-4 text-green-600 font-bold leading-relaxed">
            Your donation will directly contribute to:
          </p>
          <ul className="mt-4 leading-relaxed list-disc pl-5 marker:text-green-600">
            <li className="text-gray-600">Grassroots Football Development</li>
            <li className="text-gray-600">International Tournaments & Exposure</li>
            <li className="text-gray-600">Education & Birth Registration for Street-Connected Children</li>
            <li className="text-gray-600">Vocational Training & Life Skills Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
