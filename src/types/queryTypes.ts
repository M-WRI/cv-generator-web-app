import { UseMutationOptions, UseQueryOptions } from "react-query";
import { ErrorResponse } from "./error";

export type TQueryKey = [string, any | undefined];
export type TQueryOptions<SR> = UseQueryOptions<
  SR,
  ErrorResponse,
  SR,
  TQueryKey
>;

export type TMutationOptions<TVariables, TResponse = any> = UseMutationOptions<
  TResponse,
  ErrorResponse,
  IRequestPost<TVariables>
>;

export interface IRequestPost<V> {
  variables: V;
}
