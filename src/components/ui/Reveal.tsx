"use client";

import React from "react";
import { m } from "motion/react";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
}) => {
  return (
    <m.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
};
