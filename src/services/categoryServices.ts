import { AxiosResponse } from "axios";

import { axiosInstance } from "@/configs/axios";
import { ICategory, ICategoryDetail } from "@/libs/interfaces/categories";
import { IResponse, IResponseDetail } from "@/libs/interfaces/response";

export const categoryServices = {
  getCategories: async () => {
    const response: AxiosResponse<IResponse<ICategory[]>> = await axiosInstance({
      url: `/categories`,
      method: "get",
    });
    return response.data;
  },
  getCategory: async (id: number) => {
    const response: AxiosResponse<IResponseDetail<ICategoryDetail>> = await axiosInstance({
      url: `/categories/${id}`,
      method: "get",
    });
    return response.data;
  },
};
