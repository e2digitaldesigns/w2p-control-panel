import styled from "styled-components";
import { ScrollBars } from "../../../../theme/scrollDiv/scrollDiv";

export const StaffSettingsWrapper = styled(ScrollBars)`
  height: 100%;
  width: 100%;
`;

export const Setting = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px dotted #ccc;
  padding: 12px 8px;
  width: 100%;
  font-size: 0.875rem;
  height: 2.5rem;

  > div:nth-child(2) {
    text-align: right;
  }
`;

export const CheckBox = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 18px;

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
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 18px;

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Checking = styled.input`
  &:checked + div {
    background-color: #2196f3;
  }

  &:focus + div {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + div:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
`;
