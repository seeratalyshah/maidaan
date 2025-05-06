/* app/admin/logout/route.js */
import { logout } from "@/lib/auth";
import { redirect } from "next/navigation";

export async  function GET() {
  await logout();                  
  redirect("/admin/login"); 
}
