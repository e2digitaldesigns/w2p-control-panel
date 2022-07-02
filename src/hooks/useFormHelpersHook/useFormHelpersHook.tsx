import React from "react";
import _map from "lodash/map";
import _startCase from "lodash/startCase";
import _replace from "lodash/replace";
import _split from "lodash/split";

import { useSystem } from "..";
import { IntSystemContextStorefronts } from "../../types";

type TGetStoreOptions = () => React.ReactNode;

export interface IntUseFormHelpers {
  getStorefrontOptions: TGetStoreOptions;
}

const useFormHelpers = (): IntUseFormHelpers => {
  const { systemState } = useSystem();

  const getStorefrontOptions: TGetStoreOptions = () => {
    const options = _map(
      systemState.storefronts,
      (opt: IntSystemContextStorefronts, index: number) => (
        <option key={opt._id} value={opt._id}>
          {opt.name}
        </option>
      )
    );

    return options;
  };

  return {
    getStorefrontOptions
  };
};

export default useFormHelpers;
