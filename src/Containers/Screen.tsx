import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { RetroController } from "../Components/RetroController";
import { CoverPage } from "./CoverPage";
export interface ScreenProps {}
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

export const Screen: React.FC<ScreenProps> = (props: ScreenProps) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid xs={8} container item className={classes.backgroundCover}>
        <CoverPage />
      </Grid>
      <Grid container item xs={4} spacing={2}>
        <Grid xs={12} item className={classes.retroControlContainer}>
          <RetroController />
        </Grid>
      </Grid>
    </Grid>
  );
};
