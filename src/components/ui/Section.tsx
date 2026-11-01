import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  spacing?: "default" | "tight" | "spacious";
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  spacing = "default",
  ...props
}) => {
  return (
    <section
      className={cn(
        "relative w-full",
        spacing === "tight" && "py-6 sm:py-8 md:py-10",
        spacing === "default" && "py-10 sm:py-12 md:py-16 lg:py-20",
        spacing === "spacious" && "py-12 sm:py-16 md:py-24",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
