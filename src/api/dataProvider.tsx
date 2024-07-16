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
import { useError } from "../context";

export const useFetch = <BR extends any>({
  options,
  queryKey,
  url,
}: {
  queryKey: string[];
  url: string;
  options?: TQueryOptions<BR>;
}): UseQueryResult<BR> => {
  const queryKeyWithUrl: TQueryKey = [queryKey, url];
  const { setError } = useError();

  const context = useQuery<BR, ErrorResponse, BR, TQueryKey>(
    queryKeyWithUrl,
    async () => {
      const headers = options?.meta?.headers as Record<string, string>;
      return await axiosGet<BR>(url, headers);
    },
    {
      retry: 0,
      onError: (error) => {
        setError(error);
      },
      ...options,
    }
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
  const { setError } = useError();
  const mutation = useMutation<
    TResponse,
    ErrorResponse,
    IRequestPost<TVariables>
  >(
    async ({ variables }) => {
      const headers = options?.meta?.headers as Record<string, string>;
      const response = await axiosPost<TVariables, TResponse>(
        url,
        variables,
        headers
      );
      return response;
    },
    {
      retry: 0,
      onError: (error) => {
        setError(error);
      },
      ...options,
    }
  );

  return mutation;
};
