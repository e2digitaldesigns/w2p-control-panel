import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { auth } from "./utils/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { theme } from "./theme/theme";
import * as Styled from "./App.style";
import {
  TemplateContext,
  templateDefaultState
} from "./hooks/useTemplateDataHook/templateContext";
import Applicationloader from "./components/application/applicationLoader/applicationLoader";
import { IntTemplateContext } from "./types";
import Login from "./components/oAuth/login";

const App: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const [templateState, setTemplateState] = useState<IntTemplateContext>({
    ...templateDefaultState
  });

  useEffect(() => {
    //TODO: Get store information here
  }, []);

  const templateContextValue = useMemo(
    () => ({ templateState, setTemplateState }),
    [templateState, setTemplateState]
  );

  if (loading) return <h1>loading</h1>;

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyle />
        <TemplateContext.Provider value={templateContextValue}>
          {user ? <Applicationloader /> : <Login />}
        </TemplateContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
