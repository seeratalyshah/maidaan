"use client";

import { CONTACT_FIELDS } from "./data";
import { useContactForm } from "./use-contact-form";

export default function ContactForm() {
  const { register, handleSubmit, errors, submitting, onSubmit } = useContactForm();

  return (
    <section className="px-4 md:px-16 lg:px-24 mb-16 md:my-24 lg:my-32">
      <div className="max-w-3xl mx-auto p-8 bg-white border-t border-slate-100 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold uppercase leading-snug mb-4 text-center text-green-600">
          Contact
        </h1>
        <p className="text-gray-600 text-center mt-2">Can reach out for queries</p>

        {/* ------------- form ------------- */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {CONTACT_FIELDS.map(({ label, name, type, required }) => (
            <div key={name}>
              <label className="block mb-2 font-medium">{label}</label>

              {type === "textarea" ? (
                <textarea
                  {...register(name, { required })}
                  rows={4}
                  className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              ) : (
                <input
                  {...register(name, { required })}
                  type={type}
                  className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              )}

              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">This field is required</p>
              )}
            </div>
          ))}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="w-full max-w-[150px] bg-green-600 text-white py-3 rounded
                         disabled:opacity-50 hover:bg-green-700 transition"
            >
              {submitting ? "Sending…" : "Submit"}
            </button>
          </div>
        </form>

        <div className="mt-10 text-center">
          <p className="text-gray-700">info@maidaan.org.uk</p>
        </div>
      </div>
    </section>
  );
}
