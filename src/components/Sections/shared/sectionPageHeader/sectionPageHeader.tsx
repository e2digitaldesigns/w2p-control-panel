import * as React from "react";
import * as Styled from "./sectionPageHeader.style";
import { Button } from "../../../../paper";

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
          <Button>New Page</Button>
        </Styled.Action>
      </Styled.SectionPageHeader>
    </>
  );
};

export default SectionPageHeader;
