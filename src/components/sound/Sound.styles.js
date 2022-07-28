import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome5";
import { dimensions } from "+/constants";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #ffd700;
  margin: ${dimensions.small}px ${dimensions.xlarge}px;
  padding: 8px;
`;

export const Play = () => <Icon size={32} name="play" />;

export const Title = styled.Text`
  margin-left: ${dimensions.small}px;
`;
