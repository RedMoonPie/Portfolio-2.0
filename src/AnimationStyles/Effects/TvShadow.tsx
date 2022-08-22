import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import { useAnimationLoader } from "./useAnimationLoader";

export interface TvShadowProps {}
const useStyles = makeStyles(() => ({
  box: {
    width: "inherit",
    height: "inherit",
    background: "white",
    position: "absolute",
  },
  backgroundBox: {
    borderRadius: "10% 10% 10% 10%",
    width: "100%",
    height: "100%",
    background: "black",
    position: "absolute",
  },
}));

export const TvShadow: React.FC<TvShadowProps> = (props: TvShadowProps) => {
  const classes = useStyles();
  const { handleStartAnimation, handleFinishAnimation } = useAnimationLoader();

  return (
    <>
      <motion.div
        className={classes.backgroundBox}
        animate={{
          opacity: [1, 1, 1, 1, 0],
        }}
        transition={{
          duration: 1.7,
        }}
        onAnimationComplete={handleFinishAnimation}
        onAnimationStart={handleStartAnimation}
      >
        <motion.div
          className={classes.box}
          animate={{
            scaleY: [1, 1, 0.01, 0.01, 0.01],
            scaleX: [1, 1, 1, 0.009, 0.009],
            opacity: [0, 1, 1, 1, 1],
            borderRadius: [
              "10% 10% 10% 10%",
              "10% 10% 10% 10%",
              "50% 50% 50% 50%",
              "100%",
            ],
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            times: [0, 0.7, 0.8, 0.9, 1],
            repeat: 1,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        />
      </motion.div>
    </>
  );
};
