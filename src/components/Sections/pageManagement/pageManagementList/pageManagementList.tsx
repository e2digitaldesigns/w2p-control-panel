import React, { useEffect, useRef, useState } from "react";
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

enum PageListParams {
  Order = "order",
  Page = "page",
  ResultsPerPage = "resultsPerPage",
  SearchTerm = "st",
  SortBy = "sortBy"
}

const PageManagementList: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { useGetPages } = usePages();
  const pageRef = useRef<number>(0);

  const [order, setOrder] = useState<string>(
    searchParams.get(PageListParams.Order) || PageManagementSearchDefaults.Order
  );

  const [page, setPage] = useState<number>(
    Number(searchParams.get(PageListParams.Page)) ||
      PageManagementSearchDefaults.Page
  );

  const [sortBy, setSortBy] = useState<string>(
    searchParams.get(PageListParams.SortBy) ||
      PageManagementSearchDefaults.SortBy
  );

  const [resultsPerPage, setResultsPerPage] = useState<number>(
    Number(searchParams.get(PageListParams.ResultsPerPage)) ||
      PageManagementSearchDefaults.ResultsPerPage
  );

  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get(PageListParams.SearchTerm) ||
      PageManagementSearchDefaults.SearchTerm
  );

  const [sortByValue, setSortValue] = useState<string>(`${sortBy}-${order}`);
  const [pages, setPages] = useState<TPages>([]);

  const { data, isLoading, isSuccess, mutate } = useGetPages();

  useEffect(() => {
    if (pageRef.current === page) return;

    pageRef.current = page;
    mutate({ order, page, resultsPerPage, searchTerm, sortBy });
  }, [order, page, resultsPerPage, searchTerm, sortBy, mutate]);

  useEffect(() => {
    if (!isLoading && isSuccess && data?.pages) setPages(data.pages);
  }, [isLoading, isSuccess, data]);

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
