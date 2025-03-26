import Image from "next/image";
import somebody1 from "@/public/images/about-images/somebody1.webp";
import somebody2 from "@/public/images/about-images/somebody2.webp";
import somebody3 from "@/public/images/about-images/somebody3.webp";
import somebody4 from "@/public/images/about-images/somebody4.webp";

const QuoteSection = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 p-16 bg-green-600 text-white">
          <h2 className="text-xl text-left md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bebas leading-snug">
            “I am Somebody” <br /> is a campaign by <br /> Muslim Hands <br />{" "}
            an international NGO focused on empowering street children and
            promoting their right to identity <br />
          </h2>
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2 bg-green-600 py-2">
          <Image
            src={somebody1}
            alt="Coach Ryan Mitchell"
            className="w-full h-[100%] object-cover"
          />
          <Image
            src={somebody2}
            alt="Coach Ryan Mitchell"
            className="w-full h-[100%] object-cover"
          />
          <Image
            src={somebody3}
            alt="Coach Ryan Mitchell"
            className="w-full h-[100%] object-cover"
          />
          <Image
            src={somebody4}
            alt="Coach Ryan Mitchell"
            className="w-full h-[100%] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
