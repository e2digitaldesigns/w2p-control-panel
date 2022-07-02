import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  display: grid;
  width: 100%;
  grid-template-columns: 14.375rem 20rem auto;
  height: ${props => props.theme.sizes.header.height};
  border-bottom: 0.0625rem solid ${props => props.theme.default.borderColor};
  align-items: center;
  background-color: white;
`;
