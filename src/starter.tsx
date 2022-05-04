import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import * as Styled from "./App.style";

import {
  StyledThemeProvider,
  SystemContextProvider,
  TemplateContextProvider,
  UserContextProvider
} from "./context";

import { ApplicationRoutes } from "./types";

import { useToken } from "./hooks";
import ApplicationRouter from "./components/application/applicationRouter/applicationRouter";

const Starter: React.FC = () => {
  const navigate = useNavigate();
  const { getToken } = useToken();

  useEffect(() => {
    const checkUserLoginStatus = async () => {
      try {
        const token = getToken();
        const userData = token ? await jwtDecode(token) : null;
        !userData && navigate(ApplicationRoutes.Login);
      } catch (error) {
        console.error(48, "Status Error", error);
        navigate(ApplicationRoutes.Login);
      }
    };

    checkUserLoginStatus();
  }, []);

  return (
    <SystemContextProvider>
      <UserContextProvider>
        <TemplateContextProvider>
          <StyledThemeProvider>
            <Styled.GlobalStyle />

            <ApplicationRouter />
          </StyledThemeProvider>
        </TemplateContextProvider>
      </UserContextProvider>
    </SystemContextProvider>
  );
};

export default Starter;
