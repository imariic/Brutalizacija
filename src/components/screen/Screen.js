import React from "react";
import { Gradient } from "./Screen.styles";

const Screen = ({ children }) => {
  return (
    <Gradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5, 0.6]}
      colors={["#4a745b", "#3c6850", "#145334"]}
    >
      {children}
    </Gradient>
  );
};

export default Screen;
