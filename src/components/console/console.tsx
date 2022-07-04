import React, { useRef } from "react";
import { useResponsiveBreakPoints, useTemplate } from "../../hooks";
import { Outlet } from "react-router-dom";

import * as Styled from "./console.styles";

import TemplateHeader from "../template/templateHeader/templateHeader";
import SidebarLeft from "../template/sidebarleft/sidebarLeft";
import SidebarRight from "../template/sidebarRight/sidebarRight";

interface IntConsole {}

const Console: React.FC<IntConsole> = () => {
  const { templateState } = useTemplate();
  const outletDiv = useRef<HTMLDivElement>(null);
  const { useSetOutletDivBreakPoint } = useResponsiveBreakPoints();
  useSetOutletDivBreakPoint(outletDiv);

  return (
    <>
      <TemplateHeader />
      <Styled.ConsoleDiv>
        <SidebarLeft />
        <Styled.OutletDiv
          ref={outletDiv}
          showMenuLeft={!!templateState.sidebarMenuLeft.isVisible}
          showMenuRight={!!templateState.sidebarMenuRight.isVisible}
        >
          <Outlet />
        </Styled.OutletDiv>
        <SidebarRight />
      </Styled.ConsoleDiv>
    </>
  );
};

export default Console;
