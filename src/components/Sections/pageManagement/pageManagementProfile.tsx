import * as React from "react";
import { useParams } from "react-router-dom";

const PageManagementProfile: React.FC<{}> = () => {
  let { id } = useParams();
  return <h1>page mgt Profile: {id}</h1>;
};

export default PageManagementProfile;
