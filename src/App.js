import React from "react";
import { View, Button } from "react-native";
import Sound from "react-native-sound";
import Character from "./components/character/Character";

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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="AMIGOO"
        onPress={(event) => {
          sound.play((success) => {
            if (success) {
              console.log("successfully finished playing");
            } else {
              console.log("playback failed due to audio decoding errors");
            }
          });
        }}
      />
      <Character />
    </View>
  );
};

export default App;
