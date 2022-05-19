import React from "react";
import { Outlet } from "react-router-dom";
import { usePermission } from "../../../hooks";
import NoAccess from "../shared/noAccess/noAccess";
import { SectionPageHeader, SectionPage } from "../shared";
import { ApplicationRoutes } from "../../../types";

const PageManagement: React.FC = () => {
  const { useCanAccess } = usePermission();
  const isValid = useCanAccess();

  if (!isValid) {
    return <NoAccess />;
  }

  return (
    <>
      <SectionPageHeader
        sectionTitle="Page Management"
        subTitle="Create and Modify Pages"
        linkTo={ApplicationRoutes.PageMgtNew}
        linkText="New Page"
      />

      <SectionPage>
        <Outlet />
      </SectionPage>
    </>
  );
};

export default PageManagement;
