import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import EiffelIcon from "../Assets/Landscape/eiffel-svgrepo.svg";
import Neddle from "../Assets/Landscape/landmark-needle-svgrepo.svg";
import Big from "../Assets/Landscape/ben-big-svgrepo.svg";
import Australia from "../Assets/Landscape/australia-svgrepo.svg";

import { Birds } from "../Components/Birds";
import { Clouds } from "../Components/Clouds";
import {
  cloudVariants,
  cloudVariants2,
} from "../AnimationStyles/Variants/CloudVariants";
import {
  LeftWingStyle,
  RightWingStyle,
  bodyStyle,
  LeftWingStyle2,
  RightWingStyle2,
  bodyStyle2,
} from "../AnimationStyles/Variants/BirdVariants";
import { TvShadow } from "../AnimationStyles/Effects/TvShadow";

export interface CoverPageProps {
  loadingAnimation: boolean;
}
const useStyles = makeStyles(() => ({
  backgroundCover: {
    backgroundColor: "#ece6c2",
    borderRadius: "10% 10% 10% 10%",
    height: "100vh",
    position: "relative",
  },
  landsCape: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    bottom: "10%",
  },
  vintageText: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
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
  clouds: {
    position: "absolute",
    width: "100vw",
  },
  clouds2: {
    position: "absolute",
    width: "100vw",
    top: "10vh",
  },
  birdNeeddle: {
    position: "absolute",
    width: "12vw",
    left: "10vw",
    top: "-10vh",
  },
  birdBig: {
    position: "absolute",
    width: "10vw",
    left: "36vw",
    top: "15vh",
  },
  birdAustralia: {
    position: "absolute",
    width: "10vw",
    left: "53vw",
    top: "2vh",
  },
  gridBirdContainer: {
    top: "20vh",
    position: "relative",
  },
  pathColor: {
    fill: "#d0948d ",
  },
  cloudPathColor: {
    fill: "#2fa6a8 ",
  },
  retroControlContainer: {
    position: "relative",
    border: "solid 1px black",
  },
}));

export const CoverPage: React.FC<CoverPageProps> = (props: CoverPageProps) => {
  const classes = useStyles();
  const { loadingAnimation } = props;

  return (
    <>
      <TvShadow />
      {!loadingAnimation && (
        <>
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
              viewBox={"34 25 30 30"}
            />
            <Birds
              leftWingStyle={LeftWingStyle}
              rightWingStyle={RightWingStyle}
              bodyStyle={bodyStyle}
              birdStyle={classes.birdBig}
              pathColor={classes.pathColor}
              viewBox={"34 10 30 30"}
            />
            <Birds
              leftWingStyle={LeftWingStyle2}
              rightWingStyle={RightWingStyle2}
              bodyStyle={bodyStyle2}
              birdStyle={classes.birdAustralia}
              pathColor={classes.pathColor}
              viewBox={"34 25 30 30"}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridBirdContainer}>
            <Clouds
              cloudVariant={cloudVariants}
              cloudStyle={classes.clouds}
              pathColor={classes.cloudPathColor}
              viewBox={"0 0 300 30"}
            />
            <Clouds
              cloudVariant={cloudVariants2}
              cloudStyle={classes.clouds2}
              pathColor={classes.cloudPathColor}
              viewBox={"0 0 300 30"}
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
          <Grid item xs={12} className={classes.vintageText}>
            <Typography
              style={{
                fontFamily: "sweetHipster",
                fontSize: "6rem",
                color: "#6f5643",
                fontWeight: 300,
              }}
            >
              Curly Coding
            </Typography>
          </Grid>
        </>
      )}
    </>
  );
};
