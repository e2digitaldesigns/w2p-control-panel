import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { theme } from "./theme/theme";
import * as Styled from "./App.style";

import {
  UserContext,
  userDefualtState
} from "./hooks/userDataHook/userContext";

import {
  TemplateContext,
  templateDefaultState
} from "./hooks/useTemplateDataHook/templateContext";

import {
  SystemContext,
  systemDefualtState
} from "./hooks/systemDataHook/systemContext";

import { IntTemplateContext, IntSystemContext, IntUserContext } from "./types";

import { useGetStorefront, useToken } from "./hooks";
import ApplicationRouter from "./components/application/applicationRouter/applicationRouter";

const Starter: React.FC = () => {
  const navigate = useNavigate();
  const { getToken } = useToken();
  const [isStoreLoaded, setIsStoreLoaded] = useState<boolean>(false);
  const { isLoading, error, data: systemData } = useGetStorefront();

  const [systemState, setSystemState] = useState<IntSystemContext>({
    ...systemDefualtState
  });

  const systemContextValue = useMemo(
    () => ({ systemState, setSystemState }),
    [systemState, setSystemState]
  );

  const [templateState, setTemplateState] = useState<IntTemplateContext>({
    ...templateDefaultState
  });

  const templateContextValue = useMemo(
    () => ({ templateState, setTemplateState }),
    [templateState, setTemplateState]
  );

  const [userState, setUserState] = useState<IntUserContext>({
    ...userDefualtState
  });

  const userContextValue = useMemo(
    () => ({ userState, setUserState }),
    [userState, setUserState]
  );

  useEffect(() => {
    let stillHere = true;

    if (!isLoading && stillHere && systemData?.primaryStore) {
      setSystemState(systemState => systemData);
      setIsStoreLoaded(isStoreLoaded => true);
    }

    return () => {
      stillHere = false;
    };
  }, [isLoading, systemData]);

  useEffect(() => {
    const checkUserLoginStatus = async () => {
      try {
        const token = getToken();
        const userData = token ? await jwtDecode(token) : null;
        !userData && navigate("/login");
      } catch (error) {
        navigate("/login");
        console.error(48, "Status Error", error);
      }
    };

    checkUserLoginStatus();
  }, []);

  if (!isStoreLoaded) return <h1>loading</h1>;
  if (error || !systemData?.primaryStore) return <h1>error</h1>;

  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyle />
      <SystemContext.Provider value={systemContextValue}>
        <UserContext.Provider value={userContextValue}>
          <TemplateContext.Provider value={templateContextValue}>
            <ApplicationRouter />
          </TemplateContext.Provider>
        </UserContext.Provider>
      </SystemContext.Provider>
    </ThemeProvider>
  );
};

export default Starter;
