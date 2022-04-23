import { createContext } from "react";
import { IntSystemContext, IntSystemData } from "../../types";

export const systemDefualtState: IntSystemContext = {
  _id: "",
  domain: "",
  ext: "",
  isActive: false,
  name: "",
  primaryStore: false,
  storeOwnerId: ""
};

export const SystemContext = createContext<IntSystemData>({
  systemState: systemDefualtState,
  setSystemState: (): void => {}
});
