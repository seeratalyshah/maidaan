import HeroSection from "./HeroSection";
import PlayerRegistrationForm from "./PlayerRegistrationForm";

/* app/player-registration/page.jsx  – Player Registration metadata */

export const metadata = {
  title: "Player Registration – Join Maidaan’s Elite Football Training Camp",
  description:
    "Short-listed players: complete this digital form to secure your place in Maidaan’s upcoming training camp and future international tournaments.",
  keywords: [
    "Maidaan player registration",
    "football trials Pakistan form",
    "street child football registration",
    "youth football academy signup",
    "grassroots football Pakistan",
    "Muslim Hands football camp",
  ],

  alternates: { canonical: "https://maidaan.org.uk/player-registration" },

  openGraph: {
    type: "website",
    url: "https://maidaan.org.uk/player-registration",
    title: "Register for Maidaan’s Training Camp & Global Tournaments",
    description:
      "Upload your photo, share your football journey and join Pakistan’s largest grass-roots football movement.",
    siteName: "Maidaan Football Academy",
  },

  robots: {
    index: false,           
    follow: false,
  },
};

export default function PlayerRegistrationPage() {
  return (
    <div className="bg-[#F5F5F5]">
      <HeroSection />
      <div className="max-w-3xl mx-auto mt-10">
        <div className="p-6 border border-gray-300 rounded-lg bg-white mb-6">
          <h1 className="text-md md:text-xl font-semibold leading-tight text-green-600 mb-4">
            All shortlisted players must register digitally before the training
            camp starts.
          </h1>
          <p className="max-w-4xl text-md">
            All shortlisted players must register digitally before the training
            camp starts tomorrow. This registration form will also be used for
            future players joining Maidaan. Please ensure all fields are filled
            accurately.
          </p>
        </div>
        <PlayerRegistrationForm />
      </div>
    </div>
  );
}
