import styled from "styled-components";

interface IntSidebarMenuItem {
  showMenuLeft: boolean;
}

export const SidebarMenuItem = styled.div<IntSidebarMenuItem>`
  display: grid;
  grid-template-columns: 3.125rem ${props =>
      props.showMenuLeft && "9.325rem 1.25rem"};

  height: 3.125rem;
  width: 100%;
  border-bottom: 0.0625rem solid ${props => props.theme.colors.borderColor};
  align-items: center;
  background-color: ${props => props.theme.colors.bg.main};
  font-size: 0.875rem;
  transition: 0.25s;

  &:hover {
    background-color: ${props => props.theme.colors.bg.hover1};
    > div > svg:first-child {
      color: ${props => props.theme.colors.iconColorHover1};
    }
  }

  > div {
    text-align: center;
    &:nth-child(2) {
      text-align: left;
    }

    > svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${props => props.theme.colors.iconColor};
    }
  }
`;

export const SidebarMenuItemFooter = styled(SidebarMenuItem)`
  position: absolute;
  bottom: 0px;

  border-top: 0.0625rem solid ${props => props.theme.colors.borderColor};
  border-bottom: none;
`;
