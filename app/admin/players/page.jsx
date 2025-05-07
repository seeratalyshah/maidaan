"use client";

import { useState } from "react";
import useSWR, { mutate } from "swr";
import toast from "react-hot-toast";
import { Trash2, UserRoundPen, Loader2, Download, Eye } from "lucide-react";
import Image from "next/image";

const fetcher = (u) => fetch(u).then((r) => r.json());

export default function PlayersAdminPage() {
  const { data, mutate } = useSWR("/api/players", fetcher);

  const [confirmId, setConfirmId] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [openRow, setOpenRow] = useState(null);

  /* delete */
  async function remove(id) {
    setConfirmId(id);
  }
  async function reallyDelete() {
    setDeleting(true);
    try {
      const res = await fetch(`/api/players/${confirmId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Deleted");
        mutate();
      } else toast.error("Delete failed");
    } finally {
      setDeleting(false);
      setConfirmId(null);
    }
  }

  if (!data)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 size={48} className="animate-spin text-green-600" />
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto">
      {/* ---- delete dialog (unchanged) ---- */}
      {confirmId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Delete player?</h2>
            <p className="text-sm mb-6">
              This action cannot be undone. Delete permanently?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmId(null)}
                className="border px-4 py-2 rounded"
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                onClick={reallyDelete}
                disabled={deleting}
                className="bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {deleting ? "Deleting…" : "Yes, delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---- header ---- */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold mb-4">Registered Players</h1>
        <div className="flex justify-end">
          <a
            href="/api/players?format=csv"
            className="bg-green-600 text-white hover:bg-green-600/90 px-4 py-2 rounded"
          >
            Export CSV
          </a>
        </div>
      </header>

      {/* ---- centred table ---- */}
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr className="text-left">
            <th className="px-4 py-3 w-14">Pic</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Position</th>
            <th className="px-4 py-3">Age</th>
            {/* <th className="px-4 py-3">Files</th> */}
            <th className="px-4 py-3 w-32">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.players.map((p) => {
            const files = p.attachments ?? [];

            return (
              <tr
                key={p.id}
                className="border-t text-left bg-white hover:bg-gray-50"
              >
                {/* avatar */}
                <td className="px-4 py-3">
                  {p.image_path ? (
                    <Image
                      src={`${p.image_path}?v=${Date.now()}`}
                      width={6}
                      height={6}
                      className="w-6 h-6 object-cover rounded inline-block"
                      alt="avatar"
                    />
                  ) : (
                    "-"
                  )}
                </td>

                <td className="px-4 py-3">{p.full_name}</td>
                <td className="px-4 py-3">{p.email}</td>
                <td className="px-4 py-3">{p.position}</td>
                <td className="px-4 py-3">{p.age}</td>

                {/* files */}
                {/* <td className="px-4 py-3">
                  {files.length === 0 ? (
                    <span className="text-gray-500">—</span>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setOpenRow(openRow === p.id ? null : p.id)
                        }
                        className="underline text-blue-600"
                      >
                        {files.length} file{files.length > 1 ? "s" : ""}
                      </button>

                      {openRow === p.id && (
                        <div className="mt-2 space-y-1">
                          {files.map((a) => (
                            <a
                              key={a.id}
                              href={a.file_path}
                              download
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 justify-center text-blue-600 hover:text-blue-800"
                            >
                              <Download size={14} />
                              <span className="truncate max-w-[140px]">
                                {a.label || a.file_path.split("/").pop()}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </td> */}

                {/* action icons */}
                <td className="px-4 py-3">
                  <div className="flex justify-center gap-3">
                    <a
                      href={`/admin/players/${p.id}/view`}
                      className="text-blue-600 hover:text-blue-800/80"
                      title="View Details"
                    >
                      <Eye size={20} />
                    </a>
                    <a
                      href={`/admin/players/${p.id}`}
                      className="text-green-600 hover:text-green-800/80"
                      title="Edit"
                    >
                      <UserRoundPen size={20} />
                    </a>
                    <button
                      onClick={() => remove(p.id)}
                      className="text-red-600 hover:text-red-800/80"
                      title="Delete"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
