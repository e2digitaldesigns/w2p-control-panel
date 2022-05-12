import styled from "styled-components";

export const SectionPageHeader = styled.header<{}>`
  display: grid;
  grid-template-columns: 2fr 1fr;
  border-bottom: 0.0625rem solid green;
  padding: 0.3125rem 0.625rem;
  height: 5.625rem;
  background-color: white;
`;

export const Crumbs = styled.div<{}>`
  font-size: 0.75rem;
`;

export const Header = styled.h1<{}>`
  font-size: 1.5rem;
  padding: 0.625rem 0 0.3125rem;
`;

export const SubTitle = styled.div<{}>`
  font-size: 0.75rem;
`;

export const Action = styled.div<{}>`
  align-self: center;
`;
