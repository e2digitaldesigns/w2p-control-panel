import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import _map from "lodash/map";
import { ChevronLeft, Power } from "react-feather";
import * as Styled from "./sidebarMenuItems.style";
import { sidebarMenuData } from "./sidebarMenuData";
import { useTemplate } from "../../../../hooks";
import { logout } from "../../../../utils/firebase/firebase";

const SidebarMenuItems: React.FC = () => {
  const navigate = useNavigate();
  const { templateState } = useTemplate();
  const isMenuVisible = templateState.sidebarMenuLeft.isVisible;

  const handleLogout = () => {
    // logout();
    navigate("/sign-out");
  };

  return (
    <>
      {_map(sidebarMenuData, (menuItem, index) => (
        <Link key={index} to={menuItem.url}>
          <Styled.SidebarMenuItem showMenuLeft={isMenuVisible}>
            <div>
              <menuItem.icon />
            </div>

            {isMenuVisible && (
              <>
                <div> {menuItem.name}</div>
                <div>
                  <ChevronLeft />
                </div>
              </>
            )}
          </Styled.SidebarMenuItem>
        </Link>
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
      </Styled.SidebarMenuItemFooter>
    </>
  );
};

export default SidebarMenuItems;
