/* app/contact/page.jsx */
import HeroSection   from "./HeroSection";
import ContactForm   from "./ContactForm";

/* ---------- 1. METADATA (NO themeColor here) ---------- */
export const metadata = {
  title:       "Contact Maidaan – Reach Out With Your Queries",
  description: "Have questions about Maidaan’s football initiatives, partnerships or media enquiries? Send us a message or email info@maidaan.org.uk.",
  keywords: [
    "contact Maidaan",
    "Maidaan email",
    "football charity contact",
    "Muslim Hands football queries",
    "partnership enquiries Maidaan",
  ],
  alternates: { canonical: "https://maidaan.org.uk/contact" },
  openGraph: {
    type: "website",
    url:  "https://maidaan.org.uk/contact",
    title:       "Get in Touch With Maidaan",
    description: "We’re here to answer your questions about trials, sponsorships and media coverage. Reach out today.",
    siteName:    "Maidaan Football Academy",
  },
  robots: { index: true, follow: true },
};

/* ---------- 3. PAGE COMPONENT ---------- */
export default function Contact() {
  return (
    <div>
      <HeroSection />
      <ContactForm />
    </div>
  );
}
