import { axiosInstance } from "@/configs/axios";
import { IContact } from "@/libs/interfaces/mail";

export const mailServices = {
  sendContact: async (payload: IContact) => {
    const response = await axiosInstance({
      url: `/mails`,
      method: "post",
      data: payload,
    });
    return response.data;
  },
};
