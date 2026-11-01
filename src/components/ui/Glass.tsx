import React from "react";
import { cn } from "@/lib/utils";

interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const Glass: React.FC<GlassProps> = ({
  children,
  className,
  glow = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "liquid-glass rounded-card relative transition-all duration-300",
        glow && "shadow-[0_20px_50px_rgba(193,60,47,0.06)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
