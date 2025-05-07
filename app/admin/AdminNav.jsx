"use client";

import { usePathname } from "next/navigation";

/** Top bar used by every /admin page */
export default function AdminNav() {
  const pathname = usePathname();
  const onLoginPage = pathname === "/admin/login";

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      {/* left links */}
      <div className="flex items-center gap-6">
        <span className="font-semibold">Admin Dashboard</span>
      </div>

      {/* right links */}
      <div className="flex items-center gap-6">
        <a href="/" className="hover:underline">Public&nbsp;Site</a>

        {/* hide Logout on the login page */}
        {!onLoginPage && (
          <a href="/admin/logout" className="hover:underline text-green-400">
            Logout
          </a>
        )}
      </div>
    </nav>
  );
}
