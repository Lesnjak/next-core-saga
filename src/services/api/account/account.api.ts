import { AxiosResponse } from 'axios';

import { apiCaller } from '../../../utils/api-caller';

export const getAccount = async (token: string): Promise<AxiosResponse<any>> =>
  apiCaller({
    method: 'GET',
    token,
    url: '/account',
  });
