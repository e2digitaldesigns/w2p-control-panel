import React, { useEffect, useState } from "react";
import ApplicationRouter from "../applicationRouter/applicationRouter";
// import ApplicationWrapper from "../applicationWrapper/applicationWrapper";
// import * as Styled from "./applicationloader.styles";

interface IntApplicationloader {}

const Applicationloader: React.FC<IntApplicationloader> = () => {
  const [state, setState] = useState();

  useEffect(() => {
    //TODO: Get user information here
  }, []);

  return <ApplicationRouter />;
};

export default Applicationloader;
