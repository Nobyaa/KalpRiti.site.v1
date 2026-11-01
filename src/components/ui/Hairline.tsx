import React from "react";
import { cn } from "@/lib/utils";

interface HairlineProps extends React.SVGProps<SVGSVGElement> {
  variant?: "horizontal" | "vertical" | "arc" | "crosshair";
  className?: string;
}

export const Hairline: React.FC<HairlineProps> = ({
  variant = "horizontal",
  className,
  ...props
}) => {
  if (variant === "horizontal") {
    return (
      <div
        aria-hidden="true"
        className={cn("w-full h-[1px] bg-ink/10 relative overflow-hidden", className)}
      />
    );
  }

  if (variant === "vertical") {
    return (
      <div
        aria-hidden="true"
        className={cn("w-[1px] h-full bg-ink/10 relative overflow-hidden", className)}
      />
    );
  }

  if (variant === "arc") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-24 h-24 stroke-accent/20 pointer-events-none select-none", className)}
        {...props}
      >
        <circle cx="50" cy="50" r="48" strokeWidth="0.75" strokeDasharray="3 3" />
        <path d="M50 2 A 48 48 0 0 1 98 50" strokeWidth="1" className="stroke-accent/40" />
      </svg>
    );
  }

  if (variant === "crosshair") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-5 h-5 stroke-accent/30 pointer-events-none select-none", className)}
        {...props}
      >
        <line x1="10" y1="2" x2="10" y2="18" strokeWidth="0.75" />
        <line x1="2" y1="10" x2="18" y2="10" strokeWidth="0.75" />
      </svg>
    );
  }

  return null;
};
