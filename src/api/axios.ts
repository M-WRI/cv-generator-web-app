import axios, { AxiosError } from "axios";
import { isTokenValid } from "../utils";
import { useSignOut } from "../services";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token && isTokenValid(token)) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } else {
      const { signOut } = useSignOut();
      signOut();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const axiosGet = async <T>(
  url: string,
  headers?: Record<string, string>
): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, { headers });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<T>;
      throw axiosError?.response?.data;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const axiosPost = async <TVariables extends any, TResponse = TVariables>(
  url: string,
  data: TVariables,
  headers: Record<string, string> = {}
): Promise<TResponse> => {
  try {
    const response = await axiosInstance.post<TResponse>(url, data, {
      headers,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<TResponse>;
      throw axiosError?.response?.data;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
