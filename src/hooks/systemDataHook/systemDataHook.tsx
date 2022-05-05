import React from "react";
import { SystemContext } from "../../context";
import { IntSystemContextState } from "../../types";

const useSystemData = () => {
  const systemData: IntSystemContextState = React.useContext(SystemContext);
  return systemData;
};

export default useSystemData;
