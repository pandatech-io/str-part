import { AxiosResponse } from "axios";

import { axiosInstance } from "@/configs/axios";
import { IProduct } from "@/libs/interfaces/products";
import { IResponse } from "@/libs/interfaces/response";

export const productServices = {
  getProducts: async (page = 1, per_page = 12, category_id = 0) => {
    const response: AxiosResponse<IResponse<IProduct[]>> = await axiosInstance({
      url: `/products?page=${page}&limit=${per_page}${
        category_id === 0 ? "" : "&category_id=" + category_id
      }`,
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
