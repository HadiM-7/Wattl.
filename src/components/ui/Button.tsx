import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-yellow text-brand-blue border-3 border-brand-black shadow-[4px_4px_0_#1A1A1A] hover:brightness-110 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#1A1A1A]",
  secondary:
    "bg-transparent text-brand-blue border-3 border-brand-blue shadow-[4px_4px_0_#003CA7] hover:bg-brand-blue hover:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#003CA7]",
  dark: "bg-brand-black text-white border-3 border-brand-black shadow-[4px_4px_0_#38AAD4] hover:brightness-125 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#38AAD4]",
  ghost:
    "bg-transparent text-white border-3 border-white shadow-[4px_4px_0_#1A1A1A] hover:bg-white hover:text-brand-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#1A1A1A]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", isLoading, children, disabled, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center rounded-button px-6 py-3 text-sm font-[900] uppercase tracking-[0.05em] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
          variantStyles[variant],
          className
        )}
        type="button"
        {...props}
      >
        {isLoading ? (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
