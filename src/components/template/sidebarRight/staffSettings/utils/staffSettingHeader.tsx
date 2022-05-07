import React from "react";
import styled from "styled-components";

interface IntHeader {
  noMargin?: boolean;
}

const Header = styled.div<IntHeader>`
  display: flex;
  height: 2.5rem;
  align-items: center;
  border-bottom: 0.0625rem solid ${props => props.theme.default.borderColor};
  padding-left: 0.5rem;
  margin-top: ${props => (props.noMargin ? "0" : "1rem")};
`;

interface IntStaffSettingHeader {
  name: string;
  noMargin?: boolean;
}

const StaffSettingHeader: React.FC<IntStaffSettingHeader> = ({
  name,
  noMargin
}) => {
  return <Header noMargin={noMargin}>{name}</Header>;
};

export default StaffSettingHeader;
