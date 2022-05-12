import styled from "styled-components";

interface IntSwitch {}

export const SwitchWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 1.875rem;
  height: 1.125rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
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
  &:checked + div {
    background-color: #0736a3;
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
