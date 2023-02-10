import { AxiosResponse } from "axios";

import { axiosInstance } from "@/configs/axios";

type ITodos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const todoServices = {
  getTodos: async () => {
    const response: AxiosResponse<ITodos[]> = await axiosInstance({
      url: `todos`,
      method: "get",
    });
    return response.data;
  },
};
