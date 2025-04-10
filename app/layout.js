import { Geist, Geist_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google"; // Import Bebas Neue
import "./globals.css";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import SocialMediaLinks from "./SocialMediaLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  // Add Bebas Neue
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400", // Bebas Neue has only one weight (400)
});

export const metadata = {
  title:
    "Maidaan – A Muslim Hands Initiative: Empowering Children Through Sports",
  description:
    "An initiative by Muslim Hands to uplift street children through the power of sports.",
  icons: {
    icon: "/maidaan-home-logo.png", 
    shortcut: "/maidaan-home-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <SocialMediaLinks />
      </body>
    </html>
  );
}
