import styled from "styled-components";

export const HeaderLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 2.5rem);
  height: ${props => props.theme.sizes.header.height};
  align-items: center;
  justify-content: right;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${props => props.theme.colors.iconColor};
    cursor: pointer;
  }
`;

export const UserInitials = styled.div`
  display: flex;
  width: 1.75rem;
  height: 1.75rem;
  background: ${props => props.theme.colors.grey3};
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

export const Hamburger = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-left: 0.0625rem solid ${props => props.theme.colors.borderColor};
`;
