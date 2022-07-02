import styled from "styled-components";

interface IntFormField {}

export const FormField = styled.div<IntFormField>`
  background-color: #ddd;
  border-radius: 0.375rem;
  padding: 0.25rem 0.625rem;
  text-align: center;
  font-size: 0.875rem;
  width: -moz-fit-content;
  width: fit-content;
  float: right;
`;

export const SwitchWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 1.875rem;
  height: 1.125rem;
`;

export const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 1rem;
  border: 0.0625rem solid #bbb;

  &:before {
    position: absolute;
    content: "";
    height: 0.75rem;
    width: 0.75rem;
    left: 0.125rem;
    bottom: 2px;
    background-color: #adb5bd;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Switch = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + div {
    background-color: #0736a3;
    /* display: none; */
  }

  &:focus + div {
    box-shadow: 0 0 0.0625rem #2196f3;
  }

  &:checked + div:before {
    background-color: white;
    -webkit-transform: translateX(0.75rem);
    -ms-transform: translateX(0.75rem);
    transform: translateX(0.75rem);
  }
`;
