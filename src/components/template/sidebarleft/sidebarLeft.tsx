import * as React from "react";
import { useTemplate } from "../../../hooks";
import * as Styled from "./sidebarLeft.style";
import SidebarMenuItems from "./sidebarMenuItems/sidebarMenuItems";

const SidebarLeft: React.FC = () => {
  const { templateState } = useTemplate();

  return (
    <>
      <Styled.Sidebarleft
        showMenuLeft={!!templateState.sidebarMenuLeft.isVisible}
        role="navigation"
        aria-label="MainNavigation"
      >
        <SidebarMenuItems />
      </Styled.Sidebarleft>
    </>
  );
};

export default SidebarLeft;
