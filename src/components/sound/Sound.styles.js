import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View`
  flex-direction: row;
`;

export const Play = ({ onPlay }) => (
  <TouchableOpacity onPress={onPlay}>
    <Icon size={24} name="fa-play" />
  </TouchableOpacity>
);

export const Title = styled.Text``;
