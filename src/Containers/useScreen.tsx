import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAnimationLoading } from "../Store/reducers/selectors/selectors";

export interface UseScreen {
  currentScreen: number;
  nextScreen: (index: number) => void;
  loadingAnimation: boolean;
}

export const useScreen = (): UseScreen => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const loadingAnimation = useSelector(selectAnimationLoading);
  const nextScreen = (index: number) => {
    setCurrentScreen(index);
  };

  return {
    currentScreen,
    nextScreen,
    loadingAnimation,
  };
};
