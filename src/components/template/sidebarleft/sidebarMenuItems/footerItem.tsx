import * as React from "react";
import { useNavigate } from "react-router-dom";
import _map from "lodash/map";
import { ChevronLeft, Power } from "react-feather";
import * as Styled from "./sidebarMenuItems.style";
import { useTemplate, useToken } from "../../../../hooks";
import { ApplicationRoutes, IntMenuItem } from "./../../../../types";

const SidebarFooterItem: React.FC<{}> = () => {
  const { removeToken } = useToken();
  const navigate = useNavigate();
  const { templateState } = useTemplate();
  const isMenuVisible = templateState.sidebarMenuLeft.isVisible || true;

  const handleLogout = () => {
    removeToken();
    navigate(ApplicationRoutes.Login);
  };

  return (
    <Styled.SidebarMenuItemFooter showMenuLeft={isMenuVisible}>
      <div>
        <Power />
      </div>

      <div onClick={handleLogout}>Sign Out</div>
      <div>
        <ChevronLeft />
      </div>
    </Styled.SidebarMenuItemFooter>
  );
};

export default SidebarFooterItem;
