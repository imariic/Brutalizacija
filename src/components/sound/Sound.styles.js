import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome5";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #ffd700;
  margin: 8px 32px;
  padding: 8px;
`;

export const Play = ({ isPlaying }) => (
  <Icon size={24} name={isPlaying ? "pause" : "play"} />
);

export const Title = styled.Text`
  margin-left: 8px;
`;
