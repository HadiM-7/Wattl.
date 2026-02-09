import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "yellow";
}

export function Card({ children, className, variant = "white" }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        variant === "white" &&
          "border border-gray-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
        variant === "yellow" && "bg-brand-yellow text-brand-black",
        className
      )}
    >
      {children}
    </div>
  );
}
