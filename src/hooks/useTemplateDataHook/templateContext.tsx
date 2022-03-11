import { createContext } from "react";
import { IntTemplateContext, IntTemplateData } from "./../../types";

export const templateDefaultState: IntTemplateContext = {
  sidebarMenuLeft: {
    isVisible: true
  },
  sidebarMenuRight: {
    currentSection: "",
    unCompletedTasks: 0
  }
};

export const TemplateContext = createContext<IntTemplateData>({
  templateState: templateDefaultState,
  setTemplateState: (): void => {}
});
