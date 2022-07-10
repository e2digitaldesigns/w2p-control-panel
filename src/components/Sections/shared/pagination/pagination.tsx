import * as React from "react";
import _map from "lodash/map";
import _range from "lodash/range";

import { TPagination } from "../../../../types";
import * as Styled from "./pagination.styles";

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
      <Styled.PaginationWrapper>
        <Styled.Pagination>
          {showPrevLink && (
            <Styled.PaginationLink
              onClick={() => handleChangePageNumber(data.currentPage - 1)}
            >
              Prev
            </Styled.PaginationLink>
          )}

          {_map(totalPageArr, (num: number) => (
            <Styled.PaginationLink
              active={data.currentPage === num}
              key={num}
              onClick={() => handleChangePageNumber(num)}
            >
              {num}
            </Styled.PaginationLink>
          ))}

          {showNextLink && (
            <Styled.PaginationLink
              onClick={() => handleChangePageNumber(data.currentPage + 1)}
            >
              Next
            </Styled.PaginationLink>
          )}
        </Styled.Pagination>
      </Styled.PaginationWrapper>
    </>
  );
};

export default Pagination;
