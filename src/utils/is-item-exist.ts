import some from 'lodash/some';

/**
 * Custom function to check if item is already exist in array
 */
export const isItemExist = <T>(key: keyof T, id: string, arr: T[]): boolean => {
  return some(arr, (item: T) => item[String(key)] === id);
};
