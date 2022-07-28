import React from "react";
import { CharacterList, Screen } from "+/components";
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
