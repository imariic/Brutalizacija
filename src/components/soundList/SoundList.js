import React from "react";
import { FlatList } from "react-native";
import characters from "../../data";

const SoundList = ({ characterName }) => {
  const data = characters.filter((char) => char.name === characterName).sounds;
  return <FlatList data={data} />;
};

export default SoundList;
