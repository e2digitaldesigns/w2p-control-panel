import styled from "styled-components";

export const PaginationWrapper = styled.div`
  text-align: center;
`;

export const Pagination = styled.div`
  margin-top: 0.75em;
  display: inline-block;
`;

interface IntPaginationLink {
  active?: boolean;
}

export const PaginationLink = styled.a<IntPaginationLink>`
  color: black;
  float: left;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 0.0625rem solid #ddd;
  margin: 0 0.25rem;

  ${props => {
    if (props.active) {
      return `
        background-color: #4caf50;
        color: white;
        border: 0.0625rem solid #4caf50;`;
    }
  }};
`;
