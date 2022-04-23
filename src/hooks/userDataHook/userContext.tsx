import { createContext } from "react";
import { IntUserContext, IntUserData } from "../../types";

export const userDefualtState: IntUserContext = {};
export const UserContext = createContext<IntUserData>({
  userState: userDefualtState,
  setUserState: (): void => {}
});
