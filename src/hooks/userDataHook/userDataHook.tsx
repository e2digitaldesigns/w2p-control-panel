import { useContext } from "react";
import { UserContext } from "../../context";
import { IntUserContextState } from "../../types";

const useUserData = () => {
  const Data: IntUserContextState = useContext(UserContext);
  return Data;
};

export default useUserData;
