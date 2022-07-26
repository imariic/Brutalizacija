import React, { useEffect } from "react";
import RNSound from "react-native-sound";
import { Container, Play, Title } from "./Sound.styles";

RNSound.setCategory("Playback");

const Sound = ({ title, fileName }) => {
  const sound = new RNSound(`${fileName}.mp3`, RNSound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log("failed to load the sound", error);
      return;
    }
  });

  sound.setVolume(1);

  useEffect(() => {
    return () => {
      sound.stop();
      sound.release();
    };
  }, []);

  const handlePlay = () => sound.play();

  return (
    <Container onPress={handlePlay}>
      <Play />
      <Title>{title}</Title>
    </Container>
  );
};

export default Sound;
