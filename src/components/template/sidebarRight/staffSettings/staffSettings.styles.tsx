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
