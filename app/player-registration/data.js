/* data.js – metadata for all regular fields (no image / attachments) */
export const FORM_FIELDS = [
  { label: "Full Name", name: "fullName", type: "text" },
  { label: "Email", name: "email", type: "email" },
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
  { label: "Trials Attended (City & Date)", name: "trialsAttended", type: "text" },
  { label: "Previous Club/Academy (if any)", name: "previousClub", type: "text" },
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
  { label: "Major Injuries in the last year", name: "majorInjuries", type: "radio" },
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
