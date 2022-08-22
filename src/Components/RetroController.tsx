import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { motion, useAnimation } from "framer-motion";

export interface RetroControllerProps {
  nextScreen: (index: number) => void;
  currentScreen: number;
}
const useStyles = makeStyles(() => ({
  controller: { width: "33vw", height: "99vh" },
}));
export const RetroController: React.FC<RetroControllerProps> = (
  props: RetroControllerProps
) => {
  const classes = useStyles();
  const controls = useAnimation();
  const defaultDirection = {
    isLeft: false,
    isRight: false,
    isTop: false,
    isBottom: false,
  };
  const [direction, setDirection] = useState({
    ...defaultDirection,
  });

  const start = async () => {
    if (direction.isRight) {
      await controls.start({
        rotateY: -30,
        skewY: -3,
        scaleX: 1.15,
        originX: -0.9,
      });
    }

    if (direction.isLeft) {
      await controls.start({
        rotateY: -30,
        skewY: 3,
        scaleX: 1.15,
        originX: -0.9,
      });
    }
    if (direction.isTop) {
      await controls.start({
        rotateZ: 0,
        rotateX: 18,
        rotateY: 0,
        scaleY: 0.98,
        originY: -0.6,
      });
    }
    if (direction.isBottom) {
      await controls.start({
        rotateZ: 0,
        rotateX: 18,
        rotateY: 0,
        scaleY: 0.98,
        originY: 0.5,
      });
    }
    if (
      !direction.isRight &&
      !direction.isTop &&
      !direction.isLeft &&
      !direction.isBottom
    ) {
      await controls.start({
        rotateY: 0,
        rotateX: 0,
        rotateZ: 0,
        skewY: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1,
        originX: 0,
        originY: 0,
      });
    }
  };
  useEffect(() => {
    start();
  }, [direction]);

  const initSvgVariants = {
    hidden: { rotate: 0 },
    visible: {
      transition: { duration: 0 },
    },
  };

  const { nextScreen, currentScreen } = props;
  return (
    <div className={classes.controller}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="190 190 650 650"
        variants={initSvgVariants}
        initial="hidden"
        animate="visible"
        className={classes.controller}
      >
        <desc>Created with Fabric.js 4.2.0</desc>

        <g>
          <title>Layer 1</title>
          <g
            transform="matrix(0 0 0 0 0 0)"
            id="c48f3e2b-1518-4106-a314-e6c49b200c2a"
          />
          <g
            transform="matrix(5.44 0 0 9.58 539.97 539.99)"
            id="c8df7ca4-a13f-4e25-a475-8e1073cdee52"
          >
            <rect
              vectorEffect="non-scaling-stroke"
              x="-33.085"
              y="-33.085"
              rx="4"
              ry="2"
              width="66.17"
              height="66.17"
              stroke=" rgb(0,0,0)"
              strokeWidth="0"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(204,190,177)"
              fillRule="nonzero"
              opacity="0.91"
              id="svg_3"
            />
          </g>
          <g
            transform="matrix(4.21 0 0 8.8 540 540)"
            id="1bfb7af7-c23b-41e9-8996-67085654ee9c"
          >
            <rect
              vectorEffect="non-scaling-stroke"
              x="-33.085"
              y="-33.085"
              rx="4"
              ry="2"
              width="66.17"
              height="66.17"
              stroke=" rgb(0,0,0)"
              strokeWidth="0"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(54,54,54)"
              fillRule="nonzero"
              id="svg_4"
            />
          </g>
          <g
            transform="matrix(-0.4 0 0 2.72 408.03 539.96)"
            id="b4ce49c2-3a4b-4108-9ce5-4e442ce29fba"
          >
            <rect
              vectorEffect="non-scaling-stroke"
              x="-33.085"
              y="-33.085"
              rx="8"
              ry="3"
              width="66.17"
              height="66.17"
              stroke=" rgb(0,0,0)"
              strokeWidth="0"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(209 196 184)"
              fillRule="nonzero"
              id="svg_5"
            />
          </g>
          <g
            transform="matrix(-0.51 0 0 2.72 602.66 540)"
            id="b4ce49c2-3a4b-4108-9ce5-4e442ce29fba"
          >
            <rect
              vectorEffect="non-scaling-stroke"
              x="-33.085"
              y="-33.085"
              rx="8"
              ry="3"
              width="66.17"
              height="66.17"
              stroke=" rgb(0,0,0)"
              strokeWidth="0"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(204,190,177)"
              fillRule="nonzero"
              id="svg_6"
            />
          </g>
          <g
            transform="matrix(-0.51 0 0 2.72 557.16 540)"
            id="b4ce49c2-3a4b-4108-9ce5-4e442ce29fba"
          >
            <rect
              vectorEffect="non-scaling-stroke"
              x="-33.085"
              y="-33.085"
              rx="8"
              ry="3"
              width="66.17"
              height="66.17"
              stroke=" rgb(0,0,0)"
              strokeWidth="0"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(204,190,177)"
              fillRule="nonzero"
              id="svg_7"
            />
          </g>
          <g
            transform="matrix(-0.51 0 0 2.72 511.07 540)"
            id="b4ce49c2-3a4b-4108-9ce5-4e442ce29fba"
          >
            <rect
              vectorEffect="non-scaling-stroke"
              x="-33.085"
              y="-33.085"
              rx="8"
              ry="3"
              width="66.17"
              height="66.17"
              stroke=" rgb(0,0,0)"
              strokeWidth="0"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(204,190,177)"
              fillRule="nonzero"
              id="svg_8"
            />
          </g>
          <g
            transform="matrix(-0.69 0 0 2.72 460.26 539.88)"
            id="b4ce49c2-3a4b-4108-9ce5-4e442ce29fba"
          >
            <rect
              vectorEffect="non-scaling-stroke"
              x="-33.085"
              y="-33.085"
              rx="8"
              ry="3"
              width="66.17"
              height="66.17"
              stroke=" rgb(0,0,0)"
              strokeWidth="0"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(229,219,209)"
              fillRule="nonzero"
              id="svg_9"
            />
          </g>
          <g
            transform="matrix(-0.88 0 0 0.95 475.68 688.98)"
            id="b4ce49c2-3a4b-4108-9ce5-4e442ce29fba"
          >
            <rect
              vectorEffect="non-scaling-stroke"
              x="-33.085"
              y="-33.085"
              rx="8"
              ry="3"
              width="66.17"
              height="66.17"
              stroke=" rgb(0,0,0)"
              strokeWidth="0"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(229,219,209)"
              fillRule="nonzero"
              id="svg_10"
            />
          </g>
          <g
            transform="matrix(-0.88 0 0 0.95 475.85 768.16)"
            id="b4ce49c2-3a4b-4108-9ce5-4e442ce29fba"
          >
            <rect
              vectorEffect="non-scaling-stroke"
              x="-33.085"
              y="-33.085"
              rx="8"
              ry="3"
              width="66.17"
              height="66.17"
              stroke=" rgb(0,0,0)"
              strokeWidth="0"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(229,219,209)"
              fillRule="nonzero"
              id="svg_11"
            />
          </g>
          <g
            transform="matrix(0.75 0 0 0.75 476.04 688.41)"
            id="a1dd771c-6dd6-42e5-be78-47cdad1e896b"
          >
            <circle
              vectorEffect="non-scaling-stroke"
              cx="0"
              cy="0"
              r="35"
              stroke=" rgb(0,0,0)"
              strokeWidth="0"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(196,69,69)"
              fillRule="nonzero"
              id="svg_12"
            />
          </g>
          <g
            transform="matrix(0.75 0 0 0.75 476.14 767.74)"
            id="a1dd771c-6dd6-42e5-be78-47cdad1e896b"
          >
            <circle
              vectorEffect="non-scaling-stroke"
              cx="0"
              cy="0"
              r="35"
              stroke=" rgb(0,0,0)"
              strokeWidth="0"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(196,69,69)"
              fillRule="nonzero"
              id="svg_13"
            />
          </g>
          <g
            transform="matrix(-0.46 0 0 2.52 459.43 540)"
            id="b4ce49c2-3a4b-4108-9ce5-4e442ce29fba"
          >
            <rect
              vectorEffect="non-scaling-stroke"
              x="-33.085"
              y="-33.085"
              rx="5"
              ry="5"
              width="66.17"
              height="66.17"
              stroke=" rgb(168,168,168)"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(204,190,177)"
              fillRule="nonzero"
              id="svg_14"
            />
          </g>
          <g
            transform="matrix(0.25 0 0 0.53 460.16 515.19)"
            id="d3784ada-745c-4eaf-b529-1373ee92f942"
          >
            <rect
              vectorEffect="non-scaling-stroke"
              x="-33.085"
              y="-33.085"
              rx="20"
              ry="20"
              width="66.17"
              height="66.17"
              stroke=" rgb(255,255,255)"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(57,57,57)"
              fillRule="nonzero"
              id="svg_15"
            />
          </g>
          <g
            transform="matrix(0.25 0 0 0.53 460.25 568.77)"
            id="d3784ada-745c-4eaf-b529-1373ee92f942"
          >
            <rect
              vectorEffect="non-scaling-stroke"
              x="-33.085"
              y="-33.085"
              rx="20"
              ry="20"
              width="66.17"
              height="66.17"
              stroke=" rgb(255,255,255)"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(57,57,57)"
              fillRule="nonzero"
              id="svg_16"
            />
          </g>
          <g
            transform="matrix(0 0.39 -0.39 0 510.85 499.54)"
            id="116c4fef-472c-4d18-898d-643b26a19495"
          >
            <text
              fontFamily="Lato"
              font-size="44"
              font-style="normal"
              fontWeight="700"
              stroke=" none"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(196,69,69)"
              fillRule="nonzero"
              id="svg_17"
            >
              <tspan x="-58.1" y="13.82" id="svg_18">
                select
              </tspan>
            </text>
          </g>
          <g transform="matrix(0 0.39 -0.39 0 426.6 709.74)" id="svg_19">
            <text
              fontFamily="Lato"
              font-size="54"
              font-style="normal"
              fontWeight="700"
              stroke=" none"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(196,69,69)"
              fillRule="nonzero"
              id="svg_20"
            >
              <tspan x="-18.01" y="16.96" id="svg_21">
                B
              </tspan>
            </text>
          </g>
          <g transform="matrix(0 0.39 -0.39 0 427.62 789.34)" id="svg_22">
            <text
              font-family="Lato"
              font-size="54"
              font-style="normal"
              fontWeight="700"
              stroke=" none"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(196,69,69)"
              fillRule="nonzero"
              id="svg_23"
            >
              <tspan x="-19.17" y="16.96" id="svg_24">
                A
              </tspan>
            </text>
          </g>
          <g transform="matrix(0 0.39 -0.39 0 511.87 584.75)" id="svg_25">
            <text
              fontFamily="Lato"
              font-size="44"
              font-style="normal"
              fontWeight="700"
              stroke=" none"
              strokeDasharray=" none"
              strokeLinecap="butt"
              strokeDashoffset="0"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              fill=" rgb(196,69,69)"
              fillRule="nonzero"
              id="svg_26"
            >
              <tspan x="-47.15" y="13.82" id="svg_27">
                start
              </tspan>
            </text>
          </g>
          <g
            id="1277504a-6be3-4aff-b1ff-100e612d3201"
            transform="matrix(0.55 0 0 0.65 545.87 348.72)"
          >
            <motion.rect
              id="svg_28"
              fillRule="nonzero"
              fill="rgb(57,57,57)"
              strokeMiterlimit="4"
              strokeLinejoin="miter"
              strokeDashoffset="0"
              strokeLinecap="butt"
              strokeDasharray=" none"
              strokeWidth="6"
              stroke=" rgb(255,255,255)"
              height="66.17"
              width="66.17"
              y="-33.085"
              x="-33.085"
              ry="6"
              rx="12"
              vectorEffect="non-scaling-stroke"
              whileHover={{
                rotateY: -30,
                skewY: -3,
                scaleX: 1.15,
                originX: -0.9,
              }}
              whileTap={{ scale: 0.99, fill: "#c44545" }}
              onTap={() => nextScreen(currentScreen + 1)}
              animate={controls}
              onHoverStart={() => {
                setDirection({ ...defaultDirection, isRight: true });
              }}
              onHoverEnd={() => {
                setDirection({ ...defaultDirection, isRight: false });
              }}
            />
          </g>
          <g
            id="1277504a-6be3-4aff-b1ff-100e612d3201"
            transform="matrix(0.59 0 0 0.58 508.05 307.33)"
          >
            <motion.rect
              id="svg_29"
              fillRule="nonzero"
              fill="rgb(57,57,57)"
              strokeMiterlimit="4"
              strokeLinejoin="miter"
              strokeDashoffset="0"
              strokeLinecap="butt"
              strokeDasharray="none"
              strokeWidth="6"
              stroke=" rgb(255,255,255)"
              height="66.17"
              width="66.17"
              y="-33.085"
              x="-33.085"
              ry="6"
              rx="12"
              vectorEffect="non-scaling-stroke"
              animate={controls}
              whileTap={{ scale: 0.99, fill: "#c44545" }}
              whileHover={{
                rotateZ: -2,
                rotateX: 30,
                scaleY: 1.15,
                originY: 0.8,
              }}
              onHoverStart={() => {
                setDirection({ ...defaultDirection, isTop: true });
              }}
              onHoverEnd={() => {
                setDirection({ ...defaultDirection, isTop: false });
              }}
            />
          </g>
          <g
            id="1277504a-6be3-4aff-b1ff-100e612d3201"
            transform="matrix(0.55 0 0 0.65 470.8 348.56)"
          >
            <motion.rect
              animate={controls}
              id="svg_30"
              fillRule="nonzero"
              fill="rgb(57,57,57)"
              strokeMiterlimit="4"
              strokeLinejoin="miter"
              strokeDashoffset="0"
              strokeLinecap="butt"
              strokeDasharray="none"
              strokeWidth="6"
              stroke=" rgb(255,255,255)"
              height="66.17"
              width="66.17"
              onTap={() => nextScreen(currentScreen - 1)}
              whileTap={{ scale: 0.99, fill: "#c44545" }}
              whileHover={{
                rotateY: -30,
                skewY: -3,
                scaleX: 1.15,
                originX: -0.9,
              }}
              onHoverStart={() => {
                setDirection({ ...defaultDirection, isLeft: true });
              }}
              onHoverEnd={() => {
                setDirection({ ...defaultDirection, isLeft: false });
              }}
              y="-33.085"
              x="-33.085"
              ry="6"
              rx="12"
              vectorEffect="non-scaling-stroke"
            />
          </g>
          <g
            id="1277504a-6be3-4aff-b1ff-100e612d3201"
            transform="matrix(0.59 0 0 0.58 508.05 389.24)"
          >
            <motion.rect
              id="svg_31"
              animate={controls}
              fillRule="nonzero"
              fill="rgb(57,57,57)"
              strokeMiterlimit="4"
              strokeLinejoin="miter"
              strokeDashoffset="0"
              strokeLinecap="butt"
              strokeDasharray="none"
              strokeWidth="6"
              stroke="rgb(255,255,255)"
              height="66.17"
              width="66.17"
              whileTap={{ scale: 0.99, fill: "#c44545" }}
              whileHover={{
                rotateZ: 2,
                rotateX: 10,
                scaleY: 1.15,
                originY: 0.8,
              }}
              onHoverStart={() => {
                setDirection({ ...defaultDirection, isBottom: true });
              }}
              onHoverEnd={() => {
                setDirection({ ...defaultDirection, isBottom: false });
              }}
              y="-33.085"
              x="-33.085"
              ry="6"
              rx="12"
              vectorEffect="non-scaling-stroke"
            />
          </g>
          <g
            id="1277504a-6be3-4aff-b1ff-100e612d3201"
            transform="matrix(0.6 0 0 0.7 508.24 348.21)"
          >
            <motion.rect
              id="svg_32"
              animate={controls}
              fillRule="nonzero"
              fill="rgb(57,57,57)"
              strokeMiterlimit="4"
              strokeLinejoin="miter"
              strokeDashoffset="0"
              strokeLinecap="butt"
              strokeDasharray="none"
              strokeWidth="5.8"
              stroke="rgb(57,57,57)"
              height="66.17"
              width="66.17"
              y="-33.085"
              x="-33.085"
              ry="6"
              rx="12"
              vectorEffect="non-scaling-stroke"
            />
          </g>
          <path
            fill="none"
            stroke="#000"
            strokeLinejoin="miter"
            strokeLinecap="butt"
            opacity="undefined"
            d="m300,193"
            id="svg_34"
          />
          <path
            fill="none"
            stroke="#000"
            opacity="NaN"
            d="m103,248"
            id="svg_36"
          />
          <g stroke="null" id="svg_56">
            <path
              transform="rotate(89.9582 520.081 132.877)"
              stroke="#000"
              fill="none"
              opacity="NaN"
              d="m137.97192,-103.68162c249.4449,1 76.41953,173 213.39794,76c136.97841,-97 117.91905,22.0124 116.79212,45c-1.12693,22.9876 -15.86066,280 -20.1863,350c-4.32563,70 92.28019,56 102.37333,4c10.09314,-52 -119.67587,-480 83.62892,-510c203.30479,-30 269.63118,9.66672 268.18931,37.66672"
              id="svg_38"
              strokeWidth="15"
              strokeDasharray="2,2"
            />
            <rect
              transform="rotate(89.9582 724.086 516.259)"
              stroke="#000"
              fill="none"
              strokeWidth="3"
              x="706.75078"
              y="513.75901"
              width="34.67049"
              height="5"
              id="svg_39"
            />
            <rect
              transform="rotate(89.9582 723.086 516.26)"
              stroke="#000"
              fill="none"
              strokeWidth="3"
              x="705.7508"
              y="513.42646"
              width="34.67049"
              height="5.66666"
              id="svg_40"
            />
            <g
              transform="rotate(89.9582 731.587 517.217)"
              stroke="null"
              id="svg_44"
            >
              <rect
                stroke="#000"
                fill="none"
                strokeWidth="3"
                x="721.47456"
                y="518.54991"
                width="20.22445"
                height="2"
                id="svg_41"
              />
              <rect
                stroke="#000"
                fill="none"
                strokeWidth="3"
                x="724.36377"
                y="513.88326"
                width="14.44604"
                height="2.66666"
                id="svg_43"
              />
            </g>
            <g
              transform="rotate(89.9582 738.253 517.212)"
              stroke="null"
              id="svg_47"
            >
              <rect
                stroke="#000"
                fill="none"
                strokeWidth="3"
                x="728.14119"
                y="518.54506"
                width="20.22445"
                height="2"
                id="svg_45"
              />
              <rect
                stroke="#000"
                fill="none"
                strokeWidth="3"
                x="731.0304"
                y="513.87841"
                width="14.44604"
                height="2.66666"
                id="svg_46"
              />
            </g>
            <g
              transform="rotate(89.9582 744.586 516.726)"
              stroke="null"
              id="svg_50"
            >
              <rect
                stroke="#000"
                fill="none"
                strokeWidth="3"
                x="734.47408"
                y="518.05897"
                width="20.22445"
                height="2"
                id="svg_48"
              />
              <rect
                stroke="#000"
                fill="none"
                strokeWidth="3"
                x="737.36328"
                y="513.39231"
                width="14.44604"
                height="2.66666"
                id="svg_49"
              />
            </g>
            <g
              transform="rotate(89.9582 750.586 515.758)"
              stroke="null"
              id="svg_53"
            >
              <rect
                stroke="#000"
                fill="none"
                strokeWidth="3"
                x="740.47344"
                y="517.09145"
                width="20.22445"
                height="2"
                id="svg_51"
              />
              <rect
                stroke="#000"
                fill="none"
                strokeWidth="3"
                x="743.36263"
                y="512.4248"
                width="14.44604"
                height="2.66666"
                id="svg_52"
              />
            </g>
          </g>
        </g>
      </motion.svg>
    </div>
  );
};
