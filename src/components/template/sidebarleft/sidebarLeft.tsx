import * as React from "react";
import * as Styled from "./sidebarLeft.style";
import SidebarMenuItems from "./sidebarMenuItems/sidebarMenuItems";

const SidebarLeft: React.FC = () => {
  return (
    <>
      <Styled.Sidebarleft role="navigation" aria-label="MainNavigation">
        <SidebarMenuItems />
      </Styled.Sidebarleft>
    </>
  );
};

export default SidebarLeft;
