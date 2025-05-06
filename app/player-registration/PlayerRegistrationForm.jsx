/* PlayerRegistrationForm.jsx */
"use client";

import { Trash2 } from "lucide-react";
import { FORM_FIELDS } from "./data";
import { usePlayerRegistration } from "./use-player-registration";
import Image from "next/image";

export default function PlayerRegistrationForm() {
  const {
    register,
    handleSubmit,
    errors,
    fields,
    append,
    remove,
    submitting,
    preview,
    imageRef,
    handleImage,
    onSubmit,
  } = usePlayerRegistration();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pb-6">
      {/* ───── image upload ───── */}
      <div className="p-6 border border-gray-300 rounded-lg bg-white">
        <label className="block mb-2 font-medium">Player Image</label>
        {preview && (
          <Image
            src={preview}
            alt="Preview"
            width={32}
            height={32}
            className="w-32 h-32 object-cover rounded mb-4"
          />
        )}
        <input
          type="file"
          accept="image/*"
          {...register("playerImage")}
          ref={imageRef}
          onChange={handleImage}
        />
      </div>

      {/* ───── regular fields ───── */}
      {FORM_FIELDS.map(({ label, name, type, options }) => (
        <div
          key={name}
          className="p-6 border border-gray-300 rounded-lg bg-white"
        >
          <label className="block mb-2 font-medium">{label}</label>

          {type === "textarea" ? (
            <textarea
              {...register(name, { required: true })}
              className="w-full border-b focus:border-green-600"
            />
          ) : type === "select" ? (
            <select
              {...register(name, { required: true })}
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
                  <input
                    type="radio"
                    value={v}
                    {...register(name, { required: true })}
                  />
                  {v}
                </label>
              ))}
            </div>
          ) : (
            <input
              type={type}
              {...register(name, { required: true })}
              className="w-full border-b focus:border-green-600"
            />
          )}

          {errors[name] && (
            <p className="text-red-500 text-sm mt-1">This field is required</p>
          )}
        </div>
      ))}

      {/* ───── attachments ───── */}
      <div className="p-6 border border-gray-300 rounded-lg bg-white space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Attachments</h3>
          <button
            type="button"
            onClick={() => append({ file: undefined, label: "" })}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Add
          </button>
        </div>

        {fields.length === 0 && (
          <p className="text-sm text-gray-500">No attachments added</p>
        )}

        {fields.map((field, idx) => (
          <div key={field.id} className="flex items-center gap-4">
            <input
              type="file"
              {...register(`attachments.${idx}.file`, { required: true })}
            />
            <input
              type="text"
              placeholder="File label"
              {...register(`attachments.${idx}.label`, { required: true })}
              className="border-b flex-1 focus:border-green-600"
            />
            <button
              type="button"
              onClick={() => remove(idx)}
              className="text-red-600 hover:text-red-800/80"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        {errors.attachments && (
          <p className="text-red-500 text-sm">
            Each attachment needs a file and a label
          </p>
        )}
      </div>

      {/* ───── consent ───── */}
      <div className="p-6 border border-gray-300 rounded-lg bg-white">
        <label className="flex items-center gap-2">
          <input type="checkbox" {...register("consent", { required: true })} />
          I give consent to participate
        </label>
        {errors.consent && (
          <p className="text-red-500 text-sm mt-1">
            You must give consent to proceed
          </p>
        )}
      </div>

      {/* ───── submit ───── */}
      <div className="flex justify-end mb-16">
        <button
          type="submit"
          disabled={submitting}
          className={`bg-green-600 text-white py-2 px-6 rounded ${
            submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
          }`}
        >
          {submitting ? "Submitting…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
