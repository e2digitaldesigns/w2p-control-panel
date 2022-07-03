import styled from "styled-components";

interface IntApplicationWrapper {}

export const ConsoleDiv = styled.div<IntApplicationWrapper>`
  padding-top: ${props => props.theme.sizes.header.height};
`;

interface IntOutletDiv {
  showMenuLeft: boolean;
  showMenuRight: boolean;
}

export const OutletDiv = styled.div<IntOutletDiv>`
  flex-grow: 1;
  transition: padding ${props => props.theme.mediaQueryTransitionSpeed};
  padding-right: ${props =>
    props.showMenuRight
      ? props.theme.sizes.sidebarRight.width.normal
      : props.theme.sizes.sidebarRight.width.collaspe};
  padding-left: ${props =>
    props.showMenuLeft
      ? props.theme.sizes.sidebarLeft.width.normal
      : props.theme.sizes.sidebarLeft.width.collaspe};

  @media (max-width: ${props => props.theme.mediaQuery.tablet}) {
    padding-left: ${props => props.theme.sizes.sidebarLeft.width.collaspe};
    padding-right: 0;
  }
`;
