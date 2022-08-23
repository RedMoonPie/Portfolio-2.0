import React from "react";
import { motion } from "framer-motion";
import { letter, sentence } from "../Variants/TextVariants";
import { makeStyles } from "@mui/styles";

export interface TextType {
  text: string;
  textStyles: string;
}

export const TextType: React.FC<TextType> = ({ text, textStyles }) => {
  return (
    <motion.div
      className={textStyles}
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
    </motion.div>
  );
};
