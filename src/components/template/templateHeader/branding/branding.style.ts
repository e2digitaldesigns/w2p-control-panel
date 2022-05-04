import styled from "styled-components";

export const Branding = styled.div`
  display: grid;
  grid-template-columns: 3.125rem 11.25rem;
  height: ${props => props.theme.sizes.header.height};
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    height: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;

    &:first-child {
      color: ${props => props.theme.default.icon.color};
      border-right: 0.0625rem solid ${props => props.theme.default.borderColor};

      &:hover {
        color: ${props => props.theme.default.icon.hover};
        cursor: pointer;
      }
    }
  }
`;
