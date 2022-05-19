import * as React from "react";
import * as Styled from "./sectionPage.style";

interface IntSectionPage {
  children: React.ReactElement;
}

const SectionPage: React.FC<IntSectionPage> = ({ children }) => {
  return <Styled.SectionPage>{children}</Styled.SectionPage>;
};

export default SectionPage;
