import React from "react";
import { TemplateContext } from "./templateContext";
import { IntTemplateContextState } from "./../../types";

const useTemplateData = () => {
  const templateData: IntTemplateContextState =
    React.useContext(TemplateContext);
  return templateData;
};

export default useTemplateData;
