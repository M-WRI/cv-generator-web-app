import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
  const response = await axiosInstance.get<T>(url, { headers });
  return response.data;
};

export const axiosPost = async <T>(
  url: string,
  data: T,
  headers: Record<string, string> = {}
): Promise<T> => {
  const response = await axiosInstance.post<T>(url, data, { headers });
  return response.data;
};
