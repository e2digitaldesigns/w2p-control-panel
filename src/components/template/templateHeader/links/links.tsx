import React, { useEffect, useState } from "react";
import {
  HelpCircle,
  Menu,
  Settings,
  ShoppingBag,
  UserCheck
} from "react-feather";
import _cloneDeep from "lodash/cloneDeep";
import { useTemplate } from "../../../../hooks";
import { getUserDataFromToken } from "../../../../utils/token/token";
import * as Styled from "./links.style";
import { TUserJWTToken } from "./../../../../types";

const TemplateHeaderBreadLinks: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const { templateState, setTemplateState } = useTemplate();

  useEffect(() => {
    async function setTheUsername() {
      try {
        const userData: TUserJWTToken = await getUserDataFromToken();
        userData && setUsername(userData.name);
      } catch (error) {
        console.error(20, error);
      }
    }

    setTheUsername();
  }, []);

  const handleMenuToggle = () => {
    const newState = _cloneDeep(templateState);
    newState.sidebarMenuRight.isVisible = !newState.sidebarMenuRight.isVisible;
    setTemplateState(newState);
  };

  return (
    <Styled.HeaderLinks>
      <UserCheck />

      <ShoppingBag />

      <HelpCircle />

      <Settings />

      <Styled.UserInitials>{username[0]}</Styled.UserInitials>

      <Styled.Hamburger onClick={handleMenuToggle}>
        <Menu />
      </Styled.Hamburger>
    </Styled.HeaderLinks>
  );
};

export default TemplateHeaderBreadLinks;
