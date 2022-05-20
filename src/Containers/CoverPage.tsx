import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import EiffelIcon from "../Assets/Landscape/eiffel-svgrepo.svg";
import Neddle from "../Assets/Landscape/landmark-needle-svgrepo.svg";
import Big from "../Assets/Landscape/ben-big-svgrepo.svg";
import Australia from "../Assets/Landscape/australia-svgrepo.svg";

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
}));
//#f6f4d8
//#2b3b4b
export const CoverPage: React.FC<CoverPageProps> = (props: CoverPageProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.backgroundCover}>
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
