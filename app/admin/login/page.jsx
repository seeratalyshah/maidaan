"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminLoginPage() {
  const router = useRouter();
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pwd }),
    });
    setLoading(false);

    if (res.ok) {
      router.replace("/admin/players");
    } else {
      toast.error("Wrong password");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-32 p-8 border rounded bg-white"
    >
      <h1 className="text-2xl font-semibold mb-6 text-center">Admin Login</h1>
      <input
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        placeholder="Password"
        className="w-full border px-3 py-2 mb-4"
        required
      />
      <button
        className="bg-green-600 text-white w-full py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}
