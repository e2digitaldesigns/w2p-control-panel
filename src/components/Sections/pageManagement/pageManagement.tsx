import React from "react";
import { Outlet } from "react-router-dom";
import { usePermission } from "../../../hooks";
import NoAccess from "../shared/noAccess/noAccess";
import SectionPageHeader from "../shared/sectionPageHeader/sectionPageHeader";
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
      <Outlet />
    </>
  );
};

export default PageManagement;
