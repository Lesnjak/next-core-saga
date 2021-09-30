import { SortOrderEnum } from '../backend/enums/sort-order.enum';

export type TableLimitOptions = 10 | 15 | 25 | 50;

export type TableFilterOption = {
  label: string;
  value: string | number;
};

export interface ITableFilters {
  filters?: {
    [filterField: string]: string;
  };
  search?: string;
  offset: number;
  limit: TableLimitOptions;
  order: SortOrderEnum;
  sort: string;
}

export interface ITableParameters<T> {
  filters?: {
    [filterField: string]: string;
  };
  loading?: boolean;
  search?: string;
  offset: number;
  count?: number;
  error?: Error;
  limit?: number;
  order?: SortOrderEnum;
  sort?: keyof T;
}

export interface ITableData<T> extends ITableParameters<T> {
  results: T[];
}
