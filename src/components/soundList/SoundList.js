import React from "react";
import { FlatList } from "react-native";
import Sound from "../sound/Sound";
import characters from "../../data";

const SoundList = ({ charName }) => {
  const data = characters.find((char) => char.name === charName).sounds;

  const renderItem = ({ item }) => {
    return <Sound title={item.title} fileName={item.fileName} />;
  };

  const keyExtractor = (item) => item.title;

  return (
    <FlatList
      style={{ width: "100%", marginTop: 24 }}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default SoundList;
