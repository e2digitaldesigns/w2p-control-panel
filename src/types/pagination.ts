export const RESULTS_PER_PAGE: number[] = [10, 25, 50, 75, 100];

export type TPagination = {
  results: number;
  resultsPerPage: number;
  totalPages: number;
  currentPage: number;
};

export type TPaginationObj = {
  pagination: TPagination;
};
