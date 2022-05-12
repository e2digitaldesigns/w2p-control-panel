import React from "react";
import * as Styled from "./switch.style";

export interface IntSwitch {
  isChecked: boolean;
  onClick: (key: string) => void;
  stateKey: string;
  variant?: string;
}

const Switch: React.FC<IntSwitch> = ({ isChecked, onClick, stateKey }) => {
  return (
    <Styled.SwitchWrapper onClick={() => onClick(stateKey)}>
      <Styled.Switch
        type="checkbox"
        checked={isChecked}
        onChange={() => null}
      />
      <Styled.Slider></Styled.Slider>
    </Styled.SwitchWrapper>
  );
};

export default Switch;
