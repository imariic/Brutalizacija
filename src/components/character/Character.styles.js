import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components";
import { dimensions } from "+/constants";

export const Container = styled.TouchableOpacity`
  width: 300px;
  height: 400px;
  align-items: center;
  border-radius: ${dimensions.small}px;
  margin-bottom: ${dimensions.large}px;
  overflow: hidden;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 80%;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${dimensions.xlarge}px;
  margin-top: ${dimensions.xmedium}px;
  color: rgba(7, 110, 247, 0.7);
`;

export const Gradient = styled(LinearGradient).attrs({
  start: { x: 0.0, y: 0.25 },
  end: { x: 0.5, y: 1.0 },
  locations: [0, 0.5, 0.6],
  colors: ["#FFD700", "#FFC72C", "#FEBE10"],
})`
  width: 100%;
  height: 20%;
  align-items: center;
`;
