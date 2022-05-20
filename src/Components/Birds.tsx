import React from "react";
import { motion, Variants } from "framer-motion";

export interface BirdProps {
  leftWingStyle: Variants;
  rightWingStyle: Variants;
  bodyStyle: Variants;
  birdStyle: string;
  pathColor: string;
  viewBox: string;
}
const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
export const Birds: React.FC<BirdProps> = (props: BirdProps) => {
  const {
    birdStyle,
    leftWingStyle,
    rightWingStyle,
    bodyStyle,
    pathColor,
    viewBox,
  } = props;
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={birdStyle}
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <g>
        <motion.path
          className={pathColor}
          d="M48.732,34.5c-0.276,0-0.5-0.224-0.5-0.5c0-0.827-0.673-1.5-1.5-1.5c-0.534,0-1.032,0.287-1.3,0.75    c-0.139,0.24-0.445,0.322-0.683,0.182c-0.239-0.138-0.321-0.444-0.183-0.683c0.445-0.771,1.275-1.249,2.165-1.249    c1.379,0,2.5,1.122,2.5,2.5C49.232,34.276,49.009,34.5,48.732,34.5z"
          variants={leftWingStyle}
        />
      </g>
      <g>
        <motion.path
          className={pathColor}
          d="M48.732,34.5c-0.276,0-0.5-0.224-0.5-0.5c0-1.378,1.121-2.5,2.5-2.5c0.89,0,1.72,0.479,2.165,1.249    c0.139,0.239,0.057,0.545-0.183,0.683c-0.237,0.138-0.544,0.057-0.683-0.182c-0.268-0.463-0.766-0.75-1.3-0.75    c-0.827,0-1.5,0.673-1.5,1.5C49.232,34.276,49.009,34.5,48.732,34.5z"
          variants={rightWingStyle}
        />
      </g>
      <g>
        <motion.path
          className={pathColor}
          d="M49.732,34.5h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5    S50.009,34.5,49.732,34.5z"
          variants={bodyStyle}
        />
      </g>
    </motion.svg>
  );
};
