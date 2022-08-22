import { Grid, Typography } from "@mui/material";
import React from "react";
import { TvShadow } from "../AnimationStyles/Effects/TvShadow";
import vintagePhoto from "../Assets/Photos/v_p_2.jpg";
import { makeStyles } from "@mui/styles";
import { TextType } from "../AnimationStyles/Effects/TextType";

export interface PresentationProps {
  loadingAnimation: boolean;
}
const useStyles = makeStyles(() => ({
  imgSize: {
    position: "relative",
    top: "calc(100% - 32vh)",
    width: "15vw",
    borderRadius: "100%",
    objectFit: "cover",
    objectPosition: "30% 0",
    height: "30vh",
  },
}));
export const Presentation: React.FC<PresentationProps> = (
  props: PresentationProps
) => {
  const classes = useStyles();
  const { loadingAnimation } = props;
  return (
    <>
      <TvShadow />
      {!loadingAnimation && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextType text="My text" />
          </Grid>
          <Grid item xs={12}>
            <img
              src={vintagePhoto}
              alt="Italian Trulli"
              className={classes.imgSize}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};
