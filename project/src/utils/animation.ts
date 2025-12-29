import { Variants } from 'framer-motion';

export const fadeIn = (delay = 0, duration = 0.5): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay,
      duration,
      ease: 'easeInOut',
    },
  },
});

export const slideUp = (delay = 0, duration = 0.5): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerChildren = (staggerTime = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerTime,
    },
  },
});

export const scaleIn = (delay = 0, duration = 0.5): Variants => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});