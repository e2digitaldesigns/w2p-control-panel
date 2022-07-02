import styled from "styled-components";

interface IntSidebarMenuItem {
  showMenuLeft: boolean;
}

export const SidebarMenuItem = styled.div<IntSidebarMenuItem>`
  display: grid;
  grid-template-columns: 3.125rem 9.325rem 1.25rem;
  height: 3.125rem;
  width: 100%;
  border-bottom: 0.0625rem solid ${props => props.theme.default.borderColor};
  align-items: center;
  background-color: ${props => props.theme.default.bg};
  font-size: 0.875rem;

  &:hover {
    background-color: ${props => props.theme.sidebarLeft.items.hover.bg};
    > div > svg:first-child {
      color: ${props => props.theme.sidebarLeft.items.hover.icon};
    }
  }

  &:focus {
    background-color: purple;
  }

  > div {
    text-align: center;
    &:nth-child(2) {
      text-align: left;
    }

    > svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${props => props.theme.default.icon.color};
    }
  }
`;

export const SidebarMenuItemFooter = styled(SidebarMenuItem)`
  position: absolute;
  bottom: 0px;

  border-top: 0.0625rem solid ${props => props.theme.default.borderColor};
  border-bottom: none;
`;
