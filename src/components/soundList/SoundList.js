import React from "react";
import { Sound } from "+/components";
import characters from "+/data";
import { SoundsFlatList } from "./SoundList.styles";

const SoundList = ({ charName }) => {
  const data = characters.find((char) => char.name === charName).sounds;

  const renderItem = ({ item }) => {
    return <Sound title={item.title} fileName={item.fileName} />;
  };

  const keyExtractor = (item) => item.title;

  return (
    <SoundsFlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default SoundList;
