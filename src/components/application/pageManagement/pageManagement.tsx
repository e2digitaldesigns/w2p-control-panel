import React from "react";
import { Outlet } from "react-router-dom";
import { usePermission } from "../../../hooks";

const PageManagement: React.FC = () => {
  const { useCanAccess } = usePermission();
  const isValid = useCanAccess();

  if (!isValid) {
    return <div>no no no</div>;
  }

  return (
    <>
      <h1>Page Management</h1>
      <Outlet />
    </>
  );
};

export default PageManagement;
