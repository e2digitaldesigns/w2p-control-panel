import React, { useState } from "react";
import { Menu } from "react-feather";
import * as Styled from "./sidebarLeftHeader.style";

const SidebarLeftHeader: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Styled.SidebarLeftHeader>
      <div onClick={handleMenuToggle}>
        <span>
          <Menu />
        </span>
      </div>
      <div>E2 Print Software</div>
    </Styled.SidebarLeftHeader>
  );
};

export default SidebarLeftHeader;
