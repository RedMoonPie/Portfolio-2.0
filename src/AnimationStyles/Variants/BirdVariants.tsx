export const bodyStyle = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    x: [0, -10, 0, 10],
    y: [0, -10.5, 0, -10.5],
    transition: {
      yoyo: Infinity,
      duration: 15,
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
      yoyo: Infinity,
      duration: 15,
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
      yoyo: Infinity,
      duration: 15,
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
      yoyo: Infinity,
      duration: 18,
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
      yoyo: Infinity,
      duration: 18,
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
      yoyo: Infinity,
      duration: 18,
    },
  },
};
