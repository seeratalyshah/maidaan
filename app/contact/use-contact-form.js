"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

export function useContactForm() {
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Submit failed");

      toast.success("Message sent ✓");
      reset();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return { register, handleSubmit, errors, submitting, onSubmit };
}
