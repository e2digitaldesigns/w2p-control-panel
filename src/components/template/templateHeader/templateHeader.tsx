import React from "react";
import * as Styled from "./templateHeader.style";
import TemplateHeaderBranding from "./branding/branding";
import TemplateHeaderBreadLinks from "./links/links";

const TemplateHeader: React.FC = () => {
  return (
    <Styled.Header>
      <TemplateHeaderBranding />

      <TemplateHeaderBreadLinks />
    </Styled.Header>
  );
};

export default TemplateHeader;
