import Axios, { InternalAxiosRequestConfig } from "axios";

import useNotification from "@/hooks/useNotification";

export const axiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  config.headers["Content-Type"] = "application/json";
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { addError } = useNotification();
    if (error.response?.status === 500 && error?.response?.data?.message === "Token Not Valid") {
      addError("Token Expired, Login Again");
    }

    addError(error?.response?.data?.message || "Server error");

    if (error.response?.status === 401) {
      if (typeof window === "undefined") {
        console.error("Unauthorized request");
      } else {
        window.location.href = "/signin";
      }
    }

    if (
      error?.response?.config?.method !== "post" &&
      error?.response?.config?.method !== "put" &&
      error?.response?.config?.method !== "delete"
    ) {
      if (error.response?.status === 403) {
        addError(error?.response?.data?.message);
      }
      if (error.response?.status === 502) {
        addError(error?.response?.data?.message);
      }
      if (error.response?.status === 500) {
        addError(error?.response?.data?.message);
      }
      if (error.response?.status === 404) {
        addError(error?.response?.data?.message);
      }
      if (error.response?.status === 400) {
        addError(error?.response?.data?.message);
      }
      if (error.response?.status === 422) {
        addError(error?.response?.data?.message);
      }
    }
    return Promise.reject(error);
  },
);
