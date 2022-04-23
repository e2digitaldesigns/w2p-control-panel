import styled from "styled-components";

export const Sidebarleft = styled.nav`
  position: relative;
  border-right: 0.0625rem solid ${props => props.theme.colors.borderColor};
  height: calc(100vh - ${props => props.theme.sizes.header.height});
`;
