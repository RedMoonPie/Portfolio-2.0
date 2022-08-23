import { Grid, Typography, Box } from "@mui/material";
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
    width: "90%",
    objectFit: "cover",
    objectPosition: "35% 0",
    height: "90%",
    filter: "grayscale(20%)",
    opacity: "0.6",
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
  parentContainerParagraph: {
    borderBottom: "solid 0.15vw black",
  },
  textBoxHeader: {
    fontSize: "4vw",
    textAlign: "center",
  },
  textBoxSubHeader: {
    fontSize: "1.1vw",
  },
  textBoxNews: {
    fontSize: "1vw",
    textAlign: "center",
    padding: "2vh 1vw 2vh 1vw",
    backgroundColor: "black",
    color: "#ebd0a3",
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
                <TextType textStyles={classes.textBoxHeader} text="EMy text" />
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
                textStyles={classes.textBoxSubHeader}
                text="Editorial CurlyCoding"
              />
              <TextType
                textStyles={classes.textBoxSubHeader}
                text="Coffe Time"
              />
              <TextType textStyles={classes.textBoxSubHeader} text="No. 7" />
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
            <TextType textStyles={classes.textBoxSubHeader} text="Cod.004" />
            <TextType
              textStyles={classes.textBoxSubHeader}
              text="Everyday is a good day to smile !"
            />
            <TextType textStyles={classes.textBoxSubHeader} text="Bogotá" />
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
                      textStyles={classes.textBoxSubtitle}
                      text="First Subtitle"
                    />
                    <TextType
                      textStyles={classes.textBoxSecondarySubtitle}
                      text="Secondary Subtitle"
                    />{" "}
                  </Grid>
                  <Grid item xs={12}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, obcaecati amet. Dolore ipsam tempore pariatur
                    eaque obcaecati. Error, reprehenderit dicta?
                  </Grid>
                  <Grid item xs={12}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem corrupti quos sed nam ipsam atque ipsum
                    dicta, voluptas reprehenderit dignissimos esse voluptatibus?
                    Consequuntur, vero voluptatibus.
                  </Grid>
                  <Grid item xs={12}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur inventore labore, ab voluptate neque architecto
                    cupiditate error dolorum expedita officia?
                  </Grid>
                </Grid>
                <Grid container item xs={4}>
                  <img
                    src={vintagePhoto}
                    alt="Italian Trulli"
                    className={classes.imgSize}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <TextType
                  textStyles={classes.textBoxSubHeader}
                  text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi dolorem esse illo optio tempore!"
                />
              </Grid>
              <Grid container item xs={12}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt quasi dolorem esse illo optio tempore!
              </Grid>
            </Grid>
            <Grid spacing={1} item xs={3} className={classes.boxNewsContainer}>
              <TextType textStyles={classes.textBoxNews} text="Lorem" />
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
                  textStyles={classes.textBoxSecondarySubtitle}
                  text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi dolorem esse illo optio tempore!"
                />
              </Grid>
              <Grid container item xs={12}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt quasi dolorem esse illo optio tempore!
              </Grid>
              <Grid container item xs={12}>
                <Grid container item xs={8} spacing={2}>
                  <Grid item xs={12}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi eum similique magni quo necessitatibus autem laborum,
                    vel nihil deserunt quibusdam, maxime nemo quam nesciunt!
                    Totam cumque quos aperiam maiores voluptatum.
                  </Grid>
                  <Grid item xs={12}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, obcaecati amet. Dolore ipsam tempore pariatur
                    eaque obcaecati. Error, reprehenderit dicta?
                  </Grid>
                  <Grid item xs={12}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem corrupti quos sed nam ipsam atque ipsum
                    dicta, voluptas reprehenderit dignissimos esse voluptatibus?
                    Consequuntur, vero voluptatibus.
                  </Grid>
                  <Grid item xs={12}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur inventore labore, ab voluptate neque architecto
                    cupiditate error dolorum expedita officia?
                  </Grid>
                </Grid>
                <Grid container item xs={4}>
                  <img
                    src={vintagePhoto}
                    alt="Italian Trulli"
                    className={classes.imgSize}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid spacing={1} item xs={3} className={classes.boxNewsContainer}>
              <TextType
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
