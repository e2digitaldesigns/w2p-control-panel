import React from "react";
import { useTemplate } from "../../hooks";
import { Outlet } from "react-router-dom";

import * as Styled from "./console.styles";

import TemplateHeader from "../template/templateHeader/templateHeader";
import SidebarLeft from "../template/sidebarleft/sidebarLeft";
import SidebarRight from "../template/sidebarRight/sidebarRight";

interface IntConsole {}

const Console: React.FC<IntConsole> = () => {
  const { templateState } = useTemplate();

  return (
    <>
      <TemplateHeader />
      <Styled.ConsoleDiv
        showMenuLeft={!!templateState.sidebarMenuLeft.isVisible}
        showMenuRight={!!templateState.sidebarMenuRight.isVisible}
      >
        <SidebarLeft />
        <Styled.OutletDiv>
          <Outlet />
        </Styled.OutletDiv>
        <SidebarRight />
      </Styled.ConsoleDiv>
    </>
  );
};

export default Console;
