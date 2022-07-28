import React from "react";
import { Gradient } from "./Screen.styles";

const Screen = ({ children }) => {
  return <Gradient>{children}</Gradient>;
};

export default Screen;
