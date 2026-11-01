"use client";

import React from "react";
import { LazyMotion, domAnimation, MotionConfig } from "motion/react";

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
};
