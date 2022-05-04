export interface IntSidebarMenuLeft {
  isVisible: boolean;
}

export interface IntSidebarMenuRight {
  isVisible: boolean;
  currentSection: string;
  unCompletedTasks: number;
}

export enum IntTemplateThemeNames {
  Light = "lightTheme",
  Dark = "darkTheme"
}

export interface IntTemplateContext {
  theme: IntTemplateThemeNames;
  sidebarMenuLeft: IntSidebarMenuLeft;
  sidebarMenuRight: IntSidebarMenuRight;
}

export interface IntTemplateContextState {
  templateState: IntTemplateContext;
  setTemplateState: React.Dispatch<React.SetStateAction<any>>;
}

export type IntTemplateData = IntTemplateContextState;
