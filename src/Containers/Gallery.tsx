import { TvShadow } from "../AnimationStyles/Effects/TvShadow";

import { makeStyles } from "@mui/styles";
import designImages from "../Assets/Certificates/Design/designImages";
import developmentImages from "../Assets/Certificates/Development/developmentImages";
import mngImages from "../Assets/Certificates/Management/managementImages";

import { Carousel } from "../Components/Carousel/Carousel";
import { Grid } from "@mui/material";
import { TextTypeNeon } from "../AnimationStyles/Effects/TextTypeNeon";
import { randomNeonColor } from "../Utils/utils";
import { UseMusicPlayer } from "../Components/UseMusicPlayer";
import LightCouldBeDream from "../Assets/Music/lightCouldbeDream.mp3";
import {
  neonSentence,
  neonWord,
} from "../AnimationStyles/Variants/TextVariants";
import { useMemo } from "react";

export interface GalleryProps {
  loadingAnimation: boolean;
}
const useStyles = makeStyles(() => ({
  galleryContainer: {
    background: `url("https://www.transparenttextures.com/patterns/binding-dark.png")`,
    position: "relative",
    overflow: "hidden",
  },
  headerStyle: {
    width: "100%",
    fontSize: "4vw",
    fontFamily: "neonPixel",
    background: `url("https://www.transparenttextures.com/patterns/binding-dark.png")`,
    borderBottom: `5px dashed #cc955d`,
    paddingBottom: "1vw",
  },
  headerContainer: {
    textAlign: "center",
    backgroundColor: "black",
    position: "sticky",
    zIndex: 2,
    top: "0px",
  },
  carouselContainer: {
    position: "relative",
    zIndex: 1,
  },
}));

export const Gallery = (props: GalleryProps) => {
  const classes = useStyles();
  const color = randomNeonColor();
  UseMusicPlayer({ audio: LightCouldBeDream });
  const { loadingAnimation } = props;

  const developmentImg = useMemo(() => developmentImages, []);
  const designImg = useMemo(() => designImages, []);
  const mngImg = useMemo(() => mngImages, []);

  return (
    <>
      <TvShadow />
      {!loadingAnimation && (
        <Grid item xs={12} container className={classes.galleryContainer}>
          <Grid item xs={12} className={classes.headerContainer}>
            <TextTypeNeon
              text={"Bar of Certificates"}
              textStyles={classes.headerStyle}
              wordVariant={neonWord}
              sentenceVariant={neonSentence}
              iconBefore={<span>&#10032;</span>}
              color={color}
            />
          </Grid>
          <Grid container item xs={12} className={classes.carouselContainer}>
            <Carousel images={developmentImg} headingText="Development" />
            <Carousel images={mngImg} headingText="Management" />
            <Carousel images={designImg} headingText="Design" />
          </Grid>
        </Grid>
      )}
    </>
  );
};
