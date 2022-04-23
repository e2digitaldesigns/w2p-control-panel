import styled from "styled-components";

export const ActivityWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const ActivityIndy = styled.div`
  /* min-height: 2rem; */
  width: 100%;
  display: grid;
  grid-template-columns: 2rem auto;
  border-bottom: 0.0625rem solid ${props => props.theme.colors.borderColor};
  padding: 0.375rem 0.75rem 0.375rem 0.5rem;
`;

export const ActivityIcon = styled.div`
  display: flex;
  width: 1.75rem;
  height: 1.75rem;
  /* background: ${props => props.theme.colors.greyE}; */
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-transform: uppercase;
  > svg {
    width: 0.875rem;
    height: 0.875rem;
    color: ${props => props.theme.colors.iconColor};
  }
`;

export const ActivityHeader = styled.div`
  display: grid;
  grid-template-columns: auto 4rem;

  > div:first-child {
    font-size: 0.75rem;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > div:nth-child(2) {
    font-size: 0.625rem;
    text-align: right;
  }
`;

export const ActivityText = styled.div`
  padding-top: 0.25rem;
  font-size: 0.75rem;
`;
