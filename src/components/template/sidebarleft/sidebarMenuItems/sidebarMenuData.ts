import {
  FileText,
  HardDrive,
  Layers,
  List,
  ShoppingCart,
  Users
} from "react-feather";

import { IntMenuItem, Routes } from "./../../../../types";

export const sidebarMenuData: IntMenuItem[] = [
  { url: "/console/dashboard", icon: List, name: "Dashboard" },
  { url: Routes.PageMgt, icon: FileText, name: "Page Management" },
  { url: "/console/2", icon: Layers, name: "Product Management" },
  { url: "/console/3", icon: Users, name: "User Management" },
  { url: "/console/4", icon: ShoppingCart, name: "Order Management" },
  { url: "/console/5", icon: HardDrive, name: "Supplier Management" }
];
