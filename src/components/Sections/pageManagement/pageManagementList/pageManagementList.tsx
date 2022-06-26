import React, { useEffect, useState } from "react";
import _map from "lodash/map";
import _split from "lodash/split";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "../../shared";
import { usePages } from "../../../../hooks";
import {
  ApplicationRoutes,
  PageManagementSearchDefaults,
  TPages
} from "../../../../types";
import PageManagementListSearchBar from "./searchBar";
import PageManagementListTable from "./listTable";

const PageManagementList: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { useGetPages } = usePages();

  const [order, setOrder] = useState<string>(
    searchParams.get("order") || PageManagementSearchDefaults.Order
  );

  const [page, setPage] = useState<number>(
    Number(searchParams.get("page")) || PageManagementSearchDefaults.Page
  );

  const [sortBy, setSortBy] = useState<string>(
    searchParams.get("sortBy") || PageManagementSearchDefaults.SortBy
  );

  const [resultsPerPage, setResultsPerPage] = useState<number>(
    Number(searchParams.get("resultsPerPage")) ||
      PageManagementSearchDefaults.ResultsPerPage
  );

  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get("st") || PageManagementSearchDefaults.SearchTerm
  );

  const [sortByValue, setSortValue] = useState<string>(`${sortBy}-${order}`);
  const [pages, setPages] = useState<TPages>([]);

  const { data, isLoading, isSuccess, mutate } = useGetPages();

  useEffect(() => {
    console.log(53, { order, page, resultsPerPage, searchTerm, sortBy });
    mutate({ order, page, resultsPerPage, searchTerm, sortBy });
  }, [page]);

  useEffect(() => {
    if (!isLoading && isSuccess && data?.pages) setPages(data.pages);
  }, [isLoading]);

  const handleResultsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setResultsPerPage(Number(e.target.value));
  };

  const handleSearchTermChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchTerm(e.target.value);
  };

  const handleSortingChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const split = e.target.value.split("-");
    setSortBy(split[0]);
    setOrder(split[1]);
    setSortValue(e.target.value);
  };

  const handleSubmit = (num: number = 1): void => {
    console.log(82, num);
    if (page !== 1) {
      setPage(Number(num));
    } else {
      mutate({ order, page, resultsPerPage, searchTerm, sortBy });
    }
    navigate(createLink(Number(num)));
  };

  const createLink = (num: number) => {
    const link =
      `${ApplicationRoutes.PageMgtList}/?order=${order}` +
      `&sortBy=${sortBy}` +
      `&page=${num}` +
      `&resultsPerPage=${resultsPerPage}` +
      `&st=${searchTerm}`;

    return link;
  };

  const handleChangePageNumber = (num: number) => {
    setPage(Number(num));
    navigate(createLink(num));
  };

  return (
    <>
      <PageManagementListSearchBar
        handleResultsPerPageChange={handleResultsPerPageChange}
        handleSearchTermChange={handleSearchTermChange}
        handleSortingChange={handleSortingChange}
        handleSubmit={handleSubmit}
        resultsPerPage={resultsPerPage}
        searchTerm={searchTerm}
        sortByValue={sortByValue}
      />

      <PageManagementListTable data={pages} />
      <hr />

      {data?.pagination && (
        <Pagination
          data={data.pagination}
          handleChangePageNumber={handleChangePageNumber}
        />
      )}
    </>
  );
};

export default PageManagementList;
