export const motionConfig = {
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Apple-like smooth decel
  gentleSpring: { type: "spring", stiffness: 300, damping: 25 },
  durations: {
    micro: 0.2,
    standard: 0.5,
    scene: 0.9,
  },
  stagger: 0.08,
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: motionConfig.durations.standard, ease: motionConfig.ease } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: motionConfig.durations.standard, ease: motionConfig.ease } },
};
