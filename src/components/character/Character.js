import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Container, Avatar, Title, Gradient } from "./Character.styles";

const Character = ({ name, avatar }) => {
  const navigation = useNavigation();
  return (
    <Container
      onPress={() => navigation.navigate("Sounds", { charName: name })}
    >
      <Avatar source={avatar} />
      <Gradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        colors={["#FFD700", "#FFC72C", "#FEBE10"]}
      >
        <Title>{name}</Title>
      </Gradient>
    </Container>
  );
};

export default Character;
