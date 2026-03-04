"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "yellow";
  shadowColor?: string;
}

export function Card({ children, className, variant = "white", shadowColor = "#1A1A1A" }: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "rounded-card border-3 border-brand-black p-6 transition-all duration-300 hover:-translate-y-1",
        variant === "white" && "bg-white",
        variant === "yellow" && "bg-brand-yellow text-brand-black",
        className
      )}
      style={{
        boxShadow: hovered
          ? `7px 7px 0 ${shadowColor}`
          : `5px 5px 0 ${shadowColor}`,
      }}
    >
      {children}
    </div>
  );
}
