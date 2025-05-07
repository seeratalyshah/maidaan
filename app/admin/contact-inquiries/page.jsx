"use client";

import useSWR from "swr";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const fetcher = (u) => fetch(u).then((r) => r.json());

export default function ContactInquiriesAdmin() {
  const { data, error, mutate } = useSWR("/api/contact", fetcher);

  /* ─── error ─── */
  if (error) {
    toast.error("Failed to load contact inquiries");
    return (
      <p className="p-8 text-red-600">
        Could not fetch contact inquiries. Please try again later.
      </p>
    );
  }

  /* ─── loading ─── */
  if (!data)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 size={48} className="animate-spin text-green-600" />
      </div>
    );

  const { inquiries } = data;

  return (
    <div className="max-w-6xl mx-auto">
      {/* header */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Website Contact Inquiries</h1>
        <div className="flex justify-end">
          <a
            href="/api/contact?format=csv"
            className="bg-green-600 text-white hover:bg-green-600/90 px-4 py-2 rounded"
          >
            Export CSV
          </a>
        </div>
      </header>

      {/* empty-state */}
      {inquiries.length === 0 && (
        <p className="italic text-gray-500">No inquiries received yet.</p>
      )}

      {/* table */}
      {inquiries.length > 0 && (
        <table className="w-full border text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th className="whitespace-nowrap">Received (UTC)</th>
            </tr>
          </thead>

          <tbody>
            {inquiries.map((q) => (
              <tr key={q.id} className="border-t align-top">
                <td className="p-2">{q.name}</td>
                <td className="p-2">{q.email}</td>
                <td className="p-2">
                  {q.subject || <span className="text-gray-400">—</span>}
                </td>
                <td className="break-words max-w-xs p-2">{q.message}</td>
                <td className="whitespace-nowrap p-2">
                  {q.created_at.slice(0, 19)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
