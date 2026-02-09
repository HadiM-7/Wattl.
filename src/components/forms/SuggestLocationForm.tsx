"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { FormStatus } from "./FormStatus";
import { submitForm } from "@/lib/web3forms";

interface FormData {
  establishment: string;
  address: string;
  email: string;
}

export function SuggestLocationForm() {
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
        "Establishment / Occasion": data.establishment,
        Address: data.address,
        Email: data.email,
      },
      "Location Suggestion"
    );
    setStatus(result.success ? "success" : "error");
    if (result.success) reset();
  };

  if (status === "success") return <FormStatus status="success" />;
  if (status === "error")
    return <FormStatus status="error" onRetry={() => setStatus("idle")} />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <input type="hidden" name="botcheck" />
      <Input
        label="ESTABLISHMENT / OCCASION"
        placeholder="e.g. Bondi Beach Cafe"
        error={errors.establishment?.message}
        {...register("establishment", {
          required: "This field is required",
        })}
      />
      <Input
        label="ADDRESS"
        placeholder="e.g. 123 Beach Road, Bondi"
        error={errors.address?.message}
        {...register("address", { required: "Address is required" })}
      />
      <Input
        label="EMAIL"
        type="email"
        placeholder="e.g. email@gmail.com"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
      />
      <Button variant="dark" type="submit" isLoading={isSubmitting}>
        Submit
      </Button>
    </form>
  );
}
