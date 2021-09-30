import { AxiosError } from 'axios';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import lowerCase from 'lodash/lowerCase';

export enum ErrorMessageEnum {
  message = 'error',
}

export enum ErrorTypeEnum {
  VALIDATION_ERROR = 'Validation error',
}

/**
 * Error parser to get error message from different structure of error response
 */
export const responseErrorParser = (resError: AxiosError): string => {
  const error = resError && resError.response && resError.response.data;

  if (!error) {
    return resError.message || ErrorMessageEnum.message;
  }

  if (isString(error.message)) {
    return error.message;
  }

  if (
    isArray(error.message) &&
    error.error === ErrorTypeEnum.VALIDATION_ERROR
  ) {
    return error.message.reduce((acc: string, errorItem: any) => {
      let parsedError = '';

      if (errorItem) {
        if (isString(errorItem)) {
          parsedError = lowerCase(errorItem);
        }

        if (errorItem.constraints) {
          parsedError = Object.values(errorItem.constraints).reduce(
            (acc: string, currentError: any) => {
              if (isString(currentError)) {
                return `${acc ? acc + ', ' : acc}${lowerCase(currentError)}`;
              }

              return acc;
            },
            ''
          );
        }
      }

      if (!errorItem) return acc;

      return `${acc ? acc + ', ' : acc}${parsedError}`;
    }, '');
  }

  return ErrorMessageEnum.message;
};
