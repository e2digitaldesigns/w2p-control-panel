import React, { useEffect, useState } from "react";
import ApplicationWrapper from "../applicationWrapper/applicationWrapper";
// import * as Styled from "./applicationloader.styles";

interface IntApplicationloader {}

const Applicationloader: React.FC<IntApplicationloader> = () => {
  const [state, setState] = useState();

  useEffect(() => {
    //TODO: Get user information here
  }, []);

  return <ApplicationWrapper />;

  return (
    <>
      <h1>Applicationloader</h1>
    </>
  );
};

export default Applicationloader;
