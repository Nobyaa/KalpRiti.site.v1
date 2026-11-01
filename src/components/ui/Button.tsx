import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-accent text-[#f7fafc] hover:bg-accent-deep shadow-sm hover:shadow active:bg-accent-deep",
    secondary:
      "liquid-glass text-ink hover:bg-highlight/30 hover:border-ink/20 active:bg-highlight/40",
    outline:
      "border border-ink/25 text-ink hover:bg-ink/5 hover:border-ink/50",
    link: "p-0 text-accent hover:text-accent-deep underline underline-offset-4 decoration-accent/40 hover:decoration-accent active:scale-100",
  }[variant];

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-full min-h-[36px]",
    md: "text-sm sm:text-base px-6 py-2.5 rounded-full min-h-[44px]",
    lg: "text-base sm:text-lg px-8 py-3.5 rounded-full min-h-[50px]",
  }[size];

  const resolvedClass = cn(
    baseStyles,
    variant !== "link" && sizeStyles,
    variantStyles,
    className
  );

  if (href) {
    return (
      <Link href={href} className={resolvedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={resolvedClass} {...props}>
      {children}
    </button>
  );
};
