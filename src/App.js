import "react-native-gesture-handler";
import React from "react";
import Sound from "react-native-sound";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "../src/navigator";

Sound.setCategory("Playback");

const sound = new Sound("amigo.mp3", Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log("failed to load the sound", error);
    return;
  }
});

sound.setVolume(1);

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
