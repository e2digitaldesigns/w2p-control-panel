export enum ApplicationRoutes {
  ConsoleDashboard = "/console/dashboard",
  Login = "/login",
  Password = "/reset",
  Dashboard = "/console/dashboard",

  PageMgt = "/console/page-management",
  PageMgtNew = "/console/page-management/new",
  PageMgtList = "/console/page-management/list",
  PageMgtListPage = "/console/page-management/list/:pageNumber",
  PageMgtProfile = "/console/page-management/profile/:id",
  PageMgtProfileLink = "/console/page-management/profile/",

  ProductMgt = "/console/product-management",
  ProductMgtNew = "/console/product-management/new",
  ProductMgtList = "/console/product-management/list",
  ProductMgtProfile = "/console/product-management/profile/:id",

  UserMgt = "/console/user-management",
  UserMgtNew = "/console/user-management/new",
  UserMgtList = "/console/User-management/list",
  UserMgtProfile = "/console/User-management/:id",

  OrderMgt = "/console/order-management",
  OrderMgtNew = "/console/order-management/new",
  OrderMgtList = "/console/order-management/list",
  OrderMgtProfile = "/console/order-management/:id",

  SupplierMgt = "/console/supplier-management",
  SupplierMgtNew = "/console/supplier-management/new",
  SupplierMgtList = "/console/supplier-management/list",
  SupplierMgtProfile = "/console/supplier-management/:id"
}

export const RoutePermissionSplit = "/";

export enum RoutesPermissionKeys {
  "client-management" = "clientManagement",
  "page-management" = "pageManagement",
  "product-management" = "productManagement",
  "user-management" = "userManagement",
  "order-management" = "orderManagement",
  "staff-management" = "staffManagement",
  "supplier-management" = "supplierManagement"
}
