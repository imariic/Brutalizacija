import React from "react";
import { Container, Avatar } from "./Character.styles";
import avatars from "../../assets";

const Character = () => {
  return (
    <Container>
      <Avatar source={avatars.hambi} />
    </Container>
  );
};

export default Character;
