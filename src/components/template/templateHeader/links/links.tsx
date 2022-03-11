import React from "react";
import { UserCheck, ShoppingBag, HelpCircle, Settings } from "react-feather";
import * as Styled from "./links.style";

const TemplateHeaderBreadLinks: React.FC = () => {
  return (
    <Styled.HeaderLinks>
      <UserCheck />

      <ShoppingBag />

      <HelpCircle />

      <Settings />

      <Styled.UserInitials>cb</Styled.UserInitials>
    </Styled.HeaderLinks>
  );
};

export default TemplateHeaderBreadLinks;
