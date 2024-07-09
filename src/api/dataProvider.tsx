import {
  useMutation,
  UseMutationResult,
  // useMutation,
  // UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query";
import {
  ErrorResponse,
  IRequestPost,
  TMutationOptions,
  // IRequestPost,
  // TMutationOptions,
  TQueryKey,
  TQueryOptions,
} from "../types";
import {
  axiosGet,
  axiosPost,
  // axiosPost
} from "./axios";

export const useFetch = <BR extends any>({
  options,
  queryKey,
  url,
}: {
  queryKey: string;
  url: string;
  options?: TQueryOptions<BR>;
}): UseQueryResult<BR> => {
  const queryKeyWithUrl: TQueryKey = [queryKey, url];

  const context = useQuery<BR, ErrorResponse, BR, TQueryKey>(
    queryKeyWithUrl,
    async () => {
      const headers = options?.meta?.headers as Record<string, string>;
      return await axiosGet<BR>(url, headers);
    },
    {
      onError: (error: ErrorResponse) => {
        console.log(error, "<------- ERROR");
      },
      ...options,
    }
  );

  return context;
};

export const usePost = <TVariables extends any>({
  options,
  url,
}: {
  options: TMutationOptions<TVariables>;
  url: string;
}): UseMutationResult<TVariables, ErrorResponse, IRequestPost<TVariables>> => {
  const mutation = useMutation<
    TVariables,
    ErrorResponse,
    IRequestPost<TVariables>
  >(
    async ({ variables }) => {
      const headers = options?.meta?.headers as Record<string, string>;
      const response = await axiosPost<TVariables>(url, variables, headers);
      return response;
    },
    {
      onError: (error: ErrorResponse) => {
        console.log(error, "<------- ERROR");
      },
      ...options,
    }
  );

  return mutation;
};
