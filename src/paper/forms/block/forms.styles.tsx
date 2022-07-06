import React from "react";
import styled from "styled-components";
import { useTemplate } from "./../../../hooks";

interface ICol {
  spacing: number;
}

const base = `
  width: 100%;
  border: 0.0625rem solid #ccc;
  border-radius: 0.25rem;
  resize: vertical;
`;

const padding = ".75rem";

export const ButtonSubmit = styled.input`
  background-color: #04aa6d;
  color: white;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  float: right;
  width: auto;
`;

export const Column = styled.div<ICol>`
  float: left;
  width: ${props => props.spacing}%;
  margin-top: 0.375rem;
`;

export const Container = styled.div`
  border-radius: 0.3125rem;
  background-color: #f2f2f2;
  padding: 1.25rem;
`;

export const ErrorDiv = styled.div`
  text-align: right;
  color: red;
  margin-top: 0.125rem;
  padding: 0.125rem 0.25rem;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  padding: 0.75rem 0.75rem 0.75rem 0;
  padding-bottom: 0;
  display: inline-block;
`;

export const Row = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Select = styled.select`
  ${base};
  padding: ${padding};
`;

export const Text = styled.input`
  ${base};
  padding: ${padding};
`;

export const Textarea = styled.textarea`
  ${base};
  padding: ${padding};
`;
