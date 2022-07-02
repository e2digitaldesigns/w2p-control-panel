import styled from "styled-components";

interface IntSidebarleft {
  showMenuLeft?: boolean;
}

export const Sidebarleft = styled.nav<IntSidebarleft>`
  position: fixed;
  left: 0px;
  top: ${props => props.theme.sizes.header.height};

  height: calc(100vh - ${props => props.theme.sizes.header.height});
  width: ${props =>
    props.showMenuLeft
      ? props.theme.sizes.sidebarLeft.width.normal
      : props.theme.sizes.sidebarLeft.width.collaspe};
  border-right: 0.0625rem solid ${props => props.theme.default.borderColor};

  overflow: hidden;
  background-color: #ccc;
  transition: width ${props => props.theme.mediaQueryTransitionSpeed};
`;
