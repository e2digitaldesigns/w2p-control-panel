import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import _map from "lodash/map";
import { ChevronLeft, Power } from "react-feather";
import * as Styled from "./sidebarMenuItems.style";
import { sidebarMenuData } from "./sidebarMenuData";
import { useTemplate, useToken } from "../../../../hooks";
import SidebarNormalMenuItems from "./normalItems";
import { ApplicationRoutes, IntMenuItem } from "./../../../../types";

const SidebarMenuItems: React.FC = () => {
  const { removeToken } = useToken();
  const navigate = useNavigate();
  const { templateState } = useTemplate();
  const isMenuVisible = templateState.sidebarMenuLeft.isVisible;

  const handleLogout = () => {
    removeToken();
    navigate(ApplicationRoutes.Login);
  };

  return (
    <>
      {_map(sidebarMenuData, (menuItem: IntMenuItem, index: number) => (
        <SidebarNormalMenuItems key={index} menuItem={menuItem} />
      ))}
      <Styled.SidebarMenuItemFooter showMenuLeft={isMenuVisible}>
        <div>
          <Power />
        </div>

        {isMenuVisible && (
          <>
            <div onClick={handleLogout}>Sign Out</div>
            <div>
              <ChevronLeft />
            </div>
          </>
        )}
      </Styled.SidebarMenuItemFooter>{" "}
    </>
  );
};

export default SidebarMenuItems;
