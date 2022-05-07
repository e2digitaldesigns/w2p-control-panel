import React from "react";
import { useLocation } from "react-router-dom";

import _map from "lodash/map";
import _startCase from "lodash/startCase";
import _replace from "lodash/replace";
import _split from "lodash/split";

import * as Styled from "./breadCrumbs.style";
import { useSystem } from "./../../../../hooks";

const TemplateHeaderBreadCrumbs: React.FC = () => {
  const { systemState } = useSystem();
  const location = useLocation();

  const setBreadCrumbs = () => {
    const path = _split(location.pathname, "/");
    let crumb = "",
      spacer = "";

    _map(path, (part, index) => {
      if (part && index > 1) {
        spacer = index > 2 ? " / " : "";
        crumb += spacer + _startCase(_replace(part, "-", " "));
      }
    });

    return crumb;
  };

  return (
    <Styled.Breadcrumbs>
      {systemState.name} / {setBreadCrumbs()}
    </Styled.Breadcrumbs>
  );
};

export default TemplateHeaderBreadCrumbs;
