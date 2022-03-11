import styled from "styled-components";

export const Header = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: 14.375rem 20rem auto;
  height: ${props => props.theme.sizes.header.height};
  border-bottom: 0.0625rem solid ${props => props.theme.colors.borderColor};
  align-items: center;
`;