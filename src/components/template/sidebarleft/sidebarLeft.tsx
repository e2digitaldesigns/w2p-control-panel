import * as React from "react";
import SidebarLeftHeader from "./sidebarLeftHeader/sidebarLeftHeader";
import * as Styled from "./sidebarLeft.style";
import SidebarMenuItems from "./sidebarMenuItems/sidebarMenuItems";

const SidebarLeft: React.FC = () => {
  return (
    <>
      <Styled.Sidebarleft>
        <SidebarMenuItems />
      </Styled.Sidebarleft>
    </>
  );
};

export default SidebarLeft;
