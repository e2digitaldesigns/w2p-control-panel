export interface IntSidebarMenuLeft {
  isVisible: boolean;
}

export interface IntSidebarMenuRight {
  isVisible: boolean;
  currentSection: string;
  unCompletedTasks: number;
}

export interface IntTemplateContext {
  sidebarMenuLeft: IntSidebarMenuLeft;
  sidebarMenuRight: IntSidebarMenuRight;
}

export interface IntTemplateContextState {
  templateState: IntTemplateContext;
  setTemplateState: React.Dispatch<React.SetStateAction<any>>;
}

export type IntTemplateData = IntTemplateContextState;
