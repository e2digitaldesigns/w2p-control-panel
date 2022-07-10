import styled from "styled-components";

export const SearchInput = styled.input.attrs({
  type: "text"
})`
  border: 0.0625rem solid #ddd;
  border-radius: 0;
  padding: 0.5rem;
`;

export const SearchSelect = styled.select`
  border: 0.0625rem solid #ddd;
  border-radius: 0;
  padding: 0.5rem;
  margin: 0 0.25rem;
`;
