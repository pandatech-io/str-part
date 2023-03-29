interface IMetaData {
  limit: number;
  page: number;
  total: number;
  totalPage?: number;
}

export interface IResponse<T = any> {
  success: boolean;
  data: T;
  metadata: IMetaData;
}

export interface IResponseDetail<T = any> {
  success: boolean;
  data: T;
}
