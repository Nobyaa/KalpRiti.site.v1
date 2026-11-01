import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = "default",
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10",
        size === "narrow" && "max-w-4xl",
        size === "default" && "max-w-[1240px]",
        size === "wide" && "max-w-[1400px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
