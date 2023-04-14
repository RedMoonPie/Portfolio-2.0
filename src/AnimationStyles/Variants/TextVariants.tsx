import { repeatType } from "./BirdVariants";

export const sentence = (stagerValue: number) => ({
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      staggerChildren: stagerValue,
      delayChildren: 0.3,
    },
  },
});
export const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export const neonSentence = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: [0.2, 0.5, 0.8, 1],
    transition: {
      duration: 3,
      staggerChildren: 0.5,
      delayChildren: 0.1,
    },
  },
};
export const neonWord = {
  hidden: {
    opacity: 0.2,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },
};
export const neonSentenceSub = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: [0.5, 0.8, 1],
    transition: {
      duration: 2,
    },
  },
};
export const neonWordSub = {
  hidden: {
    opacity: 0.5,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as repeatType,
    },
  },
};
