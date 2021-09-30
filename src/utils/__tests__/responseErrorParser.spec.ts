import { AxiosError } from 'axios';

import {
  ErrorMessageEnum,
  ErrorTypeEnum,
  responseErrorParser,
} from '../response-error-parser';

describe('Parse error from server', () => {
  it('should return default error message when response is empty', () => {
    expect(responseErrorParser({ response: undefined } as AxiosError)).toEqual(
      ErrorMessageEnum.message
    );
  });

  it('should return a default error message when an error is unknown', () => {
    expect(
      responseErrorParser({
        response: { data: { error: 'unknown error' } },
      } as AxiosError)
    ).toEqual(ErrorMessageEnum.message);
  });

  it('should return error message when response error is string', () => {
    const errorFormServer = 'error form server';

    expect(
      responseErrorParser({
        response: { data: { message: errorFormServer } },
      } as AxiosError)
    ).toEqual(errorFormServer);
  });

  it('should return an error message when caught validation error', () => {
    const moreThanZero = 'amount must be more than zero';
    const lessThanTen = 'amount must less than ten';
    const emptyError = '';
    const isInteger = 'amount must be an integer';
    const isError = 'validation error';

    expect(
      responseErrorParser({
        response: {
          data: {
            message: [
              { constraints: { isError } },
              {
                constraints: {
                  isInteger,
                  moreThanZero,
                  someError: { isError },
                },
              },
              lessThanTen,
              emptyError,
            ],
            error: ErrorTypeEnum.VALIDATION_ERROR,
          },
        },
      } as AxiosError)
    ).toEqual(`${isError}, ${isInteger}, ${moreThanZero}, ${lessThanTen}`);
  });
});
