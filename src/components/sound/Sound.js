import React from "react";
import { Container, Play, Title } from "./Sound.styles";

const Sound = ({ title }) => {
  return (
    <Container>
      <Play />
      <Title>{title}</Title>
    </Container>
  );
};

export default Sound;
