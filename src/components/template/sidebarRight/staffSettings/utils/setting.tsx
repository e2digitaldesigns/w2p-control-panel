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
        <Styled.CheckBox onClick={() => toggleSetting(stateKey)}>
          <Styled.Checking
            type="checkbox"
            checked={isChecked}
            onChange={() => console.log(1)}
          />
          <Styled.Slider></Styled.Slider>
        </Styled.CheckBox>
      </div>
    </Styled.Setting>
  );
};

export default Setting;
