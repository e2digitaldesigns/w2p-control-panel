import styled from "styled-components";

interface IntApplicationWrapper {
  showMenuLeft: boolean;
}

// 3.125rem
// 1220 1400
// 57.5rem 68.75rem

//nfgCodex#6697
// grid-template-columns: 14.375rem 79.375rem 26.25rem;

export const ApplicationWrapper = styled.div<IntApplicationWrapper>`
  display: grid;
  width: 100vw;
  height: calc(100vh - ${props => props.theme.sizes.header.height});
  overflow: hidden;
  /*  */
  grid-template-columns: ${props =>
      props.showMenuLeft ? "14.375rem auto" : "3.125rem auto"} 15rem;
  background-color: ${props => props.theme.colors.bg.main};
`;
