import React from "react";
import { useRoute } from "@react-navigation/native";
import { Screen, SoundList } from "+/components";

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
