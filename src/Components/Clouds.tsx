import React from "react";
import { motion, Variants } from "framer-motion";

export interface CloudsProps {
  cloudVariant: Variants;
  cloudStyle: string;
  pathColor: string;
  viewBox: string;
}
const svgVariants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
export const Clouds: React.FC<CloudsProps> = (props: CloudsProps) => {
  const { cloudStyle, cloudVariant, viewBox, pathColor } = props;
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={cloudStyle}
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <g>
        <motion.path
          className={pathColor}
          variants={cloudVariant}
          d="M23,27.5h-3c-0.276,0-0.5-0.224-0.5-0.5v-1c0-1.378-1.121-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v1    c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-0.5c0-0.551-0.448-1-1-1s-1,0.449-1,1V27c0,0.276-0.224,0.5-0.5,0.5H8    c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2.5c0-1.103,0.897-2,2-2c0.441,0,0.851,0.144,1.182,0.387    C14.147,23.501,15.459,22.5,17,22.5c1.93,0,3.5,1.57,3.5,3.5v0.5H23c0.276,0,0.5,0.224,0.5,0.5S23.276,27.5,23,27.5z"
        />
      </g>
    </motion.svg>
  );
};
