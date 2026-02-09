import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-yellow text-brand-blue border-transparent hover:brightness-110",
  secondary:
    "bg-transparent text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white",
  dark: "bg-brand-black text-white border-transparent hover:brightness-125",
  ghost:
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-black",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", isLoading, children, disabled, ...props },
    ref
  ) => {
    const MotionButton = motion.button as any;

    return (
      <MotionButton
        ref={ref}
        disabled={disabled || isLoading}
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95, rotate: -0.5 }}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center rounded-button px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
          variantStyles[variant],
          className
        )}
        type="button"
        {...(props as any)}
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
      </MotionButton>
    );
  }
);

Button.displayName = "Button";
