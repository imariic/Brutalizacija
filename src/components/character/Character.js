import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Container, Avatar, Title, Gradient } from "./Character.styles";

const Character = ({ name, avatar }) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Sounds", { charName: name });
  };

  return (
    <Container onPress={handleNavigation}>
      <Avatar source={avatar} />
      <Gradient>
        <Title>{name}</Title>
      </Gradient>
    </Container>
  );
};

export default Character;
