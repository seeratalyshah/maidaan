/* use-player-registration.js */
"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import { FORM_FIELDS } from "./data";

export function usePlayerRegistration() {
  /* ───────── form state ───────── */
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { attachments: [] } });

  const { fields, append, remove } = useFieldArray({ control, name: "attachments" });

  /* ───────── local UI state ───────── */
  const [submitting, setSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);
  const imageRef = useRef();

  /* ───────── helpers ───────── */
  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(file));
  };

  const onSubmit = async (values) => {
    setSubmitting(true);
    try {
      const fd = new FormData();

      /* image */
      if (imageRef.current?.files[0]) fd.append("playerImage", imageRef.current.files[0]);

      /* primitives */
      FORM_FIELDS.forEach(({ name }) => fd.append(name, values[name] ?? ""));
      [
        "medicalCondition",
        "majorInjuries",
        "medication",
        "internationalTournaments",
        "proFootballContracts",
        "futureUpdates",
        "dominantFoot",
      ].forEach((n) => fd.append(n, values[n] || ""));

      /* attachments */
      values.attachments.forEach((att, i) => {
        if (att.file?.[0]) {
          fd.append(`attachments[${i}][file]`, att.file[0]);
          fd.append(`attachments[${i}][label]`, att.label);
        }
      });

      fd.append("consent", values.consent ? "1" : "0");

      const res = await fetch("/api/players", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? `HTTP ${res.status}`);

      toast.success("Registration saved ✅");
      reset({ attachments: [] });
      setPreview(null);
    } catch (err) {
      toast.error(err.message ?? "Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  return {
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
  };
}
