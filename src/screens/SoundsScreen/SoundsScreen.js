import React from "react";
import { useRoute } from "@react-navigation/native";
import Screen from "../../components/screen/Screen";
import SoundList from "../../components/soundList/SoundList";

const SoundsScreen = () => {
  const route = useRoute();
  const charName = route.params.charName;

  return (
    <Screen>
      <SoundList charName={charName} />
    </Screen>
  );
};

export default SoundsScreen;
