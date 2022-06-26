import React from "react";
import _map from "lodash/map";

import {
  IPageManagementPaginationSorting,
  PageManagementPaginationSorting,
  RESULTS_PER_PAGE
} from "../../../../types";

interface IPageManagementListSearchBar {
  handleResultsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSortingChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: () => void;
  resultsPerPage: number;
  searchTerm: string;
  sortByValue: string;
}

const PageManagementListSearchBar: React.FC<IPageManagementListSearchBar> = ({
  handleResultsPerPageChange,
  handleSearchTermChange,
  handleSortingChange,
  handleSubmit,
  resultsPerPage,
  searchTerm,
  sortByValue
}) => {
  return (
    <>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />

      <select value={resultsPerPage} onChange={handleResultsPerPageChange}>
        {_map(RESULTS_PER_PAGE, (number: number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>

      <select value={sortByValue} onChange={handleSortingChange}>
        {_map(
          PageManagementPaginationSorting,
          (label: IPageManagementPaginationSorting, index: number) => (
            <option key={index} value={label.value}>
              {label.text}
            </option>
          )
        )}
      </select>

      <button onClick={() => handleSubmit()}>GO</button>
    </>
  );
};

export default PageManagementListSearchBar;
