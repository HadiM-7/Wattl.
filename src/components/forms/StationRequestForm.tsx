"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { FormStatus } from "./FormStatus";
import { submitForm } from "@/lib/web3forms";

interface FormData {
  venueName: string;
  contactPerson: string;
  email: string;
  phone: string;
}

export function StationRequestForm() {
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
        "Venue Name": data.venueName,
        "Contact Person": data.contactPerson,
        Email: data.email,
        "Phone Number": data.phone,
      },
      "Station Request"
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
        label="VENUE NAME"
        placeholder="e.g. The Local Bar & Grill"
        error={errors.venueName?.message}
        {...register("venueName", { required: "Venue name is required" })}
      />
      <Input
        label="CONTACT PERSON"
        placeholder="e.g. John Smith"
        error={errors.contactPerson?.message}
        {...register("contactPerson", {
          required: "Contact person is required",
        })}
      />
      <Input
        label="EMAIL ADDRESS"
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
      <Input
        label="PHONE NUMBER"
        type="tel"
        placeholder="e.g. 0412 345 678"
        error={errors.phone?.message}
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[\d\s+()-]{8,15}$/,
            message: "Invalid phone number",
          },
        })}
      />
      <Button variant="dark" type="submit" isLoading={isSubmitting}>
        Request Station
      </Button>
    </form>
  );
}
