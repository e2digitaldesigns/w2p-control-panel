import React from "react";
import { ThemeProvider } from "styled-components";
import { useTemplate } from "../../hooks";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { sizeTheme } from "./sizeTheme";
import { IntTemplateThemeNames } from "../../types";

const StyledThemeProvider: React.FC = ({ children }) => {
  const { templateState } = useTemplate();

  const useTheme = {
    ...sizeTheme,
    ...(templateState.theme === IntTemplateThemeNames.Dark
      ? lightTheme
      : darkTheme)
  };

  return (
    <>
      <ThemeProvider theme={useTheme}>{children}</ThemeProvider>
    </>
  );
};

export { StyledThemeProvider };
