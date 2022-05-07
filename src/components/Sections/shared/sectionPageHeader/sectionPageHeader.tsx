import * as React from "react";
import * as Styled from "./sectionPageHeader.style";
import { Link } from "react-router-dom";
import { useBreadCrumbs } from "../../../../hooks";

interface IntSectionPageHeader {
  sectionTitle?: string;
  subTitle?: string;
  linkTo?: string;
  linkText?: string;
}

const SectionPageHeader: React.FC<IntSectionPageHeader> = ({
  sectionTitle,
  subTitle,
  linkTo,
  linkText
}) => {
  const { getBreadCrumbs, getPageHeader } = useBreadCrumbs();

  return (
    <>
      <Styled.SectionPageHeader>
        <div>
          <Styled.Crumbs>{getBreadCrumbs()}</Styled.Crumbs>
          <Styled.Header>{sectionTitle || getPageHeader()}</Styled.Header>
          {subTitle && <Styled.SubTitle>{subTitle}</Styled.SubTitle>}
        </div>

        {linkTo && linkText && (
          <Styled.Action>
            <Link to={linkTo}>
              <Styled.ActionButton>{linkText}</Styled.ActionButton>
            </Link>
          </Styled.Action>
        )}
      </Styled.SectionPageHeader>
    </>
  );
};

export default SectionPageHeader;
