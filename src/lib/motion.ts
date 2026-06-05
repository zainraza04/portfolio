import type { Transition, Variants } from "framer-motion";

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

export const pageTransition: Transition = {
  duration: 0.3,
  ease: "easeInOut",
};
