import React from "react";
import { useLocation } from "react-router-dom";

import _startCase from "lodash/startCase";
import _replace from "lodash/replace";
import _split from "lodash/split";

import * as Styled from "./breadCrumbs.style";
import { useSystem } from "./../../../../hooks";

const TemplateHeaderBreadCrumbs: React.FC = () => {
  const { systemState } = useSystem();
  const location = useLocation();

  const setBreadCrumbs = () => {
    let crumb;
    const path = _split(location.pathname, "/");
    crumb = path[2] && _startCase(_replace(path[2], "-", " "));
    return crumb;
  };

  return (
    <Styled.Breadcrumbs>
      {systemState.name} / {setBreadCrumbs()}
    </Styled.Breadcrumbs>
  );
};

export default TemplateHeaderBreadCrumbs;
