import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "react-feather";
import * as Styled from "./sidebarMenuItems.style";
import { useTemplate } from "../../../../hooks";
import { IntMenuItem } from "./../../../../types";

interface IntSidebarNormalMenuItems {
  menuItem: IntMenuItem;
}

const SidebarNormalMenuItems: React.FC<IntSidebarNormalMenuItems> = ({
  menuItem
}) => {
  const { templateState } = useTemplate();
  const isMenuVisible = templateState.sidebarMenuLeft.isVisible;

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
