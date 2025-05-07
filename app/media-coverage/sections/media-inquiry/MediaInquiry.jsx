"use client";

import { MEDIA_FIELDS } from "./data";
import { useMediaInquiry } from "./use-media-inquiry";

export default function MediaInquiryForm() {
  const { register, handleSubmit, errors, submitting, onSubmit } =
    useMediaInquiry();

  return (
    <section className="px-4 md:px-16 lg:px-24 mb-16 md:mb-24 lg:mb-32">
      <div className="max-w-4xl mx-auto p-8 bg-white border-t border-slate-100 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bebas mb-4 text-center text-green-600">
          Press &amp; Media Inquiries
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Journalists and media professionals can reach out for inquiries.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* dynamic fields */}
          {MEDIA_FIELDS.map(({ label, name, type, options, required }) => {
            const shared = {
              ...(required && { required: true }),
              ...register(name, { required }),
            };

            return (
              <div key={name} className="w-full">
                <label className="block mb-2 font-medium">{label}</label>

                {type === "textarea" ? (
                  <textarea
                    {...shared}
                    rows={4}
                    className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                ) : type === "select" ? (
                  <select
                    {...shared}
                    className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none appearance-none"
                  >
                    <option value="">Select Inquiry Type</option>
                    {options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    {...shared}
                    type={type}
                    className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                )}

                {errors[name] && (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required
                  </p>
                )}
              </div>
            );
          })}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="w-full max-w-[150px] bg-green-600 text-white py-3 rounded
                         disabled:opacity-50 hover:bg-green-700 transition"
            >
              {submitting ? "Sending…" : "Submit Inquiry"}
            </button>
          </div>
        </form>

        <div className="mt-10 text-center">
          <p className="text-gray-700">For direct press inquiries, contact:</p>
          <p className="text-lg font-semibold text-green-700">
            press@maidaan.org.uk
          </p>
        </div>
      </div>
    </section>
  );
}
