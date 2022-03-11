import * as React from "react";
import { useTemplate } from "../../../hooks";
import SidebarLeft from "../../template/sidebarleft/sidebarLeft";
import * as Styled from "./applicationWrapper.style";
import TemplateHeader from "../../template/templateHeader/templateHeader";
import ApplicationRouter from "../applicationRouter/applicationRouter";
import SidebarRight from "../../template/sidebarRight/sidebarRight";

const ApplicationWrapper: React.FC = () => {
  const { templateState } = useTemplate();
  const isMenuVisible = templateState.sidebarMenuLeft.isVisible;

  return (
    <>
      <TemplateHeader />
      <Styled.ApplicationWrapper showMenuLeft={isMenuVisible}>
        <SidebarLeft />
        <ApplicationRouter />
        <SidebarRight />
      </Styled.ApplicationWrapper>
    </>
  );
};

export default ApplicationWrapper;
