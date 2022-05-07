import styled from "styled-components";

interface IntApplicationWrapper {
  showMenuLeft: boolean;
  showMenuRight?: boolean;
}

export const ConsoleDiv = styled.div<IntApplicationWrapper>`
  display: grid;
  width: 100vw;
  height: calc(100vh - ${props => props.theme.sizes.header.height});
  overflow: hidden;

  grid-template-columns:
    ${props =>
      props.showMenuLeft
        ? props.theme.sizes.sidebarLeft.width.normal
        : props.theme.sizes.sidebarLeft.width.collaspe} auto
    ${props =>
      props.showMenuRight ? props.theme.sizes.sidebarRight.width : 0};

  background-color: ${props => props.theme.default.bg};
`;

export const OutletDiv = styled.div`
  /* padding: 0.625rem; */
`;
