"use client";

import { useEffect, useState, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ArrowLeft, Loader2, Trash2 } from "lucide-react";
import { mutate } from "swr";

const FIELDS = [
  { label: "Full Name", name: "full_name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Date of Birth", name: "dob", type: "date" },
  { label: "Age", name: "age", type: "number" },
  { label: "Nationality", name: "nationality", type: "text" },
  { label: "CNIC/B-Form Number", name: "cnic", type: "text" },
  { label: "Father’s Name", name: "father_name", type: "text" },
  { label: "Contact Number", name: "contact_number", type: "text" },
  { label: "Emergency Contact", name: "emergency_contact", type: "text" },
  { label: "Home Address", name: "home_address", type: "textarea" },
  { label: "Preferred Playing Position", name: "position", type: "text" },
  { label: "Secondary Position", name: "secondary_position", type: "text" },
  { label: "Height (cm)", name: "height", type: "number" },
  { label: "Weight (kg)", name: "weight", type: "number" },
  {
    label: "Trials Attended (City & Date)",
    name: "trials_attended",
    type: "text",
  },
  {
    label: "Previous Club/Academy (if any)",
    name: "previous_club",
    type: "text",
  },
  { label: "Key Strengths", name: "key_strengths", type: "textarea" },
  {
    label: "Previous Football Achievements",
    name: "football_achievements",
    type: "textarea",
  },
  { label: "Parent/Guardian Name", name: "guardian_name", type: "text" },
  {
    label: "Parent/Guardian Contact Number",
    name: "guardian_contact",
    type: "text",
  },
  {
    label: "Dominant Foot",
    name: "dominant_foot",
    type: "select",
    options: ["Right", "Left", "Both"],
  },
  { label: "Medical Condition", name: "medical_condition", type: "radio" },
  {
    label: "Major Injuries in the last year",
    name: "major_injuries",
    type: "radio",
  },
  { label: "Currently under medication", name: "medication", type: "radio" },
  {
    label: "Interested in international tournaments",
    name: "international_tournaments",
    type: "radio",
  },
  {
    label: "Interested in professional football contracts",
    name: "pro_football_contracts",
    type: "radio",
  },
  {
    label: "Receive future updates on trials & training",
    name: "future_updates",
    type: "radio",
  },
];

export default function EditPlayerPage() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { attachments: [] } });

  const {
    fields: attachFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "attachments",
  });

  const imageRef = useRef();

  /* ---------- fetch once ---------- */
  useEffect(() => {
    fetch(`/api/players/${id}`)
      .then((r) => r.json())
      .then(({ ok, player, attachments, error }) => {
        if (!ok) return toast.error(error || "Load error");
        reset({ ...player, attachments: [] }); // existing attachments shown separately
        if (player.image_path) setPreview(player.image_path);
        setLoading(false);
      });
  }, [id, reset]);

  /* ---------- save multipart ---------- */
  async function onSubmit(values) {
    setSaving(true);
    try {
      const fd = new FormData();

      // avatar (optional)
      if (imageRef.current?.files[0])
        fd.append("playerImage", imageRef.current.files[0]);

      // primitives
      [...FIELDS.map((f) => f.name), "consent"].forEach((k) => {
        if (values[k] !== undefined) fd.append(k, values[k]);
      });

      // new attachments
      values.attachments.forEach((att, i) => {
        if (att.file?.[0]) {
          fd.append(`attachments[${i}][file]`, att.file[0]);
          fd.append(`attachments[${i}][label]`, att.label);
        }
      });

      const res = await fetch(`/api/players/${id}`, {
        method: "PATCH",
        body: fd,
      });
      if (!res.ok) {
        const j = await res.json();
        throw new Error(j.error || "Update failed");
      }
      toast.success("Saved");
      await mutate("/api/players");
      router.push("/admin/players");
    } catch (e) {
      toast.error(e.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 size={48} className="animate-spin text-green-600" />
      </div>
    );

  function handleImageChange(e, setPreview, oldUrl) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (oldUrl) URL.revokeObjectURL(oldUrl); // cleanup previous blob
    setPreview(URL.createObjectURL(file)); // new preview
  }

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow">
      {/* back arrow */}
      <button
        type="button"
        onClick={() => router.push("/admin/players")}
        className="flex items-center gap-1 text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft size={18} />
        Back
      </button>
      <h1 className="text-2xl font-bold mb-8">Edit Player</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* avatar */}
        <div className="p-6 border rounded-lg bg-gray-50">
          <label className="font-medium mb-2">Player Image</label>
          {preview && (
            <img
              src={preview}
              alt="avatar"
              className="w-32 h-32 rounded mb-4 object-cover"
            />
          )}
          <input
            type="file"
            accept="image/*"
            ref={imageRef}
            onChange={(e) => handleImageChange(e, setPreview, preview)}
          />
        </div>

        {/* grid fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FIELDS.map(({ label, name, type, options }) => {
            const span = type === "textarea" ? "md:col-span-2" : "";
            return (
              <div key={name} className={span}>
                <label className="block mb-2 font-medium">{label}</label>
                {type === "textarea" ? (
                  <textarea
                    {...register(name)}
                    className="w-full border-b focus:border-green-600"
                  />
                ) : type === "select" ? (
                  <select
                    {...register(name)}
                    className="w-full border-b focus:border-green-600"
                  >
                    <option value="">Select</option>
                    {options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                ) : type === "radio" ? (
                  <div className="flex gap-6">
                    {["Yes", "No"].map((v) => (
                      <label key={v} className="flex items-center gap-1">
                        <input type="radio" value={v} {...register(name)} /> {v}
                      </label>
                    ))}
                  </div>
                ) : (
                  <input
                    {...register(name)}
                    type={type}
                    className="w-full border-b focus:border-green-600"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* new attachments */}
        <div className="p-6 border rounded-lg bg-gray-50 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Add Attachments</h3>
            <button
              type="button"
              onClick={() => append({ file: undefined, label: "" })}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Add
            </button>
          </div>

          {attachFields.map((field, idx) => (
            <div key={field.id} className="flex items-center gap-4">
              <input type="file" {...register(`attachments.${idx}.file`)} />
              <input
                type="text"
                placeholder="File label"
                {...register(`attachments.${idx}.label`)}
                className="border-b flex-1 focus:border-green-600"
              />
              <button
                type="button"
                onClick={() => remove(idx)}
                className="text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* buttons */}
        <div className="flex gap-4 mt-6">
          <button
            disabled={saving}
            className="bg-green-600 text-white px-6 py-2 rounded disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/players")}
            className="border px-6 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
