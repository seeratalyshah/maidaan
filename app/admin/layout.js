import AdminNav from "./AdminNav";
import AdminSidebar from "./sidebar/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* ─── fixed header ─── */}
      <header className="fixed inset-x-0 top-0 z-20">
        <AdminNav />
      </header>

        <AdminSidebar />

      {/* ─── scrollable main content ─── */}
      <main
        className="pt-20 pb-12 ml-56 px-9"
      >
        {children}
      </main>
    </div>
  );
}
