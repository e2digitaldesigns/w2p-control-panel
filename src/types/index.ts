/* istanbul ignore file */
import { Icon } from "react-feather";

export * from "./systemContextData";
export * from "./templateContextData";
export * from "./userContextData";

export interface IntTask {
  _id?: string;
  isComplete: boolean;
  text: string;
  timestamp: string;
}

export enum Endpoints {
  StaffLogin = "/v1/staffAuth",
  System = "/v1/system",
  Tasks = "/v1/tasks"
}

export const TOKEN = "w2p_";

export enum Routes {
  ConsoleDashboard = "/console/dashboard",
  Login = "/login",
  Password = "/reset",
  Dashboard = "/console/dashboard",
  PageMgt = "/console/page-management",
  PageMgtNew = "/console/page-management/new",
  PageMgtList = "/console/page-management/list",
  PageMgtProfile = "/console/page-management/:pageId"
}

export enum QueryKeys {
  System = "system",
  Task = "task"
}

export interface IntMenuItem {
  url: string;
  icon: Icon;
  name: string;
}

export interface IntUserJWTToken {
  staffId: string;
  name: string;
  email: string;
  authLevel: string;
}

export type TUserJWTToken = IntUserJWTToken | null;
