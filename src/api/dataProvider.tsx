import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query";
import {
  ErrorResponse,
  IRequestPost,
  TMutationOptions,
  TQueryKey,
  TQueryOptions,
} from "../types";
import { axiosGet, axiosPost } from "./axios";

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
    options
  );

  return context;
};

export const usePost = <TVariables, TResponse = any>({
  options,
  url,
}: {
  options: TMutationOptions<TVariables, TResponse>;
  url: string;
}): UseMutationResult<TResponse, ErrorResponse, IRequestPost<TVariables>> => {
  const mutation = useMutation<
    TResponse,
    ErrorResponse,
    IRequestPost<TVariables>
  >(async ({ variables }) => {
    const headers = options?.meta?.headers as Record<string, string>;
    const response = await axiosPost<TVariables, TResponse>(
      url,
      variables,
      headers
    );
    return response;
  }, options);

  return mutation;
};
