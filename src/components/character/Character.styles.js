import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components";

export const Container = styled.TouchableOpacity`
  width: 300px;
  height: 500px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 80%;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 32px;
  margin-top: 16px;
  color: rgba(7, 110, 247, 0.7);
`;

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 20%;
  align-items: center;
`;
