import React from "react";
import { motion } from "framer-motion";
import { letter, sentence } from "../Variants/TextVariants";

export interface TextType {
  text: string;
}

export const TextType: React.FC<TextType> = ({ text }) => {
  return (
    <motion.h3
      className="load-screen--message"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => {
        return (
          <motion.span key={char + "-" + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </motion.h3>
  );
};
