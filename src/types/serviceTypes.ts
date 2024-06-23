import { UseMutationOptions } from "react-query";

interface ApiError {
  response?: {
    data: any;
  };
}

export type ServiceType<T> = UseMutationOptions<any, ApiError, T>;
