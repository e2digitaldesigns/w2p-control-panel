import React from "react";
import { Menu } from "react-feather";
import _cloneDeep from "lodash/cloneDeep";
import { useTemplate } from "../../../../hooks";
import * as Styled from "./branding.style";

const TemplateHeaderBranding: React.FC = () => {
  const { templateState, setTemplateState } = useTemplate();

  const handleMenuToggle = () => {
    const newState = _cloneDeep(templateState);
    newState.sidebarMenuLeft.isVisible = !newState.sidebarMenuLeft.isVisible;
    setTemplateState(newState);
  };

  return (
    <Styled.Branding>
      <div onClick={handleMenuToggle}>
        <Menu />
      </div>
      <div>E2 Print Software</div>
    </Styled.Branding>
  );
};

export default TemplateHeaderBranding;
