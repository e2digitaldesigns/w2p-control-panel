import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import _map from "lodash/map";
import { ChevronLeft, Power } from "react-feather";
import * as Styled from "./sidebarMenuItems.style";
import { sidebarMenuData } from "./sidebarMenuData";
import { useTemplate } from "../../../../hooks";
import { removeToken } from "./../../../../utils/token/token";
import SidebarNormalMenuItems from "./normalItems";
import { IntMenuItem } from "./../../../../types";

const SidebarMenuItems: React.FC = () => {
  const navigate = useNavigate();
  const { templateState } = useTemplate();
  const isMenuVisible = templateState.sidebarMenuLeft.isVisible;

  const handleLogout = () => {
    console.log(18, "xxxxx xxxxxx");
    removeToken();
    navigate("/login");
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
