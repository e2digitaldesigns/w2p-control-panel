import React, { createContext } from "react";
import {
  EnumContentMediaQuery,
  IntTemplateContext,
  IntTemplateData,
  IntTemplateThemeNames
} from "../../types";

const templateDefaultState: IntTemplateContext = {
  contentMediaQuery: EnumContentMediaQuery.Desktop,
  theme: IntTemplateThemeNames.Light,
  sidebarMenuLeft: {
    isVisible: true
  },
  sidebarMenuRight: {
    isVisible: true,
    currentSection: "",
    unCompletedTasks: 0
  }
};

const TemplateContext = createContext<IntTemplateData>({
  templateState: templateDefaultState,
  setTemplateState: (): void => {}
});

const TemplateContextProvider: React.FC = ({ children }) => {
  const [templateState, setTemplateState] = React.useState<IntTemplateContext>({
    ...templateDefaultState
  });

  const templateContextValue = React.useMemo(
    () => ({ templateState, setTemplateState }),
    [templateState, setTemplateState]
  );

  return templateContextValue ? (
    <>
      <TemplateContext.Provider value={templateContextValue}>
        {children}
      </TemplateContext.Provider>
    </>
  ) : null;
};

export { TemplateContext, TemplateContextProvider };
