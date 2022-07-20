import React from "react";
import avatars from "../../assets";
import { Container, Avatar, Title, Gradient } from "./Character.styles";

const Character = () => {
  return (
    <Container>
      <Avatar source={avatars.hambi} />
      <Gradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        colors={["#FFD700", "#FFC72C", "#FEBE10"]}
      >
        <Title>Hambi</Title>
      </Gradient>
    </Container>
  );
};

export default Character;
