import React from "react";
import CharacterList from "../../components/characterList/CharacterList";
import Screen from "../../components/screen/Screen";
import { Title } from "./HomeScreen.styles";

const HomeScreen = () => {
  return (
    <Screen>
      <Title>Brutalizacija</Title>
      <CharacterList />
    </Screen>
  );
};

export default HomeScreen;
