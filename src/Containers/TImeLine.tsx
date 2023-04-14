import React, { useEffect, useRef, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TvShadow } from "../AnimationStyles/Effects/TvShadow";

import { bodyStyle } from "../AnimationStyles/Variants/BirdVariants";
import {
  useTransform,
  useSpring,
  motion,
  useScroll,
  MotionValue,
  useInView,
  useViewportScroll,
} from "framer-motion";
import { height } from "@mui/system";
export interface TimeLineProps {
  loadingAnimation: boolean;
  containerRef: React.MutableRefObject<null>;
}
const useStyles = makeStyles(() => ({
  backgroundCover: {
    userSelect: "none",
    backgroundColor: "#ebd0a3",
    background: `url("https://www.transparenttextures.com/patterns/natural-paper.png")`,
    borderRadius: "10% 10% 10% 10%",
    height: "100%",
    position: "relative",
    overflowY: "scroll",
    "&::-ms-overflow-style": "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
  },
  galleryContainer: {
    position: "relative",
  },
  centerContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const NormalFlow: React.FC<{ delay: number; direction: string }> = (props: {
  delay: number;
  direction: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      style={{
        width: "40rem",
        height: "27.4rem",
        justifyContent: "center",
      }}
    >
      <motion.svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            style={{
              fill: "transparent",
              stroke: "rgb(0,0,0)",
              strokeWidth: "3",
              strokeLinecap: "round",
            }}
            strokeDasharray={"8,8"}
            strokeWidth={"1"}
            d="M 266.182 50.536 C 266.182 50.536 328.5361201893994 110.84594904566328 326.933 146.421 C 324.7725150991731 194.36460456640762 201.20549067443193 264.9102155984521 201.379 309.94 C 201.5017339244232 341.7923637703038 264.83 391.272 264.83 391.272"
          />
          <motion.path
            animate={
              (isInView &&
                props.direction === "Down" && {
                  pathLength: 1,
                  pathOffset: 1,
                }) ||
              (isInView &&
                props.direction === "Up" && { pathLength: 1, pathOffset: 0 })
            }
            initial={{ pathLength: 1, pathOffset: 0 }}
            transition={{
              duration: "2.5",
              delay: props.delay,
              pathLength: {
                type: "tween",
                bounce: 0,
              },
            }}
            style={{
              fill: "transparent",
              stroke: "#ebd0a3",
              strokeLinecap: "round",
            }}
            strokeWidth={"3"}
            strokeDasharray={"10,10"}
            d="M 266.182 50.536 C 266.182 50.536 328.5361201893994 110.84594904566328 326.933 146.421 C 324.7725150991731 194.36460456640762 201.20549067443193 264.9102155984521 201.379 309.94 C 201.5017339244232 341.7923637703038 264.83 391.272 264.83 391.272"
          />
        </g>
      </motion.svg>
    </div>
  );
};

export const TimeLine: React.FC<TimeLineProps> = (props: TimeLineProps) => {
  const classes = useStyles();
  const { loadingAnimation } = props;
  var scrollableElement = document.body; //document.getElementById('scrollableElement');
  const [direction, setDirection] = useState("");
  scrollableElement.addEventListener("wheel", checkScrollDirection);

  function checkScrollDirection(event: any) {
    if (checkScrollDirectionIsUp(event)) {
      setDirection("Up");
    } else {
      setDirection("Down");
    }
  }

  function checkScrollDirectionIsUp(event: any) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }

  return (
    <>
      <TvShadow />
      {!loadingAnimation && (
        <Grid item xs={12} container className={classes.backgroundCover}>
          <Grid item xs={12}>
            <Typography>TimeLine</Typography>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12} className={classes.centerContainer}>
              <NormalFlow delay={0} direction={direction} />
            </Grid>
            <Grid item xs={12} className={classes.centerContainer}>
              <NormalFlow delay={0.8} direction={direction} />
            </Grid>
            <Grid item xs={12} className={classes.centerContainer}>
              <NormalFlow delay={0} direction={direction} />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};
