import {
  FileText,
  HardDrive,
  Layers,
  List,
  ShoppingCart,
  Users
} from "react-feather";

import { IntMenuItem, ApplicationRoutes } from "./../../../../types";

export const sidebarMenuData: IntMenuItem[] = [
  { url: ApplicationRoutes.ConsoleDashboard, icon: List, name: "Dashboard" },
  { url: ApplicationRoutes.PageMgt, icon: FileText, name: "Page Management" },
  {
    url: ApplicationRoutes.ProductMgt,
    icon: Layers,
    name: "Product Management"
  },
  { url: ApplicationRoutes.UserMgt, icon: Users, name: "User Management" },
  {
    url: ApplicationRoutes.OrderMgt,
    icon: ShoppingCart,
    name: "Order Management"
  },
  {
    url: ApplicationRoutes.SupplierMgt,
    icon: HardDrive,
    name: "Supplier Management"
  },
  {
    url: ApplicationRoutes.SupplierMgt,
    icon: HardDrive,
    name: "System Settings"
  },
  {
    url: ApplicationRoutes.SupplierMgt,
    icon: HardDrive,
    name: "Template Settings"
  }
];
