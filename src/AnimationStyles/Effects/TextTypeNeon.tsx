import React, { ReactElement, ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { neonSentence, neonWord } from "../Variants/TextVariants";
import { makeStyles } from "@mui/styles";
import { randomNeonColor } from "../../Utils/utils";

export interface TextTypeNeon {
  text: string;
  textStyles: string;
  sentenceVariant: Variants;
  wordVariant: Variants;
  color: string;
  iconBefore?: ReactNode;
  isBlackBackground?: boolean;
}

export const TextTypeNeon: React.FC<TextTypeNeon> = ({
  text,
  textStyles,
  sentenceVariant,
  wordVariant,
  iconBefore,
  isBlackBackground,
  color,
}) => {
  return (
    <motion.div
      className={textStyles}
      variants={sentenceVariant}
      initial="hidden"
      animate="visible"
    >
      {text.split(" ").map((phrase, index) => {
        return (
          <motion.span
            key={phrase + "-" + index}
            style={{
              color,
              textShadow: `5px 5px 4px ${color}`,
              backgroundColor: isBlackBackground ? "black" : "",
              padding: "0.6vw 1vw",
              borderRadius: "10px",
            }}
            variants={wordVariant}
          >
            {iconBefore} {phrase + " "}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
