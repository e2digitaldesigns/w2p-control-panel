import * as React from "react";
import _map from "lodash/map";
import _range from "lodash/range";

import { TPagination } from "../../../../types";

interface IntPagination {
  data: TPagination;
  handleChangePageNumber: (num: number) => void;
}

const Pagination: React.FC<IntPagination> = ({
  data,
  handleChangePageNumber
}) => {
  const totalPageArr = _range(1, data.totalPages + 1);
  const showNextLink = data.currentPage < data.totalPages;
  const showPrevLink = data.currentPage > 1;

  return (
    <>
      {showPrevLink && (
        <span onClick={() => handleChangePageNumber(data.currentPage - 1)}>
          Prev
        </span>
      )}

      <ul>
        {_map(totalPageArr, (num: number) => (
          <li
            key={num}
            className={data.currentPage === num ? "Active" : "Inactive"}
            onClick={() => handleChangePageNumber(num)}
          >
            {num}
          </li>
        ))}
      </ul>

      {showNextLink && (
        <span onClick={() => handleChangePageNumber(data.currentPage + 1)}>
          Next
        </span>
      )}
    </>
  );
};

export default Pagination;
