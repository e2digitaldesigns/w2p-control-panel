import React from "react";
import * as Styled from "../staffSettings.styles";

interface IntSettings {
  toggleSetting: (key: string) => void;
  isChecked: boolean;
  name: string;
  stateKey: string;
}

const Setting: React.FC<IntSettings> = ({
  toggleSetting,
  isChecked,
  name,
  stateKey
}) => {
  return (
    <Styled.Setting>
      <div>{name}</div>
      <div>
        <Styled.SwitchWrapper onClick={() => toggleSetting(stateKey)}>
          <Styled.Switch
            type="checkbox"
            checked={isChecked}
            onChange={() => null}
          />
          <Styled.Slider></Styled.Slider>
        </Styled.SwitchWrapper>
      </div>
    </Styled.Setting>
  );
};

export default Setting;
