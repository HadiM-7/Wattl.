import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  dark?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, dark, className, id, ...props }, ref) => {
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
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(
            "h-12 rounded-input border-2 border-brand-black px-4 text-base transition-all focus:shadow-[3px_3px_0_#003CA7] focus:outline-none",
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

Input.displayName = "Input";
