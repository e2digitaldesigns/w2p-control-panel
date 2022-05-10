import styled from "styled-components";
import { ScrollBars } from "../../../../theme/scrollDiv/scrollDiv";

export const StaffSettingsWrapper = styled(ScrollBars)`
  height: 100%;
  width: 100%;
`;

export const Setting = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 0.0625rem dotted ${props => props.theme.default.borderColor};
  padding: 0.75rem 0.5rem;
  width: 100%;
  font-size: 0.875rem;
  height: 2.5rem;

  > div:nth-child(2) {
    text-align: right;
  }
`;

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
