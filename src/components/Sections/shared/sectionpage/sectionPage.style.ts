import styled from "styled-components";

export const SectionPage = styled.div<{}>`
  margin: 0.625rem;
  padding: 0.625rem;
  border: 0.0625rem solid ${props => props.theme.default.borderColor};
  border-radius: 0.25rem;
  background-color: white;
  min-height: calc(100vh - 10rem);
`;
