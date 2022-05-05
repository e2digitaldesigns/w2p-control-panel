import React, { createContext } from "react";
import { IntUserContext, IntUserData } from "../../types";

const userDefualtState: IntUserContext = {};

const UserContext = createContext<IntUserData>({
  userState: userDefualtState,
  setUserState: (): void => {}
});

const UserContextProvider: React.FC = ({ children }) => {
  const [userState, setUserState] = React.useState<IntUserContext>({
    ...userDefualtState
  });

  const userContextValue = React.useMemo(
    () => ({ userState, setUserState }),
    [userState, setUserState]
  );

  return userContextValue ? (
    <>
      <UserContext.Provider value={userContextValue}>
        {children}
      </UserContext.Provider>
    </>
  ) : null;
};

export { UserContext, UserContextProvider };
