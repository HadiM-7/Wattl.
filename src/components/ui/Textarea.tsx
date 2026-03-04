import { cn } from "@/lib/utils";
import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  dark?: boolean;
  showRequired?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, dark, showRequired, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className={cn(
            "text-sm font-medium",
            dark ? "text-brand-yellow" : "text-brand-blue"
          )}
        >
          {label}
          {showRequired && <span className="ml-0.5 text-error">*</span>}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          aria-required={showRequired || undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          rows={4}
          className={cn(
            "rounded-input border-2 border-brand-black px-4 py-3 text-base transition-all focus:shadow-[3px_3px_0_#003CA7] focus:outline-none",
            dark
              ? "bg-brand-off-white text-brand-black placeholder:text-gray-500"
              : "bg-white text-brand-black placeholder:text-gray-400",
            error && "border-error",
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
