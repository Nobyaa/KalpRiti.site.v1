import React from "react";
import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "base" | "lg" | "lead";
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  size = "base",
  children,
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: "text-xs sm:text-sm text-ink/75 leading-relaxed",
    base: "text-sm sm:text-base text-ink/85 leading-relaxed",
    lg: "text-base sm:text-lg text-ink/90 leading-relaxed",
    lead: "text-lg sm:text-xl md:text-2xl text-ink/90 font-light leading-relaxed tracking-tight",
  }[size];

  return (
    <p
      className={cn("font-sans max-w-[65ch]", sizeClasses, className)}
      {...props}
    >
      {children}
    </p>
  );
};
