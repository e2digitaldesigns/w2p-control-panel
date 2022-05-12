import React from "react";
import { Switch } from "../../../../../paper";
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
        <Switch
          isChecked={isChecked}
          onClick={toggleSetting}
          stateKey={stateKey}
        />
      </div>
    </Styled.Setting>
  );
};

export default Setting;
