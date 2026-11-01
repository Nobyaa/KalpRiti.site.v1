import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "display" | "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  accentText?: string;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = "h2",
  size,
  children,
  accentText,
  className,
  ...props
}) => {
  const resolvedSize = size || Component;

  const sizeClasses = {
    display: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]",
    h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]",
    h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]",
    h3: "text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-[1.2]",
    h4: "text-lg sm:text-xl md:text-2xl font-medium leading-[1.25]",
  }[resolvedSize];

  return (
    <Component
      className={cn("font-heading text-ink text-balance", sizeClasses, className)}
      {...props}
    >
      {children}
      {accentText && <span className="text-accent ml-2">{accentText}</span>}
    </Component>
  );
};
