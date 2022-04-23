import React from "react";
import { SystemContext } from "./systemContext";
import { IntSystemContextState } from "../../types";

const useSystemData = () => {
  const systemData: IntSystemContextState = React.useContext(SystemContext);
  return systemData;
};

export default useSystemData;
