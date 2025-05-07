/* Field metadata for the Press & Media inquiry form
   ------------------------------------------------- */
   export const MEDIA_FIELDS = [
    { label: "Your Name",          name: "name",          type: "text",     required: true },
    { label: "Your Email",         name: "email",         type: "email",    required: true },
    { label: "Your Organization",  name: "organization",  type: "text"                    },
    {
      label:   "Inquiry Type",
      name:    "inquiryType",
      type:    "select",
      options: ["Interview Request", "Article Feature", "General Query"],
      required: true,
    },
    { label: "Your Message",       name: "message",       type: "textarea", required: true },
  ];
  