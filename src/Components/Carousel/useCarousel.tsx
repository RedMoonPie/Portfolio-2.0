import { ClassNameMap } from "@mui/styles";
import { useMemo, useState, useRef, useEffect } from "react";
import { randomNeonColor } from "../../Utils/utils";
import { CarouselProps } from "./CarouselTypes";
import { carouselStyles } from "./style";

export interface outInterface {
  color: string;
  classes: ClassNameMap;
  carousel: React.RefObject<HTMLDivElement>;
  width: number;
  imagesMap: JSX.Element[];
  currentImage: string;
  modalOpen: boolean;
  handleClose: () => void;
}

export const useCarousel = (props: CarouselProps): outInterface => {
  const classes = carouselStyles();
  const { headingText, images } = props;
  const imgs = useMemo(() => images, [images]);
  const color = randomNeonColor();
  const [width, setWidth] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const carousel = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState("");

  const handleClose = () => {
    setModalOpen(false);
  };
  const imagesMap = useMemo(() => {
    return imgs.map((image, i) => (
      <div ref={img} className={classes.imgContainer}>
        <img
          draggable="true"
          title={`image${i}`}
          className={classes.certStyle}
          src={image.img}
          onClick={(e) => handleOpen(e)}
          style={{ cursor: "pointer", userSelect: "none" }}
        />
        <div className={classes.labelStyle}>{image.description}</div>
      </div>
    ));
  }, []);

  const handleOpen = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setCurrentImage((e.target as HTMLImageElement).src);
    setModalOpen(true);
  };
  useEffect(() => {
    if (
      carousel.current != null &&
      carousel.current.scrollWidth &&
      carousel.current?.offsetWidth &&
      img.current?.offsetWidth
    )
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return {
    color,
    classes,
    carousel,
    width,
    imagesMap,
    currentImage,
    modalOpen,
    handleClose,
  };
};
