import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #ffd700;
  margin: 8px 32px;
  padding: 8px;
`;

export const Play = ({ onPlay }) => (
  <TouchableOpacity onPress={onPlay}>
    <Icon size={24} name="play" />
  </TouchableOpacity>
);

export const Title = styled.Text`
  margin-left: 8px;
`;
