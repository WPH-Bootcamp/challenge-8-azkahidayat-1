import { stagger, type Variants } from 'framer-motion';

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.1),
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const fadeInOut: Variants = {
  ...fadeIn,
  exit: { opacity: 0 },
};

export const fadeInFromTop: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const fadeInFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const fadeInOutFromBottom: Variants = {
  ...fadeInFromBottom,
  exit: {
    opacity: 0,
    y: 10,
  },
};
