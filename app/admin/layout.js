/* NO "use client" here → stays a Server Component */
import AdminNav from "./AdminNav";

export default function AdminLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <AdminNav />           {/* client nav inside server layout */}
      <main className="p-6">{children}</main>
    </div>
  );
}
