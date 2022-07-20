import React from "react";
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

  sound.setVolume(20);

  const handlePlay = () => sound.play();

  return (
    <Container>
      <Play onPlay={handlePlay} isPlaying={sound.isPlaying()} />
      <Title>{title}</Title>
    </Container>
  );
};

export default Sound;
