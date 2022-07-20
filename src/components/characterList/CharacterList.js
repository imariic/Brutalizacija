import React from "react";
import { FlatList } from "react-native";
import Character from "../character/Character";
import characters from "../../data";

const CharacterList = () => {
  const renderItem = ({ item }) => {
    return <Character name={item.name} avatar={item.avatar} />;
  };
  const keyExtractor = (item) => item.name;

  return (
    <FlatList
      data={characters}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CharacterList;
