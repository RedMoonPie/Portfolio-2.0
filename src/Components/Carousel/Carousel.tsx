import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { randomNeonColor } from "../../Utils/utils";
import { TextTypeNeon } from "../../AnimationStyles/Effects/TextTypeNeon";
import { ModalImg } from "../ModalImg";
import { carouselStyles } from "./style";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  neonWordSub,
  neonSentenceSub,
} from "../../AnimationStyles/Variants/TextVariants";
import { CarouselProps } from "./CarouselTypes";
import { useCarousel } from "./useCarousel";

export const Carousel = React.memo((props: CarouselProps) => {
  const { headingText, images } = props;
  const {
    classes,
    color,
    width,
    carousel,
    imagesMap,
    currentImage,
    handleClose,
    modalOpen,
  } = useCarousel(props);
  return (
    <>
      <Grid item xs={12} className={classes.carouselContainer}>
        <TextTypeNeon
          text={headingText}
          textStyles={classes.headingTextStyle}
          wordVariant={neonWordSub}
          sentenceVariant={neonSentenceSub}
          color={color}
          isBlackBackground
        />

        <motion.div
          ref={carousel}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={classes.carousel}
        >
          <div className={classes.innerCarousel}>{images && imagesMap}</div>
        </motion.div>
      </Grid>
      <ModalImg
        imageSrc={currentImage}
        open={modalOpen}
        handleClose={handleClose}
      />
    </>
  );
});
