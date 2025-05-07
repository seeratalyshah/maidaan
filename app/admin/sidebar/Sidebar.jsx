"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Newspaper, Mail } from "lucide-react";

const LINKS = [
  { href: "/admin/players", label: "Players", icon: Users },
  { href: "/admin/inquiries", label: "Media Inquiries", icon: Newspaper },
  { href: "/admin/contact-inquiries", label: "Contact Inquiries", icon: Mail },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 bg-gray-200 flex flex-col fixed top-12 left-0 z-10 h-[calc(100vh-48px)]">
      <nav className="flex-1 px-2 py-4 space-y-1">
        {LINKS.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 px-3 py-2 rounded
                          ${
                            active
                              ? "bg-green-600 text-white"
                              : "hover:bg-gray-600 hover:text-white"
                          }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
