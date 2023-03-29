import { IProduct } from "./products";

export interface ICategory {
  id: number;
  title: string;
  updatedAt: Date | string;
  createdAt: Date | string;
}

export interface ICategoryDetail extends ICategory {
  Products: IProduct[];
}
