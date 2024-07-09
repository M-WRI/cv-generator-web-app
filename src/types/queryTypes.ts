import { UseMutationOptions, UseQueryOptions } from "react-query";
import { ErrorResponse } from "./error";

export type TQueryKey = [string, any | undefined];
export type TQueryOptions<SR> = UseQueryOptions<
  SR,
  ErrorResponse,
  SR,
  TQueryKey
>;

export type TMutationOptions<TVariables> = UseMutationOptions<
  TVariables,
  ErrorResponse,
  IRequestPost<TVariables>
>;

export interface IRequestPost<V> {
  variables: V;
}
