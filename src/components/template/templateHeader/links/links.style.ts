import styled from "styled-components";

export const HeaderLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 2.5rem) 3.125rem;
  height: ${props => props.theme.sizes.header.height};
  align-items: center;
  justify-content: right;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${props => props.theme.default.icon.color};
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.default.icon.hover};
    }
  }

  @media (max-width: ${props => props.theme.mediaQuery.tablet}) {
    grid-template-columns: repeat(2, auto);

    > svg {
      display: none;
    }
  }
`;

export const UserInitials = styled.div`
  display: flex;
  width: 1.75rem;
  height: 1.75rem;
  background: ${props => props.theme.header.initials.bg};
  color: ${props => props.theme.header.initials.font};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-transform: uppercase;
  font-size: 0.875rem;

  @media (max-width: ${props => props.theme.mediaQuery.tablet}) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  display: flex;
  width: 3.125rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-left: 0.0625rem solid ${props => props.theme.default.borderColor};
  transition: width 1s;

  @media (max-width: ${props => props.theme.mediaQuery.tablet}) {
    width: 50px;
    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
