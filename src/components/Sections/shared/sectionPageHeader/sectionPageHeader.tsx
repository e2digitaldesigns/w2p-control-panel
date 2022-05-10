import * as React from "react";
import * as Styled from "./sectionPageHeader.style";

interface IntSectionPageHeader {
  sectionTitle: string;
}

const SectionPageHeader: React.FC<IntSectionPageHeader> = ({
  sectionTitle
}) => {
  return (
    <>
      <Styled.SectionPageHeader>
        <div>
          <Styled.Crumbs>Express Layouts / Page Management</Styled.Crumbs>
          <Styled.Header>{sectionTitle}</Styled.Header>
          <Styled.SubTitle>Create and Modify Pages</Styled.SubTitle>
        </div>

        <Styled.Action>
          <Styled.ActionButton>New Page</Styled.ActionButton>
        </Styled.Action>
      </Styled.SectionPageHeader>
    </>
  );
};

export default SectionPageHeader;
