import { useLocation } from "react-router-dom";
import _split from "lodash/split";
import jwtDecode from "jwt-decode";

import {
  IntUserJWTTokenPermissions,
  RoutePermissionSplit,
  ApplicationRoutes,
  RoutesPermissionKeys,
  TUserJWTToken
} from "../../types";

import useTokenHook from "../useTokenHook";

type TUseCanAccess = (url?: string | undefined) => boolean;

export interface IntUsePermissionHook {
  useCanAccess: TUseCanAccess;
}

const usePermissionHook = (): IntUsePermissionHook => {
  const { getToken } = useTokenHook();

  const useCanAccess: TUseCanAccess = (url = "") => {
    try {
      const location = useLocation();
      const token = getToken();

      if (url === ApplicationRoutes.ConsoleDashboard) {
        return true;
      } else if (
        url === ApplicationRoutes.ConsoleDashboard &&
        location.pathname === ApplicationRoutes.ConsoleDashboard
      ) {
        return true;
      }

      let path: string = _split(
        url || location.pathname,
        RoutePermissionSplit
      )[1];

      const index = Object.keys(RoutesPermissionKeys).indexOf(path);
      const key = Object.values(RoutesPermissionKeys)[
        index
      ] as keyof IntUserJWTTokenPermissions;

      const data: TUserJWTToken = token ? jwtDecode(token) : null;
      const permission = data?.permissions?.[key]
        ? data.permissions[key]
        : false;

      return permission;
    } catch (error) {
      return false;
    }
  };

  return { useCanAccess };
};

export default usePermissionHook;
