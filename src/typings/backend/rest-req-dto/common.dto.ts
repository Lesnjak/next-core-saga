import { SortOrderEnum } from '../enums/sort-order.enum';

export interface IPaginatedReqDto {
  offset?: number;
  limit?: number;
}

export interface ISortedReqDto {
  order?: SortOrderEnum;
  sort?: string;
}

export interface ISearchedReqDto {
  search?: string;
}
