export interface IProduct {
  id: number;
  title: string;
  updatedAt: Date | string;
  description: string;
  createdAt: Date | string;
  category_id: number;
  thumbnail_path: string;
}
