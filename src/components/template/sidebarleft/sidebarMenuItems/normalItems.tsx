import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "react-feather";
import * as Styled from "./sidebarMenuItems.style";
import { usePermission, useTemplate } from "../../../../hooks";
import { IntMenuItem } from "./../../../../types";

interface IntSidebarNormalMenuItems {
  menuItem: IntMenuItem;
}

const SidebarNormalMenuItems: React.FC<IntSidebarNormalMenuItems> = ({
  menuItem
}) => {
  const { useCanAccess } = usePermission();
  const { templateState } = useTemplate();
  const isMenuVisible = templateState.sidebarMenuLeft.isVisible;
  const canAccess = useCanAccess(menuItem.url);

  if (!canAccess) return null;

  return (
    <Link to={menuItem.url}>
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
  );
};

export default SidebarNormalMenuItems;
