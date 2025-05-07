"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

export function useMediaInquiry() {
  /* ───────── form state ───────── */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* ───────── UI state ───────── */
  const [submitting, setSubmitting] = useState(false);

  /* ───────── submit handler ───────── */
  const onSubmit = async (values) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/media-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? `HTTP ${res.status}`);

      toast.success("Inquiry sent ✅");
      reset();
    } catch (err) {
      toast.error(err.message ?? "Submit failed");
    } finally {
      setSubmitting(false);
    }
  };

  return { register, handleSubmit, errors, submitting, onSubmit };
}
