import styled from "styled-components";

interface IntButton {}

export const Button = styled.button<IntButton>`
  background-color: #ddd;
  border-radius: 0.375rem;
  padding: 0.25rem 0.625rem;
  text-align: center;
  font-size: 0.875rem;
  width: -moz-fit-content;
  width: fit-content;
  float: right;
`;
