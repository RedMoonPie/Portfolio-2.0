export type repeatType = "reverse" | "mirror" | "loop" | undefined;

export const bodyStyle = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    x: [0, -10, 0, 10],
    y: [0, -10.5, 0, -10.5],
    transition: {
      repeat: Infinity,
      duration: 15,
      repeatType: "reverse" as repeatType,
    },
  },
};

export const LeftWingStyle = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    x: [0, -10, 0, 10],
    y: [0, -10, 0, -10],
    rotate: [0, -32, 0, -32],
    transition: {
      repeat: Infinity,
      duration: 15,
      repeatType: "reverse" as repeatType,
    },
  },
};
export const RightWingStyle = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    x: [0, -10, 0, 10],
    y: [0, -10, 0, -10],
    rotate: [0, 32, 0, 32],
    transition: {
      repeat: Infinity,
      duration: 15,
      repeatType: "reverse" as repeatType,
    },
  },
};
export const bodyStyle2 = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    x: [0, 10, 0, -10],
    y: [-0.5, 10, -0.5, 10],
    transition: {
      repeat: Infinity,
      duration: 18,
      repeatType: "reverse" as repeatType,
    },
  },
};
export const LeftWingStyle2 = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    x: [0, 10, 0, -10],
    y: [0, 10, 0, 10],
    rotate: [-32, 0, -32, 0],
    transition: {
      repeat: Infinity,
      duration: 18,
      repeatType: "reverse" as repeatType,
    },
  },
};
export const RightWingStyle2 = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    x: [0, 10, 0, -10],
    y: [0, 10, 0, 10],
    rotate: [32, 0, 32, 0],
    transition: {
      repeat: Infinity,
      duration: 18,
      repeatType: "reverse" as repeatType,
    },
  },
};
