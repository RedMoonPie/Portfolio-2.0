import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import EiffelIcon from "../Assets/Landscape/eiffel-svgrepo.svg";
import Neddle from "../Assets/Landscape/landmark-needle-svgrepo.svg";
import Big from "../Assets/Landscape/ben-big-svgrepo.svg";
import Australia from "../Assets/Landscape/australia-svgrepo.svg";
import { Birds } from "../Components/Birds";

import { border, height } from "@mui/system";

export interface CoverPageProps {}
const useStyles = makeStyles(() => ({
  backgroundCover: {
    backgroundColor: "#f6f4d8",
    height: "100vh",
    position: "absolute",
  },
  landsCape: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    bottom: "40%",
  },
  alignBotton: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    border: "solid 1px black",
  },
  eiffelStyle: {
    position: "relative",
    top: "calc(100% - 32vh)",
    width: "20rem",
    height: "40vh",
  },
  neddle: {
    position: "relative",
    top: "calc(100% - 45vh)",
    width: "30rem",
    height: "55vh",
  },
  big: {
    position: "relative",
    top: "calc(100% - 35vh)",
    width: "25rem",
    height: "42vh",
  },
  australia: {
    position: "relative",
    top: "calc(100% - 32vh)",
    width: "20rem",
    height: "40vh",
  },
  birds: {
    position: "absolute",
    width: "10vw",
  },
  birdNeeddle: {
    position: "absolute",
    width: "12vw",
    left: "40vw",
    top: "-10vh",
  },
  gridBirdContainer: {
    top: "20vh",
    position: "absolute",
  },
  pathColor: {
    fill: "#bfc4c9",
  },
}));
//#f6f4d8
//#2b3b4b

const bodyStyle = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    x: [0, -10, 0, 10],
    y: [0.5, -10, 0.5, -10],
    transition: {
      yoyo: Infinity,
      duration: 10,
    },
  },
};

const LeftWingStyle = {
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
      duration: 10,
    },
  },
};
const RightWingStyle = {
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
      duration: 10,
    },
  },
};
const bodyStyle2 = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    x: [0, 10, 0, -10],
    y: [-0.5, 10, -0.5, 10],
    transition: {
      yoyo: Infinity,
      duration: 8,
    },
  },
};
const LeftWingStyle2 = {
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
      duration: 8,
    },
  },
};
const RightWingStyle2 = {
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
      duration: 8,
    },
  },
};
export const CoverPage: React.FC<CoverPageProps> = (props: CoverPageProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.backgroundCover}>
      <Grid item xs={12} className={classes.gridBirdContainer}>
        <Birds
          leftWingStyle={LeftWingStyle}
          rightWingStyle={RightWingStyle}
          bodyStyle={bodyStyle}
          birdStyle={classes.birds}
          pathColor={classes.pathColor}
          viewBox={"35 10 30 30"}
        />
        <Birds
          leftWingStyle={LeftWingStyle2}
          rightWingStyle={RightWingStyle2}
          bodyStyle={bodyStyle2}
          birdStyle={classes.birdNeeddle}
          pathColor={classes.pathColor}
          viewBox={"35 25 30 30"}
        />
      </Grid>
      <Grid item xs={3} className={classes.landsCape}>
        <img src={EiffelIcon} alt="Paris" className={classes.eiffelStyle} />
      </Grid>
      <Grid item xs={3} className={classes.landsCape}>
        <img src={Neddle} alt="Paris" className={classes.neddle} />
      </Grid>
      <Grid item xs={3} className={classes.landsCape}>
        <img src={Big} alt="Paris" className={classes.big} />
      </Grid>
      <Grid item xs={3} className={classes.landsCape}>
        <img src={Australia} alt="Paris" className={classes.australia} />
      </Grid>
    </Grid>
  );
};
