import React, { createContext } from "react";
import { IntSystemContext, IntSystemData } from "../types";
import { useGetStorefront } from "../hooks";

const systemDefualtState: IntSystemContext = {
  _id: "",
  domain: "",
  ext: "",
  isActive: false,
  name: "",
  primaryStore: false,
  storeOwnerId: ""
};

const SystemContext = createContext<IntSystemData>({
  systemState: systemDefualtState,
  setSystemState: (): void => {}
});

const SystemContextProvider: React.FC = ({ children }) => {
  const { isLoading, data: systemData } = useGetStorefront();

  const [systemState, setSystemState] = React.useState<IntSystemContext>({
    ...systemDefualtState
  });

  const systemContextValue = React.useMemo(
    () => ({ systemState, setSystemState }),
    [systemState, setSystemState]
  );

  React.useEffect(() => {
    let stillHere = true;

    if (!isLoading && stillHere && systemData?.primaryStore) {
      setSystemState(systemState => systemData);
    }

    return () => {
      stillHere = false;
    };
  }, [isLoading, systemData]);

  if (isLoading) return <h1>loading</h1>;

  return systemContextValue ? (
    <>
      <SystemContext.Provider value={systemContextValue}>
        {children}
      </SystemContext.Provider>
    </>
  ) : null;
};

export { SystemContext, SystemContextProvider };
