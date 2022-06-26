import { Endpoints, TPages, QueryKeys, IntPage } from "../../types";
import http from "../../utils/httpService/httpService";
import { AxiosError } from "axios";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult
} from "react-query";

interface IFetchReturn {
  pages: TPages;
  pagination: {
    results: number;
    resultsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

interface SearchVariables {
  order: string;
  page: number;
  resultsPerPage: number;
  searchTerm: string;
  sortBy: string;
}

interface ICreateNewPageFnData {
  name: string;
  storefrontId: string;
}
type TCreateNewPageFn = (data: ICreateNewPageFnData) => UseMutationResult;

type TUseDeletePageFn = () => UseMutationResult<any, AxiosError, string>;

type TUseGetPagesFn = () => UseMutationResult<
  IFetchReturn,
  AxiosError,
  SearchVariables
>;

type TUseGetPagesByIdFn = (_id: string | undefined) => UseQueryResult;

type TUseUpdatePageFn = (data: IntPage) => UseMutationResult;

export interface IntUsePagesHook {
  useCreateNewPage: TCreateNewPageFn;
  useDeletePage: TUseDeletePageFn;
  useGetPages: TUseGetPagesFn;
  useGetPageById: TUseGetPagesByIdFn;
  useUpdatePage: TUseUpdatePageFn;
}

const UsePagesHook = (): IntUsePagesHook => {
  const END_POINT = Endpoints.Pages;

  const useCreateNewPage: TCreateNewPageFn = newObj => {
    return useMutation(
      async (): Promise<IntPage> =>
        http.post(END_POINT, { newObj }).then(res => res.data),
      {}
    );
  };

  const useDeletePage: TUseDeletePageFn = () => {
    return useMutation(
      async (_id): Promise<any> =>
        http.delete(`${END_POINT}/${_id}`).then(res => res.data),
      {}
    );
  };

  const useGetPages: TUseGetPagesFn = () => {
    return useMutation(
      ({ order, page, resultsPerPage, searchTerm, sortBy }) =>
        http
          .get(
            `${END_POINT}?order=${order}&page=${page}&resultsPerPage=${resultsPerPage}&st=${searchTerm}&sortBy=${sortBy}`
          )
          .then(res => res.data),
      {}
    );
  };

  const useGetPageById: TUseGetPagesByIdFn = (_id): UseQueryResult => {
    const endPoint = `${END_POINT}/${_id}`;

    return useQuery<Promise<IntPage>, AxiosError>(
      [QueryKeys.Pages, _id],
      async (): Promise<IntPage> => http.get(endPoint).then(res => res.data),
      {
        enabled: !!_id,
        staleTime: 30 * 1000
      }
    );
  };

  const useUpdatePage: TUseUpdatePageFn = data => {
    const endPoint = `${END_POINT}/${data._id}`;
    return useMutation(
      async (): Promise<IntPage> =>
        http.put(endPoint, { updateObj: data }).then(res => res.data),
      {}
    );
  };

  return {
    useCreateNewPage,
    useDeletePage,
    useGetPages,
    useGetPageById,
    useUpdatePage
  };
};

export default UsePagesHook;
