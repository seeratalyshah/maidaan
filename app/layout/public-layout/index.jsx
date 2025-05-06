"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/app/layout/navbar";
import Footer from "@/app/layout/footer";
import SocialMediaLinks from "@/app/SocialMediaLinks";

export default function LayoutChrome({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}

      {children}

      {!isAdmin && (
        <>
          <Footer />
          <SocialMediaLinks />
        </>
      )}
    </>
  );
}
