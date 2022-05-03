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
  { url: Routes.ConsoleDashboard, icon: List, name: "Dashboard" },
  { url: Routes.PageMgt, icon: FileText, name: "Page Management" },
  { url: Routes.ProductMgt, icon: Layers, name: "Product Management" },
  { url: Routes.UserMgt, icon: Users, name: "User Management" },
  { url: Routes.OrderMgt, icon: ShoppingCart, name: "Order Management" },
  { url: Routes.SupplierMgt, icon: HardDrive, name: "Supplier Management" },
  { url: Routes.SupplierMgt, icon: HardDrive, name: "System Settings" },
  { url: Routes.SupplierMgt, icon: HardDrive, name: "Template Settings" }
];
