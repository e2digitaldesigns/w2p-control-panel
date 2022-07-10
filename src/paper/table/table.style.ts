import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  tr:hover {
    background-color: #efefef;
  }

  tr:nth-child(even) {
    background-color: #dedede;
    &:hover {
      background-color: #efefef;
    }
  }

  td,
  th {
    border: 0.0625rem solid #ddd;
    padding: 0.5rem;
  }

  th {
    color: white;
    background-color: #4caf50;
    margin: 0 0.25rem;
  }
`;
