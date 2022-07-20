import React from "react";
import Character from "../../components/character/Character";
import Screen from "../../components/screen/Screen";
import { Title } from "./HomeScreen.styles";

const HomeScreen = () => {
  return (
    <Screen>
      <Title>Brutalizacija</Title>
      <Character />
    </Screen>
  );
};

export default HomeScreen;
