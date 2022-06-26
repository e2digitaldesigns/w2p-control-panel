/* istanbul ignore file */
import { Icon } from "react-feather";

export * from "./systemContextData";
export * from "./routes";
export * from "./templateContextData";
export * from "./userContextData";

export * from "./pageManagement";
export * from "./pagination";

export interface IntTask {
  _id?: string;
  isComplete: boolean;
  text: string;
  timestamp: string;
}

export enum Endpoints {
  Pages = "/v1/pages",
  StaffLogin = "/v1/staffAuth",
  System = "/v1/system",
  Tasks = "/v1/tasks"
}

export const TOKEN = "w2p_";

export enum QueryKeys {
  Pages = "pages",
  System = "system",
  Task = "task"
}

export interface IntMenuItem {
  url: string;
  icon: Icon;
  name: string;
}

export interface IntUserJWTTokenPermissions {
  clientManagement: boolean;
  pageManagement: boolean;
  productManagement: boolean;
  staffManagement: boolean;
  supplierManagement: boolean;
}

export type TUserPermissionType = IntUserJWTTokenPermissions | undefined;
export interface IntUserJWTToken {
  staffId: string;
  name: string;
  email: string;
  authLevel?: string;
  permissions: IntUserJWTTokenPermissions;
}

export type TUserJWTToken = IntUserJWTToken | null;
