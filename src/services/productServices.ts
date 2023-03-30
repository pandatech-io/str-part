import { AxiosResponse } from "axios";

import { axiosInstance } from "@/configs/axios";
import { IProduct } from "@/libs/interfaces/products";
import { IResponse } from "@/libs/interfaces/response";

export const productServices = {
  getProducts: async () => {
    const response: AxiosResponse<IResponse<IProduct[]>> = await axiosInstance({
      url: `/products`,
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
