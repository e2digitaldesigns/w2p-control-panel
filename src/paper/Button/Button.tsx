import React from "react";
import * as Styled from "./button.style";
export interface IntButton {
  variant?: string;
  children: any;
}

const Button: React.FC<IntButton> = ({ children }) => {
  return <Styled.Button>{children}</Styled.Button>;
};

export default Button;
