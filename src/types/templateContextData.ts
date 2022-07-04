export enum EnumContentMediaQuery {
  Mobile = "mobile",
  Tablet = "tablet",
  Desktop = "desktop",
  DesktopLarge = "desktopLarge",
  DesktopXL = "desktopXL"
}

export enum IntTemplateThemeNames {
  Light = "lightTheme",
  Dark = "darkTheme"
}
export interface IntSidebarMenuLeft {
  isVisible: boolean;
}

export interface IntSidebarMenuRight {
  isVisible: boolean;
  currentSection: string;
  unCompletedTasks: number;
}

export interface IntTemplateContext {
  contentMediaQuery: EnumContentMediaQuery;
  theme: IntTemplateThemeNames;
  sidebarMenuLeft: IntSidebarMenuLeft;
  sidebarMenuRight: IntSidebarMenuRight;
}

export interface IntTemplateContextState {
  templateState: IntTemplateContext;
  setTemplateState: React.Dispatch<React.SetStateAction<any>>;
}

export type IntTemplateData = IntTemplateContextState;
