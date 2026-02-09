"use client";

import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormStatusProps {
  status: "success" | "error";
  message?: string;
  onRetry?: () => void;
}

export function FormStatus({ status, message, onRetry }: FormStatusProps) {
  return (
    <div
      className="flex flex-col items-center gap-4 py-12 text-center"
      role="status"
      aria-live="polite"
    >
      {status === "success" ? (
        <>
          <CheckCircle className="h-16 w-16 text-brand-green" />
          <h3 className="font-heading text-xl font-bold">Thank you!</h3>
          <p className="text-sm text-gray-500">
            {message || "Your submission has been received. We'll be in touch soon."}
          </p>
        </>
      ) : (
        <>
          <XCircle className="h-16 w-16 text-error" />
          <h3 className="font-heading text-xl font-bold">Something went wrong</h3>
          <p className="text-sm text-gray-500">
            {message || "Please try again later."}
          </p>
          {onRetry && (
            <Button variant="dark" onClick={onRetry}>
              Try Again
            </Button>
          )}
        </>
      )}
    </div>
  );
}
