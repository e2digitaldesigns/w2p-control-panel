import { useLocation } from "react-router-dom";

import _map from "lodash/map";
import _startCase from "lodash/startCase";
import _replace from "lodash/replace";
import _split from "lodash/split";

// import { useSystem } from "../../hooks";

type TGetBreadCrumbs = () => string | null;
type TGetPageHeader = () => string | null;

export interface IntUseBreadCrumbHook {
  getBreadCrumbs: TGetBreadCrumbs;
  getPageHeader: TGetPageHeader;
}

const useBreadCrumbHook = (): IntUseBreadCrumbHook => {
  //   const { systemState } = useSystem();
  const location = useLocation();
  const path = _split(location.pathname, "/");
  let crumb = "",
    spacer = "";

  const pathParser = (part: string) => {
    return _startCase(_replace(part, "-", " "));
  };

  const getBreadCrumbs: TGetBreadCrumbs = () => {
    _map(path, (part, index) => {
      if (part && index > 1) {
        spacer = index > 2 ? " / " : "";
        crumb += spacer + pathParser(part);
      }
    });

    return crumb;
  };

  const getPageHeader: TGetPageHeader = () => {
    return pathParser(path[2]);
  };

  return {
    getBreadCrumbs,
    getPageHeader
  };
};

export default useBreadCrumbHook;
