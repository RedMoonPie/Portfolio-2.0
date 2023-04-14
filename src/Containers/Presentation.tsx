import { Grid, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { TvShadow } from "../AnimationStyles/Effects/TvShadow";
import vintagePhoto from "../Assets/Photos/v_p_2.jpg";
import gifHi from "../Assets/Gif/gifHi.gif";
import gifStaticHi from "../Assets/Photos/staticHi.jpg";
import typingGif from "../Assets/Gif/typingGif.gif";
import staticTyping from "../Assets/Photos/staticTyping.jpg";

import { makeStyles } from "@mui/styles";
import { TextType } from "../AnimationStyles/Effects/TextType";
import { motion } from "framer-motion";

export interface PresentationProps {
  loadingAnimation: boolean;
}
const useStyles = makeStyles(() => ({
  imgSize: {
    width: "95%",
    border: "solid 3px black",
    objectFit: "cover",
    objectPosition: "40% 0",
    height: "100%",
    filter: "grayscale(20%)",
  },
  presentationContainer: {
    padding: "40px",
  },
  containerHeader: {
    borderTop: "solid 0.2vw black",
    borderBottom: "solid 0.2vw black",
    boxShadow: "0px 0.6vw 2px -3px #000000",
  },
  containerSubHeader: {
    borderLeft: "solid 0.1vw black",
    alignSelf: "center",
  },
  containerLineHeader: {
    justifyContent: "space-between",
    borderBottom: "solid 0.1vw black",
  },
  containerParagraph: {
    borderRight: "solid 0.35vw #bda681",
  },
  containerParagraphSpaced: {
    borderLeft: "solid 0.35vw black",
    borderRight: "solid 0.35vw black",
    textAlign: "center",
    marginTop: "15px",
  },
  parentContainerParagraph: {
    borderBottom: "solid 0.15vw black",
  },
  textBoxHeader: {
    fontSize: "3vw",
    textAlign: "center",
    fontFamily: "fatAbril",
  },
  textBoxSubHeader: {
    fontSize: "0.85vw",
    fontFamily: "fatAbril",
  },
  textBoxNews: {
    fontFamily: "fatAbril",
    fontSize: "1.35vw",
    fontWeight: "bold",
    textAlign: "center",
    padding: "2vh 1vw 2vh 1vw",
    backgroundColor: "black",
    color: "#ebd0a3",
  },
  textBoxBody: {
    fontSize: "1vw",
  },
  quote: {
    marginTop: "10px",
    fontSize: "0.9vw",
    fontWeight: "bold",
  },
  artistQuote: {
    fontSize: "0.9vw",
  },
  boxNewsContainer: {
    paddingLeft: "5px",
  },
  boxStyle: {
    "&::-ms-overflow-style": "none" /* IE and Edge */,
    scrollbarWidth: "none" /* Firefox */,
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
  },
  textBoxSubtitle: {
    fontSize: "3vw",
  },
  textBoxSecondarySubtitle: {
    fontSize: "1.5vw",
  },
}));

export const Presentation: React.FC<PresentationProps> = (
  props: PresentationProps
) => {
  const classes = useStyles();
  const [hiImg, setHiImg] = useState(gifStaticHi);
  const [typingImg, setTypingImg] = useState(staticTyping);

  const handleToggleHi = (isOver: boolean) => {
    if (isOver) setHiImg(gifHi);
    else setHiImg(gifStaticHi);
  };
  const handleToggleTyping = (isOver: boolean) => {
    if (isOver) setTypingImg(typingGif);
    else setTypingImg(staticTyping);
  };
  const { loadingAnimation } = props;
  return (
    <div>
      <TvShadow />
      {!loadingAnimation && (
        <Box style={{ margin: "6vh 2vw" }}>
          <Grid
            item
            container
            spacing={1}
            xs={12}
            className={classes.containerHeader}
          >
            <Grid item container xs={9}>
              <Grid item xs={12}>
                <TextType
                  stagerValue={0.2}
                  textStyles={classes.textBoxHeader}
                  text="< BETWEEN LINES />"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              item
              xs={3}
              className={classes.containerSubHeader}
            >
              <TextType
                stagerValue={0.2}
                textStyles={classes.textBoxSubHeader}
                text="Editorial CurlyCoding"
              />
              <TextType
                stagerValue={0.2}
                textStyles={classes.textBoxSubHeader}
                text="Coffee Time"
              />
              <TextType
                stagerValue={0.2}
                textStyles={classes.textBoxSubHeader}
                text="No. 7"
              />
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            direction="row"
            className={classes.containerLineHeader}
            style={{ margin: "10px 0px" }}
          >
            <TextType
              stagerValue={0.2}
              textStyles={classes.textBoxSubHeader}
              text="Cod.004"
            />
            <TextType
              stagerValue={0.1}
              textStyles={classes.textBoxSubHeader}
              text="Everyday is a good day to smile !"
            />
            <TextType
              stagerValue={0.2}
              textStyles={classes.textBoxSubHeader}
              text="Bogotá"
            />
          </Grid>

          <Grid
            className={classes.parentContainerParagraph}
            container
            item
            style={{ paddingBottom: "2vh" }}
            xs={12}
          >
            <Grid className={classes.containerParagraph} container item xs={9}>
              <Grid container item xs={12} spacing={2}>
                <Grid container item xs={8} spacing={2}>
                  <Grid item xs={12}>
                    <TextType
                      stagerValue={0.05}
                      textStyles={classes.textBoxSubtitle}
                      text="First Contact"
                    />
                    <TextType
                      stagerValue={0.05}
                      textStyles={classes.textBoxSecondarySubtitle}
                      text="Getting to Know Me"
                    />{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <TextType
                      stagerValue={0.02}
                      textStyles={classes.textBoxBody}
                      text="Hello! My name is Diego, I am a smiley young man keen on learning, always looking for opportunities to improve and share with others. I value connections, good mood, and a broad perspective of life.
                      "
                    />{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <TextType
                      stagerValue={0.02}
                      textStyles={classes.textBoxBody}
                      text="My friends and relatives consider me as a very analytical person, a problem solver; sometimes they say i have a bit of a philosopher mixed with an artist and a chess player, some sort of strategist.
                      "
                    />{" "}
                  </Grid>
                  <Grid item xs={12}>
                    <TextType
                      stagerValue={0.02}
                      textStyles={classes.textBoxBody}
                      text="In my free time i like to listen to music (mostly rock), read literature books, navigate on the internet looking for new technologies related to the field of programming, and enjoy afternoons with my friends playing board games.
                      "
                    />{" "}
                  </Grid>
                </Grid>
                <Grid container item xs={4}>
                  <motion.img
                    onMouseOver={() => handleToggleHi(true)}
                    onMouseOut={() => handleToggleHi(false)}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 3, ease: "backInOut" }}
                    src={hiImg}
                    alt="Italian Trulli"
                    className={classes.imgSize}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <TextType
                  stagerValue={0.1}
                  textStyles={classes.quote}
                  text="Live as if you were to die tomorrow. Learn as if you were to live forever."
                />
              </Grid>
              <Grid container item xs={12}>
                <TextType
                  stagerValue={0.2}
                  textStyles={classes.artistQuote}
                  text="- Mahatma Gandhi"
                />
              </Grid>
            </Grid>
            <Grid spacing={1} item xs={3} className={classes.boxNewsContainer}>
              <TextType
                stagerValue={0.2}
                textStyles={classes.textBoxNews}
                text="Soft Skills"
              />
              <TextType
                stagerValue={0.2}
                textStyles={classes.containerParagraphSpaced}
                text="Collaboration"
              />
              <TextType
                stagerValue={0.2}
                textStyles={classes.containerParagraphSpaced}
                text="Management of time"
              />
              <TextType
                stagerValue={0.2}
                textStyles={classes.containerParagraphSpaced}
                text="Decision-making"
              />
              <TextType
                stagerValue={0.2}
                textStyles={classes.containerParagraphSpaced}
                text="Critical Thinking"
              />

              <TextType
                stagerValue={0.2}
                textStyles={classes.containerParagraphSpaced}
                text="Empathy"
              />
            </Grid>
          </Grid>

          <Grid container style={{ paddingTop: "2vh" }} item xs={12}>
            <Grid
              spacing={1}
              className={classes.containerParagraph}
              container
              item
              xs={9}
            >
              <Grid container item xs={12}>
                <TextType
                  stagerValue={0.2}
                  textStyles={classes.textBoxSecondarySubtitle}
                  text="Proffesional Background"
                />
              </Grid>
              <Grid container item xs={12}>
                <Grid container item xs={4}>
                  <motion.img
                    onMouseOver={() => handleToggleTyping(true)}
                    onMouseOut={() => handleToggleTyping(false)}
                    src={typingImg}
                    alt="Italian Trulli"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 3, ease: "backInOut" }}
                    className={classes.imgSize}
                  />
                </Grid>
                <Grid
                  container
                  item
                  xs={8}
                  spacing={2}
                  style={{ paddingLeft: "10px" }}
                >
                  <Grid item xs={12}>
                    <TextType
                      stagerValue={0.02}
                      textStyles={classes.textBoxBody}
                      text="Diego is a FullStack developer with a degree in Systems engineering, with a profound love for programming and computing; since graduation he has worked on diverse projects that involve different set of technologies."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextType
                      stagerValue={0.02}
                      textStyles={classes.textBoxBody}
                      text="At university, he was involved in the development of different web applications. One of them was related to helping people implement the FAIR Model (Factor Analysis of Information Risk), creating simulations and getting feed back from it. During this time, he also worked helping fix bugs in code on different platforms; even though it wasn't an official job, it helped him to learn more about coding and different technologies."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextType
                      stagerValue={0.02}
                      textStyles={classes.textBoxBody}
                      text="After university, he landed a job in Kushki, a Latin American company focused on connecting latam with payments through the best technology; here he has acquired skills such as Node.JS, TypeScript, React.JS, Scala, Golang and many others, as well as a good understanding of the world of virtual payments."
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid spacing={1} item xs={3} className={classes.boxNewsContainer}>
              <TextType
                stagerValue={0.2}
                textStyles={classes.textBoxNews}
                text="Lorem, ipsum tempore!"
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};
