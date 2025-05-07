"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Download, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

/* which keys convert to Yes/No pills */
const YES_NO = new Set([
  "medical_condition",
  "major_injuries",
  "medication",
  "international_tournaments",
  "pro_football_contracts",
  "future_updates",
  "consent",
]);

export default function PlayerDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [data, setData] = useState(null); // { player, attachments }

  useEffect(() => {
    fetch(`/api/players/${id}`)
      .then((r) => r.json())
      .then((j) => {
        if (j.ok) setData(j);
        else toast.error(j.error || "Load error");
      });
  }, [id]);

  if (!data)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 size={48} className="animate-spin text-green-600" />
      </div>
    );

  const { player, attachments } = data;
  const createdDate = player.created_at
    ? new Date(player.created_at).toLocaleDateString()
    : "-";

  /* helpers */
  const label = (k) =>
    k
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  const render = (k, v) => {
    if (YES_NO.has(k)) {
      const yes = v === 1 || v === "1" || v === true || v === "Yes";
      return (
        <span
          className={
            yes
              ? "bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold"
              : "bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-semibold"
          }
        >
          {yes ? "Yes" : "No"}
        </span>
      );
    }
    return v || "—";
  };

  const rows = Object.entries(player).filter(
    ([k]) => !["id", "image_path", "created_at", "created_at_attachments",].includes(k),
  );

  return (
    <div className="max-w-6xl mx-auto">
      {/* back */}
      <button
        onClick={() => router.push("/admin/players")}
        className="flex items-center gap-1 text-green-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* card */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* header */}
        <div className="flex flex-col md:flex-row gap-6 p-8 bg-gray-200">
          {player.image_path ? (
            <img
              src={player.image_path}
              alt="avatar"
              className="w-48 h-48 object-cover rounded-xl shadow-lg self-center md:self-start"
            />
          ) : (
            <div className="w-48 h-48 bg-white/20 rounded-xl flex items-center justify-center text-5xl">
              ?
            </div>
          )}

          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{player.full_name}</h1>
            <p className="text-sm opacity-90">{player.email}</p>
            <p className="text-sm mt-1">Added on {createdDate}</p>

            {player.image_path && (
              <a
                href={player.image_path}
                download
                className="inline-flex items-center gap-1 mt-4 bg-green-600 text-white hover:bg-green-600/90 backdrop-blur px-4 py-1.5 rounded text-sm"
              >
                <Download size={16} /> Download&nbsp;image
              </a>
            )}
          </div>
        </div>

        {/* info grid */}
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-4">Player Information</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {rows.map(([k, v]) => (
              <div key={k} className="flex">
                <dt className="w-48 font-semibold shrink-0">{label(k)}</dt>
                <dd className="flex-1">{render(k, v)}</dd>
              </div>
            ))}
          </dl>

          {/* attachments */}
          <h2 className="text-xl font-semibold mt-10 mb-4">Attachments</h2>
          {attachments.length === 0 ? (
            <p className="text-gray-500">No files uploaded.</p>
          ) : (
            <ul className="space-y-3">
              {attachments.map((a) => (
                <li
                  key={a.id}
                  className="flex items-center justify-between bg-gray-50 border rounded-lg px-4 py-2"
                >
                  <span className="truncate mr-4">
                    {a.label || a.file_path.split("/").pop()}
                  </span>
                  <div className="flex gap-3 shrink-0">
                    <a
                      href={a.file_path}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm underline"
                    >
                      Open
                    </a>
                    <a
                      href={a.file_path}
                      download
                      className="text-blue-600 hover:text-blue-800"
                      title="Download"
                    >
                      <Download size={18} />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
