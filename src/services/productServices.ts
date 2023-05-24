import { AxiosResponse } from "axios";

import { axiosInstance } from "@/configs/axios";
import { IProduct } from "@/libs/interfaces/products";
import { IResponse } from "@/libs/interfaces/response";

export const productServices = {
  getProducts: async (page = 1, per_page = 12) => {
    const response: AxiosResponse<IResponse<IProduct[]>> = await axiosInstance({
      url: `/products?page=${page}&limit=${per_page}`,
      method: "get",
    });
    return response.data;
  },
  getProduct: async (id?: string) => {
    const response: AxiosResponse<IResponse<IProduct>> = await axiosInstance({
      url: `/products/${id}`,
      method: "get",
    });
    return response.data;
  },
};
