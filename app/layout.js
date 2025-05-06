import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import LayoutChrome from "./layout/public-layout";

/* ---- fonts ---- */
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

/* ---- default site‑wide metadata ---- */
export const metadata = {
  metadataBase: new URL("https://maidaan.org.uk"),            // absolute base
  title: {
    template: "%s | Maidaan Football Academy",
    default: "Maidaan – Empowering Children Through Football",
  },
  description:
    "Maidaan is a Muslim Hands initiative using the power of football to uplift street children and nurture tomorrow’s talent.",
  keywords: [
    "Maidaan",
    "Muslim Hands",
    "football academy",
    "street children",
    "youth sports",
    "Pakistan football",
  ],
  authors: [{ name: "Maidaan FC", url: "https://maidaan.org.uk" }],
  creator: "Maidaan FC",                                   // Tailwind green‑700
  icons: {
    icon: "/maidaan-home-logo.png",
    shortcut: "/maidaan-home-logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://maidaan.org",
    title: "Maidaan – Empowering Children Through Football",
    description:
      "A Muslim Hands project giving street children a future through the beautiful game.",
    siteName: "Maidaan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: "index,follow,max-video-preview:-1,max-image-preview:large",
  },
};

/* ---------------- layout ---------------- */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        <LayoutChrome>{children}</LayoutChrome>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
