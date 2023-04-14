import React, { useEffect, useState } from "react";
export interface MusicPlayerProps {
  audio: any;
}

export const UseMusicPlayer = (props: MusicPlayerProps) => {
  const [audio] = useState(new Audio(props.audio));
  const [play, setPlay] = useState(true);

  useEffect(() => {
    audio.play();
    return unmountedTest;
  }, [play]);
  const unmountedTest = () => {
    audio.pause();
  };
  return {};
};
