import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { Endpoints, QueryKeys } from "../../types";
import http from "../../utils/httpService/httpService";

interface IntSystem {
  domain: string;
  ext: string;
  isActive: boolean;
  name: string;
  primaryStore: boolean;
  storeOwnerId: string;
  _id: string;
}
export const useGetStorefrontHook = () => {
  return useQuery<IntSystem, AxiosError>(
    QueryKeys.System,
    async (): Promise<IntSystem> =>
      http.get(Endpoints.System).then(res => res.data),
    { staleTime: 30 * 1000 }
  );
};
