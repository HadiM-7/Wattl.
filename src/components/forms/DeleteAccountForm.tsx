"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { FormStatus } from "./FormStatus";
import { submitForm } from "@/lib/web3forms";

interface FormData {
  name: string;
  email: string;
  reason: string;
}

export function DeleteAccountForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const result = await submitForm(
      {
        "Full Name": data.name,
        Email: data.email,
        Reason: data.reason || "Not specified",
      },
      "Account Deletion Request"
    );
    setStatus(result.success ? "success" : "error");
    if (result.success) reset();
  };

  if (status === "success")
    return (
      <FormStatus
        status="success"
        message="Your account deletion request has been submitted. We'll process it shortly."
      />
    );
  if (status === "error")
    return <FormStatus status="error" onRetry={() => setStatus("idle")} />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <input type="hidden" name="botcheck" />
      <Input
        label="FULL NAME"
        placeholder="e.g. John Doe"
        dark
        error={errors.name?.message}
        {...register("name", { required: "Name is required" })}
      />
      <Input
        label="EMAIL ADDRESS"
        type="email"
        placeholder="e.g. email@gmail.com"
        dark
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
      />
      <Textarea
        label="REASON (optional)"
        placeholder="Why do you want to delete your account?"
        dark
        {...register("reason")}
      />
      <Button variant="ghost" type="submit" isLoading={isSubmitting}>
        Submit Request
      </Button>
    </form>
  );
}
