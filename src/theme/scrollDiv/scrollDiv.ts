import styled from "styled-components";

export const ScrollBars = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0.625em;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.greyD};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.greyC};
    min-height: 2rem;
    &:hover {
      background: ${props => props.theme.colors.greyB};
    }
  }
`;
