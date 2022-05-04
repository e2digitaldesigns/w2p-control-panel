import styled from "styled-components";

export const ScrollBars = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0.625em;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.default.scrollBar.track.bg};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.default.scrollBar.thumb.bg};
    min-height: 2rem;
    &:hover {
      background-color: ${props => props.theme.default.scrollBar.thumb.hover};
    }
  }
`;
