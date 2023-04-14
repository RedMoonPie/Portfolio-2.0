import { makeStyles } from "@mui/styles";

export const carouselStyles = makeStyles(() => ({
  imgContainer: {
    border: "dashed 2px #cc955d",
    position: "relative",
    marginRight: "1vw",
    minWidth: "13vw",
    minHeight: "18vh",
    borderRadius: "2vw 0vw 2vw 0vw",
    height: "27vh",
    padding: "1vw 2vw 1vw 1.6vw",
    width: "13vw",
  },
  labelStyle: {
    bottom: "0%",
    left: "0%",
    height: "20%",
    width: "100%",
    position: "absolute",
    textAlign: "center",
    color: "white",
    userSelect: "none",
  },
  certStyle: {
    width: "100%",
    height: "65%",
    borderRadius: "2vw 0vw 2vw 0vw",
    border: "3px dashed #cc955d",
  },
  carousel: { cursor: "grab" },
  innerCarousel: {
    display: "flex",
  },
  headingTextStyle: {
    fontSize: "3.5vw",
    fontFamily: "neonPixel",
    margin: "30px 40px",
  },
  carouselContainer: {
    alignSelf: "center",
  },
}));
