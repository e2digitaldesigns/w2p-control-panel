import React, { useEffect, useState } from "react";
import _cloneDeep from "lodash/cloneDeep";
import _map from "lodash/map";
import { useNavigate } from "react-router-dom";
import { usePages, useSystem } from "../../../../hooks";
import { ApplicationRoutes } from "../../../../types";

interface IPageState {
  name: string;
  storefrontId: string;
}

const PageManagementNew: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { useCreateNewPage } = usePages();
  const { systemState } = useSystem();
  const [state, setState] = useState<IPageState>({
    name: "",
    storefrontId: ""
  });

  const { data, isLoading, isSuccess, mutate } = useCreateNewPage(state);

  useEffect(() => {
    const storefrontId = systemState.storefronts?.[0]?._id;
    storefrontId && setState({ name: "", storefrontId });
  }, [systemState.storefronts]);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      navigate(ApplicationRoutes.PageMgtProfileLink + data);
    }
  }, [data, isLoading, isSuccess, navigate]);

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const newState = _cloneDeep(state);
    newState[e.target.name as keyof IPageState] = e.target.value;
    setState(newState);
  };

  const handleSubmit = () => {
    state.storefrontId && mutate(state);
  };

  return (
    <>
      <h1>page mgt New</h1>
      <input
        name="name"
        onChange={handleOnChange}
        type="text"
        value={state.name}
      />
      <select
        name="storefrontId"
        onChange={handleOnChange}
        value={state.storefrontId}
      >
        {!state.storefrontId && (
          <option disabled={!!state.storefrontId} value=" ">
            Choose Storefront
          </option>
        )}

        {_map(systemState.storefronts, store => (
          <option key={store._id} value={store._id}>
            {store.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>go go go</button>{" "}
    </>
  );
};

export default PageManagementNew;
