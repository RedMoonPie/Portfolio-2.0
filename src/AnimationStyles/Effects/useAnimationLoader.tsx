import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingAnimation } from "../../Store/reducers/app/app";
import { selectAnimationLoading } from "../../Store/reducers/selectors/selectors";

export interface useAnimationLoader {
  handleStartAnimation: () => void;
  handleFinishAnimation: () => void;
}

export const useAnimationLoader = (): useAnimationLoader => {
  const dispatch = useDispatch();
  const handleStartAnimation = () => {
    dispatch(setLoadingAnimation(true));
  };
  const handleFinishAnimation = () => {
    dispatch(setLoadingAnimation(false));
  };
  return {
    handleStartAnimation,
    handleFinishAnimation,
  };
};
