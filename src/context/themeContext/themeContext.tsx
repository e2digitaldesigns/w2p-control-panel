import React from "react";
import { ThemeProvider } from "styled-components";
import { useTemplate } from "../../hooks";
import { darkTheme, lightTheme, primaryTheme } from "./themes";
import { IntTemplateThemeNames } from "../../types";

const StyledThemeProvider: React.FC = ({ children }) => {
  const { templateState } = useTemplate();

  const useTheme = {
    ...primaryTheme,
    ...(templateState.theme === IntTemplateThemeNames.Dark
      ? lightTheme
      : darkTheme)
  };

  return <ThemeProvider theme={useTheme}>{children}</ThemeProvider>;
};

export { StyledThemeProvider };
