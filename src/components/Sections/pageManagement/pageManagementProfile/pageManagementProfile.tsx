import React, { useEffect, useState } from "react";
import _cloneDeep from "lodash/cloneDeep";
import _map from "lodash/map";
import _split from "lodash/split";
import { useParams } from "react-router-dom";
import { usePages } from "../../../../hooks";
import {
  IntPage,
  IPageMenuArray,
  TPageMenuStateKey,
  PageManagementMenuArr
} from "../../../../types";
import { Switch } from "../../../../paper";
import defaultState from "./defaultState.json";
import { schema } from "./validationSchema";

const PageManagementList: React.FC<{}> = () => {
  let { id: pageId } = useParams();
  const { useDeletePage, useUpdatePage, useGetPageById } = usePages();
  const [pageData, setPageData] = useState<IntPage>(defaultState);
  const { data, isLoading, isSuccess } = useGetPageById(pageId);

  const {
    data: upData,
    isLoading: upIsLoading,
    isSuccess: upIsSuccess,
    mutate
  } = useUpdatePage(pageData);

  console.log(30, pageId, { data, isLoading, isSuccess });

  const {
    data: deleteData,
    isLoading: deleteIsLoading,
    isSuccess: deleteIsSuccess,
    mutate: deleteMutate
  } = useDeletePage(pageId);

  useEffect(() => {
    let isHere = true;
    if (!isLoading && isSuccess && isHere) setPageData(data as IntPage);

    return () => {
      isHere = false;
    };
  }, [isLoading]);

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newPageData = _cloneDeep(pageData);
    setPageData({ ...newPageData, [e.target.name]: e.target.value });
  };

  const toggleSetting = (key: TPageMenuStateKey) => {
    const newSettings = _cloneDeep(pageData);
    if (newSettings) {
      newSettings.placement[key] = !newSettings.placement[key];
      setPageData(newSettings);
    }
  };

  const handleSubmit = async () => {
    try {
      await schema.validate(pageData);
      const newPageData = _cloneDeep(pageData);
      delete newPageData.storefront;
      mutate(newPageData);
    } catch (error: any) {
      console.error(error.errors);
    }
  };

  const onHandleDelete = () => {
    deleteMutate();
  };

  return (
    <>
      <h3>page mgt Profile: {pageId}</h3>

      {pageData && (
        <>
          <input
            name="url"
            onChange={handleOnChange}
            type="text"
            value={pageData.url}
          />
          <input
            name="name"
            onChange={handleOnChange}
            type="text"
            value={pageData.name}
          />
          <input
            onChange={handleOnChange}
            type="text"
            value={pageData.storefrontId}
          />

          <textarea
            name="text"
            onChange={handleOnChange}
            value={pageData.text}
          ></textarea>

          {_map(
            PageManagementMenuArr,
            (menu: IPageMenuArray, index: number) => (
              <div key={index}>
                <div>{menu.name}</div>
                <Switch
                  isChecked={!!pageData?.placement[menu.stateKey]}
                  onClick={() => toggleSetting(menu.stateKey)}
                  stateKey={menu.stateKey}
                />
              </div>
            )
          )}
          <button onClick={handleSubmit}>go go go</button>
        </>
      )}

      <hr />
      <button onClick={onHandleDelete}>delete</button>
    </>
  );
};

export default PageManagementList;
