"use client";

import { useForm } from "react-hook-form";
import HeroSection from "./HeroSection";

export default function PlayerRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const formFields = [
    { label: "Full Name", name: "fullName", type: "text" },
    { label: "Email", name: "email", type: "email" }, // ✅ Added Email Field
    { label: "Date of Birth", name: "dob", type: "date" },
    { label: "Age", name: "age", type: "number" },
    { label: "Nationality", name: "nationality", type: "text" },
    { label: "CNIC/B-Form Number", name: "cnic", type: "text" },
    { label: "Father’s Name", name: "fatherName", type: "text" },
    { label: "Contact Number", name: "contactNumber", type: "text" },
    { label: "Emergency Contact", name: "emergencyContact", type: "text" },
    { label: "Home Address", name: "homeAddress", type: "textarea" },
    { label: "Preferred Playing Position", name: "position", type: "text" },
    { label: "Secondary Position", name: "secondaryPosition", type: "text" },
    { label: "Height (cm)", name: "height", type: "number" },
    { label: "Weight (kg)", name: "weight", type: "number" },
    {
      label: "Trials Attended (City & Date)",
      name: "trialsAttended",
      type: "text",
    },
    {
      label: "Previous Club/Academy (if any)",
      name: "previousClub",
      type: "text",
    },
    { label: "Key Strengths", name: "keyStrengths", type: "textarea" },
    {
      label: "Previous Football Achievements",
      name: "footballAchievements",
      type: "textarea",
    },
    { label: "Parent/Guardian Name", name: "guardianName", type: "text" },
    {
      label: "Parent/Guardian Contact Number",
      name: "guardianContact",
      type: "text",
    },
    {
      label: "Dominant Foot",
      name: "dominantFoot",
      type: "select",
      options: ["Right", "Left", "Both"],
    },
    { label: "Medical Condition", name: "medicalCondition", type: "radio" },
    {
      label: "Major Injuries in the last year",
      name: "majorInjuries",
      type: "radio",
    },
    { label: "Currently under medication", name: "medication", type: "radio" },
    {
      label: "Interested in international tournaments",
      name: "internationalTournaments",
      type: "radio",
    },
    {
      label: "Interested in professional football contracts",
      name: "proFootballContracts",
      type: "radio",
    },
    {
      label: "Receive future updates on trials & training",
      name: "futureUpdates",
      type: "radio",
    },
  ];

  return (
    <div className="bg-[#F5F5F5]">
      <HeroSection />

      <div className="max-w-3xl mx-auto mt-10">
        <div className="p-6 border border-gray-300 rounded-lg bg-white mb-4">
           <h1 className="text-md md:text-xl font-semibold leading-tight text-green-600 mb-4">
            All shortlisted players must register digitally before the training
            camp starts.
          </h1>
          <p className="max-w-4xl text-md">
            All shortlisted players must register digitally before the training
            camp starts tomorrow. This registration form will also be used for
            future players joining Maidaan. Please ensure all fields are filled
            accurately.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {formFields.map(({ label, name, type, options }) => (
            <div
              key={name}
              className="p-6 border border-gray-300 rounded-lg bg-white mb-4"
            >
              <label className="block mb-2">{label}</label>
              {type === "textarea" ? (
                <textarea
                  {...register(name, { required: true })}
                  className="w-full border-b border-gray-300 focus:border-green-500 focus:outline-none"
                />
              ) : type === "select" ? (
                <select
                  {...register(name, { required: true })}
                  className="w-full border-b border-gray-300 focus:border-green-500 focus:outline-none"
                >
                  <option value="">Select</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : type === "radio" ? (
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Yes"
                      {...register(name, { required: true })}
                      className="mr-2"
                    />{" "}
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="No"
                      {...register(name, { required: true })}
                      className="mr-2"
                    />{" "}
                    No
                  </label>
                </div>
              ) : (
                <input
                  type={type}
                  {...register(name, { required: true })}
                  className="w-full border-b border-gray-300 focus:border-green-500 focus:outline-none"
                />
              )}
              {errors[name] && (
                <p className="text-red-500 text-sm mt-2">
                  This field is required
                </p>
              )}
            </div>
          ))}

          <div className="p-6 border border-gray-300 rounded-lg bg-white mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register("consent", { required: true })}
                className="mr-2"
              />
              <label>I give consent to participate</label>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-sm mt-2">
                You must give consent to proceed
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mb-10"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
